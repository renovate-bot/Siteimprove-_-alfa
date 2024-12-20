import type { Equatable } from "@siteimprove/alfa-equatable";
import type { Serializable } from "@siteimprove/alfa-json";
import type { Option } from "@siteimprove/alfa-option";
import { Parser } from "@siteimprove/alfa-parser";
import type { Predicate } from "@siteimprove/alfa-predicate";
import { Refinement } from "@siteimprove/alfa-refinement";
import { Err, Ok } from "@siteimprove/alfa-result";
import type { Slice } from "@siteimprove/alfa-slice";

import type * as json from "@siteimprove/alfa-json";

const { fromCharCode } = String;
const { and } = Refinement;
const { parseIf } = Parser;

/**
 * {@link https://www.w3.org/TR/xpath-31/#terminal-symbols}
 *
 * @public
 */
export type Token =
  | Token.Integer
  | Token.Decimal
  | Token.Double
  | Token.String
  | Token.Comment
  | Token.Name
  | Token.Character;

/**
 * @public
 */
export namespace Token {
  export type JSON =
    | Integer.JSON
    | Decimal.JSON
    | Double.JSON
    | String.JSON
    | Comment.JSON
    | Name.JSON
    | Character.JSON;

  const parseFirst: Parser<Slice<Token>, Token, string> = (
    input: Slice<Token>,
  ) =>
    input
      .first()
      .map((token) => Ok.of<[Slice<Token>, Token]>([input.rest(), token]))
      .getOr(Err.of("No token left"));

  function parseToken<T extends Token>(refinement: Refinement<Token, T>) {
    return parseIf(refinement, parseFirst, () => "Mismatching token");
  }

  export class Integer implements Equatable, Serializable<Integer.JSON> {
    public static of(value: number): Integer {
      return new Integer(value);
    }

    private readonly _value: number;

    protected constructor(value: number) {
      this._value = value;
    }

    public get type(): "integer" {
      return "integer";
    }

    public get value(): number {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof Integer && value._value === this._value;
    }

    public toJSON(): Integer.JSON {
      return {
        type: "integer",
        value: this._value,
      };
    }

    public toString(): string {
      return `${this._value}`;
    }
  }

  export namespace Integer {
    export interface JSON {
      [key: string]: json.JSON;
      type: "integer";
      value: number;
    }
  }

  export function isInteger(value: unknown): value is Integer {
    return value instanceof Integer;
  }

  export const parseInteger = parseToken(isInteger);

  export class Decimal implements Equatable, Serializable<Decimal.JSON> {
    public static of(value: number): Decimal {
      return new Decimal(value);
    }

    private readonly _value: number;

    protected constructor(value: number) {
      this._value = value;
    }

    public get type(): "decimal" {
      return "decimal";
    }

    public get value(): number {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof Decimal && value._value === this._value;
    }

    public toJSON(): Decimal.JSON {
      return {
        type: "decimal",
        value: this._value,
      };
    }

    public toString(): string {
      return `${this._value}`;
    }
  }

  export namespace Decimal {
    export interface JSON {
      [key: string]: json.JSON;
      type: "decimal";
      value: number;
    }
  }

  export function isDecimal(value: unknown): value is Decimal {
    return value instanceof Decimal;
  }

  export const parseDecimal = parseToken(isDecimal);

  export class Double implements Equatable, Serializable<Double.JSON> {
    public static of(value: number): Double {
      return new Double(value);
    }

    private readonly _value: number;

    protected constructor(value: number) {
      this._value = value;
    }

    public get type(): "double" {
      return "double";
    }

    public get value(): number {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof Double && value._value === this._value;
    }

    public toJSON(): Double.JSON {
      return {
        type: "double",
        value: this._value,
      };
    }

    public toString(): string {
      return `${this._value}`;
    }
  }

  export namespace Double {
    export interface JSON {
      [key: string]: json.JSON;
      type: "double";
      value: number;
    }
  }

  export function isDouble(value: unknown): value is Double {
    return value instanceof Double;
  }

  export const parseDouble = parseToken(isDouble);

