<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-parser](./alfa-parser.md) &gt; [Parser](./alfa-parser.parser.md) &gt; [map](./alfa-parser.parser.map.md)

## Parser.map() function

<b>Signature:</b>

```typescript
function map<I, T, U, E, A extends Array<unknown> = []>(parser: Parser<I, T, E, A>, mapper: Mapper<T, U>): Parser<I, U, E, A>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parser | [Parser](./alfa-parser.parser.md)<!-- -->&lt;I, T, E, A&gt; |  |
|  mapper | [Mapper](./alfa-mapper.mapper.md)<!-- -->&lt;T, U&gt; |  |

<b>Returns:</b>

[Parser](./alfa-parser.parser.md)<!-- -->&lt;I, U, E, A&gt;
