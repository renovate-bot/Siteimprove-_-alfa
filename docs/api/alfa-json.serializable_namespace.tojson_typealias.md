<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-json](./alfa-json.md) &gt; [Serializable](./alfa-json.serializable_namespace.md) &gt; [ToJSON](./alfa-json.serializable_namespace.tojson_typealias.md)

## Serializable.ToJSON type

<b>Signature:</b>

```typescript
type ToJSON<T> = T extends Serializable<infer U> ? U : T extends JSON ? T : JSON;
```
<b>References:</b> [Serializable](./alfa-json.serializable_interface.md)
