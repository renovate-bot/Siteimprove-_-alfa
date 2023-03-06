import { Rule, Diagnostic } from "@siteimprove/alfa-act";
import { Attribute, Element, Node } from "@siteimprove/alfa-dom";
import { Ok, Err } from "@siteimprove/alfa-result";
import { Sequence } from "@siteimprove/alfa-sequence";
import { Page } from "@siteimprove/alfa-web";

import * as aria from "@siteimprove/alfa-aria";

import { expectation } from "../common/act/expectation";
import { Scope } from "../tags";

const { isElement } = Element;

export default Rule.Atomic.of<Page, Attribute>({
  uri: "https://alfa.siteimprove.com/rules/sia-r20",
  tags: [Scope.Component],
  evaluate({ document }) {
    return {
      applicability() {
        return document
          .elementDescendants(Node.composedNested)
          .flatMap((element) =>
            Sequence.from(element.attributes).filter((attribute) =>
              attribute.name.startsWith("aria-")
            )
          );
      },

      expectations(target) {
        const exists = aria.Attribute.isName(target.name);

        return {
          1: expectation(
            exists,
            () => Outcomes.IsDefined,
            () => Outcomes.IsNotDefined
          ),
        };
      },
    };
  },
});

export namespace Outcomes {
  export const IsDefined = Ok.of(Diagnostic.of(`The attribute is defined`));

  export const IsNotDefined = Err.of(
    Diagnostic.of(`The attribute is not defined`)
  );
}
