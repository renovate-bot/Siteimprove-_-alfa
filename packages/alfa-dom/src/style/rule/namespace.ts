import { Option } from "@siteimprove/alfa-option";
import { Trampoline } from "@siteimprove/alfa-trampoline";

import { Rule } from "../rule.js";

/**
 * @public
 */
export class NamespaceRule extends Rule<"namespace"> {
  public static of(namespace: string, prefix: Option<string>): NamespaceRule {
    return new NamespaceRule(namespace, prefix);
  }

  private readonly _namespace: string;
  private readonly _prefix: Option<string>;

  protected constructor(namespace: string, prefix: Option<string>) {
    super("namespace");

    this._namespace = namespace;
    this._prefix = prefix;
  }

  public get namespace(): string {
    return this._namespace;
  }

  public get prefix(): Option<string> {
    return this._prefix;
  }

  public toJSON(): NamespaceRule.JSON {
    return {
      ...super.toJSON(),
      namespace: this._namespace,
      prefix: this._prefix.getOr(null),
    };
  }

  public toString(): string {
    const prefix = this._prefix.map((prefix) => ` ${prefix}`).getOr("");

    return `@namespace ${prefix}url(${this._namespace})`;
  }
}

/**
 * @public
 */
export namespace NamespaceRule {
  export interface JSON extends Rule.JSON<"namespace"> {
    namespace: string;
    prefix: string | null;
  }

  export function isNamespaceRule(value: unknown): value is NamespaceRule {
    return value instanceof NamespaceRule;
  }

  /**
   * @internal
   */
  export function fromNamespaceRule(json: JSON): Trampoline<NamespaceRule> {
    return Trampoline.done(
      NamespaceRule.of(json.namespace, Option.from(json.prefix)),
    );
  }
}
