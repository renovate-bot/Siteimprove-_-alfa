## API Report File for "@siteimprove/alfa-thunk"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Mapper } from '@siteimprove/alfa-mapper';
import { Reducer } from '@siteimprove/alfa-reducer';

// @public (undocumented)
export type Thunk<T = void> = () => T;

// @public (undocumented)
export namespace Thunk {
    // (undocumented)
    export function flatMap<T, U>(thunk: Thunk<T>, mapper: Mapper<T, Thunk<U>>): Thunk<U>;
    // (undocumented)
    export function map<T, U>(thunk: Thunk<T>, mapper: Mapper<T, U>): Thunk<U>;
    // (undocumented)
    export function of<T>(value: T): Thunk<T>;
    // (undocumented)
    export function reduce<T, U>(thunk: Thunk<T>, reducer: Reducer<T, U>, accumulator: U): U;
}


// (No @packageDocumentation comment for this package)

```