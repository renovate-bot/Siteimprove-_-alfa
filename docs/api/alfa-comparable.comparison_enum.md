<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-comparable](./alfa-comparable.md) &gt; [Comparison](./alfa-comparable.comparison_enum.md)

## Comparison enum

<b>Signature:</b>

```typescript
export declare enum Comparison 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  Equal | <code>0</code> |  |
|  Greater | <code>1</code> |  |
|  Less | <code>-1</code> |  |

## Remarks

Comparisons are limited to the range \[-1, 1\] in order to avoid the potential of over-/underflows when comparisons are implemented naively using subtractions, such `a - b`<!-- -->; this would not be allowed.
