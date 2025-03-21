import { PseudoElementSelector } from "./pseudo-element.js";

/**
 * {@link https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo}
 */
export class FirstLetter extends PseudoElementSelector<"first-letter"> {
  public static of(): FirstLetter {
    return new FirstLetter();
  }

  protected constructor() {
    super("first-letter");
  }

  public *[Symbol.iterator](): Iterator<FirstLetter> {
    yield this;
  }
}

export namespace FirstLetter {
  export const parse = PseudoElementSelector.parseLegacy(
    "first-letter",
    FirstLetter.of,
  );
}
