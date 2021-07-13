<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-iterable](./alfa-iterable.md) &gt; [Iterable\_2](./alfa-iterable.iterable_2_namespace.md) &gt; [collectFirst](./alfa-iterable.iterable_2_namespace.collectfirst_1_function.md)

## Iterable\_2.collectFirst() function

<b>Signature:</b>

```typescript
function collectFirst<T, U>(iterable: Iterable<T>, mapper: Mapper<T, Option<U>, [index: number]>): Option<U>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  iterable | Iterable&lt;T&gt; |  |
|  mapper | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;T, [Option](./alfa-option.option_interface.md)<!-- -->&lt;U&gt;, \[index: number\]&gt; |  |

<b>Returns:</b>

[Option](./alfa-option.option_interface.md)<!-- -->&lt;U&gt;
