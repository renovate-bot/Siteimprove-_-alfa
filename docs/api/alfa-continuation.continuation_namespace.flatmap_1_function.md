<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-continuation](./alfa-continuation.md) &gt; [Continuation](./alfa-continuation.continuation_namespace.md) &gt; [flatMap](./alfa-continuation.continuation_namespace.flatmap_1_function.md)

## Continuation.flatMap() function

<b>Signature:</b>

```typescript
function flatMap<T, U, R = void, A extends Array<unknown> = []>(continuation: Continuation<T, R, A>, mapper: Mapper<T, Continuation<U, R, A>>): Continuation<U, R, A>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  continuation | [Continuation](./alfa-continuation.continuation_typealias.md)<!-- -->&lt;T, R, A&gt; |  |
|  mapper | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;T, [Continuation](./alfa-continuation.continuation_typealias.md)<!-- -->&lt;U, R, A&gt;&gt; |  |

<b>Returns:</b>

[Continuation](./alfa-continuation.continuation_typealias.md)<!-- -->&lt;U, R, A&gt;
