<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-xpath](./alfa-xpath.md) &gt; [Builder](./alfa-xpath.builder.md) &gt; [ContextItem\_base](./alfa-xpath.builder.contextitem_base.md)

## Builder.ContextItem\_base variable

**Signature:**

```typescript
ContextItem_base: {
        new (expression: Expression.ContextItem): {
            child(name?: string): Path;
            parent(name?: string): Path;
            descendant(name?: string): Path;
            ancestor(name?: string): Path;
            attribute(name?: string): Path;
            readonly expression: Expression.ContextItem;
            equals(value: unknown): value is /*elided*/ any;
            toJSON(): Builder.JSON;
            toString(): string;
        };
    }
```
