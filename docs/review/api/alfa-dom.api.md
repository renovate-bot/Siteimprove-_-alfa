## API Report File for "@siteimprove/alfa-dom"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as earl from '@siteimprove/alfa-earl';
import { Equatable } from '@siteimprove/alfa-equatable';
import { Iterable as Iterable_2 } from '@siteimprove/alfa-iterable';
import * as json from '@siteimprove/alfa-json';
import { Option } from '@siteimprove/alfa-option';
import { Predicate } from '@siteimprove/alfa-predicate';
import { Refinement } from '@siteimprove/alfa-refinement';
import * as sarif from '@siteimprove/alfa-sarif';
import { Sequence } from '@siteimprove/alfa-sequence';
import { Serializable } from '@siteimprove/alfa-json';
import { Trampoline } from '@siteimprove/alfa-trampoline';

// @public (undocumented)
export class Attribute extends Node {
    // @internal (undocumented)
    _attachOwner(owner: Element): boolean;
    // @internal (undocumented)
    _attachParent(): boolean;
    // (undocumented)
    enumerate(): Option<string>;
    // (undocumented)
    enumerate<T extends string>(valid: T, ...rest: Array<T>): Option<T>;
    // (undocumented)
    isBoolean(): boolean;
    // (undocumented)
    get name(): string;
    // (undocumented)
    get namespace(): Option<Namespace>;
    // (undocumented)
    static of(namespace: Option<Namespace>, prefix: Option<string>, name: string, value: string): Attribute;
    // (undocumented)
    get owner(): Option<Element>;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    get prefix(): Option<string>;
    // (undocumented)
    get qualifiedName(): string;
    // (undocumented)
    toJSON(): Attribute.JSON;
    // (undocumented)
    tokens(separator?: string | RegExp): Sequence<string>;
    // (undocumented)
    toString(): string;
    // (undocumented)
    get value(): string;
}

// @public (undocumented)
export namespace Attribute {
    // @internal
    export function foldCase(name: string, owner: Option<Element>): string;
    // @internal (undocumented)
    export function fromAttribute(attribute: JSON): Trampoline<Attribute>;
    // (undocumented)
    export function isAttribute(value: unknown): value is Attribute;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        name: string;
        // (undocumented)
        namespace: string | null;
        // (undocumented)
        prefix: string | null;
        // (undocumented)
        type: "attribute";
        // (undocumented)
        value: string;
    }
    const // Warning: (ae-forgotten-export) The symbol "predicate" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    hasName: typeof predicate.hasName;
}

