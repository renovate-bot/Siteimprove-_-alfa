import { Array } from "@siteimprove/alfa-array";
import { Hash } from "@siteimprove/alfa-hash";
import { Iterable } from "@siteimprove/alfa-iterable";
import { Serializable } from "@siteimprove/alfa-json";
import { Option } from "@siteimprove/alfa-option";
import { Parser } from "@siteimprove/alfa-parser";

import { Function, type Parser as CSSParser, Token } from "../../syntax";

import { Keyword } from "../keyword";
import { LengthPercentage } from "../numeric";
import { Value } from "../value";

import { BasicShape } from "./basic-shape";

const { left, map, option, pair, right, separated, separatedList } = Parser;
const { parseComma, parseWhitespace } = Token;

/**
 * {@link https://drafts.csswg.org/css-shapes/#funcdef-polygon}
 *
 * @public
 */
export class Polygon<
  F extends Polygon.Fill = Polygon.Fill,
  V extends LengthPercentage = LengthPercentage
> extends BasicShape<"polygon", Value.HasCalculation<[V]>> {
  public static of<
    F extends Polygon.Fill = Polygon.Fill,
    V extends LengthPercentage = LengthPercentage
  >(fill: Option<F>, vertices: Iterable<Polygon.Vertex<V>>): Polygon<F, V> {
    return new Polygon(fill, Array.from(vertices));
  }

  private readonly _fill: Option<F>;
  private readonly _vertices: Array<Polygon.Vertex<V>>;

  private constructor(fill: Option<F>, vertices: Array<Polygon.Vertex<V>>) {
    super(
      "polygon",
      vertices.reduce(
        (calc, vertex) => calc || Value.hasCalculation(...vertex),
        false
      ) as unknown as Value.HasCalculation<[V]>
    );
    this._fill = fill;
    this._vertices = vertices;
  }

  public get fill(): Option<F> {
    return this._fill;
  }

  public get vertices(): ReadonlyArray<Polygon.Vertex<V>> {
    return this._vertices;
  }

  public resolve(resolver: Polygon.Resolver): Polygon.Canonical {
    return new Polygon(
      this._fill,
      this._vertices.map(
        (vertex) =>
          // map loses the fact that vertex has exactly two elements.
          vertex.map(
            LengthPercentage.resolve(resolver)
          ) as unknown as Polygon.Vertex<LengthPercentage.Canonical>
      )
    );
  }

  public equals(value: Polygon): boolean;

  public equals(value: unknown): value is this;

  public equals(value: unknown): boolean {
    return (
      value instanceof Polygon &&
      value._fill.equals(this._fill) &&
      Array.equals(value._vertices, this._vertices)
    );
  }

  public hash(hash: Hash): void {
    hash.writeHashable(this._fill);
    Array.hash(this._vertices, hash);
  }

  public toJSON(): Polygon.JSON<F, V> {
    return {
      ...super.toJSON(),
      fill: this._fill.toJSON(),
      vertices: Array.toJSON(this._vertices),
    };
  }

  public toString(): string {
    const fill = this._fill.reduce((_, fill) => `${fill}, `, "");
    const vertices = this._vertices.map(([h, v]) => `${h} ${v}`).join(" ");

    return `polygon(${fill}${vertices})`;
  }
}

/**
 * @public
 */
export namespace Polygon {
  export type Canonical = Polygon<Fill, LengthPercentage.Canonical>;

  export type Fill = Keyword<"nonzero"> | Keyword<"evenodd">;

  export type Vertex<V extends LengthPercentage = LengthPercentage> = readonly [
    V,
    V
  ];

  export interface JSON<
    F extends Fill = Fill,
    V extends LengthPercentage = LengthPercentage
  > extends BasicShape.JSON<"polygon"> {
    fill: Option.JSON<F>;
    vertices: Array<Serializable.ToJSON<Vertex<V>>>;
  }

  export type Resolver = LengthPercentage.Resolver;

  export type PartiallyResolved = Polygon<
    Fill,
    LengthPercentage.PartiallyResolved
  >;

  export type PartialResolver = LengthPercentage.PartialResolver;

  export function partiallyResolve(
    resolver: PartialResolver
  ): (value: Polygon) => PartiallyResolved {
    return (value) =>
      Polygon.of(
        value.fill,
        value.vertices.map(
          (vertex) =>
            // map loses the fact that vertex has exactly two elements.
            vertex.map(
              LengthPercentage.partiallyResolve(resolver)
            ) as unknown as Polygon.Vertex<LengthPercentage.Canonical>
        )
      );
  }

  export function isPolygon(value: unknown): value is Polygon {
    return value instanceof Polygon;
  }

  const parseVertex = separated(
    LengthPercentage.parse,
    parseWhitespace,
    LengthPercentage.parse
  );

  export const parse: CSSParser<Polygon> = map(
    Function.parse(
      "polygon",
      pair(
        option(left(Keyword.parse("nonzero", "evenodd"), parseComma)),
        right(
          option(parseWhitespace),
          separatedList(parseVertex, parseWhitespace)
        )
      )
    ),
    ([_, [fill, vertices]]) => Polygon.of(fill, vertices)
  );
}
