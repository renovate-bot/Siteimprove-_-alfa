<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-act](./alfa-act.md) &gt; [Rule](./alfa-act.rule_class.md) &gt; [evaluate](./alfa-act.rule_class.evaluate_1_method.md)

## Rule.evaluate() method

<b>Signature:</b>

```typescript
evaluate(input: Readonly<I>, oracle?: Oracle<I, T, Q>, outcomes?: Cache): Future<Iterable<Outcome<I, T, Q>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  input | Readonly&lt;I&gt; |  |
|  oracle | [Oracle](./alfa-act.oracle_typealias.md)<!-- -->&lt;I, T, Q&gt; |  |
|  outcomes | [Cache](./alfa-act.cache_class.md) |  |

<b>Returns:</b>

[Future](./alfa-future.future_class.md)<!-- -->&lt;Iterable&lt;[Outcome](./alfa-act.outcome_class.md)<!-- -->&lt;I, T, Q&gt;&gt;&gt;
