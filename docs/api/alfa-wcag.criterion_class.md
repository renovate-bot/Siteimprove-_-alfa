<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-wcag](./alfa-wcag.md) &gt; [Criterion](./alfa-wcag.criterion_class.md)

## Criterion class


<b>Signature:</b>

```typescript
export declare class Criterion<C extends Criterion.Chapter = Criterion.Chapter> extends Requirement 
```
<b>Extends:</b> [Requirement](./alfa-act.requirement_class.md)

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [chapter](./alfa-wcag.criterion_class.chapter_property.md) |  | C | The chapter of this criterion. |
|  [level](./alfa-wcag.criterion_class.level_property.md) |  | [Branched](./alfa-branched.branched_class.md)<!-- -->&lt;[Criterion.Level](./alfa-wcag.criterion_namespace.level_typealias.md)<!-- -->, [Criterion.Version](./alfa-wcag.criterion_namespace.version_typealias.md)<!-- -->&gt; | The level of this criterion. |
|  [title](./alfa-wcag.criterion_class.title_property.md) |  | [Criterion.Title](./alfa-wcag.criterion_namespace.title_typealias.md)<!-- -->&lt;C&gt; | The title of this criterion. |
|  [uri](./alfa-wcag.criterion_class.uri_property.md) |  | [Criterion.URI](./alfa-wcag.criterion_namespace.uri_typealias.md)<!-- -->&lt;C, "2.1" \| "2.2"&gt; | The URI of this criterion. |
|  [versions](./alfa-wcag.criterion_class.versions_property.md) |  | Iterable&lt;[Criterion.Version](./alfa-wcag.criterion_namespace.version_typealias.md)<!-- -->&gt; | The versions in which this criterion is defined. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [of(chapter)](./alfa-wcag.criterion_class.of_1_method.md) | <code>static</code> |  |
|  [toEARL()](./alfa-wcag.criterion_class.toearl_1_method.md) |  |  |
|  [toJSON()](./alfa-wcag.criterion_class.tojson_1_method.md) |  |  |
