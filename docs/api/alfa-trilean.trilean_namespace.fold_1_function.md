<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-trilean](./alfa-trilean.md) &gt; [Trilean](./alfa-trilean.trilean_namespace.md) &gt; [fold](./alfa-trilean.trilean_namespace.fold_1_function.md)

## Trilean.fold() function

<b>Signature:</b>

```typescript
function fold<T, A extends Array<unknown> = [], V = T, W = T, X = T>(predicate: Predicate<T, A>, ifTrue: Mapper<T, V>, ifFalse: Mapper<T, W>, ifUndefined: Mapper<T, X>, value: T, ...args: A): V | W | X;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  predicate | [Predicate](./alfa-trilean.trilean_namespace.predicate_typealias.md)<!-- -->&lt;T, A&gt; |  |
|  ifTrue | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;T, V&gt; |  |
|  ifFalse | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;T, W&gt; |  |
|  ifUndefined | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;T, X&gt; |  |
|  value | T |  |
|  args | A |  |

<b>Returns:</b>

V \| W \| X
