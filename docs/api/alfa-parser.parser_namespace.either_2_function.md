<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-parser](./alfa-parser.md) &gt; [Parser](./alfa-parser.parser_namespace.md) &gt; [either](./alfa-parser.parser_namespace.either_2_function.md)

## Parser.either() function

<b>Signature:</b>

```typescript
function either<I, T, E, A extends Array<unknown> = []>(left: Parser<I, T, E, A>, right: Parser<I, T, E, A>, ...rest: Array<Parser<I, T, E, A>>): Parser<I, T, E, A>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  left | [Parser](./alfa-parser.parser_typealias.md)<!-- -->&lt;I, T, E, A&gt; |  |
|  right | [Parser](./alfa-parser.parser_typealias.md)<!-- -->&lt;I, T, E, A&gt; |  |
|  rest | Array&lt;[Parser](./alfa-parser.parser_typealias.md)<!-- -->&lt;I, T, E, A&gt;&gt; |  |

<b>Returns:</b>

[Parser](./alfa-parser.parser_typealias.md)<!-- -->&lt;I, T, E, A&gt;