  export class String implements Equatable, Serializable<String.JSON> {
    public static of(value: string): String {
      return new String(value);
    }

    private readonly _value: string;

    protected constructor(value: string) {
      this._value = value;
    }

    public get type(): "string" {
      return "string";
    }

    public get value(): string {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof String && value._value === this._value;
    }

    public toJSON(): String.JSON {
      return {
        type: "string",
        value: this._value,
      };
    }

    public toString(): string {
      return `"${this._value}"`;
    }
  }

  export namespace String {
    export interface JSON {
      [key: string]: json.JSON;
      type: "string";
      value: string;
    }
  }

  export function isString(value: unknown): value is String {
    return value instanceof String;
  }

  export const parseString = parseToken(isString);

  export class Comment implements Equatable, Serializable<Comment.JSON> {
    public static of(value: string): Comment {
      return new Comment(value);
    }

    private readonly _value: string;

    protected constructor(value: string) {
      this._value = value;
    }

    public get type(): "comment" {
      return "comment";
    }

    public get value(): string {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof Comment && value._value === this._value;
    }

    public toJSON(): Comment.JSON {
      return {
        type: "comment",
        value: this._value,
      };
    }

    public toString(): string {
      return this._value;
    }
  }

  export namespace Comment {
    export interface JSON {
      [key: string]: json.JSON;
      type: "comment";
      value: string;
    }
  }

  export function isComment(value: unknown): value is Comment {
    return value instanceof Comment;
  }

  export const parseComment = parseToken(isComment);

  export class Name implements Equatable, Serializable<Name.JSON> {
    public static of(prefix: Option<string>, value: string): Name {
      return new Name(prefix, value);
    }

    private readonly _prefix: Option<string>;
    private readonly _value: string;

    protected constructor(prefix: Option<string>, value: string) {
      this._prefix = prefix;
      this._value = value;
    }

    public get type(): "name" {
      return "name";
    }

    public get prefix(): Option<string> {
      return this._prefix;
    }

    public get value(): string {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return (
        value instanceof Name &&
        value._prefix.equals(this._prefix) &&
        value._value === this._value
      );
    }

    public toJSON(): Name.JSON {
      return {
        type: "name",
        prefix: this._prefix.getOr(null),
        value: this._value,
      };
    }

    public toString(): string {
      const prefix = this._prefix.map((prefix) => `${prefix}:`).getOr("");

      return `${prefix}${this._value}`;
    }
  }

  export namespace Name {
    export interface JSON {
      [key: string]: json.JSON;
      type: "name";
      prefix: string | null;
      value: string;
    }
  }

  export function isName(value: unknown): value is Name {
    return value instanceof Name;
  }

  export const parseName = (query: string | Predicate<Name> = () => true) => {
    let predicate: Predicate<Name>;

    if (typeof query === "function") {
      predicate = query;
    } else {
      const value = query;

      predicate = (name) => name.value === value;
    }

    return parseToken(and(isName, predicate));
  };

  export class Character implements Equatable, Serializable<Character.JSON> {
    public static of(value: number): Character {
      return new Character(value);
    }

    private readonly _value: number;

    protected constructor(value: number) {
      this._value = value;
    }

    public get type(): "character" {
      return "character";
    }

    public get value(): number {
      return this._value;
    }

    public equals(value: unknown): value is this {
      return value instanceof Character && value._value === this._value;
    }

    public toJSON(): Character.JSON {
      return {
        type: "character",
        value: this._value,
      };
    }

    public toString(): string {
      return fromCharCode(this._value);
    }
  }

  export namespace Character {
    export interface JSON {
      [key: string]: json.JSON;
      type: "character";
      value: number;
    }
  }

  export function isCharacter(value: unknown): value is Character {
    return value instanceof Character;
  }

  export const parseCharacter = (
    query: string | Predicate<Character> = () => true,
  ) => {
    let predicate: Predicate<Character>;

    if (typeof query === "function") {
      predicate = query;
    } else {
      const value = query.charCodeAt(0);

      predicate = (character) => character.value === value;
    }

    return parseToken(and(isCharacter, predicate));
  };
}
