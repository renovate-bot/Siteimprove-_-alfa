<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-bits](./alfa-bits.md) &gt; [Bits](./alfa-bits.bits_namespace.md) &gt; [popCount](./alfa-bits.bits_namespace.popcount_1_function.md)

## Bits.popCount() function

<b>Signature:</b>

```typescript
function popCount(bits: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  bits | number |  |

<b>Returns:</b>

number

## Remarks

This is a 32-bit variant of the 64-bit population count algorithm outlined on Wikipedia. Until ECMAScript natively provides an efficient population count algorithm, this is the best we can do.

[https://en.wikipedia.org/wiki/Hamming\_weight](https://en.wikipedia.org/wiki/Hamming_weight)
