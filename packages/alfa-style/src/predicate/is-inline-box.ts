import type { Style } from "../style.js";

/**
 * {@link https://drafts.csswg.org/css-display-4/#inline-box}
 *
 * @internal
 */
export function isInlineBox(style: Style): boolean {
  const [outside, inside] = style.computed("display").value.values;

  return (
    // inline-flow
    outside.is("inline") && (inside?.is("flow") ?? false)
  );
}

/**
 * {@link https://drafts.csswg.org/css-display-4/#inline-level}
 *
 * @internal
 */
export function isInlineLevelBox(style: Style): boolean {
  const [outside] = style.computed("display").value.values;

  return outside.is("inline");
}