// @public (undocumented)
export class Block implements Iterable<Declaration>, Equatable, Serializable {
    // (undocumented)
    [Symbol.iterator](): Iterator<Declaration>;
    // (undocumented)
    declaration(predicate: string | Predicate<Declaration>): Option<Declaration>;
    // (undocumented)
    get declarations(): Iterable<Declaration>;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    isEmpty(): boolean;
    // (undocumented)
    static of(declarations: Iterable<Declaration>): Block;
    // (undocumented)
    get size(): number;
    // (undocumented)
    toJSON(): Block.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Block {
    // (undocumented)
    export function from(json: JSON): Block;
    // (undocumented)
    export type JSON = Array<Declaration.JSON>;
}

// @public (undocumented)
export class Comment extends Node {
    // (undocumented)
    get data(): string;
    // (undocumented)
    static empty(): Comment;
    // (undocumented)
    static of(data: string): Comment;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    toJSON(): Comment.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Comment {
    // @internal (undocumented)
    export function fromComment(json: JSON): Trampoline<Comment>;
    // (undocumented)
    export function isComment(value: unknown): value is Comment;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        data: string;
        // (undocumented)
        type: "comment";
    }
}

// @public (undocumented)
export abstract class ConditionRule extends GroupingRule {
    protected constructor(condition: string, rules: Array<Rule>);
    // (undocumented)
    get condition(): string;
    // (undocumented)
    protected readonly _condition: string;
    // (undocumented)
    abstract toJSON(): ConditionRule.JSON;
}

// @public (undocumented)
export namespace ConditionRule {
    // (undocumented)
    export function isConditionRule(value: unknown): value is ConditionRule;
    // (undocumented)
    export interface JSON extends GroupingRule.JSON {
        // (undocumented)
        condition: string;
    }
}

// @public (undocumented)
export class Declaration implements Equatable, Serializable {
    // (undocumented)
    ancestors(): Iterable<Rule>;
    // @internal (undocumented)
    _attachParent(parent: Rule): boolean;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    get important(): boolean;
    // (undocumented)
    get name(): string;
    // (undocumented)
    static of(name: string, value: string, important?: boolean): Declaration;
    // (undocumented)
    get parent(): Option<Rule>;
    // (undocumented)
    toJSON(): Declaration.JSON;
    // (undocumented)
    toString(): string;
    // (undocumented)
    get value(): string;
}

// @public (undocumented)
export namespace Declaration {
    // (undocumented)
    export function from(json: JSON): Declaration;
    // (undocumented)
    export interface JSON {
        // (undocumented)
        [key: string]: json.JSON;
        // (undocumented)
        important: boolean;
        // (undocumented)
        name: string;
        // (undocumented)
        value: string;
    }
}

// @public (undocumented)
export class Document extends Node {
    // @internal (undocumented)
    _attachFrame(frame: Element): boolean;
    // @internal (undocumented)
    _attachParent(): boolean;
    // (undocumented)
    static empty(): Document;
    // (undocumented)
    get frame(): Option<Element>;
    // (undocumented)
    static of(children: Iterable<Node>, style?: Iterable<Sheet>): Document;
    // (undocumented)
    parent(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    get style(): Iterable<Sheet>;
    // (undocumented)
    toJSON(): Document.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Document {
    // @internal (undocumented)
    export function fromDocument(json: JSON): Trampoline<Document>;
    // (undocumented)
    export function isDocument(value: unknown): value is Document;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        children: Array<Node.JSON>;
        // (undocumented)
        style: Array<Sheet.JSON>;
        // (undocumented)
        type: "document";
    }
}

// @public (undocumented)
export class Element extends Node implements Slot, Slotable {
    // (undocumented)
    assignedNodes(): Iterable_2<Slotable>;
    // (undocumented)
    assignedSlot(): Option<Slot>;
    // @internal (undocumented)
    _attachContent(document: Document): boolean;
    // @internal (undocumented)
    _attachShadow(shadow: Shadow): boolean;
    // (undocumented)
    attribute(predicate: string | Predicate<Attribute>): Option<Attribute>;
    // (undocumented)
    get attributes(): Iterable_2<Attribute>;
    // (undocumented)
    children(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    get classes(): Iterable_2<string>;
    // (undocumented)
    get content(): Option<Document>;
    // (undocumented)
    get id(): Option<string>;
    // (undocumented)
    isVoid(): boolean;
    // (undocumented)
    get name(): string;
    // (undocumented)
    get namespace(): Option<Namespace>;
    // (undocumented)
    static of(namespace: Option<Namespace>, prefix: Option<string>, name: string, attributes?: Iterable_2<Attribute>, children?: Iterable_2<Node>, style?: Option<Block>): Element;
    // (undocumented)
    parent(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    get prefix(): Option<string>;
    // (undocumented)
    get qualifiedName(): string;
    // (undocumented)
    get shadow(): Option<Shadow>;
    // (undocumented)
    get style(): Option<Block>;
    // (undocumented)
    tabIndex(): Option<number>;
    // (undocumented)
    toJSON(): Element.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Element {
    // @internal (undocumented)
    export function fromElement(json: JSON): Trampoline<Element>;
    // (undocumented)
    export function isElement(value: unknown): value is Element;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        attributes: Array<Attribute.JSON>;
        // (undocumented)
        children: Array<Node.JSON>;
        // (undocumented)
        content: Document.JSON | null;
        // (undocumented)
        name: string;
        // (undocumented)
        namespace: string | null;
        // (undocumented)
        prefix: string | null;
        // (undocumented)
        shadow: Shadow.JSON | null;
        // (undocumented)
        style: Block.JSON | null;
        // (undocumented)
        type: "element";
    }
    const // Warning: (ae-forgotten-export) The symbol "predicate" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    hasId: typeof predicate_2.hasId, // (undocumented)
    hasInputType: typeof predicate_2.hasInputType, // (undocumented)
    hasName: typeof predicate_2.hasName, // (undocumented)
    hasNamespace: typeof predicate_2.hasNamespace, // (undocumented)
    hasTabIndex: typeof predicate_2.hasTabIndex, // (undocumented)
    isBrowsingContextContainer: typeof predicate_2.isBrowsingContextContainer, // (undocumented)
    isDisabled: typeof predicate_2.isDisabled, // (undocumented)
    isDraggable: typeof predicate_2.isDraggable, // (undocumented)
    isEditingHost: typeof predicate_2.isEditingHost, // (undocumented)
    isSuggestedFocusable: typeof predicate_2.isSuggestedFocusable;
}

// @public (undocumented)
export class FontFaceRule extends Rule {
    // (undocumented)
    static of(declarations: Iterable<Declaration>): FontFaceRule;
    // (undocumented)
    get style(): Block;
    // (undocumented)
    toJSON(): FontFaceRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace FontFaceRule {
    // @internal (undocumented)
    export function fromFontFaceRule(json: JSON): Trampoline<FontFaceRule>;
    // (undocumented)
    export function isFontFaceRule(value: unknown): value is FontFaceRule;
    // (undocumented)
    export interface JSON {
        // (undocumented)
        [key: string]: json.JSON;
        // (undocumented)
        style: Block.JSON;
        // (undocumented)
        type: "font-face";
    }
}

// @public (undocumented)
export class Fragment extends Node {
    // @internal (undocumented)
    _attachParent(): boolean;
    // (undocumented)
    static empty(): Fragment;
    // (undocumented)
    static of(children: Iterable<Node>): Fragment;
    // (undocumented)
    path(): string;
    // (undocumented)
    toJSON(): Fragment.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Fragment {
    // @internal (undocumented)
    export function fromFragment(json: JSON): Trampoline<Fragment>;
    // (undocumented)
    export function isFragment(value: unknown): value is Fragment;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        children: Array<Node.JSON>;
        // (undocumented)
        type: "fragment";
    }
}

// @public (undocumented)
export abstract class GroupingRule extends Rule {
    protected constructor(rules: Array<Rule>);
    // (undocumented)
    children(): Iterable<Rule>;
    // (undocumented)
    get rules(): Iterable<Rule>;
    // (undocumented)
    protected readonly _rules: Array<Rule>;
    // (undocumented)
    abstract toJSON(): GroupingRule.JSON;
}

// @public (undocumented)
export namespace GroupingRule {
    // (undocumented)
    export function isGroupingRule(value: unknown): value is GroupingRule;
    // (undocumented)
    export interface JSON extends Rule.JSON {
        // (undocumented)
        rules: Array<Rule.JSON>;
    }
}

// @public (undocumented)
export function h(name: string, attributes?: Array<Attribute> | Record<string, string | boolean>, children?: Array<Node | string>, style?: Array<Declaration> | Record<string, string>): Element;

// @public (undocumented)
export namespace h {
    // (undocumented)
    export function attribute(name: string, value: string): Attribute;
    // (undocumented)
    export function block(declarations: Array<Declaration> | Record<string, string>): Block;
    // (undocumented)
    export function declaration(name: string, value: string, important?: boolean): Declaration;
    // (undocumented)
    export function document(children: Array<Node | string>, style?: Array<Sheet>): Document;
    // (undocumented)
    export function element(name: string, attributes?: Array<Attribute> | Record<string, string | boolean>, children?: Array<Node | string>, style?: Array<Declaration> | Record<string, string>): Element;
    // (undocumented)
    export function fragment(children: Array<Node | string>): Fragment;
    // (undocumented)
    export namespace rule {
        // (undocumented)
        export function fontFace(declarations: Array<Declaration> | Record<string, string>): FontFaceRule;
        // (undocumented)
        export function keyframe(key: string, declarations: Array<Declaration> | Record<string, string>): KeyframeRule;
        // (undocumented)
        export function keyframes(name: string, rules: Array<Rule>): KeyframesRule;
        // (undocumented)
        export function media(condition: string, rules: Array<Rule>): MediaRule;
        // (undocumented)
        export function namespace(namespace: string, prefix?: string): NamespaceRule;
        // (undocumented)
        export function page(selector: string, declarations: Array<Declaration> | Record<string, string>): PageRule;
        // (undocumented)
        export function style(selector: string, declarations: Array<Declaration> | Record<string, string>, hint?: boolean): StyleRule;
        // (undocumented)
        export function supports(condition: string, rules: Array<Rule>): SupportsRule;
    }
    // (undocumented)
    export function shadow(children: Array<Node | string>, style?: Array<Sheet>, mode?: Shadow.Mode): Shadow;
    // (undocumented)
    export function sheet(rules: Array<Rule>, disabled?: boolean, condition?: string): Sheet;
    // (undocumented)
    export function text(data: string): Text;
    // (undocumented)
    export function type(name: string, publicId?: string, systemId?: string): Type;
}

// @public (undocumented)
function hasId(predicate: Predicate<string>): Predicate<Element>;

// @public (undocumented)
function hasId(id: string, ...rest: Array<string>): Predicate<Element>;

// Warning: (ae-forgotten-export) The symbol "InputType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
function hasInputType(predicate: Predicate<InputType>): Predicate<Element>;

// @public (undocumented)
function hasInputType(inputType: InputType, ...rest: Array<InputType>): Predicate<Element>;

// @public (undocumented)
function hasName(predicate: Predicate<string>): Predicate<Attribute>;

// @public (undocumented)
function hasName(name: string, ...rest: Array<string>): Predicate<Attribute>;

// @public (undocumented)
function hasName_2(predicate: Predicate<string>): Predicate<Element>;

// @public (undocumented)
function hasName_2(name: string, ...rest: Array<string>): Predicate<Element>;

// @public (undocumented)
function hasNamespace(predicate: Predicate<Namespace>): Predicate<Element>;

// @public (undocumented)
function hasNamespace(namespace: Namespace, ...rest: Array<Namespace>): Predicate<Element>;

// @public (undocumented)
function hasTabIndex(predicate?: Predicate<number>): Predicate<Element>;

// @public (undocumented)
export class ImportRule extends ConditionRule {
    // (undocumented)
    get href(): string;
    // (undocumented)
    static of(href: string, sheet: Sheet, condition?: Option<string>): ImportRule;
    // (undocumented)
    get rules(): Iterable<Rule>;
    // (undocumented)
    get sheet(): Sheet;
    // (undocumented)
    toJSON(): ImportRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace ImportRule {
    // @internal (undocumented)
    export function fromImportRule(json: JSON): Trampoline<ImportRule>;
    // (undocumented)
    export function isImportRule(value: unknown): value is ImportRule;
    // (undocumented)
    export interface JSON extends ConditionRule.JSON {
        // (undocumented)
        href: string;
        // (undocumented)
        type: "import";
    }
}

// @public (undocumented)
function isBrowsingContextContainer(element: Element): boolean;

// @public (undocumented)
function isDisabled(element: Element): boolean;

// @public (undocumented)
function isDraggable(element: Element): boolean;

// @public (undocumented)
function isEditingHost(element: Element): boolean;

// @public (undocumented)
function isSuggestedFocusable(element: Element): boolean;

// @public (undocumented)
export function jsx(name: string, properties?: jsx.Properties | null, ...children: jsx.Children): Element;

// @public (undocumented)
export namespace jsx {
    // (undocumented)
    export type Child = Node | string;
    // (undocumented)
    export type Children = (Child | Children)[];
    // (undocumented)
    export namespace JSX {
        // Warning: (ae-forgotten-export) The symbol "dom" needs to be exported by the entry point index.d.ts
        //
        // (undocumented)
        export type Element = dom.Element;
        // (undocumented)
        export interface IntrinsicElements {
            // (undocumented)
            [tag: string]: Properties;
        }
    }
    // (undocumented)
    export interface Properties {
        // (undocumented)
        [name: string]: unknown;
        style?: Record<string, string>;
    }
}

// @public (undocumented)
export class KeyframeRule extends Rule {
    // (undocumented)
    get key(): string;
    // (undocumented)
    static of(key: string, declarations: Iterable<Declaration>): KeyframeRule;
    // (undocumented)
    get style(): Block;
    // (undocumented)
    toJSON(): KeyframeRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace KeyframeRule {
    // @internal (undocumented)
    export function fromKeyframeRule(json: JSON): Trampoline<KeyframeRule>;
    // (undocumented)
    export function isKeyframeRule(value: unknown): value is KeyframeRule;
    // (undocumented)
    export interface JSON extends Rule.JSON {
        // (undocumented)
        key: string;
        // (undocumented)
        style: Block.JSON;
        // (undocumented)
        type: "keyframe";
    }
}

// @public (undocumented)
export class KeyframesRule extends GroupingRule {
    // (undocumented)
    get name(): string;
    // (undocumented)
    static of(name: string, rules: Iterable<Rule>): KeyframesRule;
    // (undocumented)
    toJSON(): KeyframesRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace KeyframesRule {
    // @internal (undocumented)
    export function fromKeyframesRule(json: JSON): Trampoline<KeyframesRule>;
    // (undocumented)
    export function isKeyframesRule(value: unknown): value is KeyframesRule;
    // (undocumented)
    export interface JSON extends GroupingRule.JSON {
        // (undocumented)
        name: string;
        // (undocumented)
        type: "keyframes";
    }
}

// @public (undocumented)
export class MediaRule extends ConditionRule {
    // (undocumented)
    static of(condition: string, rules: Iterable_2<Rule>): MediaRule;
    // (undocumented)
    toJSON(): MediaRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace MediaRule {
    // @internal (undocumented)
    export function fromMediaRule(json: JSON): Trampoline<MediaRule>;
    // (undocumented)
    export function isMediaRule(value: unknown): value is MediaRule;
    // (undocumented)
    export interface JSON extends ConditionRule.JSON {
        // (undocumented)
        type: "media";
    }
}

// @public (undocumented)
export enum Namespace {
    // (undocumented)
    HTML = "http://www.w3.org/1999/xhtml",
    // (undocumented)
    MathML = "http://www.w3.org/1998/Math/MathML",
    // (undocumented)
    SVG = "http://www.w3.org/2000/svg",
    // (undocumented)
    XLink = "http://www.w3.org/1999/xlink",
    // (undocumented)
    XML = "http://www.w3.org/XML/1998/namespace",
    // (undocumented)
    XMLNS = "http://www.w3.org/2000/xmlns/"
}

// @public (undocumented)
export namespace Namespace {
    // (undocumented)
    export function isNamespace(value: string): value is Namespace;
}

// @public (undocumented)
export class NamespaceRule extends Rule {
    // (undocumented)
    get namespace(): string;
    // (undocumented)
    static of(namespace: string, prefix: Option<string>): NamespaceRule;
    // (undocumented)
    get prefix(): Option<string>;
    // (undocumented)
    toJSON(): NamespaceRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace NamespaceRule {
    // @internal (undocumented)
    export function fromNamespaceRule(json: JSON): Trampoline<NamespaceRule>;
    // (undocumented)
    export function isNamespaceRule(value: unknown): value is NamespaceRule;
    // (undocumented)
    export interface JSON extends Rule.JSON {
        // (undocumented)
        namespace: string;
        // (undocumented)
        prefix: string | null;
        // (undocumented)
        type: "namespace";
    }
}

// @public (undocumented)
export abstract class Node implements Iterable<Node>, Equatable, json.Serializable<Node.JSON>, earl.Serializable<Node.EARL>, sarif.Serializable<sarif.Location> {
    // (undocumented)
    [Symbol.iterator](): Iterator<Node>;
    protected constructor(children: Array<Node>);
    // (undocumented)
    ancestors(options?: Node.Traversal): Sequence<Node>;
    // @internal (undocumented)
    _attachParent(parent: Node): boolean;
    // (undocumented)
    children(_?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    protected readonly _children: Array<Node>;
    // (undocumented)
    closest<T extends Node>(refinement: Refinement<Node, T>, options?: Node.Traversal): Option<T>;
    // (undocumented)
    closest(predicate: Predicate<Node>, options?: Node.Traversal): Option<Node>;
    // (undocumented)
    descendants(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    equals(value: Node): boolean;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    first(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    following(options?: Node.Traversal): Sequence<Node>;
    freeze(): this;
    // (undocumented)
    get frozen(): boolean;
    protected _frozen: boolean;
    // (undocumented)
    inclusiveAncestors(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    inclusiveDescendants(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    inclusiveSiblings(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    index(options?: Node.Traversal): number;
    // (undocumented)
    last(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    next(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    parent(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    protected _parent: Option<Node>;
    path(options?: Node.Traversal): string;
    // (undocumented)
    preceding(options?: Node.Traversal): Sequence<Node>;
    // (undocumented)
    previous(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    root(options?: Node.Traversal): Node;
    // (undocumented)
    siblings(options?: Node.Traversal): Sequence<Node>;
    tabOrder(): Sequence<Element>;
    // (undocumented)
    textContent(options?: Node.Traversal): string;
    // (undocumented)
    toEARL(): Node.EARL;
    // (undocumented)
    abstract toJSON(): Node.JSON;
    // (undocumented)
    toSARIF(): sarif.Location;
}

// @public (undocumented)
export namespace Node {
    // (undocumented)
    export interface EARL extends earl.EARL {
        // (undocumented)
        "@context": {
            ptr: "http://www.w3.org/2009/pointers#";
        };
        // (undocumented)
        "@type": [
        "ptr:Pointer",
        "ptr:SinglePointer",
        "ptr:ExpressionPointer",
        "ptr:XPathPointer"
        ];
        // (undocumented)
        "ptr:expression": string;
        // (undocumented)
        "ptr:reference"?: {
            "@id": string;
        };
    }
    // (undocumented)
    export function from(json: Element.JSON): Element;
    // (undocumented)
    export function from(json: Attribute.JSON): Attribute;
    // (undocumented)
    export function from(json: Text.JSON): Text;
    // (undocumented)
    export function from(json: Comment.JSON): Comment;
    // (undocumented)
    export function from(json: Document.JSON): Document;
    // (undocumented)
    export function from(json: Type.JSON): Document;
    // (undocumented)
    export function from(json: Fragment.JSON): Fragment;
    // (undocumented)
    export function from(json: JSON): Node;
    // @internal (undocumented)
    export function fromNode(json: JSON): Trampoline<Node>;
    // (undocumented)
    export function isNode(value: unknown): value is Node;
    // (undocumented)
    export interface JSON {
        // (undocumented)
        [key: string]: json.JSON;
        // (undocumented)
        type: string;
    }
    // (undocumented)
    export interface Traversal {
        readonly composed?: boolean;
        readonly flattened?: boolean;
        readonly nested?: boolean;
    }
}

// @public (undocumented)
export class PageRule extends Rule {
    // (undocumented)
    static of(selector: string, declarations: Iterable<Declaration>): PageRule;
    // (undocumented)
    get selector(): string;
    // (undocumented)
    get style(): Block;
    // (undocumented)
    toJSON(): PageRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace PageRule {
    // @internal (undocumented)
    export function fromPageRule(json: JSON): Trampoline<PageRule>;
    // (undocumented)
    export function isPageRule(value: unknown): value is PageRule;
    // (undocumented)
    export interface JSON extends Rule.JSON {
        // (undocumented)
        selector: string;
        // (undocumented)
        style: Block.JSON;
        // (undocumented)
        type: "page";
    }
}

// @public (undocumented)
export abstract class Rule implements Equatable, Serializable {
    protected constructor();
    // (undocumented)
    ancestors(): Iterable<Rule>;
    // @internal (undocumented)
    _attachOwner(owner: Sheet): boolean;
    // @internal (undocumented)
    _attachParent(parent: Rule): boolean;
    // (undocumented)
    children(): Iterable<Rule>;
    // (undocumented)
    descendants(): Iterable<Rule>;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    get owner(): Option<Sheet>;
    // (undocumented)
    protected _owner: Option<Sheet>;
    // (undocumented)
    get parent(): Option<Rule>;
    // (undocumented)
    protected _parent: Option<Rule>;
    // (undocumented)
    abstract toJSON(): Rule.JSON;
}

// @public (undocumented)
export namespace Rule {
    // (undocumented)
    export function from(json: StyleRule.JSON): StyleRule;
    // (undocumented)
    export function from(json: ImportRule.JSON): ImportRule;
    // (undocumented)
    export function from(json: MediaRule.JSON): MediaRule;
    // (undocumented)
    export function from(json: FontFaceRule.JSON): FontFaceRule;
    // (undocumented)
    export function from(json: PageRule.JSON): PageRule;
    // (undocumented)
    export function from(json: KeyframeRule.JSON): KeyframeRule;
    // (undocumented)
    export function from(json: KeyframesRule.JSON): KeyframesRule;
    // (undocumented)
    export function from(json: NamespaceRule.JSON): NamespaceRule;
    // (undocumented)
    export function from(json: SupportsRule.JSON): SupportsRule;
    // (undocumented)
    export function from(json: JSON): Rule;
    // @internal (undocumented)
    export function fromRule(json: JSON): Trampoline<Rule>;
    // (undocumented)
    export interface JSON {
        // (undocumented)
        [key: string]: json.JSON;
        // (undocumented)
        type: string;
    }
}

// @public (undocumented)
export class Shadow extends Node {
    // @internal (undocumented)
    _attachHost(host: Element): boolean;
    // @internal (undocumented)
    _attachParent(): boolean;
    // (undocumented)
    static empty(): Shadow;
    // (undocumented)
    get host(): Option<Element>;
    // (undocumented)
    get mode(): Shadow.Mode;
    // (undocumented)
    static of(children: Iterable<Node>, style?: Iterable<Sheet>, mode?: Shadow.Mode): Shadow;
    // (undocumented)
    parent(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    get style(): Iterable<Sheet>;
    // (undocumented)
    toJSON(): Shadow.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Shadow {
    // @internal (undocumented)
    export function fromShadow(json: JSON): Trampoline<Shadow>;
    // (undocumented)
    export function isShadow(value: unknown): value is Shadow;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        children: Array<Node.JSON>;
        // (undocumented)
        mode: string;
        // (undocumented)
        style: Array<Sheet.JSON>;
        // (undocumented)
        type: "shadow";
    }
    // (undocumented)
    export enum Mode {
        // (undocumented)
        Closed = "closed",
        // (undocumented)
        Open = "open"
    }
}

// @public (undocumented)
export class Sheet implements Equatable, Serializable {
    // (undocumented)
    children(): Iterable<Rule>;
    // (undocumented)
    get condition(): Option<string>;
    // (undocumented)
    descendants(): Iterable<Rule>;
    // (undocumented)
    get disabled(): boolean;
    // (undocumented)
    static empty(): Sheet;
    // (undocumented)
    equals(value: unknown): value is this;
    // (undocumented)
    static of(rules: Iterable<Rule>, disabled?: boolean, condition?: Option<string>): Sheet;
    // (undocumented)
    get rules(): Iterable<Rule>;
    // (undocumented)
    toJSON(): Sheet.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Sheet {
    // (undocumented)
    export function from(json: JSON): Sheet;
    // (undocumented)
    export interface JSON {
        // (undocumented)
        [key: string]: json.JSON;
        // (undocumented)
        condition: string | null;
        // (undocumented)
        disabled: boolean;
        // (undocumented)
        rules: Array<Rule.JSON>;
    }
}

// @public (undocumented)
export interface Slot extends Element {
    assignedNodes(): Iterable<Slotable>;
}

// @public (undocumented)
export namespace Slot {
    // (undocumented)
    export function findSlotables(slot: Slot): Iterable<Slotable>;
    // (undocumented)
    export function isSlot(element: Element): boolean;
    // (undocumented)
    export function isSlot(value: unknown): value is Slot;
    // (undocumented)
    export function name(slot: Slot): string;
}

// @public (undocumented)
export interface Slotable extends Node {
    assignedSlot(): Option<Slot>;
}

// @public (undocumented)
export namespace Slotable {
    // (undocumented)
    export function findSlot(slotable: Slotable): Option<Slot>;
    // (undocumented)
    export function isSlotable(value: unknown): value is Slotable;
    // (undocumented)
    export function name(slotable: Slotable): string;
}

// @public (undocumented)
export class StyleRule extends Rule {
    // (undocumented)
    get hint(): boolean;
    // (undocumented)
    static of(selector: string, declarations: Iterable<Declaration>, hint?: boolean): StyleRule;
    // (undocumented)
    get selector(): string;
    // (undocumented)
    get style(): Block;
    // (undocumented)
    toJSON(): StyleRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace StyleRule {
    // @internal (undocumented)
    export function fromStyleRule(json: JSON): Trampoline<StyleRule>;
    // (undocumented)
    export function isStyleRule(value: unknown): value is StyleRule;
    // (undocumented)
    export interface JSON extends Rule.JSON {
        // (undocumented)
        selector: string;
        // (undocumented)
        style: Block.JSON;
        // (undocumented)
        type: "style";
    }
}

// @public (undocumented)
export class SupportsRule extends ConditionRule {
    // (undocumented)
    static of(condition: string, rules: Iterable<Rule>): SupportsRule;
    // (undocumented)
    toJSON(): SupportsRule.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace SupportsRule {
    // @internal (undocumented)
    export function fromSupportsRule(json: JSON): Trampoline<SupportsRule>;
    // (undocumented)
    export function isSupportsRue(value: unknown): value is SupportsRule;
    // (undocumented)
    export interface JSON extends ConditionRule.JSON {
        // (undocumented)
        type: "supports";
    }
}

// @public (undocumented)
export class Text extends Node implements Slotable {
    // (undocumented)
    assignedSlot(): Option<Slot>;
    // (undocumented)
    get data(): string;
    // (undocumented)
    static empty(): Text;
    // (undocumented)
    static of(data: string): Text;
    // (undocumented)
    parent(options?: Node.Traversal): Option<Node>;
    // (undocumented)
    path(options?: Node.Traversal): string;
    // (undocumented)
    toJSON(): Text.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Text {
    // @internal (undocumented)
    export function fromText(json: JSON): Trampoline<Text>;
    // (undocumented)
    export function isText(value: unknown): value is Text;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        data: string;
        // (undocumented)
        type: "text";
    }
}

// @public (undocumented)
export class Type extends Node {
    // (undocumented)
    static empty(): Type;
    // (undocumented)
    get name(): string;
    // (undocumented)
    static of(name: string, publicId?: Option<string>, systemId?: Option<string>): Type;
    // (undocumented)
    get publicId(): Option<string>;
    // (undocumented)
    get systemId(): Option<string>;
    // (undocumented)
    toJSON(): Type.JSON;
    // (undocumented)
    toString(): string;
}

// @public (undocumented)
export namespace Type {
    // @internal (undocumented)
    export function fromType(json: JSON): Trampoline<Type>;
    // (undocumented)
    export function isType(value: unknown): value is Type;
    // (undocumented)
    export interface JSON extends Node.JSON {
        // (undocumented)
        name: string;
        // (undocumented)
        publicId: string | null;
        // (undocumented)
        systemId: string | null;
        // (undocumented)
        type: "type";
    }
}

// (No @packageDocumentation comment for this package)

```