import { None, Option } from "@siteimprove/alfa-option";
import { String } from "@siteimprove/alfa-string";
import { Trampoline } from "@siteimprove/alfa-trampoline";
import type { Device } from "@siteimprove/alfa-device";
import { Iterable } from "@siteimprove/alfa-iterable";

import * as json from "@siteimprove/alfa-json";

import { Node } from "../node.js";
import { Sheet } from "../style/sheet.js";
import { Element } from "./element.js";

/**
 * @public
 */
export class Shadow extends Node<"shadow"> {
  public static of(
    children: Iterable<Node>,
    style: Iterable<Sheet> = [],
    mode: Shadow.Mode = Shadow.Mode.Open,
    externalId?: string,
    internalId?: string,
    extraData?: any,
  ): Shadow {
    return new Shadow(
      Array.from(children),
      Array.from(style),
      mode,
      externalId,
      internalId,
      extraData,
    );
  }

  public static empty(): Shadow {
    return new Shadow([], [], Shadow.Mode.Open);
  }

  private readonly _mode: Shadow.Mode;
  private _host: Option<Element> = None;
  private readonly _style: Array<Sheet>;

  protected constructor(
    children: Array<Node>,
    style: Array<Sheet>,
    mode: Shadow.Mode,
    externalId?: string,
    internalId?: string,
    extraData?: any,
  ) {
    super(children, "shadow", externalId, internalId, extraData);

    this._mode = mode;
    this._style = style;
  }

  public get mode(): Shadow.Mode {
    return this._mode;
  }

  public get host(): Option<Element> {
    return this._host;
  }

  public get style(): Iterable<Sheet> {
    return this._style;
  }

  public parent(options: Node.Traversal = Node.Traversal.empty): Option<Node> {
    // We only "land" on Shadow roots when traversing the composed tree.
    // Notably, flattening the tree "jumps" over them.
    if (options.isSet(Node.Traversal.composed)) {
      return this._host;
    }

    return None;
  }

  /**
   * @internal
   **/
  protected _internalPath(
    options: Node.Traversal = Node.Traversal.empty,
  ): string {
    if (options.isSet(Node.Traversal.composed)) {
      return (
        this._host.map((host) => host.path(options)).getOr("") +
        "/shadow-root()"
      );
    }

    if (options.isSet(Node.Traversal.flattened)) {
      return this._host.map((host) => host.path(options)).getOr("/");
    }

    return "/";
  }

  public toJSON(
    options: Node.SerializationOptions & {
      verbosity:
        | json.Serializable.Verbosity.Minimal
        | json.Serializable.Verbosity.Low;
    },
  ): Shadow.MinimalJSON;
  public toJSON(options?: Node.SerializationOptions): Shadow.JSON;
  public toJSON(
    options?: Node.SerializationOptions,
  ): Shadow.MinimalJSON | Shadow.JSON {
    const result = {
      ...super.toJSON(options),
    };

    const verbosity = options?.verbosity ?? json.Serializable.Verbosity.Medium;

    if (verbosity < json.Serializable.Verbosity.Medium) {
      return result;
    }

    result.mode = this._mode;
    result.style = this._style.map((sheet) => sheet.toJSON());

    return result;
  }

  public toString(): string {
    const children = this._children
      .map((child) => String.indent(child.toString()))
      .join("\n");

    return `#shadow-root (${this._mode})${
      children === "" ? "" : `\n${children}`
    }`;
  }

  /**
   * @internal
   */
  public _attachParent(): boolean {
    return false;
  }

  /**
   * @internal
   */
  public _attachHost(host: Element): boolean {
    if (this._frozen || this._host.isSome()) {
      return false;
    }

    this._host = Option.of(host);
    this._frozen = true;

    return true;
  }
}

/**
 * @public
 */
export namespace Shadow {
  export enum Mode {
    Open = "open",
    Closed = "closed",
  }

  export interface MinimalJSON extends Node.JSON {}

  export interface JSON extends Node.JSON {
    type: "shadow";
    mode: string;
    style: Array<Sheet.JSON>;
  }

  export function isShadow(value: unknown): value is Shadow {
    return value instanceof Shadow;
  }

  /**
   * @internal
   */
  export function fromShadow(json: JSON, device?: Device): Trampoline<Shadow> {
    return Trampoline.traverse(json.children ?? [], (child) =>
      Node.fromNode(child, device),
    ).map((children) =>
      Shadow.of(
        children,
        json.style.map(Sheet.from),
        json.mode as Mode,
        json.externalId,
        json.internalId,
      ),
    );
  }

  /**
   * @internal
   */
  export function cloneShadow(
    options: Node.ElementReplacementOptions,
    device?: Device,
  ): (shadow: Shadow) => Trampoline<Shadow> {
    return (shadow) =>
      Trampoline.traverse(shadow.children(), (child) => {
        if (Element.isElement(child) && options.predicate(child)) {
          return Trampoline.done(Array.from(options.newElements));
        }

        return Node.cloneNode(child, options, device).map((node) => [node]);
      }).map((children) => {
        return Shadow.of(
          Iterable.flatten(children),
          shadow.style,
          shadow.mode,
          shadow.externalId,
          shadow.extraData,
          shadow.internalId,
        );
      });
  }
}
