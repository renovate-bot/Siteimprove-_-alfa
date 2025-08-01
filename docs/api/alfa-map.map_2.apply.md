<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-map](./alfa-map.md) &gt; [Map\_2](./alfa-map.map_2.md) &gt; [apply](./alfa-map.map_2.apply.md)

## Map\_2.apply() method

Apply a map of functions to each corresponding value of this map.

**Signature:**

```typescript
apply<U>(mapper: Map<K, Mapper<V, U>>): Map<K, U>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

mapper


</td><td>

[Map](./alfa-map.map_2.md)<!-- -->&lt;K, [Mapper](./alfa-mapper.mapper.md)<!-- -->&lt;V, U&gt;&gt;


</td><td>


</td></tr>
</tbody></table>

**Returns:**

[Map](./alfa-map.map_2.md)<!-- -->&lt;K, U&gt;

## Remarks

Keys without a corresponding function or value are dropped from the resulting map.

## Example


```ts
Map.of(["a", 1], ["b", 2])
  .apply(Map.of(["a", (x) => x + 1], ["b", (x) => x * 2]))
  .toArray();
// => [["a", 2], ["b", 4]]
```

