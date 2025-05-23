import { String } from "@siteimprove/alfa-string";
import { Trampoline } from "@siteimprove/alfa-trampoline";

import { Rule } from "../rule.js";
import { GroupingRule } from "./grouping.js";

/**
 * @public
 */
export class KeyframesRule extends GroupingRule<"keyframes"> {
  public static of(name: string, rules: Iterable<Rule>): KeyframesRule {
    return new KeyframesRule(name, Array.from(rules));
  }

  private readonly _name: string;

  protected constructor(name: string, rules: Array<Rule>) {
    super("keyframes", rules);

    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public toJSON(): KeyframesRule.JSON {
    return {
      ...super.toJSON(),
      name: this._name,
    };
  }

  public toString(): string {
    const rules = this._rules
      .map((rule) => String.indent(rule.toString()))
      .join("\n\n");

    return `@keyframes ${this._name} {${rules === "" ? "" : `\n${rules}\n`}}`;
  }
}

/**
 * @public
 */
export namespace KeyframesRule {
  export interface JSON extends GroupingRule.JSON<"keyframes"> {
    name: string;
  }

  export function isKeyframesRule(value: unknown): value is KeyframesRule {
    return value instanceof KeyframesRule;
  }

  /**
   * @internal
   */
  export function fromKeyframesRule(json: JSON): Trampoline<KeyframesRule> {
    return Trampoline.traverse(json.rules, Rule.fromRule).map((rules) =>
      KeyframesRule.of(json.name, rules),
    );
  }
}
