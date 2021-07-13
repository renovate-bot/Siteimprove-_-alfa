<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-aria](./alfa-aria.md) &gt; [Role](./alfa-aria.role_class.md)

## Role class


<b>Signature:</b>

```typescript
export declare class Role<N extends Role.Name = Role.Name> implements Equatable, Hashable, Serializable 
```
<b>Implements:</b> [Equatable](./alfa-equatable.equatable_interface.md)<!-- -->, [Hashable](./alfa-hash.hashable_interface.md)<!-- -->, [Serializable](./alfa-json.serializable_interface.md)

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [attributes](./alfa-aria.role_class.attributes_property.md) |  | ReadonlyArray&lt;[Attribute.Name](./alfa-aria.attribute_namespace.name_typealias.md)<!-- -->&gt; | Get all attributes supported by this role and its inherited roles. |
|  [name](./alfa-aria.role_class.name_property.md) |  | N |  |
|  [requiredChildren](./alfa-aria.role_class.requiredchildren_property.md) |  | ReadonlyArray&lt;ReadonlyArray&lt;[Role.Name](./alfa-aria.role_namespace.name_typealias.md)<!-- -->&gt;&gt; | Get the required children of this role. |
|  [requiredParent](./alfa-aria.role_class.requiredparent_property.md) |  | ReadonlyArray&lt;ReadonlyArray&lt;[Role.Name](./alfa-aria.role_namespace.name_typealias.md)<!-- -->&gt;&gt; | Get the required parent of this role. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [equals(value)](./alfa-aria.role_class.equals_1_method.md) |  |  |
|  [hash(hash)](./alfa-aria.role_class.hash_1_method.md) |  |  |
|  [hasName(name)](./alfa-aria.role_class.hasname_1_method.md) |  | Check if this role has the specified name. |
|  [hasPresentationalChildren()](./alfa-aria.role_class.haspresentationalchildren_1_method.md) |  | Check if this role has presentational children. |
|  [hasRequiredChildren()](./alfa-aria.role_class.hasrequiredchildren_1_method.md) |  | Check if this role has required children. |
|  [hasRequiredParent()](./alfa-aria.role_class.hasrequiredparent_1_method.md) |  | Check if this role has a required parent. |
|  [implicitAttributeValue(name)](./alfa-aria.role_class.implicitattributevalue_1_method.md) |  | Get the implicit value of the specified attribute, if any. |
|  [is(name)](./alfa-aria.role_class.is_1_method.md) |  | Check if this role either is, or is a subclass of, the role with the specified name. |
|  [isAbstract()](./alfa-aria.role_class.isabstract_1_method.md) |  | Check if this role is abstract. |
|  [isAttributeRequired(name)](./alfa-aria.role_class.isattributerequired_1_method.md) |  | Check if this role requires the specified attribute. |
|  [isAttributeSupported(name)](./alfa-aria.role_class.isattributesupported_1_method.md) |  | Check if this role supports the specified attribute. |
|  [isConcrete()](./alfa-aria.role_class.isconcrete_1_method.md) |  | Check if this role is non-abstract. |
|  [isLandmark()](./alfa-aria.role_class.islandmark_1_method.md) |  | Check if this role is a landmark. |
|  [isNamedBy(method)](./alfa-aria.role_class.isnamedby_1_method.md) |  | Check if this role supports naming by the specified method. |
|  [isNameProhibited()](./alfa-aria.role_class.isnameprohibited_1_method.md) |  | Check if this role prohibits naming. |
|  [isPresentational()](./alfa-aria.role_class.ispresentational_1_method.md) |  | Check if this role is presentational. |
|  [isSubclassOf(name)](./alfa-aria.role_class.issubclassof_1_method.md) |  | Check if this role is a subclass of the role with the specified name. |
|  [isSuperclassOf(name)](./alfa-aria.role_class.issuperclassof_1_method.md) |  | Check if this role is a superclass of the role with the specified name. |
|  [isWidget()](./alfa-aria.role_class.iswidget_1_method.md) |  | Check if this role is a widget. |
|  [of(name)](./alfa-aria.role_class.of_1_method.md) | <code>static</code> |  |
|  [toJSON()](./alfa-aria.role_class.tojson_1_method.md) |  |  |
