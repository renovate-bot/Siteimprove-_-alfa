<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-css](./alfa-css.md) &gt; [Math\_2](./alfa-css.math_2.md) &gt; [resolve](./alfa-css.math_2.resolve_5.md)

## Math\_2.resolve() method

<b>Signature:</b>

```typescript
resolve<T extends Numeric = Percentage>(this: Math<"percentage">, resolver?: Expression.PercentageResolver<T>, hint?: T extends Angle ? "angle" : "length"): Result<T, string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  this | Math&lt;"percentage"&gt; |  |
|  resolver | Expression.PercentageResolver&lt;T&gt; | <i>(Optional)</i> |
|  hint | T extends Angle ? "angle" : "length" | <i>(Optional)</i> |

<b>Returns:</b>

[Result](./alfa-result.result.md)<!-- -->&lt;T, string&gt;
