<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-style](./alfa-style.md) &gt; [Style](./alfa-style.style.md) &gt; [from](./alfa-style.style.from.md)

## Style.from() function

Build the style of an element.

**Signature:**

```typescript
function from(element: Element, device: Device, context?: Context): Style;
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

element


</td><td>

Element


</td><td>


</td></tr>
<tr><td>

device


</td><td>

Device


</td><td>


</td></tr>
<tr><td>

context


</td><td>

Context


</td><td>

_(Optional)_


</td></tr>
</tbody></table>

**Returns:**

[Style](./alfa-style.style.md)

## Remarks

This gather all style declarations that apply to the element, in decreasing precedence (according to cascade sort order) and delegate the rest of the work to `Style.of`<!-- -->.

