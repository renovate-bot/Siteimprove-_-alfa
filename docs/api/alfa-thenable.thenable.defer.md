<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-thenable](./alfa-thenable.md) &gt; [Thenable](./alfa-thenable.thenable.md) &gt; [defer](./alfa-thenable.thenable.defer.md)

## Thenable.defer() function

**Signature:**

```typescript
function defer<T, E = unknown>(continuation: Continuation<T, void, [reject: Callback<E>]>): Thenable<T, E>;
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

continuation


</td><td>

Continuation&lt;T, void, \[reject: Callback&lt;E&gt;\]&gt;


</td><td>


</td></tr>
</tbody></table>

**Returns:**

[Thenable](./alfa-thenable.thenable.md)<!-- -->&lt;T, E&gt;

