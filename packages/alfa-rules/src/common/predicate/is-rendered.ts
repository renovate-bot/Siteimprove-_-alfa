import { Device } from "@siteimprove/alfa-device";
import { Element, Node } from "@siteimprove/alfa-dom";
import { Predicate } from "@siteimprove/alfa-predicate";
import { Style } from "@siteimprove/alfa-style";

export function isRendered(device: Device): Predicate<Node> {
  return node => {
    if (Element.isElement(node)) {
      const display = Style.from(node, device).cascaded("display");

      if (display.isSome()) {
        const [outside] = display.get().value;

        if (outside.value === "none") {
          return false;
        }
      }
    }

    return node.parent({ flattened: true }).every(isRendered(device));
  };
}
