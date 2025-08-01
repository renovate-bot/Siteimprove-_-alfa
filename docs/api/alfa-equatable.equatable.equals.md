<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-equatable](./alfa-equatable.md) &gt; [Equatable](./alfa-equatable.equatable.md) &gt; [equals](./alfa-equatable.equatable.equals.md)

## Equatable.equals() function

Check if two unknown values are equal.

**Signature:**

```typescript
function equals(a: unknown, b: unknown): boolean;
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

a


</td><td>

unknown


</td><td>


</td></tr>
<tr><td>

b


</td><td>

unknown


</td><td>


</td></tr>
</tbody></table>

**Returns:**

boolean

## Remarks

If either of the given values implement the [Equatable](./alfa-equatable.equatable.md) interface, the equivalence constraints of the value will be used. If not, strict equality will be used with the additional constraint that `NaN` is equal to itself.

