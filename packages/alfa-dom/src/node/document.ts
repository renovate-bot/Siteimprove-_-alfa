import { Array } from "@siteimprove/alfa-array";
import type { Device } from "@siteimprove/alfa-device";
import { Iterable } from "@siteimprove/alfa-iterable";
import { None, Option } from "@siteimprove/alfa-option";
import { String } from "@siteimprove/alfa-string";
import { Trampoline } from "@siteimprove/alfa-trampoline";

import * as json from "@siteimprove/alfa-json";

import { Node } from "../node.js";
import { Sheet } from "../style/sheet.js";
import { Element } from "./element.js";

/**
 * @public
 */
export class Document extends Node<"document"> {
  public static of(
    children: Iterable<Node>,
    style: Iterable<Sheet> = [],
    externalId?: string,
    internalId?: string,
    extraData?: any,
  ): Document {
    return new Document(
      Array.from(children),
      style,
      externalId,
      internalId,
      extraData,
    );
  }

  public static empty(): Document {
    return new Document([], []);
  }

  private readonly _style: Array<Sheet>;
  private _frame: Option<Element> = None;

  protected constructor(
    children: Array<Node>,
    style: Iterable<Sheet>,
    externalId?: string,
    internalId?: string,
    extraData?: any,
  ) {
    super(children, "document", externalId, internalId, extraData);

    this._style = Array.from(style);
  }

  public get style(): Iterable<Sheet> {
    return this._style;
  }

  public get frame(): Option<Element> {
    return this._frame;
  }

  public parent(options: Node.Traversal = Node.Traversal.empty): Option<Node> {
    return options.isSet(Node.Traversal.nested)
      ? this.frame
      : super.parent(options);
  }

  /**
   * @internal
   **/
  protected _internalPath(
    options: Node.Traversal = Node.Traversal.empty,
  ): string {
    if (options.isSet(Node.Traversal.nested)) {
      return this._frame
        .map((frame) => frame.path(options) + "/document-node()")
        .getOr("/");
    }

    return "/";
  }

  public toJSON(
    options: Node.SerializationOptions & {
      verbosity:
        | json.Serializable.Verbosity.Minimal
        | json.Serializable.Verbosity.Low;
    },
  ): Document.MinimalJSON;
  public toJSON(options?: Node.SerializationOptions): Document.JSON;
  public toJSON(
    options?: Node.SerializationOptions,
  ): Document.MinimalJSON | Document.JSON {
    const result = {
      ...super.toJSON(options),
    };

    const verbosity = options?.verbosity ?? json.Serializable.Verbosity.Medium;

    if (verbosity < json.Serializable.Verbosity.Medium) {
      return result;
    }

    result.style = this._style.map((sheet) => sheet.toJSON());

    return result;
  }

  public toString(): string {
    const children = this._children
      .map((child) => String.indent(child.toString()))
      .join("\n");

    return `#document${children === "" ? "" : `\n${children}`}`;
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
  public _attachFrame(frame: Element): boolean {
    if (this._frozen || this._frame.isSome()) {
      return false;
    }

    this._frame = Option.of(frame);
    this._frozen = true;

    return true;
  }
}

/**
 * @public
 */
export namespace Document {
  export interface MinimalJSON extends Node.JSON<"document"> {}

  export interface JSON extends Node.JSON<"document"> {
    style: Array<Sheet.JSON>;
  }

  export function isDocument(value: unknown): value is Document {
    return value instanceof Document;
  }

  /**
   * @internal
   */
  export function fromDocument(
    json: JSON,
    device?: Device,
  ): Trampoline<Document> {
    return Trampoline.traverse(json.children ?? [], (child) =>
      Node.fromNode(child, device),
    ).map((children) =>
      Document.of(
        children,
        json.style.map(Sheet.from),
        json.externalId,
        json.internalId,
      ),
    );
  }

  /**
   * @internal
   */
  export function cloneDocument(
    options: Node.ElementReplacementOptions,
    device?: Device,
  ): (document: Document) => Trampoline<Document> {
    return (document) =>
      Trampoline.traverse(document.children(), (child) => {
        if (Element.isElement(child) && options.predicate(child)) {
          return Trampoline.done(Array.from(options.newElements));
        }

        return Node.cloneNode(child, options, device).map((node) => [node]);
      }).map((children) => {
        return Document.of(
          Iterable.flatten(children),
          document.style,
          document.externalId,
          document.internalId,
          document.extraData,
        );
      });
  }
}
