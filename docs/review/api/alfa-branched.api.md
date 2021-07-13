## API Report File for "@siteimprove/alfa-branched"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Callback } from '@siteimprove/alfa-callback';
import { Collection } from '@siteimprove/alfa-collection';
import { Hash } from '@siteimprove/alfa-hash';
import { Iterable as Iterable_2 } from '@siteimprove/alfa-iterable';
import { Mapper } from '@siteimprove/alfa-mapper';
import { Option } from '@siteimprove/alfa-option';
import { Predicate } from '@siteimprove/alfa-predicate';
import { Reducer } from '@siteimprove/alfa-reducer';
import { Refinement } from '@siteimprove/alfa-refinement';
import { Serializable } from '@siteimprove/alfa-json';

// @public (undocumented)
export class Branched<T, B = never> implements Collection<T>, Iterable_2<[T, Iterable_2<B>]> {
    // (undocumented)
    [Symbol.iterator](): Iterator<[T, Iterable_2<B>]>;
    // (undocumented)
    apply<U>(mapper: Branched<Mapper<T, U>, B>): Branched<U, B>;
    // (undocumented)
    branch(value: T, ...branches: Array<B>): Branched<T, B>;
    // (undocumented)
    collect<U>(mapper: Mapper<T, Option<U>, [Iterable_2<B>]>): Branched<U, B>;
    // (undocumented)
    collectFirst<U>(mapper: Mapper<T, Option<U>, [Iterable_2<B>]>): Option<U>;
    // (undocumented)
    count(predicate: Predicate<T, [Iterable_2<B>]>): number;
    // (undocumented)
    distinct(): Branched<T, B>;
    // (undocumented)
    equals<T, B>(value: Branched<T, B>): boolean;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    every(predicate: Predicate<T, [Iterable_2<B>]>): boolean;
    // (undocumented)
    filter<U extends T>(refinement: Refinement<T, U, [Iterable_2<B>]>): Branched<U, B>;
    // (undocumented)
    filter(predicate: Predicate<T, [Iterable_2<B>]>): Branched<T, B>;
    // (undocumented)
    find<U extends T>(refinement: Refinement<T, U, [Iterable_2<B>]>): Option<U>;
    // (undocumented)
    find(predicate: Predicate<T, [Iterable_2<B>]>): Option<T>;
    // (undocumented)
    flatMap<U>(mapper: Mapper<T, Branched<U, B>, [Iterable_2<B>]>): Branched<U, B>;
    // (undocumented)
    forEach(callback: Callback<T, void, [Iterable_2<B>]>): void;
    // (undocumented)
    hash(hash: Hash): void;
    // (undocumented)
    includes(value: T): boolean;
    // (undocumented)
    isEmpty(): this is Branched<never, B>;
    // (undocumented)
    map<U>(mapper: Mapper<T, U, [Iterable_2<B>]>): Branched<U, B>;
    // (undocumented)
    none(predicate: Predicate<T, [Iterable_2<B>]>): boolean;
    // (undocumented)
    static of<T, B = never>(value: T, ...branches: Array<B>): Branched<T, B>;
    // (undocumented)
    reduce<U>(reducer: Reducer<T, U, [Iterable_2<B>]>, accumulator: U): U;
    // (undocumented)
    reject<U extends T>(refinement: Refinement<T, U, [Iterable_2<B>]>): Branched<Exclude<T, U>, B>;
    // (undocumented)
    reject(predicate: Predicate<T, [Iterable_2<B>]>): Branched<T, B>;
    // (undocumented)
    get size(): number;
    // (undocumented)
    some(predicate: Predicate<T, [Iterable_2<B>]>): boolean;
    // (undocumented)
    toArray(): Array<[T, Array<B>]>;
    // (undocumented)
    toJSON(): Branched.JSON<T, B>;
    }

// @public (undocumented)
export namespace Branched {
    // (undocumented)
    export function from<T, B = never>(values: Iterable_2<readonly [T, Iterable_2<B>]>): Branched<T, B>;
    // (undocumented)
    export function isBranched<T, B = never>(value: unknown): value is Branched<T, B>;
    // (undocumented)
    export type JSON<T, B = never> = Array<[
        Serializable.ToJSON<T>,
        Array<Serializable.ToJSON<B>>
    ]>;
    // (undocumented)
    export function sequence<T, B>(values: Iterable_2<Branched<T, B>>): Branched<Iterable_2<T>, B>;
    // (undocumented)
    export function traverse<T, U, B>(values: Iterable_2<T>, mapper: Mapper<T, Branched<U, B>, [index: number]>): Branched<Iterable_2<U>, B>;
}


// (No @packageDocumentation comment for this package)

```