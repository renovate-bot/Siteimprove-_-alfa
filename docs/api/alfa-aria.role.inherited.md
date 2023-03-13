<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-aria](./alfa-aria.md) &gt; [Role](./alfa-aria.role.md) &gt; [Inherited](./alfa-aria.role.inherited.md)

## Role.Inherited type

The inherited roles for the specified role.

<b>Signature:</b>

```typescript
type Inherited<N extends Name> = N extends "roletype" | "none" ? never : Members<Roles[N]["inherited"]>;
```
<b>References:</b> [Name](./alfa-aria.role.name.md)
