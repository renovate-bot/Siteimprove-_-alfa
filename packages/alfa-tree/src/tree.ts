/// <reference lib="dom" />

import type { Equatable } from "@siteimprove/alfa-equatable";
import type { Flags } from "@siteimprove/alfa-flags";
import type { Hash, Hashable } from "@siteimprove/alfa-hash";
import { Lazy } from "@siteimprove/alfa-lazy";
import type { Predicate } from "@siteimprove/alfa-predicate";
import { None, Option } from "@siteimprove/alfa-option";
import { Refinement } from "@siteimprove/alfa-refinement";
import { RNG } from "@siteimprove/alfa-rng";
import { Sequence } from "@siteimprove/alfa-sequence";

import * as json from "@siteimprove/alfa-json";

const { equals } = Refinement;

// we want to always use the same RNG so we can seed it if needed for investigation
// 32 hex digits is what UUID4 uses (with some semi-fixed one) and corresponds
// to 128 bits.
const rng = RNG.hexString(32).create();

/**
 * Model for n-ary trees with some traversal flags.
 *
 * In order to have a parent pointers, nodes are allowed to attach themselves
 * to a parent node. To prevent mutation of an existing tree, the child is then
 * "frozen".
 *
 * Since it is not possible to add children after node creation, and it is not
 * possible to re-attach an already attached node, this means that the trees are
 * effectively downward frozen. In turn, this allows a bunch of optimisation
 * since any traversal function that does not look upward can be cached.
 *
 * The full tree (all nodes) must accept the same set of traversal flags, but
 * the node type is not constrained.
 *
 * @public
 */
