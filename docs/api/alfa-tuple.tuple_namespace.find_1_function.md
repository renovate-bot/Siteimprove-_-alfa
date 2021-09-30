<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-tuple](./alfa-tuple.md) &gt; [Tuple](./alfa-tuple.tuple_namespace.md) &gt; [find](./alfa-tuple.tuple_namespace.find_1_function.md)

## Tuple.find() function

<b>Signature:</b>

```typescript
export function find<T extends Tuple, U extends Item<T>>(tuple: T, refinement: Refinement<Item<T>, U, [index: number]>): Option<U>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tuple | T |  |
|  refinement | [Refinement](./alfa-refinement.refinement_typealias.md)<!-- -->&lt;[Item](./alfa-tuple.tuple_namespace.item_typealias.md)<!-- -->&lt;T&gt;, U, \[index: number\]&gt; |  |

<b>Returns:</b>

[Option](./alfa-option.option_interface.md)<!-- -->&lt;U&gt;
