<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-rules](./alfa-rules.md) &gt; [Question](./alfa-rules.question_namespace.md) &gt; [of](./alfa-rules.question_namespace.of_1_function.md)

## Question.of() function

<b>Signature:</b>

```typescript
function of<Q extends keyof Question, S>(uri: string, type: Q, subject: S, message: string): act.Question<Q, S, Question[Q]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  uri | string |  |
|  type | Q |  |
|  subject | S |  |
|  message | string |  |

<b>Returns:</b>

act.[Question](./alfa-act.question_class.md)<!-- -->&lt;Q, S, [Question](./alfa-rules.question_interface.md)<!-- -->\[Q\]&gt;
