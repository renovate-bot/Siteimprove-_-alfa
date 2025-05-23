<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-aria](./alfa-aria.md) &gt; [Node](./alfa-aria.node.md) &gt; [includeIgnored](./alfa-aria.node.includeignored.md)

## Node.includeIgnored variable

Traversal options to include ignored nodes in the traversal.

**Signature:**

```typescript
includeIgnored: {
        has(flag: 0 | 1 | "ignored"): boolean;
        isSet: (flag: 0 | 1 | "ignored") => boolean;
        add(...flags: import("@siteimprove/alfa-array").Array<0 | 1 | "ignored">): any;
        set: (...flags: import("@siteimprove/alfa-array").Array<0 | 1 | "ignored">) => any;
        remove(...flags: import("@siteimprove/alfa-array").Array<0 | 1 | "ignored">): any;
        unset: (...flags: import("@siteimprove/alfa-array").Array<0 | 1 | "ignored">) => any;
        is(...flags: import("@siteimprove/alfa-array").Array<0 | 1 | "ignored">): boolean;
        equals(value: any): boolean;
        equals(value: unknown): value is any;
        toString(): string;
        toJSON(): Flags.JSON<"ARIA traversal"> & {
            ignored: boolean;
        };
        readonly value: number;
        readonly kind: "ARIA traversal";
    } & {
        ignored: boolean;
    }
```
