import { Equatable } from "@siteimprove/alfa-equatable";
import { Serializable } from "@siteimprove/alfa-json";
import { Parser } from "@siteimprove/alfa-parser";
import { Slice } from "@siteimprove/alfa-slice";
import * as json from "@siteimprove/alfa-json";

import { Token } from "../syntax/token";

const { map } = Parser;

/**
 * @see https://drafts.csswg.org/css-values/#numbers
 */
export class Number implements Equatable, Serializable {
  public static of(value: number): Number {
    return new Number(value);
  }

  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  public get type(): "number" {
    return "number";
  }

  public get value(): number {
    return this._value;
  }

  public equals(value: unknown): value is this {
    return value instanceof Number && value._value === this._value;
  }

  public toString(): string {
    return `${this._value}`;
  }

  public toJSON(): Number.JSON {
    return {
      type: "number",
      value: this._value
    };
  }
}

export namespace Number {
  export interface JSON {
    [key: string]: json.JSON;
    type: "number";
    value: number;
  }

  export function isNumber(value: unknown): value is Number {
    return value instanceof Number;
  }

  export const parse: Parser<
    Slice<Token>,
    Number,
    string
  > = map(Token.parseNumber(), number => Number.of(number.value));
}
