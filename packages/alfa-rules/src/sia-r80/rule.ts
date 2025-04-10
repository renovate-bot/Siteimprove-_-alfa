import { Diagnostic, Rule } from "@siteimprove/alfa-act";
import { DOM } from "@siteimprove/alfa-aria";
import { Length } from "@siteimprove/alfa-css";
import type { Device } from "@siteimprove/alfa-device";
import type { Element } from "@siteimprove/alfa-dom";
import { Node, Query } from "@siteimprove/alfa-dom";
import { Predicate } from "@siteimprove/alfa-predicate";
import { Err, Ok } from "@siteimprove/alfa-result";
import { String } from "@siteimprove/alfa-string";
import { Style } from "@siteimprove/alfa-style";
import { Criterion } from "@siteimprove/alfa-wcag";
import type { Page } from "@siteimprove/alfa-web";

import { expectation } from "../common/act/expectation.js";

import { Scope, Stability } from "../tags/index.js";

const { hasRole } = DOM;
const { and, not, test } = Predicate;
const { isVisible, hasCascadedStyle } = Style;
const { getElementDescendants } = Query;

export default Rule.Atomic.of<Page, Element>({
  uri: "https://alfa.siteimprove.com/rules/sia-r80",
  requirements: [Criterion.of("1.4.8")],
  tags: [Scope.Component, Stability.Stable],
  evaluate({ device, document }) {
    return {
      applicability() {
        return getElementDescendants(document, Node.fullTree).filter(
          and(
            hasRole(device, "paragraph"),
            Node.hasTextContent(not(String.isWhitespace)),
            isVisible(device),
            hasCascadedStyle("line-height", () => true, device),
          ),
        );
      },

      expectations(target) {
        return {
          1: expectation(
            test(hasRelativeUnit(device), target),
            () => Outcomes.HasRelativeUnit,
            () => Outcomes.HasAbsoluteUnit,
          ),
        };
      },
    };
  },
});

/**
 * @public
 */
export namespace Outcomes {
  export const HasRelativeUnit = Ok.of(
    Diagnostic.of(`The line height is specified using a relative unit`),
  );

  export const HasAbsoluteUnit = Err.of(
    Diagnostic.of(`The line height is specified using an absolute unit`),
  );
}

/**
 * @remarks
 * We consider that calculated lengths have a relative unit (and pass the rule)
 * since we cannot easily detect it here. We should instead dig into the
 * calculation to see if relative units are used, but that could be made difficult
 * with hings like "2em * 0" which is **not** a relative length…
 */
function hasRelativeUnit(device: Device) {
  return hasCascadedStyle(
    "line-height",
    (lineHeight) =>
      // Keyword, percentage, number
      !Length.isLength(lineHeight) ||
      // Calculated length
      lineHeight.hasCalculation() ||
      // Fixed length in relative units
      lineHeight.isRelative(),
    device,
  );
}
