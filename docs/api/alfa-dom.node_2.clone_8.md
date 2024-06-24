<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-dom](./alfa-dom.md) &gt; [Node\_2](./alfa-dom.node_2.md) &gt; [clone](./alfa-dom.node_2.clone_8.md)

## Node\_2.clone() function

Creates a new `Node` instance with the same value as the original and deeply referentially non-equal. Optionally replaces child elements based on a predicate.

**Signature:**

```typescript
function clone(node: Node, options?: ElementReplacementOptions, device?: Device): Node;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  node | [Node](./alfa-dom.node_2.md) |  |
|  options | [ElementReplacementOptions](./alfa-dom.node_2.elementreplacementoptions.md) | _(Optional)_ |
|  device | Device | _(Optional)_ |

**Returns:**

[Node](./alfa-dom.node_2.md)

## Remarks

The clone will have the same `externalId` as the original. The clone will \*not\* get `extraData` from the original, instead it will be `undefined`<!-- -->.