export abstract class Node<
    // The kind of Flags that control tree traversal.
    K extends string,
    // The list of flags allowed to control tree traversal.
    F extends Flags.allFlags,
    // The type
    T extends string = string,
  >
  implements
    Iterable<Node<K, F>>,
    Equatable,
    Hashable,
    json.Serializable<Node.JSON<T>>
{
  protected readonly _children: Array<Node<K, F>>;
  protected _parent: Option<Node<K, F>> = None;
  protected readonly _type: T;

  // Externally provided data.
  private readonly _externalId: string | undefined;
  private readonly _extraData: any;

  private readonly _internalId: string;

  /**
   * Whether the node is frozen.
   *
   * @remarks
   * As nodes are initialized without a parent and possibly attached to a parent
   * after construction, this makes hierarchies of nodes mutable. That is, a
   * node without a parent node may be assigned one by being passed as a child
   * to a parent node. When this happens, a node becomes frozen. Nodes can also
   * become frozen before being assigned a parent by using the `Node#freeze()`
   * method.
   */
  protected _frozen: boolean = false;

  protected constructor(
    children: Array<Node<K, F>>,
    type: T,
    externalId?: string,
    internalId?: string,
    extraData?: any,
  ) {
    this._children = (children as Array<Node<K, F>>).filter((child) =>
      child._attachParent(this),
    ) as Array<Node<K, F>>;
    this._type = type;
    this._externalId = externalId;
    this._extraData = extraData;

    this._internalId = internalId ?? rng.rand();
  }

  public get type(): T {
    return this._type;
  }

  public get externalId(): string | undefined {
    return this._externalId;
  }

  public get extraData(): any {
    return this._extraData;
  }

  public get internalId(): string {
    return this._internalId;
  }

  /**
   * @deprecated Aliases to {@link Node#internalId}.
   */
  public get serializationId(): string | undefined {
    return this.internalId;
  }

  public get frozen(): boolean {
    return this._frozen;
  }

  /**
   * Freeze the node. This prevents further expansion of the node hierarchy,
   * meaning that the node can no longer be passed as a child to a parent node.
   */
  public freeze(): this {
    this._frozen = this._frozen || true;
    return this;
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-parent}
   */
  public parent(options?: Flags<K, F>): Option<Node<K, F>> {
    return this._parent;
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-parent}
   */
  public isParentOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.parent(options).includes(this);
  }

  private _lastKnownRoot: Array<Node<K, F>> = [];

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-root}
   */
  // Since root is looking upward, it may change between calls.
  // So we cache the last known root, try again from here and update the result
  // if necessary. Once the tree is fully frozen, this only cost an extra look
  // through this.parent which is not expensive.
  public root(options?: Flags<K, F>): Node<K, F> {
    const value = options?.value ?? 0;
    let lastKnownRoot = this._lastKnownRoot[value] ?? this;

    for (const parent of lastKnownRoot.parent(options)) {
      lastKnownRoot = parent.root(options);
    }

    this._lastKnownRoot[value] = lastKnownRoot;
    return lastKnownRoot;
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-root}
   */
  public isRootOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.root(options) === this;
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-child}
   */
  public children(options?: Flags<K, F>): Sequence<Node<K, F>> {
    return Sequence.from(this._children);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-child}
   */
  public isChildOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.children(options).includes(this);
  }

  private _descendants: Array<Sequence<Node<K, F>>> = [];
  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-descendant}
   */
  // While this is lazily built, actually generating the sequence takes time to
  // walk through the tree and resolve all the continuations.
  // Caching it saves a lot of time by generating the sequence only once.
  public descendants(options?: Flags<K, F>): Sequence<Node<K, F>> {
    const value = options?.value ?? 0;
    if (this._descendants[value] === undefined) {
      this._descendants[value] = this.children(options).flatMap((child) =>
        Sequence.of(
          child,
          Lazy.of(() => child.descendants(options)),
        ),
      );
    }

    return this._descendants[value];
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-descendant}
   */
  public isDescendantOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.descendants(options).includes(this);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant}
   */
  public inclusiveDescendants(options?: Flags<K, F>): Sequence<Node<K, F>> {
    return Sequence.of(
      this,
      Lazy.of(() => this.descendants(options)),
    );
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant}
   */
  public isInclusiveDescendantsOf(
    node: Node<K, F>,
    options?: Flags<K, F>,
  ): boolean {
    return node.inclusiveDescendants(options).includes(this);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-ancestor}
   */
  public ancestors(options?: Flags<K, F>): Sequence<Node<K, F>> {
    for (const parent of this.parent(options)) {
      return Sequence.of(
        parent,
        Lazy.of(() => parent.ancestors(options)),
      );
    }

    return Sequence.empty();
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-ancestor}
   */
  public isAncestorOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.ancestors(options).includes(this);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor}
   */
  public inclusiveAncestors(options?: Flags<K, F>): Sequence<Node<K, F>> {
    return Sequence.of(
      this,
      Lazy.of(() => this.ancestors(options)),
    );
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor}
   */
  public isInclusiveAncestorOf(
    node: Node<K, F>,
    options?: Flags<K, F>,
  ): boolean {
    return node.inclusiveAncestors(options).includes(this);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-sibling}
   */
  public siblings(options?: Flags<K, F>): Sequence<Node<K, F>> {
    return this.inclusiveSiblings(options).reject(equals(this));
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-sibling}
   */
  public isSiblingOf(node: Node<K, F>, options?: Flags<K, F>): boolean {
    return node.siblings(options).includes(this);
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling}
   */
  public inclusiveSiblings(options?: Flags<K, F>): Sequence<Node<K, F>> {
    for (const parent of this.parent(options)) {
      return parent.children(options);
    }

    return Sequence.empty();
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling}
   */
  public isInclusiveSiblingOf(
    node: Node<K, F>,
    options?: Flags<K, F>,
  ): boolean {
    return node.inclusiveSiblings(options).includes(this);
  }

  private _preceding: Array<Sequence<Node<K, F>>> = [];

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-preceding}
   */
  // Due to reversing, this is not lazy and is costly at build time.
  // This only looks in frozen parts of the tree.
  public preceding(options?: Flags<K, F>): Sequence<Node<K, F>> {
    const value = options?.value ?? 0;
    if (this._preceding[value] === undefined) {
      this._preceding[value] = this.inclusiveSiblings(options)
        .takeUntil(equals(this))
        .reverse();
    }

    return this._preceding[value];
  }

  private _following: Array<Sequence<Node<K, F>>> = [];

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-following}
   */
  // Due to skipUntil, this is not fully lazy and is costly at build time.
  // This only looks in frozen parts of the tree.
  public following(options?: Flags<K, F>): Sequence<Node<K, F>> {
    const value = options?.value ?? 0;
    if (this._following[value] === undefined) {
      this._following[value] = this.inclusiveSiblings(options)
        .skipUntil(equals(this))
        .rest();
    }

    return this._following[value];
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-first-child}
   */
  // Sequence.first() is fast and doesn't need caching
  public first(options?: Flags<K, F>): Option<Node<K, F>> {
    return this.children(options).first();
  }

  private _last: Array<Option<Node<K, F>>> = [];

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-last-child}
   */
  // Due to last, this is not lazy and is costly at build time.
  // This only looks in frozen parts of the tree.
  public last(options?: Flags<K, F>): Option<Node<K, F>> {
    const value = options?.value ?? 0;
    if (this._last[value] === undefined) {
      this._last[value] = this.children(options).last();
    }

    return this._last[value];
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-previous-sibling}
   */
  public previous(options?: Flags<K, F>): Option<Node<K, F>> {
    return this.preceding(options).first();
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-next-sibling}
   */
  public next(options?: Flags<K, F>): Option<Node<K, F>> {
    return this.following(options).first();
  }

  /**
   * {@link https://dom.spec.whatwg.org/#concept-tree-index}
   */
  public index(options?: Flags<K, F>): number {
    return this.preceding(options).size;
  }

  /**
   * {@link https://dom.spec.whatwg.org/#dom-element-closest}
   */
  public closest<T extends Node<K, F>>(
    refinement: Refinement<Node<K, F>, T>,
    options?: Flags<K, F>,
  ): Option<T>;

  /**
   * {@link https://dom.spec.whatwg.org/#dom-element-closest}
   */
  public closest(
    predicate: Predicate<Node<K, F>>,
    options?: Flags<K, F>,
  ): Option<Node<K, F>>;

  /**
   * {@link https://dom.spec.whatwg.org/#dom-element-closest}
   */
  public closest(
    predicate: Predicate<Node<K, F>>,
    options?: Flags<K, F>,
  ): Option<Node<K, F>> {
    return this.inclusiveAncestors(options).find(predicate);
  }

  public *[Symbol.iterator](): Iterator<Node<K, F>> {
    yield* this.descendants();
  }

  public equals(value: Node<K, F>): boolean;

  public equals(value: unknown): value is this;

  public equals(value: unknown): boolean {
    return value === this;
  }

  public hash(hash: Hash) {
    hash.writeObject(this);
  }

  public toJSON(options?: json.Serializable.Options): Node.JSON<T> {
    const verbosity = options?.verbosity ?? json.Serializable.Verbosity.Medium;

    const result: Node.JSON<T> = {
      type: this._type,
    };

    if (verbosity < json.Serializable.Verbosity.Medium) {
      // Only type and internalId
      result.internalId = this._internalId;
      result.serializationId = this.serializationId;
      return result;
    }

    // If verbosity is Medium or above, include everything (except internalId)
    result.children = this._children.map((child) => child.toJSON(options));

    if (this._externalId !== undefined) {
      result.externalId = this._externalId;
    }

    if (verbosity >= json.Serializable.Verbosity.High) {
      // If verbosity is High or above, include also internalId
      result.internalId = this._internalId;
      result.serializationId = this.serializationId;
    }

    return result;
  }

  /**
   * @internal
   */
  public _attachParent(parent: Node<K, F>): boolean {
    if (this._frozen || this._parent.isSome()) {
      return false;
    }

    this._parent = Option.of(parent);
    this._frozen = true;

    return true;
  }
}

/**
 * @public
 */
export namespace Node {
  export interface JSON<T extends string = string> {
    [key: string]: json.JSON | undefined;
    type: T;
    children?: Array<JSON>;
    externalId?: string;
    internalId?: string;
    serializationId?: string;
  }
}
