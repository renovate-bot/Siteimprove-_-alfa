## API Report File for "@siteimprove/alfa-test-deprecated"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export interface Assertions {
    // (undocumented)
    <T>(value: T, message?: string): void;
    // (undocumented)
    deepEqual<T>(actual: T, expected: T, message?: string): void;
    // (undocumented)
    equal<T>(actual: T, expected: T, message?: string): void;
    // (undocumented)
    fail(message?: string): never;
    // (undocumented)
    notDeepEqual<T>(actual: T, expected: T, message?: string): void;
    // (undocumented)
    notEqual<T>(actual: T, expected: T, message?: string): void;
    // (undocumented)
    rejects<T>(block: Function | Promise<T>, error?: RegExp | Function | Object | Error, message?: string): void;
    // (undocumented)
    throws(block: Function, error?: RegExp | Function | Object | Error, message?: string): void;
}

// @public (undocumented)
export interface Controller<T = number> {
    // (undocumented)
    iterations: number;
    // (undocumented)
    seed?: number;
    // (undocumented)
    wrapper: (rng: RNG<number>, iteration: number) => RNG<T>;
}

// Warning: (ae-internal-missing-underscore) The name "defaultController" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal (undocumented)
export const defaultController: Controller<number>;

// Warning: (ae-internal-missing-underscore) The name "format" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal (undocumented)
export function format(name: string, error: Error): string;

// Warning: (ae-internal-missing-underscore) The name "Notifier" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal (undocumented)
export interface Notifier {
    // (undocumented)
    error(message: string): void;
}

// @public (undocumented)
export type RNG<T = number> = () => T;

// Warning: (ae-internal-missing-underscore) The name "seedableRNG" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function seedableRNG(seed: number): RNG<number>;

// Warning: (ae-forgotten-export) The symbol "Frame" needs to be exported by the entry point index.d.ts
// Warning: (ae-internal-missing-underscore) The name "stack" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal (undocumented)
export function stack(error: Error): Iterable<Frame>;

// Warning: (ae-internal-mixed-release-tag) Mixed release tags are not allowed for "test" because one of its declarations is marked as @internal
//
// @public (undocumented)
export function test<T = number>(name: string, assertion: (assert: Assertions, rng: RNG<T>, seed: number) => void | Promise<void>, controller?: Partial<Controller<T>>): Promise<void>;

// @internal (undocumented)
export function test<T = number>(name: string, assertion: (assert: Assertions, rng: RNG<T>, seed: number) => void | Promise<void>, notifier: Notifier, controller?: Partial<Controller<T>>): Promise<void>;

// (No @packageDocumentation comment for this package)

```
