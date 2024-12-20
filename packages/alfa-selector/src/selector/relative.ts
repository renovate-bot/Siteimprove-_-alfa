import { Combinator } from "./combinator.js";
import type { Complex } from "./complex.js";
import type { Compound } from "./compound.js";
import { Selector } from "./selector.js";
import type { Simple } from "./simple/index.js";

/**
 * {@link https://drafts.csswg.org/selectors/#relative-selector}
 *
 * @public
 */
export class Relative extends Selector<"relative"> {
  public static of(
    combinator: Combinator,
    selector: Simple | Compound | Complex,
  ): Relative {
    return new Relative(combinator, selector);
  }

  private readonly _combinator: Combinator;
  private readonly _selector: Simple | Compound | Complex;

  protected constructor(
    combinator: Combinator,
    selector: Simple | Compound | Complex,
  ) {
    super("relative", selector.specificity);
    this._combinator = combinator;
    this._selector = selector;
  }

  public get combinator(): Combinator {
    return this._combinator;
  }

  public get selector(): Simple | Compound | Complex {
    return this._selector;
  }

  public matches(): boolean {
    return false;
  }

  public equals(value: Relative): boolean;

  public equals(value: unknown): value is this;

  public equals(value: unknown): boolean {
    return (
      value instanceof Relative &&
      value._combinator === this._combinator &&
      value._selector.equals(this._selector)
    );
  }

  public *[Symbol.iterator](): Iterator<Relative> {
    yield this;
  }

  public toJSON(): Relative.JSON {
    return {
      ...super.toJSON(),
      combinator: this._combinator,
      selector: this._selector.toJSON(),
    };
  }

  public toString(): string {
    const combinator =
      this._combinator === Combinator.Descendant ? "" : `${this._combinator} `;

    return `${combinator}${this._selector}`;
  }
}

/**
 * @public
 */
export namespace Relative {
  export interface JSON extends Selector.JSON<"relative"> {
    combinator: string;
    selector: Simple.JSON | Compound.JSON | Complex.JSON;
  }
}

/**
 * {@link https://drafts.csswg.org/selectors/#typedef-relative-selector}
 */
// const parseRelative = map(pair(parseCombinator, parseComplex), (result) => {
//   const [combinator, selector] = result;

//   return Relative.of(combinator, selector);
// });
