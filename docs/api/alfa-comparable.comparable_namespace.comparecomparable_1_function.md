<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-comparable](./alfa-comparable.md) &gt; [Comparable](./alfa-comparable.comparable_namespace.md) &gt; [compareComparable](./alfa-comparable.comparable_namespace.comparecomparable_1_function.md)

## Comparable.compareComparable() function

<b>Signature:</b>

```typescript
function compareComparable<T>(a: Comparable<T>, b: T): Comparison;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  a | [Comparable](./alfa-comparable.comparable_interface.md)<!-- -->&lt;T&gt; |  |
|  b | T |  |

<b>Returns:</b>

[Comparison](./alfa-comparable.comparison_enum.md)

## Remarks

This should only be used in cases where branch mispredictions caused by the more general [Comparable.compare()](./alfa-comparable.comparable_namespace.compare_5_function.md) are undesired.
