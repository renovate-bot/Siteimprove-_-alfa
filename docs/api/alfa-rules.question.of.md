<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-rules](./alfa-rules.md) &gt; [Question](./alfa-rules.question.md) &gt; [of](./alfa-rules.question.of.md)

## Question.of() function

**Signature:**

```typescript
export function of<S, U extends Uri = Uri>(uri: U, subject: S, message?: string, options?: act.Question.Options<Typeof<U>>): act.Question<TypeName<U>, S, S, Typeof<U>, Typeof<U>, U>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

uri


</td><td>

U


</td><td>


</td></tr>
<tr><td>

subject


</td><td>

S


</td><td>


</td></tr>
<tr><td>

message


</td><td>

string


</td><td>

_(Optional)_


</td></tr>
<tr><td>

options


</td><td>

[act.Question.Options](./alfa-act.question.options.md)<!-- -->&lt;Typeof&lt;U&gt;&gt;


</td><td>

_(Optional)_


</td></tr>
</tbody></table>

**Returns:**

[act.Question](./alfa-act.question.md)<!-- -->&lt;TypeName&lt;U&gt;, S, S, Typeof&lt;U&gt;, Typeof&lt;U&gt;, U&gt;

