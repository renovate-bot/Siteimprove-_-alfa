import { Diagnostic, Rule } from "@siteimprove/alfa-act";
import { DOM } from "@siteimprove/alfa-aria";
import type { Device } from "@siteimprove/alfa-device";
import type { Element } from "@siteimprove/alfa-dom";
import { Node, Query } from "@siteimprove/alfa-dom";
import { Predicate } from "@siteimprove/alfa-predicate";
import { Err, Ok } from "@siteimprove/alfa-result";
import { Style } from "@siteimprove/alfa-style";
import type { Page } from "@siteimprove/alfa-web";

import { expectation } from "../common/act/index.js";
import { BestPractice } from "../requirements/index.js";

import { Scope, Stability } from "../tags/index.js";

const { hasRole } = DOM;
const { and, test } = Predicate;
const { isVisible, hasComputedStyle } = Style;
const { getElementDescendants } = Query;

export default Rule.Atomic.of<Page, Element>({
  uri: "https://alfa.siteimprove.com/rules/sia-r72",
  requirements: [BestPractice.of("paragraph-not-uppercase")],
  tags: [Scope.Component, Stability.Stable],
  evaluate({ device, document }) {
    return {
      applicability() {
        return getElementDescendants(document, Node.fullTree).filter(
          and(hasRole(device, "paragraph"), isVisible(device)),
        );
      },

      expectations(target) {
        return {
          1: expectation(
            test(isNotUpperCased(device), target),
            () => Outcomes.IsNotUppercased,
            () => Outcomes.IsUppercased,
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
  export const IsNotUppercased = Ok.of(
    Diagnostic.of(`The text of the paragraph is not uppercased`),
  );

  export const IsUppercased = Err.of(
    Diagnostic.of(`The text of the paragraph is uppercased`),
  );
}

function isNotUpperCased(device: Device) {
  return hasComputedStyle(
    "text-transform",
    (transform) => transform.value !== "uppercase",
    device,
  );
}
