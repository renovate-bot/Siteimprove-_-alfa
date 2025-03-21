import { PseudoElementSelector } from "./pseudo-element.js";

/**
 * {@link https://drafts.csswg.org/css-pseudo-4/#selectordef-grammar-error}
 */
export class GrammarError extends PseudoElementSelector<"grammar-error"> {
  public static of(): GrammarError {
    return new GrammarError();
  }

  protected constructor() {
    super("grammar-error");
  }

  public *[Symbol.iterator](): Iterator<GrammarError> {
    yield this;
  }
}

export namespace GrammarError {
  export const parse = PseudoElementSelector.parseNonLegacy(
    "grammar-error",
    GrammarError.of,
  );
}
