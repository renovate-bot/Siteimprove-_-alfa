<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-tuple](./alfa-tuple.md) &gt; [Tuple](./alfa-tuple.tuple_namespace.md) &gt; [reduceUntil](./alfa-tuple.tuple_namespace.reduceuntil_1_function.md)

## Tuple.reduceUntil() function

<b>Signature:</b>

```typescript
export function reduceUntil<T extends Tuple, U>(tuple: T, predicate: Predicate<Item<T>, [index: number]>, reducer: Reducer<Item<T>, U, [index: number]>, accumulator: U): U;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tuple | T |  |
|  predicate | [Predicate](./alfa-predicate.predicate_typealias.md)<!-- -->&lt;[Item](./alfa-tuple.tuple_namespace.item_typealias.md)<!-- -->&lt;T&gt;, \[index: number\]&gt; |  |
|  reducer | [Reducer](./alfa-reducer.reducer_typealias.md)<!-- -->&lt;[Item](./alfa-tuple.tuple_namespace.item_typealias.md)<!-- -->&lt;T&gt;, U, \[index: number\]&gt; |  |
|  accumulator | U |  |

<b>Returns:</b>

U
