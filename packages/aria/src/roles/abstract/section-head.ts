import { Role } from "../../types";
import * as Attributes from "../../attributes";
import { Structure } from "./structure";

/**
 * @see https://www.w3.org/TR/wai-aria/#sectionhead
 */
export const SectionHead: Role = {
  name: "sectionhead",
  abstract: true,
  label: { from: ["author", "contents"] },
  inherits: [Structure],
  supported: [Attributes.Expanded]
};
