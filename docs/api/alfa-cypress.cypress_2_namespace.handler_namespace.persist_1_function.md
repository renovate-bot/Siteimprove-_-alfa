<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-cypress](./alfa-cypress.md) &gt; [Cypress\_2](./alfa-cypress.cypress_2_namespace.md) &gt; [Handler](./alfa-cypress.cypress_2_namespace.handler_namespace.md) &gt; [persist](./alfa-cypress.cypress_2_namespace.handler_namespace.persist_1_function.md)

## Cypress\_2.Handler.persist() function

<b>Signature:</b>

```typescript
function persist<I, T, Q>(output: Mapper<I, string>, format?: Formatter<I, T, Q>): Handler<I, T, Q>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  output | [Mapper](./alfa-mapper.mapper_typealias.md)<!-- -->&lt;I, string&gt; |  |
|  format | [Formatter](./alfa-formatter.formatter_typealias.md)<!-- -->&lt;I, T, Q&gt; |  |

<b>Returns:</b>

[Handler](./alfa-assert.handler_interface.md)<!-- -->&lt;I, T, Q&gt;

## Remarks

Cypress has this rather odd model of relying on synchronously enqueued hooks and commands to provide a feeling of using a synchronous API. As the handler will run \_as part of\_ a command, this means that we can't register any additional commands when the handler runs; this must instead be handled beforehand. The handler therefore starts by registering an `after()` hook that will write any files collected during the test run \_after\_ the tests are done.
