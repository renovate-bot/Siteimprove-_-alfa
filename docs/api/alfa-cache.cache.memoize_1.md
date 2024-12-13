<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-cache](./alfa-cache.md) &gt; [Cache](./alfa-cache.cache.md) &gt; [memoize](./alfa-cache.cache.memoize_1.md)

## Cache.memoize() function

Memoizes a function

**Signature:**

```typescript
function memoize<Args extends Array<Key>, Return>(target: (...args: Args) => Return): (...args: Args) => Return;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  target | (...args: Args) =&gt; Return |  |

**Returns:**

(...args: Args) =&gt; Return

## Remarks

When memoizing a recursive function, care must be taken to also memoize the recursive calls. This is best done by wrapping an anonymous function that recurses on the memoized function: `const foo = Cache.memoize(function (x: A): B { … foo(x2) … }`
