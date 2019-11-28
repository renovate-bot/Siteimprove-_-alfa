import { Predicate } from "@siteimprove/alfa-predicate";

const { property } = Predicate;

export function hasName<T extends { readonly name: string }>(
  predicate: Predicate<string> = () => true
): Predicate<T> {
  return property("name", predicate);
}