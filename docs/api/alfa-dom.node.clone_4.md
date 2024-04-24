<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-dom](./alfa-dom.md) &gt; [Node](./alfa-dom.node.md) &gt; [clone](./alfa-dom.node.clone_4.md)

## Node.clone() function

Creates a new `Document` instance with the same value as the original and deeply referentially non-equal. Optionally replaces child elements based on a predicate.

**Signature:**

```typescript
function clone(node: Document, options?: ElementReplacementOptions, device?: Device): Document;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  node | Document |  |
|  options | [ElementReplacementOptions](./alfa-dom.node.elementreplacementoptions.md) | _(Optional)_ |
|  device | Device | _(Optional)_ |

**Returns:**

Document

## Remarks

The clone will have the same `externalId` as the original. The clone will \*not\* get `extraData` from the original, instead it will be `undefined`<!-- -->.
