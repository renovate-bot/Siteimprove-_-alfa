<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-comparable](./alfa-comparable.md) &gt; [Comparable](./alfa-comparable.comparable.md) &gt; [compareString](./alfa-comparable.comparable.comparestring.md)

## Comparable.compareString() function

**Signature:**

```typescript
function compareString(a: string, b: string): Comparison;
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

string


</td><td>


</td></tr>
<tr><td>

b


</td><td>

string


</td><td>


</td></tr>
</tbody></table>

**Returns:**

[Comparison](./alfa-comparable.comparison.md)

## Remarks

This should only be used in cases where branch mispredictions caused by the more general [Comparable.compare()](./alfa-comparable.comparable.compare.md) are undesired.

