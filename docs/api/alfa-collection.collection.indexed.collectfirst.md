<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-collection](./alfa-collection.md) &gt; [Collection](./alfa-collection.collection.md) &gt; [Indexed](./alfa-collection.collection.indexed.md) &gt; [collectFirst](./alfa-collection.collection.indexed.collectfirst.md)

## Collection.Indexed.collectFirst() method

Applies an `Option` valued mapper to each item in the collection, unwrapping and returning the first `Some`

**Signature:**

```typescript
collectFirst<U>(mapper: Mapper<T, Option<U>, [index: number]>): Option<U>;
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

[Mapper](./alfa-mapper.mapper.md)<!-- -->&lt;T, Option&lt;U&gt;, \[index: number\]&gt;


</td><td>


</td></tr>
</tbody></table>

**Returns:**

Option&lt;U&gt;

