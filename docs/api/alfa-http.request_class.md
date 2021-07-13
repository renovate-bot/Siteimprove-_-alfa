<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@siteimprove/alfa-http](./alfa-http.md) &gt; [Request](./alfa-http.request_class.md)

## Request class

[https://fetch.spec.whatwg.org/\#request-class](https://fetch.spec.whatwg.org/#request-class)

<b>Signature:</b>

```typescript
export declare class Request implements Body, json.Serializable<Request.JSON>, earl.Serializable<Request.EARL> 
```
<b>Implements:</b> [Body](./alfa-http.body_interface.md)<!-- -->, json.[Serializable](./alfa-json.serializable_interface.md)<!-- -->&lt;[Request.JSON](./alfa-http.request_namespace.json_interface.md)<!-- -->&gt;, earl.[Serializable](./alfa-earl.serializable_interface.md)<!-- -->&lt;[Request.EARL](./alfa-http.request_namespace.earl_interface.md)<!-- -->&gt;

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [body](./alfa-http.request_class.body_property.md) |  | ArrayBuffer | [https://fetch.spec.whatwg.org/\#dom-body-body](https://fetch.spec.whatwg.org/#dom-body-body) |
|  [headers](./alfa-http.request_class.headers_property.md) |  | [Headers](./alfa-http.headers_class.md) | [https://fetch.spec.whatwg.org/\#dom-request-headers](https://fetch.spec.whatwg.org/#dom-request-headers) |
|  [method](./alfa-http.request_class.method_property.md) |  | string | [https://fetch.spec.whatwg.org/\#dom-request-method](https://fetch.spec.whatwg.org/#dom-request-method) |
|  [url](./alfa-http.request_class.url_property.md) |  | [URL](./alfa-url.url_class.md) | [https://fetch.spec.whatwg.org/\#dom-request-url](https://fetch.spec.whatwg.org/#dom-request-url) |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [empty()](./alfa-http.request_class.empty_1_method.md) | <code>static</code> |  |
|  [of(method, url, headers, body)](./alfa-http.request_class.of_1_method.md) | <code>static</code> |  |
|  [toEARL()](./alfa-http.request_class.toearl_1_method.md) |  |  |
|  [toJSON()](./alfa-http.request_class.tojson_1_method.md) |  |  |
|  [toString()](./alfa-http.request_class.tostring_1_method.md) |  |  |
