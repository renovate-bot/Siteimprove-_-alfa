<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-rng](./alfa-rng.md) &gt; [RNG](./alfa-rng.rng.md) &gt; [integer](./alfa-rng.rng.integer.md)

## RNG.integer() function

Seedable RNG returning an integer between 0 (included) and max (excluded).

**Signature:**

```typescript
function integer(max?: number, seed?: number): RNGFactory<number>;
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

max


</td><td>

number


</td><td>

_(Optional)_


</td></tr>
<tr><td>

seed


</td><td>

number


</td><td>

_(Optional)_


</td></tr>
</tbody></table>

**Returns:**

[RNGFactory](./alfa-rng.rngfactory.md)<!-- -->&lt;number&gt;

## Remarks

This RNG is decent but not crypto-safe.

