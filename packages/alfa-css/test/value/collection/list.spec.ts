import type { Parser } from "@siteimprove/alfa-parser";
import type { Slice } from "@siteimprove/alfa-slice";
import { test } from "@siteimprove/alfa-test";

import type { Token, Value } from "../../../dist/index.js";
import {
  Length,
  LengthPercentage,
  Lexer,
  List,
  Number,
} from "../../../dist/index.js";

function parse<V extends Value>(
  str: string,
  parser: Parser<Slice<Token>, V, string>,
): List<V> {
  return List.parseCommaSeparated(parser)(Lexer.lex(str)).getUnsafe()[1];
}

test("parseCommaSeparated() parses a comma separated list", (t) => {
  const actual = parse("1, 2, 3", Number.parse);

  t.deepEqual(actual.hasCalculation(), false);

  t.deepEqual(actual.toJSON(), {
    type: "list",
    values: [
      { type: "number", value: 1 },
      { type: "number", value: 2 },
      { type: "number", value: 3 },
    ],
    separator: ", ",
  });
});

test(".of() considers the list as calculated when one value is", (t) => {
  const actual = parse("1px, 10%, calc(1px + 2em)", LengthPercentage.parse);

  t.deepEqual(actual.hasCalculation(), true);
});

test("resolve() resolves all values in a list", (t) => {
  const actual = parse("1px, 10%, calc(1px + 2em)", LengthPercentage.parse);
  const resolver = {
    length: Length.resolver(
      Length.of(16, "px"),
      Length.of(16, "px"),
      Length.of(16, "px"),
      Length.of(16, "px"),
    ),
    percentageBase: Length.of(20, "px"),
  };

  const resolved = actual.resolve(resolver);

  t.deepEqual(resolved.hasCalculation(), false);

  t.deepEqual(resolved.toJSON(), {
    type: "list",
    values: [
      { type: "length", value: 1, unit: "px" },
      { type: "length", value: 2, unit: "px" },
      { type: "length", value: 33, unit: "px" },
    ],
    separator: ", ",
  });
});

test("#cutOrExtend returns identical copy if list has the same length as the given length", (t) => {
  t.deepEqual(parse("1, 2, 3", Number.parse).cutOrExtend(3).toJSON(), {
    type: "list",
    values: [
      { type: "number", value: 1 },
      { type: "number", value: 2 },
      { type: "number", value: 3 },
    ],
    separator: ", ",
  });
});

test("#cutOrExtend cuts a list longer than the given length", (t) => {
  t.deepEqual(parse("1, 2, 3", Number.parse).cutOrExtend(2).toJSON(), {
    type: "list",
    values: [
      { type: "number", value: 1 },
      { type: "number", value: 2 },
    ],
    separator: ", ",
  });
});

test("#cutOrExtend repeats a list shorter than the given length", (t) => {
  t.deepEqual(parse("1, 2, 3", Number.parse).cutOrExtend(5).toJSON(), {
    type: "list",
    values: [
      { type: "number", value: 1 },
      { type: "number", value: 2 },
      { type: "number", value: 3 },
      { type: "number", value: 1 },
      { type: "number", value: 2 },
    ],
    separator: ", ",
  });
});
