import type { Callback } from "@siteimprove/alfa-callback";
import { Equatable } from "@siteimprove/alfa-equatable";
import type { Hash } from "@siteimprove/alfa-hash";
import { Serializable } from "@siteimprove/alfa-json";
import type { Mapper } from "@siteimprove/alfa-mapper";
import { None, Option } from "@siteimprove/alfa-option";

import type * as json from "@siteimprove/alfa-json";

import type { Either } from "./either.js";
import type { Right } from "./right.js";

/**
 * @public
 */
export class Left<L> implements Either<L, never> {
  public static of<L>(value: L): Left<L> {
    return new Left(value);
  }

  private readonly _value: L;

  protected constructor(value: L) {
    this._value = value;
  }

  public isLeft(): this is Left<L> {
    return true;
  }

  public isRight(): this is Right<never> {
    return false;
  }

  public map(): Left<L> {
    return this;
  }

  public apply(): Left<L> {
    return this;
  }

  public flatMap(): Left<L> {
    return this;
  }

  public flatten<L, R>(this: Either<L, never>): Either<L, R> {
    return this;
  }

  public reduce<T>(reducer: unknown, accumulator: T): T {
    return accumulator;
  }

  public either<T>(left: Mapper<L, T>): T {
    return left(this._value);
  }

  public get(): L {
    return this._value;
  }

  public left(): Option<L> {
    return Option.of(this._value);
  }

  public right(): None {
    return None;
  }

  public teeLeft(callback: Callback<L>): Left<L> {
    callback(this._value);
    return this;
  }

  public teeRight(): Left<L> {
    return this;
  }

  public equals<L>(value: Left<L>): boolean;

  public equals(value: unknown): value is this;

  public equals(value: unknown): boolean {
    return value instanceof Left && Equatable.equals(value._value, this._value);
  }

  public hash(hash: Hash): void {
    hash.writeBoolean(false).writeUnknown(this._value);
  }

  public *[Symbol.iterator](): Iterator<L> {
    yield this._value;
  }

  public toJSON(): Left.JSON<L> {
    return {
      type: "left",
      value: Serializable.toJSON(this._value),
    };
  }

  public toString(): string {
    return `Left { ${this._value} }`;
  }
}

/**
 * @public
 */
export namespace Left {
  export interface JSON<L> {
    [key: string]: json.JSON;
    type: "left";
    value: Serializable.ToJSON<L>;
  }

  export function isLeft<L>(value: Iterable<L>): value is Left<L>;

  export function isLeft<L>(value: unknown): value is Left<L>;

  export function isLeft<L>(value: unknown): value is Left<L> {
    return value instanceof Left;
  }
}
