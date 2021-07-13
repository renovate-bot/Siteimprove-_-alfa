## API Report File for "@siteimprove/alfa-functor"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Mapper } from '@siteimprove/alfa-mapper';

// @public (undocumented)
export interface Functor<T> {
    // (undocumented)
    map<U>(mapper: Mapper<T, U>): Functor<U>;
}

// @public (undocumented)
export namespace Functor {
    // (undocumented)
    export interface Invariant<T> {
        // (undocumented)
        contraMap<U>(mapper: Mapper<U, T>): Invariant<U>;
    }
}


// (No @packageDocumentation comment for this package)

```