<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-aria](./alfa-aria.md) &gt; [Role](./alfa-aria.role.md) &gt; [isSubclassOf](./alfa-aria.role.issubclassof.md)

## Role.isSubclassOf() method

Check if this role is a subclass of the role with the specified name.

<b>Signature:</b>

```typescript
isSubclassOf<N extends Role.Name>(name: N): this is Role<Role.SubclassOf<N>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | N |  |

<b>Returns:</b>

this is [Role](./alfa-aria.role.md)<!-- -->&lt;[Role.SubclassOf](./alfa-aria.role.subclassof.md)<!-- -->&lt;N&gt;&gt;
