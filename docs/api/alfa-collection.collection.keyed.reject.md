<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-collection](./alfa-collection.md) &gt; [Collection](./alfa-collection.collection.md) &gt; [Keyed](./alfa-collection.collection.keyed.md) &gt; [reject](./alfa-collection.collection.keyed.reject.md)

## Collection.Keyed.reject() method

<b>Signature:</b>

```typescript
reject<U extends V>(refinement: Refinement<V, U, [key: K]>): Keyed<K, Exclude<V, U>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  refinement | [Refinement](./alfa-refinement.refinement.md)<!-- -->&lt;V, U, \[key: K\]&gt; |  |

<b>Returns:</b>

[Keyed](./alfa-collection.collection.keyed.md)<!-- -->&lt;K, Exclude&lt;V, U&gt;&gt;
