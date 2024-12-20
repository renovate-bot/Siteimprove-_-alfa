import { Diagnostic } from "@siteimprove/alfa-act";
import { Array } from "@siteimprove/alfa-array";
import type { Element, Node } from "@siteimprove/alfa-dom";
import type { Hash } from "@siteimprove/alfa-hash";
import type { Iterable } from "@siteimprove/alfa-iterable";

/**
 * @public
 */
export class WithBadElements extends Diagnostic implements Iterable<Element> {
  public static of(
    message: string,
    errors: Iterable<Element> = [],
  ): WithBadElements {
    return new WithBadElements(message, Array.from(errors));
  }

  private readonly _errors: ReadonlyArray<Element>;

  protected constructor(message: string, errors: Array<Element>) {
    super(message);
    this._errors = errors;
  }

  public get errors(): ReadonlyArray<Element> {
    return this._errors;
  }

  public equals(value: WithBadElements): boolean;

  public equals(value: unknown): value is this;

  public equals(value: unknown): boolean {
    return (
      value instanceof WithBadElements &&
      value._message === this._message &&
      Array.equals(value._errors, this._errors)
    );
  }

  public hash(hash: Hash) {
    super.hash(hash);
    this._errors.forEach((element) => element.hash(hash));
  }

  public *[Symbol.iterator](): Iterator<Element> {
    yield* this._errors;
  }

  public toJSON(options?: Node.SerializationOptions): WithBadElements.JSON {
    return {
      ...super.toJSON(options),
      errors: Array.toJSON(this._errors, options),
    };
  }
}

/**
 * @public
 */
export namespace WithBadElements {
  export interface JSON extends Diagnostic.JSON {
    errors: Array<Element.JSON>;
  }

  export function isWithBadElements(
    value: Diagnostic,
  ): value is WithBadElements;

  export function isWithBadElements(value: unknown): value is WithBadElements;

  export function isWithBadElements(value: unknown): value is WithBadElements {
    return value instanceof WithBadElements;
  }
}
