import { Future } from "@siteimprove/alfa-future";
import { Iterable } from "@siteimprove/alfa-iterable";
import { List } from "@siteimprove/alfa-list";
import { None } from "@siteimprove/alfa-option";

import { Cache } from "./cache";
import { Oracle } from "./oracle";
import { Outcome } from "./outcome";
import { Rule } from "./rule";

const { flatten } = Iterable;

export class Audit<I, T = unknown, Q = never> {
  public static of<I, T = unknown, Q = never>(
    input: I,
    oracle: Oracle<Q> = () => Future.settle(None)
  ): Audit<I, T, Q> {
    return new Audit(input, oracle, List.empty());
  }

  private readonly input: I;
  private readonly oracle: Oracle<Q>;
  private readonly rules: List<Rule<I, T, Q>>;

  private constructor(input: I, oracle: Oracle<Q>, rules: List<Rule<I, T, Q>>) {
    this.input = input;
    this.oracle = oracle;
    this.rules = rules;
  }

  public add<R extends Rule<I, T, Q>>(rule: R): Audit<I, T, Q> {
    return new Audit(this.input, this.oracle, this.rules.push(rule));
  }

  public evaluate(): Future<Iterable<Outcome<I, T, Q>>> {
    const outcomes = Cache.empty();

    return Future.traverse(this.rules, rule =>
      rule.evaluate(this.input, this.oracle, outcomes)
    ).map(flatten);
  }
}
