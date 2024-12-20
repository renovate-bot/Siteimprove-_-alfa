import { PseudoElementSelector } from "./pseudo-element.js";

/**
 * {@link https://drafts.csswg.org/css-pseudo-4/#marker-pseudo}
 */
export class Marker extends PseudoElementSelector<"marker"> {
  public static of(): Marker {
    return new Marker();
  }

  protected constructor() {
    super("marker");
  }

  public *[Symbol.iterator](): Iterator<Marker> {
    yield this;
  }
}

export namespace Marker {
  export const parse = PseudoElementSelector.parseNonLegacy(
    "marker",
    Marker.of,
  );
}
