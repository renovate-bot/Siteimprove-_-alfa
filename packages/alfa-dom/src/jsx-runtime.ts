import { jsx as _jsx } from "./jsx";

import { Element } from "./node/element";

export import JSX = _jsx.JSX;

export function jsx(
  name: string,
  properties: _jsx.Properties & { children?: _jsx.Child }
): Element {
  const { children, ...rest } = properties;

  if (children === undefined) {
    return _jsx(name, rest);
  } else {
    return _jsx(name, rest, children);
  }
}

export function jsxs(
  name: string,
  properties: _jsx.Properties & { children?: Array<_jsx.Child> }
): Element {
  const { children, ...rest } = properties;

  if (children === undefined) {
    return _jsx(name, rest);
  } else {
    return _jsx(name, rest, ...children);
  }
}

export function jsxDEV(
  name: string,
  properties: _jsx.Properties & { children?: _jsx.Child | Array<_jsx.Child> }
): Element {
  const { children, ...rest } = properties;

  if (children === undefined) {
    return _jsx(name, rest);
  } else if (Array.isArray(children)) {
    return _jsx(name, rest, ...children);
  } else {
    return _jsx(name, rest, children);
  }
}