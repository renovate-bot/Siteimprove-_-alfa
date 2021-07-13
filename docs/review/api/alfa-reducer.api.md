## API Report File for "@siteimprove/alfa-reducer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export type Reducer<T, U = T, A extends Array<unknown> = []> = (accumulator: U, value: T, ...args: A) => U;

// @public (undocumented)
export namespace Reducer {
    // (undocumented)
    export function append<T>(): Reducer<T, Iterable<T>>;
    // (undocumented)
    export function concat<T>(): Reducer<Iterable<T>, Iterable<T>>;
}


// (No @packageDocumentation comment for this package)

```