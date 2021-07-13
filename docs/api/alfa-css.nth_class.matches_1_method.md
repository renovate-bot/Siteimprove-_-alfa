<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-css](./alfa-css.md) &gt; [Nth](./alfa-css.nth_class.md) &gt; [matches](./alfa-css.nth_class.matches_1_method.md)

## Nth.matches() method

Check if the given index matches the indices produced by this nth.

<b>Signature:</b>

```typescript
matches(index: number): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  index | number |  |

<b>Returns:</b>

boolean

## Remarks

This is checked by solving the equation `an + b = i` for `n`<!-- -->, giving us `n = (i - b) / a`<!-- -->. The index `i` is matched by this nth if the resulting `n` is a non-negative integer.
