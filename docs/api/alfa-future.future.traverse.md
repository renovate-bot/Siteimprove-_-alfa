<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-future](./alfa-future.md) &gt; [Future](./alfa-future.future.md) &gt; [traverse](./alfa-future.future.traverse.md)

## Future.traverse() function

**Signature:**

```typescript
function traverse<T, U>(values: Iterable<T>, mapper: Mapper<T, Future<U>, [index: number]>): Future<Iterable<U>>;
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

values


</td><td>

Iterable&lt;T&gt;


</td><td>


</td></tr>
<tr><td>

mapper


</td><td>

[Mapper](./alfa-mapper.mapper.md)<!-- -->&lt;T, [Future](./alfa-future.future.md)<!-- -->&lt;U&gt;, \[index: number\]&gt;


</td><td>


</td></tr>
</tbody></table>

**Returns:**

[Future](./alfa-future.future.md)<!-- -->&lt;Iterable&lt;U&gt;&gt;

