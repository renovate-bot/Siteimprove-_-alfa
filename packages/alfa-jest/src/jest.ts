/// <reference types="jest" />

import { Assert } from "@siteimprove/alfa-assert";
import { Mapper } from "@siteimprove/alfa-mapper";
import { Predicate } from "@siteimprove/alfa-predicate";
import { Page } from "@siteimprove/alfa-web";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeAccessible(): R;
    }
  }
}

export namespace Jest {
  export function createPlugin<T>(
    identify: Predicate<unknown, T>,
    transform: Mapper<T, Page>
  ): void {
    expect.extend({
      toBeAccessible(value: unknown) {
        if (identify(value)) {
          const page = transform(value);

          const error = Assert.Page.isAccessible(page);

          if (error.isSome()) {
            const message = error.toString();

            return {
              pass: false,
              message: () => message
            };
          }
        }

        return {
          pass: true,
          message: () => "Expected to not be accessible"
        };
      }
    });
  }
}
