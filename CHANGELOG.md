# Alfa changelog

## [0.104.1](../../compare/v0.104.0...v0.104.1) (2025-07-30)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01041): SIA-R117 now sends diagnostic data as part of its question. ([#1848](https://github.com/Siteimprove/alfa/pull/1848))

## [0.104.0](../../compare/v0.103.3...v0.104.0) (2025-07-28)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01040): A new experimental rule SIA-R117: "Image accessible name is descriptive" is now available. ([#1845](https://github.com/Siteimprove/alfa/pull/1845))

## [0.103.3](../../compare/v0.103.2...v0.103.3) (2025-05-16)

### Fixed

- [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#01033): `Rectangle#subtract` now limits the size of the result of subtracting. ([#1820](https://github.com/Siteimprove/alfa/pull/1820))

## [0.103.2](../../compare/v0.103.1...v0.103.2) (2025-05-12)

### Changed

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#01032): Compatibility data in `browser/data.ts` and `feature/data.ts` has been updated. ([#1807](https://github.com/Siteimprove/alfa/pull/1807))

- [@siteimprove/alfa-painting-order](packages/alfa-painting-order/CHANGELOG.md#01032): The painting order algorithm now doesn't distinguish between inline and block elements. This trades incorrect results for mixed inline and block parent-child elements with incorrect result for inline and block siblings. ([#1817](https://github.com/Siteimprove/alfa/pull/1817))

## [0.103.1](../../compare/v0.103.0...v0.103.1) (2025-04-02)

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01031): Imported style sheets are now serialized. ([#1789](https://github.com/Siteimprove/alfa/pull/1789))

## [0.103.0](../../compare/v0.102.0...v0.103.0) (2025-03-31)

### Added

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#01030): A `String.hasHyphenationOpportunity` predicate has been added, detecting U+00AD SOFT HYPHEN. ([#1784](https://github.com/Siteimprove/alfa/pull/1784))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#01030): A `Style.hasSoftWrapOpportunity` predicate is now available. ([#1784](https://github.com/Siteimprove/alfa/pull/1784))

### Fixed

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#01030): `String.hasSoftWrapOpportunity` is now more strict in what it accepts. ([#1784](https://github.com/Siteimprove/alfa/pull/1784))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01030): `Native.fromNode` can now handle `document.adoptedStyleSheets` where `length` property is missing. ([#1786](https://github.com/Siteimprove/alfa/pull/1786))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01030): SIA-R83 is now better at detecting soft wrap opportunities in text nodes. ([#1784](https://github.com/Siteimprove/alfa/pull/1784))

## [0.102.0](../../compare/v0.101.0...v0.102.0) (2025-03-27)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01020): The `withCrossOrigin` option of `dom.Native.fromNode` has been renamed `ensureAnonymousCrossOrigin`. ([#1779](https://github.com/Siteimprove/alfa/pull/1779))

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01020): `Native.fromNode` returned value now contains a `logs` field, with an array of logs. ([#1781](https://github.com/Siteimprove/alfa/pull/1781))

- [@siteimprove/alfa-painting-order](packages/alfa-painting-order/CHANGELOG.md#01020): `PaintingOrder#getOrderIndex` and `PaintingOrder#getElementsAbove` are now available. ([#1761](https://github.com/Siteimprove/alfa/pull/1761))

- [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#01020): `Rectangle#subtract` is now available. ([#1761](https://github.com/Siteimprove/alfa/pull/1761))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01020): SIA-R111 and SIA-R113 now computes clickable regions more accurately when elements are clipped. ([#1761](https://github.com/Siteimprove/alfa/pull/1761))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#01020): The user agent sheet now includes `details` and `summary`. ([#1777](https://github.com/Siteimprove/alfa/pull/1777))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01020): SIA-R78 now ignores headings inside `<summary>` elements of closed `<details>`. ([#1782](https://github.com/Siteimprove/alfa/pull/1782))

## [0.101.0](../../compare/v0.100.1...v0.101.0) (2025-03-19)

### Added

- [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#01010): `Rectangle#toString` serialization is now available. ([#1775](https://github.com/Siteimprove/alfa/pull/1775))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#01010): SIA-R83 is now better at detecting small text within large clipping ancestors. ([#1775](https://github.com/Siteimprove/alfa/pull/1775))

## [0.100.1](../../compare/v0.100.0...v0.100.1) (2025-03-18)

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01001): Optional parameters `box` and `device` of `Text.of` now defaults to `None`. ([#1774](https://github.com/Siteimprove/alfa/pull/1774))

## [0.100.0](../../compare/v0.99.0...v0.100.0) (2025-03-17)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01000): The `hasBox` predicate has been moved from `Element` to `Node`. ([#1768](https://github.com/Siteimprove/alfa/pull/1768))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#01000): The `white-space` property is now handled as a shorthand. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#01000): `Tree.Node` now expects to know the kind of traversal flags used. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#01000): `new Flags()` now requires a `kind` to be specified. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

### Added

- [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#01000): `Result#forEach` and `Result#forEachErr` methods are now available. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#01000): A `Flags.named` class factory is now available for flags sets where flags can be accessed by name. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#01000): `Text.of` now accepts `Option<Rectangle>` and `Option<Device>`. A rectangle can also be passed through the `box` JSON property when using `Text.fromText`. ([#1768](https://github.com/Siteimprove/alfa/pull/1768))

- [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#01000): `Flags#is` is now available, testing that a flags set exactly matches the provided list. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#01000): Legacy name alias properties are now supported. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#01000): Properties `hyphens`, `line-break`, `overflow-wrap`, `text-wrap`, `text-wrap-mode`, `text-wrap-style`, `white-space-collapse`, `white-space-trim`, `wrap-after`, `wrap-before`, `wrap-inside`, `word-break`, and `word-wrap` are now supported. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

- [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#01000): A timeout can now be passed to vitest. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

### Changed

- [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#01000): `Flag#has(0)` now returns `false` on non-empty flags set. ([#1762](https://github.com/Siteimprove/alfa/pull/1762))

### Fixed

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#01000): Serialization options are now correctly forwarded when serializing questions. ([#1767](https://github.com/Siteimprove/alfa/pull/1767))

## [0.99.0](../../compare/v0.98.0...v0.99.0) (2025-03-05)

### Added

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0990): `List.some` is now available. ([#1756](https://github.com/Siteimprove/alfa/pull/1756))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0990): A new predicate `isFlexOrGridChild` is available. ([#1756](https://github.com/Siteimprove/alfa/pull/1756))

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0990): `Device.isDevice` is now available. ([#1756](https://github.com/Siteimprove/alfa/pull/1756))

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0990), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0990): The `<search>` element is now correctly handled. ([#1759](https://github.com/Siteimprove/alfa/pull/1759))

- [@siteimprove/alfa-painting-order](packages/alfa-painting-order/CHANGELOG.md#0990): A new package has been added for computing the painting order of HTML elements. ([#1756](https://github.com/Siteimprove/alfa/pull/1756))

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0990): A minimal serialization of rules (and outcomes), including only the URI, is now available. ([#1765](https://github.com/Siteimprove/alfa/pull/1765))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0990): SIA-R115 now correctly also targets headings in nested documents and shadow DOM. ([#1766](https://github.com/Siteimprove/alfa/pull/1766))

## [0.98.0](../../compare/v0.97.0...v0.98.0) (2025-02-03)

### Breaking

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0980): `String.and` has been renamed `String.Transformer.and`. ([#1745](https://github.com/Siteimprove/alfa/pull/1745))

### Added

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0980): A new utility to skaffold workspace creation with default settings is available. ([#1745](https://github.com/Siteimprove/alfa/pull/1745))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0980): A new `String.fallback` transformer combinator is available, to replace whitespace only strings with a fallback value. ([#1745](https://github.com/Siteimprove/alfa/pull/1745))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0980): A new `String.Transformer.when` combinator is available, to conditionally apply a transformer based on a predicate. ([#1745](https://github.com/Siteimprove/alfa/pull/1745))

- [@siteimprove/alfa-rng](packages/alfa-rng/CHANGELOG.md#0980): A new package for handling simple seedable RNGs. ([#1746](https://github.com/Siteimprove/alfa/pull/1746))

- [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0980): `Result#getOrElse` now accepts a `Callback(E, U)` (building the new value from the error); `Result#getErrOrElse` now accepts a `Callback(T, F)`. ([#1742](https://github.com/Siteimprove/alfa/pull/1742))

### Changed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0980): Node serialization with `Low` verbosity now also include the `Node#path`. ([#1748](https://github.com/Siteimprove/alfa/pull/1748))

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0980), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0980), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0980), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0980), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0980), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0980), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0980), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0980), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0980), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0980), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0980), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0980), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0980), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0980), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0980), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0980), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0980), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0980), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0980), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0980), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0980), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0980), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0980), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0980), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0980), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0980), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0980), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0980), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0980), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0980), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0980), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0980), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0980), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0980), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0980), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0980), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0980), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0980), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0980), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0980), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0980), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0980): Classes that do not implement the Singleton pattern now have `protected` constructor and can be extended. ([#1735](https://github.com/Siteimprove/alfa/pull/1735))

- [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0980), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0980), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0980), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0980), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0980), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0980): Packages that only export type now only pack their `.d.ts` files. ([#1736](https://github.com/Siteimprove/alfa/pull/1736))

## [0.97.0](../../compare/v0.96.0...v0.97.0) (2024-12-13)

### Added

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0970): CSS shorthand property `mask` and corresponding longhand properties are now supported. ([#1711](https://github.com/Siteimprove/alfa/pull/1711))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0970): `List#cutOrExtend` is now available. ([#1711](https://github.com/Siteimprove/alfa/pull/1711))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0970): `List#size` is now available. ([#1711](https://github.com/Siteimprove/alfa/pull/1711))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0970): URI of SIA-R115 is now correct. ([#1734](https://github.com/Siteimprove/alfa/pull/1734))

## [0.96.0](../../compare/v0.95.0...v0.96.0) (2024-12-06)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0960): A new experimental rule SIA-R115: "Heading is descriptive" is now available. ([#1722](https://github.com/Siteimprove/alfa/pull/1722))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0960): An `Element<"summary">#isSummaryForItsParentDetails` predicate is now available. ([#1728](https://github.com/Siteimprove/alfa/pull/1728))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0960): SIA-R116: "`<summary>` element has non-empty accessible name" is now available. ([#1728](https://github.com/Siteimprove/alfa/pull/1728))

- [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0960): A `Cache.memoize` decorator is now available. ([#1720](https://github.com/Siteimprove/alfa/pull/1720))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0960): An `Attribute.Autocomplete` namespace is now available, grouping functionalities around the `autocomplete` attribute. ([#1724](https://github.com/Siteimprove/alfa/pull/1724))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0960), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0960): Expose `allowedAttributes` on ARIA Element type. ([#1721](https://github.com/Siteimprove/alfa/pull/1721))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0960): `<summary>` elements that are not summary for their parent details are now correctly treated as `generic` role. ([#1728](https://github.com/Siteimprove/alfa/pull/1728))

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0960): `<details>` elements now correctly have an implicit role of `group`. ([#1728](https://github.com/Siteimprove/alfa/pull/1728))

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0960): Values of undefined user preferences are now correctly set to their default. ([#1725](https://github.com/Siteimprove/alfa/pull/1725))

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0960): `<summary>` elements that are summary for their parent details now correctly have their name computed from content. ([#1728](https://github.com/Siteimprove/alfa/pull/1728))

- [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0960): Matching of user-preferences in the boolean context now correctly handles `none` defaults. ([#1725](https://github.com/Siteimprove/alfa/pull/1725))

## [0.95.0](../../compare/v0.94.1...v0.95.0) (2024-11-28)

### Breaking

- [@siteimprove/alfa-test-deprecated](packages/alfa-test-deprecated/CHANGELOG.md#0950), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0950): The `alfa-test` package is now called `alfa-test-deprecated` and a new `alfa-test` package was added. ([#1692](https://github.com/Siteimprove/alfa/pull/1692))

## [0.94.1](../../compare/v0.94.0...v0.94.1) (2024-11-22)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0941): SIA-R111 and SIA-R113 now ignores invisible descendants of interactive elements when computing the clickable areas. ([#1716](https://github.com/Siteimprove/alfa/pull/1716))

## [0.94.0](../../compare/v0.93.8...v0.94.0) (2024-11-19)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0940), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0940), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0940): `#serializationId` has been replaced with `#internalId`. ([#1705](https://github.com/Siteimprove/alfa/pull/1705))

### Added

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0940), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0940): CSS property `will-change` is now supported. ([#1707](https://github.com/Siteimprove/alfa/pull/1707))

- [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0940): `Refinement.tee` is now available. ([#1709](https://github.com/Siteimprove/alfa/pull/1709))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0940): A `Query.descendants` helper is now available, to filter DOM descendants by a predicate. ([#1709](https://github.com/Siteimprove/alfa/pull/1709))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0940): A `Style.innerText` helper is now available. ([#1712](https://github.com/Siteimprove/alfa/pull/1712))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0940): A `String.and` combinator for chaining transformers is now available. ([#1712](https://github.com/Siteimprove/alfa/pull/1712))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0940): A `String.removePunctuation` transformer is now available. ([#1712](https://github.com/Siteimprove/alfa/pull/1712))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0940): classes for ARIA and Best Practices requirements are now available. ([#1714](https://github.com/Siteimprove/alfa/pull/1714))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0940): The function `String.toLowerCase` was added. ([#1707](https://github.com/Siteimprove/alfa/pull/1707))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0940): Rules checking ARIA conformance, or Best Practices, now have a corresponding requirement. ([#1714](https://github.com/Siteimprove/alfa/pull/1714))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0940): An experimental rule "SIA-R114: Title is descriptive" is now available. ([#1713](https://github.com/Siteimprove/alfa/pull/1713))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0940): A `String.hasSoftWrapOpportunity` predicate is now available. ([#1710](https://github.com/Siteimprove/alfa/pull/1710))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0940), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0940): CSS property `perspective` is now supported. ([#1708](https://github.com/Siteimprove/alfa/pull/1708))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0940): A `String.Transformer` type alias is now available. ([#1712](https://github.com/Siteimprove/alfa/pull/1712))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0940): SIA-R83 is now better at detecting soft wrap opportunity in text nodes. ([#1710](https://github.com/Siteimprove/alfa/pull/1710))

## [0.93.8](../../compare/v0.93.7...v0.93.8) (2024-10-22)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0938): Dummy release.

## [0.93.7](../../compare/v0.93.6...v0.93.7) (2024-10-22)

### Changed

- [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0937): `Performance.now()` does not try to use `node:perf_hooks` anymore. ([#1704](https://github.com/Siteimprove/alfa/pull/1704))

## [0.93.6](../../compare/v0.93.5...v0.93.6) (2024-10-22)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0936): Dummy release.

## [0.93.5](../../compare/v0.93.4...v0.93.5) (2024-10-22)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0935): Dummy release.

## [0.93.4](../../compare/v0.93.3...v0.93.4) (2024-10-21)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0934): Dummy release.

## [0.93.3](../../compare/v0.93.2...v0.93.3) (2024-10-21)

### Changed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0933), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0933): `Node.from` and `Page.from` are now cached. ([#1703](https://github.com/Siteimprove/alfa/pull/1703))

## [0.93.2](../../compare/v0.93.1...v0.93.2) (2024-10-11)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0932): SIA-R66 and SIA-R69 ar now inapplicable to text in `aria-disabled` `<a>` elements without `href`. ([#1698](https://github.com/Siteimprove/alfa/pull/1698))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0932): SIA-R83 is better at detecting clipping elements that actually have room to grow. ([#1699](https://github.com/Siteimprove/alfa/pull/1699))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0932): SIA-R83 now correctly considers the used value of `overflow` rather than the computed one. ([#1699](https://github.com/Siteimprove/alfa/pull/1699))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0932): The User-Agent style shet now sets `<select>` elements to `display: inline-block`, matching rendering recommendations. ([#1699](https://github.com/Siteimprove/alfa/pull/1699))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0932): Resolution of chained CSS variables has been improved. ([#1697](https://github.com/Siteimprove/alfa/pull/1697))

## [0.93.1](../../compare/v0.93.0...v0.93.1) (2024-10-07)

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0931): Mono-line `<select>` are again correctly considered as visible. ([#1696](https://github.com/Siteimprove/alfa/pull/1696))

## [0.93.0](../../compare/v0.92.0...v0.93.0) (2024-10-03)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0930): `Element.hasDisplaySize()` now builds a `Predicate<Element<"select">>` instead of a `Predicate<Element>`. ([#1683](https://github.com/Siteimprove/alfa/pull/1683))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0930): The helper `Element.inputType(element)` has been replaced by a method `element.inputType()`. ([#1683](https://github.com/Siteimprove/alfa/pull/1683))

### Added

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0930): Support for CSS properties `scale` and `translate` was added. ([#1688](https://github.com/Siteimprove/alfa/pull/1688))

- [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0930): A `Parser.doubleBar` combinator is now available, to parse CSS "double bar". ([#1691](https://github.com/Siteimprove/alfa/pull/1691))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): A `Style.hasUsedStyle` predicate builder is now available. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): Style properties `container-type`, `mix-blend-mode` and `isolation` are now supported. ([#1675](https://github.com/Siteimprove/alfa/pull/1675))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0930): Style property `contain` is now supported. ([#1679](https://github.com/Siteimprove/alfa/pull/1679))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0930): A `Keyword#is` predicate is now available. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0930): An `Option.conditional` builder is now available, returning `None` if the predicate is false. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0930): A method `Element<"select">#displaySize()` is now available. ([#1683](https://github.com/Siteimprove/alfa/pull/1683))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0930): The `:checked` pseudo-class is now supported. ([#1684](https://github.com/Siteimprove/alfa/pull/1684))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0930): Experimental rule SIA-ER8. It adds support for `type="password"` and more. ([#1667](https://github.com/Siteimprove/alfa/pull/1667))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): `Style` objects now have an optional `owner` pointing to the element whose style it is. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0930): An `Element<"select">#optionsList()` helper is now available. ([#1683](https://github.com/Siteimprove/alfa/pull/1683))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): Basic support for used values is now available. ([#1689](https://github.com/Siteimprove/alfa/pull/1689))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0930): Transform functions `scale3d()` and `scaleZ()` have been added and the scale transformation functions now accept percentages. ([#1688](https://github.com/Siteimprove/alfa/pull/1688))

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0930): A `String.hasWhitespace` predicate is now available. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0930): SIA-R83 is now better at handling `white-space` and `text-overflow`. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): `flex-wrap` now has a used value of `None` on elements that are not flex containers. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): `<option>` elements that are hidden by their `<select>` are now correctly considered as invisible. ([#1683](https://github.com/Siteimprove/alfa/pull/1683))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): `overflow` and `text-overflow` now have no used value on elements where they don't apply. ([#1689](https://github.com/Siteimprove/alfa/pull/1689))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0930): The computed value of `display` for `<button>` elements now correctly handles button layout. ([#1694](https://github.com/Siteimprove/alfa/pull/1694))

## [0.92.0](../../compare/v0.91.2...v0.92.0) (2024-09-11)

### Changed

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0920), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0920), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0920), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0920), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0920), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0920), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0920), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0920), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0920), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0920), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0920), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0920), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0920), [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0920), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0920), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0920), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0920), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0920), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0920), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0920), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0920), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0920), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0920), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0920), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0920), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0920), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0920), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0920), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0920), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0920), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0920), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0920), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0920), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0920), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0920), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0920), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0920), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0920), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0920), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0920), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0920), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0920), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0920), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0920), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0920), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0920), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0920), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0920), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0920), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0920), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0920), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0920), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0920), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0920), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0920), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0920), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0920), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0920), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0920), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0920), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0920), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0920), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0920), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0920), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0920), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0920), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0920), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0920), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0920), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0920), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0920), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0920), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0920), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0920), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0920), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0920), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0920): Alfa packages are now (also) published on the npmjs registry.

## [0.91.2](../../compare/v0.91.1...v0.91.2) (2024-09-10)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0912): Fixing token injection.

## [0.91.1](../../compare/v0.91.0...v0.91.1) (2024-09-10)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0911): Trying npmjs publish. ([#1680](https://github.com/Siteimprove/alfa/pull/1680))

## [0.91.0](../../compare/v0.90.1...v0.91.0) (2024-09-10)

### Changed

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0910), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0910), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0910), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0910), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0910), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0910), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0910), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0910), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0910), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0910), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0910), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0910), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0910), [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0910), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0910), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0910), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0910), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0910), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0910), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0910), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0910), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0910), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0910), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0910), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0910), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0910), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0910), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0910), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0910), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0910), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0910), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0910), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0910), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0910), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0910), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0910), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0910), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0910), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0910), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0910), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0910), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0910), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0910), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0910), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0910), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0910), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0910), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0910), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0910), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0910), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0910), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0910), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0910), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0910), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0910), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0910), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0910), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0910), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0910), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0910), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0910), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0910), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0910), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0910), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0910), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0910), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0910), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0910), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0910), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0910), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0910), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0910), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0910), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0910), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0910), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0910), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0910): Dummy minor version to experiment with publish flow, use the previous or next minor version instead.

## [0.90.1](../../compare/v0.90.0...v0.90.1) (2024-09-02)

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0901): `Navive.fromNode` can now be called with no argument, in which case it will default to `window.document`. ([#1678](https://github.com/Siteimprove/alfa/pull/1678))

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0901): `Native.fromWindow` can now be called with no argument and will default to `globalThis.window`. ([#1678](https://github.com/Siteimprove/alfa/pull/1678))

## [0.90.0](../../compare/v0.89.5...v0.90.0) (2024-09-02)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0900): Remove npmjs publication for now. ([#1677](https://github.com/Siteimprove/alfa/pull/1677))

## [0.89.3](../../compare/v0.89.2...v0.89.3) (2024-08-28)

### Fixed

- [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0893): Dummy release to test workflow.

## [0.89.2](../../compare/v0.89.1...v0.89.2) (2024-08-28)

### Changed

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0892), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0892), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0892), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0892), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0892), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0892), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0892), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0892), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0892), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0892), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0892), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0892), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0892), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0892), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0892), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0892), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0892), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0892), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0892), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0892), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0892), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0892), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0892), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0892), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0892), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0892), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0892), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0892), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0892), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0892), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0892), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0892), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0892), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0892), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0892), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0892), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0892), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0892), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0892), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0892), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0892), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0892), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0892), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0892), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0892), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0892), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0892), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0892), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0892), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0892), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0892), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0892), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0892), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0892), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0892), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0892), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0892), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0892), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0892), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0892), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0892), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0892), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0892), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0892), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0892), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0892), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0892), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0892), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0892), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0892), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0892), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0892), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0892), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0892), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0892), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0892), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0892): Trying to fix a problem in generating provenance statements. ([#1674](https://github.com/Siteimprove/alfa/pull/1674))

## [0.89.1](../../compare/v0.89.0...v0.89.1) (2024-08-28)

### Added

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0891), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0891), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0891), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0891), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0891), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0891), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0891), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0891), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0891), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0891), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0891), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0891), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0891), [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0891), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0891), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0891), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0891), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0891), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0891), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0891), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0891), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0891), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0891), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0891), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0891), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0891), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0891), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0891), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0891), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0891), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0891), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0891), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0891), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0891), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0891), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0891), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0891), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0891), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0891), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0891), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0891), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0891), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0891), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0891), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0891), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0891), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0891), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0891), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0891), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0891), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0891), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0891), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0891), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0891), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0891), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0891), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0891), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0891), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0891), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0891), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0891), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0891), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0891), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0891), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0891), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0891), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0891), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0891), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0891), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0891), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0891), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0891), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0891), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0891), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0891), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0891), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0891): Trying to publish Alfa packages on the npm registry. ([#1673](https://github.com/Siteimprove/alfa/pull/1673))

## [0.89.0](../../compare/v0.88.0...v0.89.0) (2024-08-20)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0890): The serialization of diagnostic `WithBadElements` has been changed to include the serialized elements and not just the xpath. ([#1669](https://github.com/Siteimprove/alfa/pull/1669))

### Added

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0890): Style property `z-index` has been added. ([#1660](https://github.com/Siteimprove/alfa/pull/1660))

### Fixed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0890): Mark callable scripts as executable. ([#1661](https://github.com/Siteimprove/alfa/pull/1661))

## [0.88.0](../../compare/v0.87.12...v0.88.0) (2024-07-25)

### Fixed

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0880), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0880), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0880), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0880), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0880), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0880), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0880), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0880), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0880), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0880), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0880), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0880), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0880), [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0880), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0880), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0880), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0880), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0880), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0880), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0880), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0880), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0880), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0880), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0880), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0880), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0880), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0880), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0880), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0880), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0880), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0880), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0880), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0880), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0880), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0880), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0880), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0880), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0880), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0880), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0880), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0880), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0880), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0880), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0880), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0880), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0880), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0880), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0880), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0880), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0880), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0880), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0880), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0880), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0880), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0880), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0880), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0880), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0880), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0880), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0880), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0880), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0880), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0880), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0880), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0880), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0880), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0880), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0880), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0880), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0880), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0880), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0880), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0880), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0880), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0880), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0880), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0880): The publish flow was updated to a new version.

## [0.87.12](../../compare/v0.87.11...v0.87.12) (2024-07-25)

### Fixed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#08712): Fixed location of artifacts.

## [0.87.11](../../compare/v0.87.10...v0.87.11) (2024-07-25)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#08711): Fixed some typo in the publication workflow.

## [0.87.10](../../compare/v0.87.9...v0.87.10) (2024-07-25)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#08710): Trying another publish flow. Again.

## [0.87.7](../../compare/v0.87.6...v0.87.7) (2024-07-23)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0877): Ignore - Debug.

## [0.87.6](../../compare/v0.87.5...v0.87.6) (2024-07-23)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0876): Ignore - testing.

## [0.87.5](../../compare/v0.87.4...v0.87.5) (2024-07-23)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0875): Fixed the final publish command.

## [0.87.4](../../compare/v0.87.3...v0.87.4) (2024-07-23)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0874): The Alfa version is now directly available as `import { alfaVersion } from "@siteimprove/alfa-rules";`. ([#1658](https://github.com/Siteimprove/alfa/pull/1658))

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0874): Trying a different publication process, adding provenance statements. ([#1659](https://github.com/Siteimprove/alfa/pull/1659))

## [0.87.3](../../compare/v0.87.2...v0.87.3) (2024-07-22)

### Changed

- [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0873): Improved handling of default options in `Page#.toJSON()`. ([#1655](https://github.com/Siteimprove/alfa/pull/1655))

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0873): Workaround for when adopted style sheets are missing has been added. ([#1656](https://github.com/Siteimprove/alfa/pull/1656))

## [0.87.2](../../compare/v0.87.1...v0.87.2) (2024-07-19)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0872): Reverted changes to publish process. ([#1654](https://github.com/Siteimprove/alfa/pull/1654))

## [0.87.1](../../compare/v0.87.0...v0.87.1) (2024-07-18)

### Changed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0871): Trying a new release flow. ([#1653](https://github.com/Siteimprove/alfa/pull/1653))

## [0.87.0](../../compare/v0.86.2...v0.87.0) (2024-07-18)

### Breaking

- [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0870), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0870), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0870), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0870), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0870), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0870), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0870), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0870), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0870), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0870), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0870), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0870), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0870), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0870), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0870), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0870), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0870), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0870), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0870): Optional serialization type parameters have been removed. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

### Added

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0870): Predicate `isScrolledBehind` for checking if a node is scrolled behind an ancestor has been added. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0870): A new function `getInclusiveElementDescendants` was added to the `Query` namespace. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0870): `Element` serialised with high verbosity now include the serialisation ID of their assigned slot, if any. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0870): The rules R111 and R113 are now inapplicable to targets not visible due to scrolling. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0870), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0870): Serialization options are now propagated in `.toJSON()` for all classes extending `Diagnostic`. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0870): R111 and R113 now computes the clickable area of a target more accurately which should reduce both number of false positives and false negatives. ([#1651](https://github.com/Siteimprove/alfa/pull/1651))

## [0.86.2](../../compare/v0.86.1...v0.86.2) (2024-07-03)

### Fixed

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0862): The `changelog` export is now correctly exported. ([#1645](https://github.com/Siteimprove/alfa/pull/1645))

## [0.86.1](../../compare/v0.86.0...v0.86.1) (2024-07-02)

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0861), [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0861), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0861), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0861): Fix usages of `__dirname`. ([#1644](https://github.com/Siteimprove/alfa/pull/1644))

## [0.86.0](../../compare/v0.85.1...v0.86.0) (2024-07-01)

### Breaking

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0860), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0860), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0860), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0860), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0860), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0860), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0860), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0860), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0860), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0860), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0860), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0860), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0860), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0860), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0860), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0860), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0860), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0860), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0860), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0860), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0860), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0860), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0860), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0860), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0860), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0860), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0860), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0860), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0860), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0860), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0860), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0860), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0860), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0860), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0860), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0860), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0860), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0860), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0860), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0860), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0860), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0860), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0860), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0860), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0860), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0860), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0860), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0860), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0860), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0860), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0860), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0860), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0860), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0860), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0860), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0860), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0860), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0860), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0860), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0860), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0860), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0860), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0860), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0860), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0860), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0860), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0860), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0860), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0860), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0860), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0860), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0860), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0860), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0860), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0860), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0860), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0860): TS resolution has been changed to `Node16`, target to `es2022`. ([#1636](https://github.com/Siteimprove/alfa/pull/1636))

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0860), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0860), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0860), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0860), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0860), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0860), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0860), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0860), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0860), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0860), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0860), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0860), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0860), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0860), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0860), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0860), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0860), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0860), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0860), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0860), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0860), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0860), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0860), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0860), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0860), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0860), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0860), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0860), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0860), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0860), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0860), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0860), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0860), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0860), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0860), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0860), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0860), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0860), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0860), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0860), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0860), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0860), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0860), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0860), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0860), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0860), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0860), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0860), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0860), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0860), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0860), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0860), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0860), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0860), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0860), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0860), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0860), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0860), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0860), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0860), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0860), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0860), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0860), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0860), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0860), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0860), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0860), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0860), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0860), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0860), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0860), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0860), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0860), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0860), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0860), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0860), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0860): Alfa is now distributed as ESM rather than CJS modules; projects using it must be ESM or use dynamic `import()`. ([#1636](https://github.com/Siteimprove/alfa/pull/1636))

## [0.85.1](../../compare/v0.85.0...v0.85.1) (2024-06-25)

### Fixed

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0851): Improved how `Native` is exported. ([#1635](https://github.com/Siteimprove/alfa/pull/1635))

## [0.85.0](../../compare/v0.84.0...v0.85.0) (2024-06-25)

### Breaking

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0850), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0850), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0850), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0850), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0850), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0850), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0850), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0850), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0850), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0850), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0850), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0850), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0850), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0850), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0850), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0850), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0850), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0850), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0850), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0850), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0850), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0850), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0850), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0850), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0850), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0850), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0850), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0850), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0850), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0850), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0850), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0850), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0850), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0850), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0850), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0850), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0850), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0850), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0850), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0850), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0850), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0850), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0850), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0850), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0850), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0850), [@siteimprove/alfa-media](packages/alfa-media/CHANGELOG.md#0850), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0850), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0850), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0850), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0850), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0850), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0850), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0850), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0850), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0850), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0850), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0850), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0850), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0850), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0850), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0850), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0850), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0850), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0850), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0850), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0850), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0850), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0850), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0850), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0850), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0850), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0850), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0850), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0850), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0850), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0850), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0850): The .js files are now built in the `dist` folder rather than in `src`. ([#1628](https://github.com/Siteimprove/alfa/pull/1628))

## [0.84.0](../../compare/v0.83.1...v0.84.0) (2024-06-24)

### Changed

- [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0840), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0840), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0840): Types have been tightened a bit. ([#1634](https://github.com/Siteimprove/alfa/pull/1634))

## [0.83.1](../../compare/v0.83.0...v0.83.1) (2024-06-21)

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0831): A type declaration. ([#1631](https://github.com/Siteimprove/alfa/pull/1631))

## [0.83.0](../../compare/v0.82.0...v0.83.0) (2024-06-21)

### Added

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0830): `Unit` now have a `Canonical` unit (e.g., `Length.Canonical`, …). ([#1625](https://github.com/Siteimprove/alfa/pull/1625))

- [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0830): `Selective#tee` is now available. ([#1625](https://github.com/Siteimprove/alfa/pull/1625))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0830): The `:any-link` pseudo-class is now supported. ([#1629](https://github.com/Siteimprove/alfa/pull/1629))

### Changed

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0830): Most properties now accept dimensions in calculations, when they cancel out. ([#1625](https://github.com/Siteimprove/alfa/pull/1625))

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0830): Calculations containing products and divisions of dimensions are better handled. ([#1625](https://github.com/Siteimprove/alfa/pull/1625))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0830): Background images with empty URL are now ignored when computing background colors (SIA-R66, SIA-R69). ([#1627](https://github.com/Siteimprove/alfa/pull/1627))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0830): The `Integer` CSS type now has a correct `type` of `"integer"`. ([#1625](https://github.com/Siteimprove/alfa/pull/1625))

## [0.82.0](../../compare/v0.81.0...v0.82.0) (2024-06-12)

### Breaking

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0820), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0820), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0820), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0820), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0820), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0820), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0820), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0820), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0820), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0820), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0820), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0820), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0820), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0820), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0820), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0820), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0820), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0820), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0820), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0820), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0820), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0820), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0820), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0820), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0820), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0820), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0820), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0820), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0820), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0820), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0820), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0820), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0820), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0820), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0820), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0820), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0820), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0820), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0820), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0820), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0820), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0820), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0820), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0820), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0820), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0820), [@siteimprove/alfa-media](packages/alfa-media/CHANGELOG.md#0820), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0820), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0820), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0820), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0820), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0820), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0820), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0820), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0820), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0820), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0820), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0820), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0820), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0820), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0820), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0820), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0820), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0820), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0820), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0820), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0820), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0820), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0820), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0820), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0820), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0820), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0820), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0820), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0820), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0820), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0820), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0820): Node 18 is no longer supported. ([#1618](https://github.com/Siteimprove/alfa/pull/1618))

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0820): DOM node builders like `Element.of` etc. now optionally accept `serializationId` which will be used when serializing depending on the verbosity chosen. ([#1618](https://github.com/Siteimprove/alfa/pull/1618))

- [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0820), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0820), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0820), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0820), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0820), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0820), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0820), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0820), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0820), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0820), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0820), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0820), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0820), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0820), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0820), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0820), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0820): Serialization options are now accepted, and passed on, by `toJSON()` on these types. ([#1622](https://github.com/Siteimprove/alfa/pull/1622))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0820), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0820), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0820), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0820), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0820): Verbosity option has been added to JSON serialization of alfa-tree `Node` and to `Outcome` and `Group`. ([#1618](https://github.com/Siteimprove/alfa/pull/1618))

## [0.81.0](../../compare/v0.80.0...v0.81.0) (2024-06-03)

### Added

- [@siteimprove/alfa-compatibility](packages/alfa-compatibility/CHANGELOG.md#0810), [@siteimprove/alfa-continuation](packages/alfa-continuation/CHANGELOG.md#0810), [@siteimprove/alfa-applicative](packages/alfa-applicative/CHANGELOG.md#0810), [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0810), [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0810), [@siteimprove/alfa-collection](packages/alfa-collection/CHANGELOG.md#0810), [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0810), [@siteimprove/alfa-refinement](packages/alfa-refinement/CHANGELOG.md#0810), [@siteimprove/alfa-trampoline](packages/alfa-trampoline/CHANGELOG.md#0810), [@siteimprove/alfa-equatable](packages/alfa-equatable/CHANGELOG.md#0810), [@siteimprove/alfa-generator](packages/alfa-generator/CHANGELOG.md#0810), [@siteimprove/alfa-predicate](packages/alfa-predicate/CHANGELOG.md#0810), [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0810), [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0810), [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0810), [@siteimprove/alfa-branched](packages/alfa-branched/CHANGELOG.md#0810), [@siteimprove/alfa-callback](packages/alfa-callback/CHANGELOG.md#0810), [@siteimprove/alfa-encoding](packages/alfa-encoding/CHANGELOG.md#0810), [@siteimprove/alfa-foldable](packages/alfa-foldable/CHANGELOG.md#0810), [@siteimprove/alfa-iterable](packages/alfa-iterable/CHANGELOG.md#0810), [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0810), [@siteimprove/alfa-sequence](packages/alfa-sequence/CHANGELOG.md#0810), [@siteimprove/alfa-thenable](packages/alfa-thenable/CHANGELOG.md#0810), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0810), [@siteimprove/alfa-emitter](packages/alfa-emitter/CHANGELOG.md#0810), [@siteimprove/alfa-functor](packages/alfa-functor/CHANGELOG.md#0810), [@siteimprove/alfa-json-ld](packages/alfa-json-ld/CHANGELOG.md#0810), [@siteimprove/alfa-network](packages/alfa-network/CHANGELOG.md#0810), [@siteimprove/alfa-promise](packages/alfa-promise/CHANGELOG.md#0810), [@siteimprove/alfa-reducer](packages/alfa-reducer/CHANGELOG.md#0810), [@siteimprove/alfa-trilean](packages/alfa-trilean/CHANGELOG.md#0810), [@siteimprove/alfa-affine](packages/alfa-affine/CHANGELOG.md#0810), [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0810), [@siteimprove/alfa-either](packages/alfa-either/CHANGELOG.md#0810), [@siteimprove/alfa-future](packages/alfa-future/CHANGELOG.md#0810), [@siteimprove/alfa-mapper](packages/alfa-mapper/CHANGELOG.md#0810), [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md#0810), [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md#0810), [@siteimprove/alfa-record](packages/alfa-record/CHANGELOG.md#0810), [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md#0810), [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0810), [@siteimprove/alfa-array](packages/alfa-array/CHANGELOG.md#0810), [@siteimprove/alfa-cache](packages/alfa-cache/CHANGELOG.md#0810), [@siteimprove/alfa-clone](packages/alfa-clone/CHANGELOG.md#0810), [@siteimprove/alfa-flags](packages/alfa-flags/CHANGELOG.md#0810), [@siteimprove/alfa-graph](packages/alfa-graph/CHANGELOG.md#0810), [@siteimprove/alfa-media](packages/alfa-media/CHANGELOG.md#0810), [@siteimprove/alfa-monad](packages/alfa-monad/CHANGELOG.md#0810), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0810), [@siteimprove/alfa-sarif](packages/alfa-sarif/CHANGELOG.md#0810), [@siteimprove/alfa-slice](packages/alfa-slice/CHANGELOG.md#0810), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0810), [@siteimprove/alfa-table](packages/alfa-table/CHANGELOG.md#0810), [@siteimprove/alfa-thunk](packages/alfa-thunk/CHANGELOG.md#0810), [@siteimprove/alfa-tuple](packages/alfa-tuple/CHANGELOG.md#0810), [@siteimprove/alfa-xpath](packages/alfa-xpath/CHANGELOG.md#0810), [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0810), [@siteimprove/alfa-bits](packages/alfa-bits/CHANGELOG.md#0810), [@siteimprove/alfa-earl](packages/alfa-earl/CHANGELOG.md#0810), [@siteimprove/alfa-hash](packages/alfa-hash/CHANGELOG.md#0810), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md#0810), [@siteimprove/alfa-iana](packages/alfa-iana/CHANGELOG.md#0810), [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0810), [@siteimprove/alfa-lazy](packages/alfa-lazy/CHANGELOG.md#0810), [@siteimprove/alfa-list](packages/alfa-list/CHANGELOG.md#0810), [@siteimprove/alfa-math](packages/alfa-math/CHANGELOG.md#0810), [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0810), [@siteimprove/alfa-time](packages/alfa-time/CHANGELOG.md#0810), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0810), [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0810), [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0810), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0810), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0810), [@siteimprove/alfa-fnv](packages/alfa-fnv/CHANGELOG.md#0810), [@siteimprove/alfa-map](packages/alfa-map/CHANGELOG.md#0810), [@siteimprove/alfa-set](packages/alfa-set/CHANGELOG.md#0810), [@siteimprove/alfa-url](packages/alfa-url/CHANGELOG.md#0810), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md#0810): Each package now contains its internal dependency graph in its `docs` directory. ([#1610](https://github.com/Siteimprove/alfa/pull/1610))

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0810): A new `yarn generate-graphs` command for package specific dependency graph. ([#1610](https://github.com/Siteimprove/alfa/pull/1610))

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0810): `Native.fromWindow` now behaves better in case when injected in content scripts. ([#1619](https://github.com/Siteimprove/alfa/pull/1619))

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0810): Accessible name computation has been optimized. ([#1611](https://github.com/Siteimprove/alfa/pull/1611))

## [0.80.0](../../compare/v0.79.1...v0.80.0) (2024-05-01)

### Changed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0800): Role computation for `<li>` elements now looks for a parent `<ul>` in the flat tree, not the DOM tree. ([#1607](https://github.com/Siteimprove/alfa/pull/1607))

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0800): `Node.toJSON` now serialises the corresponding DOM node as its path in the **flat tree**, not in the DOM tree. ([#1607](https://github.com/Siteimprove/alfa/pull/1607))

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0800): `Native.fromNode` now correctly handles sheets without conditions. ([#1608](https://github.com/Siteimprove/alfa/pull/1608))

## [0.79.1](../../compare/v0.79.0...v0.79.1) (2024-04-30)

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0791): Correctly encapsulated sub-functions of `Native.fromNode`. ([#1606](https://github.com/Siteimprove/alfa/pull/1606))

## [0.79.0](../../compare/v0.78.2...v0.79.0) (2024-04-29)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `ImportRule.queries` has been renamed `ImportRule.mediaQueries`. ([#1603](https://github.com/Siteimprove/alfa/pull/1603))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0790): `Style.of` now requires the `Declaration` to be paired with their `Origin`. ([#1604](https://github.com/Siteimprove/alfa/pull/1604))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `Native.fromNode()` is now asynchronous. ([#1600](https://github.com/Siteimprove/alfa/pull/1600))

### Added

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0790): The `revert` global keyword is now handled. ([#1604](https://github.com/Siteimprove/alfa/pull/1604))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `Native.fromNode()` now includes an option to enforce `crossorigin: anonymous` on `<link>` elements missing a CORS. ([#1600](https://github.com/Siteimprove/alfa/pull/1600))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `Native.fromNode` now parses `@layer` rules. ([#1600](https://github.com/Siteimprove/alfa/pull/1600))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0790), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): CSS `import` rules now support `layer`, and `supports` condition. ([#1603](https://github.com/Siteimprove/alfa/pull/1603))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0790): R111 and R113 `Outcome` namespaces have been combined and renamed to `TargetSize`. ([#1601](https://github.com/Siteimprove/alfa/pull/1601))

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `Native.fromNode()` now correctly handles CSS shorthands whose value is a `var(…)`. ([#1600](https://github.com/Siteimprove/alfa/pull/1600))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): Bug where boxes where not being serialized due to device not being passed down when recursing has been fixed. ([#1605](https://github.com/Siteimprove/alfa/pull/1605))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0790): `Node.tabOrder()` now correctly inserts shadow tree content in its place, instead of at the start. ([#1599](https://github.com/Siteimprove/alfa/pull/1599))

## [0.78.2](../../compare/v0.78.1...v0.78.2) (2024-04-18)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0782): R111 and R113 now more accurately detects targets that are part of text. ([#1598](https://github.com/Siteimprove/alfa/pull/1598))

## [0.78.1](../../compare/v0.78.0...v0.78.1) (2024-04-16)

### Fixed

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0781): `Native.fromWindow` is properly bundled so it can be injected into pages by browser automation or extension scripting. ([#1597](https://github.com/Siteimprove/alfa/pull/1597))

## [0.78.0](../../compare/v0.77.0...v0.78.0) (2024-04-16)

### Added

- [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0780): User-preferences media queries are now supported. ([#1596](https://github.com/Siteimprove/alfa/pull/1596))

- [@siteimprove/alfa-act](packages/alfa-act/CHANGELOG.md#0780): `Ouctome` can now be produced with a `Mode.Manual`. ([#1587](https://github.com/Siteimprove/alfa/pull/1587))

- [@siteimprove/alfa-device](packages/alfa-device/CHANGELOG.md#0780): `Native.fromWindow` now grabs user preferences. ([#1596](https://github.com/Siteimprove/alfa/pull/1596))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0780): R111 and R113 are no longer applicable to invisible targets and targets inside a paragraph. ([#1594](https://github.com/Siteimprove/alfa/pull/1594))

## [0.77.0](../../compare/v0.76.0...v0.77.0) (2024-04-05)

### Added

- [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md#0770): Methods `Rectangle#insersectsCircle` and `Rectangle#distanceSquared`. ([#1592](https://github.com/Siteimprove/alfa/pull/1592))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0770): R113 now sends more information about how it succeed and the other targets that caused the spacing criteria to fail. ([#1592](https://github.com/Siteimprove/alfa/pull/1592))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0770): R113 spacing condition is now calculated more accurately. ([#1592](https://github.com/Siteimprove/alfa/pull/1592))

## [0.76.0](../../compare/v0.75.2...v0.76.0) (2024-03-21)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0760): New rule SIA-R113 for testing minimum target size and spacing of clickable elements. ([#1589](https://github.com/Siteimprove/alfa/pull/1589))

## [0.75.2](../../compare/v0.75.1...v0.75.2) (2024-03-04)

### Added

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0752): An `isImportant` predicate is available on `Origin` and `Precedence`. ([#1585](https://github.com/Siteimprove/alfa/pull/1585))

### Fixed

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0752): `!important` declarations in rules with normal declarations are not dropped anymore. ([#1585](https://github.com/Siteimprove/alfa/pull/1585))

## [0.75.1](../../compare/v0.75.0...v0.75.1) (2024-02-27)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0751): New diagnostic `WithBoundingBox` is now exported. ([#1584](https://github.com/Siteimprove/alfa/pull/1584))

## [0.75.0](../../compare/v0.74.0...v0.75.0) (2024-02-26)

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0750): Most CSS conditional rules now have a `.matches(device)` helper, checking against the parsed queries. ([#1581](https://github.com/Siteimprove/alfa/pull/1581))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0750): Extended diagnostic `WithBoundingBox` for reporting bounding box is now available. ([#1579](https://github.com/Siteimprove/alfa/pull/1579))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0750): User agent controlled expectation to R111. ([#1579](https://github.com/Siteimprove/alfa/pull/1579))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0750), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0750): CSS `@layer` rules are now handled when building cascades. ([#1574](https://github.com/Siteimprove/alfa/pull/1574))

- [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md#0750): A `#ifGuarded` method is now available. ([#1581](https://github.com/Siteimprove/alfa/pull/1581))

### Changed

- [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md#0750): Update WCAG Success Criteria to get data from WCAG 2.2 by default. ([#1583](https://github.com/Siteimprove/alfa/pull/1583))

### Fixed

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0750): `::slotted` selectors within a compound selector are now correctly handled. ([#1575](https://github.com/Siteimprove/alfa/pull/1575))

## [0.74.0](../../compare/v0.73.0...v0.74.0) (2024-02-14)

### Added

- [@siteimprove/alfa-string](packages/alfa-string/CHANGELOG.md#0740): Package `@siteimprove/alfa-string` grouping low-level string manipulations is now available. ([#1572](https://github.com/Siteimprove/alfa/pull/1572))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0740): A regression on R1 for `<title>` with whitespace but not empty content has been fixed (was introduced in v0.73.0). ([#1573](https://github.com/Siteimprove/alfa/pull/1573))

## [0.73.0](../../compare/v0.72.0...v0.73.0) (2024-02-06)

### Breaking

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0730): `Name.Source` and `Name.State` are now exported from the top-level of the package. ([#1566](https://github.com/Siteimprove/alfa/pull/1566))

### Added

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0730): `Cascade` now handles declarations from encapsulated contexts (shadow DOM). ([#1553](https://github.com/Siteimprove/alfa/pull/1553))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0730): Cascade now handle importance of declarations, and `style` attribute. ([#1550](https://github.com/Siteimprove/alfa/pull/1550))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0730): New rule SIA-R111 for testing target size of clickable elements. ([#1564](https://github.com/Siteimprove/alfa/pull/1564))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0730): New property `pointer-events`. ([#1564](https://github.com/Siteimprove/alfa/pull/1564))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0730), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0730): The `:host` and `:host-context` pseudo-classes, as well as the `::slotted` pseudo-element are now supported. ([#1554](https://github.com/Siteimprove/alfa/pull/1554))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0730): R69 is no longer applicable to text that only contains punctuation. ([#1551](https://github.com/Siteimprove/alfa/pull/1551))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0730): Alfa now correctly handle spaces in accessible names. ([#1566](https://github.com/Siteimprove/alfa/pull/1566))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0730): Parents of `Comment` inside a shadow tree now correctly skip over the shadow root when traversing the flat tree. ([#1547](https://github.com/Siteimprove/alfa/pull/1547))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0730): Nested style rules now correctly get their sheet as owner. ([#1560](https://github.com/Siteimprove/alfa/pull/1560))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0730): `Node.toString()` now stops dropping text nodes with only spaces. ([#1566](https://github.com/Siteimprove/alfa/pull/1566))

## [0.72.0](../../compare/v0.71.1...v0.72.0) (2024-01-08)

### Breaking

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): `SelectorMap.#get` now requires an `AncestorFilter` rather than an `Option<AncestorFilter>`. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

- [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0720), [@siteimprove/alfa-media](packages/alfa-media/CHANGELOG.md#0720): `@siteimprove/alfa-media` has been deprecated and replaced by `@siteimprove/alfa-css-feature`. ([#1544](https://github.com/Siteimprove/alfa/pull/1544))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): `Cascade.of` has been renamed `Cascade.from`. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): Data in Rule tree nodes is now wrapped in a `Block` object that need to be opened. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

### Removed

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): `AncestorFilter#match` has been made internal. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

### Added

- [@siteimprove/alfa-comparable](packages/alfa-comparable/CHANGELOG.md#0720): A `Comparable.compareLexicographically` function to compare tuples is now available. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0720): `Specificity` is now exported for external use. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): Functionalities for dealing with Cascade Sorting Order (origin, specificity, order) are now grouped in a `Precedence` interface. ([#1540](https://github.com/Siteimprove/alfa/pull/1540))

- [@siteimprove/alfa-css-feature](packages/alfa-css-feature/CHANGELOG.md#0720), [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0720): Simple feature query (`@supports` rules) are now supported. ([#1544](https://github.com/Siteimprove/alfa/pull/1544))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0720): SIA-R18 now accepts attributes for `input type=file` and `input type=color` according to the [ARIA in HTML](https://w3c.github.io/html-aria/#el-input-file) specification. ([#1541](https://github.com/Siteimprove/alfa/pull/1541))

## [0.71.1](../../compare/v0.71.0...v0.71.1) (2023-12-20)

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0711): Media rules R23 and R29 no longer asks if audio is playing or where the play buttons is when the attributes `autoplay` and `controls` are present respectively. ([#1538](https://github.com/Siteimprove/alfa/pull/1538))

## [0.71.0](../../compare/v0.70.0...v0.71.0) (2023-12-18)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0710): Diagnostic `WithAccessibleName` has been renamed to `WithName` and the property `accessibleName` to `name`. ([#1537](https://github.com/Siteimprove/alfa/pull/1537))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0710): `RuleTree.add` and `RuleTree.Node.add` have been made internal. ([#1534](https://github.com/Siteimprove/alfa/pull/1534))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0710): `Cascade.get()` now returns a `RuleTree.Node` instead of an `Option`. ([#1534](https://github.com/Siteimprove/alfa/pull/1534))

### Added

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0710): Selectors now contain a "key selector" which is the leftmost simple selector in a compound one, or the rightmost in a complex one. ([#1534](https://github.com/Siteimprove/alfa/pull/1534))

## [0.70.0](../../compare/v0.69.0...v0.70.0) (2023-12-13)

### Breaking

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): The type guards on selectors are now under the namespace of the same name. ([#1508](https://github.com/Siteimprove/alfa/pull/1508))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): `Compound` selectors are now built on top of Iterable, rather than re-inventing chained lists. ([#1508](https://github.com/Siteimprove/alfa/pull/1508))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): The various kinds of selectors are now directly exported from the package, out of the `Selector` namespace. ([#1508](https://github.com/Siteimprove/alfa/pull/1508))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0700): `Image.partiallyResolve()` and `Shape.partiallyResolve()` functions has been replaced by instance methods of the same name. ([#1510](https://github.com/Siteimprove/alfa/pull/1510))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): `List` selectors are now built on top of Iterable, rather than re-inventing chained lists. ([#1508](https://github.com/Siteimprove/alfa/pull/1508))

### Added

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): The `:nth-child` and `:nth-last-child` pseudo-classes now accept the "of selector" syntax. ([#1524](https://github.com/Siteimprove/alfa/pull/1524))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): `Selector` now contain their own `Specificity`. ([#1514](https://github.com/Siteimprove/alfa/pull/1514))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0700): all `Value` subtype now correctly implement the `(Partially)Resovable` interfaces. ([#1510](https://github.com/Siteimprove/alfa/pull/1510))

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0700): Structure validation can now optionally check that changeset contain no "major" bump. ([#1509](https://github.com/Siteimprove/alfa/pull/1509))

- [@siteimprove/alfa-test](packages/alfa-test/CHANGELOG.md#0700): Test can now accept a `Controller` to generate random tests. ([#1514](https://github.com/Siteimprove/alfa/pull/1514))

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0700): The `:where` pseudo-class is now handled. ([#1518](https://github.com/Siteimprove/alfa/pull/1518))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0700): `Function.parse` now also accepts a `Thunk` as body parser. ([#1508](https://github.com/Siteimprove/alfa/pull/1508))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0700): New functions `Node.clone` for cloning nodes and optionally replacing child elements based on a predicate. ([#1523](https://github.com/Siteimprove/alfa/pull/1523))

### Fixed

- [@siteimprove/alfa-performance](packages/alfa-performance/CHANGELOG.md#0700): A bug caused runtime exceptions when calling `Performance.of()` in node v 19.0.0 and above has been fixed. ([#1513](https://github.com/Siteimprove/alfa/pull/1513))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0700): Accessible name is now also recorded as in #1502 in can't tell outcomes for rules R15, R39, R41 and R81. ([#1529](https://github.com/Siteimprove/alfa/pull/1529))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0700): SIA-R10 now correctly accepts the `one-time-code` token. ([#1517](https://github.com/Siteimprove/alfa/pull/1517))

## [0.69.0](../../compare/v0.68.0...v0.69.0) (2023-11-21)

### Breaking

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0690): The `hasInlineStyleProperty` and `hasCascadedValueDeclaredInInlineStyleOf` predicates have been removed.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): Various `Value.partiallyResolve()` functions have been removed.

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0690): Diagnostics `WithPreviousHeading` and `WithNextHeading` have been replaced by `WithOtherHeading`.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): The various `Value.parseBase` functions are no more available.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): `Angle#resolve()` does not require a resolver anymore, since 100% is always 1 full turn.

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0690): Question `visible-focus-classes`, and question type `string[]` have been removed.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): CSS `Value` types no longer accept a `CALC` parameter; it is automatically inferred.

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0690): Accessible name is now recorded in the diagnostics for R15, R39, R41 and R81.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): `Value` now expose a `partiallyResolve()` instance method.

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0690): Role is now recorded in the diagnostic for R8.

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0690), [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0690): Tree `Node`, and DOM `Node` can now have an `externalId` (`string`) and some `extraData` (`any`).

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): `Percentage` can now be partially resolved into fixed `Percentage`.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): a `AnglePercentage.resolve()` helper is now available to handle `Percentage` shenanigans.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0690): `Percentage` builders now accept an optional type hint indicating into what the percentage resolves.

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0690): SIA-R70 now accepts `<hgroup>`.

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0690): The `<hgroup>` element now has an implicit role of `group`.

## [0.68.0](../../compare/v0.67.0...v0.68.0) (2023-10-20)

### Breaking

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0680): Function `getBoundingBox` was removed. ([#1474](https://github.com/Siteimprove/alfa/pull/1474))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0680): `Element#of` now requires the device used when scraping a page in order to store a box. ([#1474](https://github.com/Siteimprove/alfa/pull/1474))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): `Position.Component` cannot be raw `LengthPercentage` anymore. ([#1454](https://github.com/Siteimprove/alfa/pull/1454))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): `Gradient.Linear.parse`, `Gradient.Radial.parse`, and `Gradient.parse` now don't require an item list parser. ([#1477](https://github.com/Siteimprove/alfa/pull/1477))

### Removed

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): The unused `Side.isCenter()` predicate is no longer available. ([#1454](https://github.com/Siteimprove/alfa/pull/1454))

### Added

- [@siteimprove/alfa-json](packages/alfa-json/CHANGELOG.md#0680): `Serializable` interface now optionally accepts serialization options. ([#1474](https://github.com/Siteimprove/alfa/pull/1474))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): `Position` now accept calculations in any of their components. ([#1454](https://github.com/Siteimprove/alfa/pull/1454))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0680), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): CSS `Shape` now accept calculated values. ([#1478](https://github.com/Siteimprove/alfa/pull/1478))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0680), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): CSS `Image` are now calculatable. ([#1477](https://github.com/Siteimprove/alfa/pull/1477))

- [@siteimprove/alfa-tree](packages/alfa-tree/CHANGELOG.md#0680): Optional serialization options type parameter added to abstract `Node` class. ([#1474](https://github.com/Siteimprove/alfa/pull/1474))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md#0680): `Document#toJSON` now optionally accepts serialization options containing device. ([#1474](https://github.com/Siteimprove/alfa/pull/1474))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): `Position.Side.of` now also accepts an optional offset, as well as an `Option<offset>`. ([#1454](https://github.com/Siteimprove/alfa/pull/1454))

### Changed

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md#0680): The `Position` type requires more type parameters. ([#1454](https://github.com/Siteimprove/alfa/pull/1454))

- [@siteimprove/alfa-cascade](packages/alfa-cascade/CHANGELOG.md#0680): `<button>`'s `background-color` now defaults to `buttonface`. ([#1472](https://github.com/Siteimprove/alfa/pull/1472))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0680): `<img>` elements are now considered as respecting their specified dimensions. ([#1485](https://github.com/Siteimprove/alfa/pull/1485))

## [0.67.0](../../compare/v0.66.0...v0.67.0) (2023-09-08)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0670): SIA-R6 is now deprecated, following ACT rules changes. ([#1461](https://github.com/Siteimprove/alfa/pull/1461))

### Added

- [@siteimprove/alfa-selector](packages/alfa-selector/CHANGELOG.md#0670): A function `isEmpty` to `Context` class. ([#1464](https://github.com/Siteimprove/alfa/pull/1464))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md#0670): A function for getting the bounding box of an element given a device. ([#1464](https://github.com/Siteimprove/alfa/pull/1464))

- [@siteimprove/alfa-toolchain](packages/alfa-toolchain/CHANGELOG.md#0670): Initial release of a package to handle the toolchain. ([#1462](https://github.com/Siteimprove/alfa/pull/1462))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0670): Color contrast rules, currently SIA-R66 and SIA-R69, can now tell which interposed elements can be ignored if layout is available. ([#1464](https://github.com/Siteimprove/alfa/pull/1464))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md#0670): SIA-R54 now ignores targets with no element descendant. ([#1465](https://github.com/Siteimprove/alfa/pull/1465))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md#0670): Name from content now correctly includes shadow DOM. ([#1470](https://github.com/Siteimprove/alfa/pull/1470))

## [v0.66.0](../../compare/v0.65.1...v0.66.0) (2023-08-09)

### Breaking

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): The `is-visible-shadow` predicate can now only be applied to canonical shadows (i.e. computed values of properties using `Shadow`). ([#1455](https://github.com/Siteimprove/alfa/pull/1455))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): CSS `rotate` and `skew` now convert their angles into degrees at build time. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The `Transform.parse` parser is now considered `@internal`. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

### Added
 
- [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md): `Parser.separatedList` now accepts optional `lower` and ` upper` numbers of items to parse. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

- [@siteimprove/alfa-parser](packages/alfa-parser/CHANGELOG.md): `Parser.parseIf` now also accepts a `Predicate` (not just a `Refinement`). ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Shadow` are now calculatable. ([#1455](https://github.com/Siteimprove/alfa/pull/1455))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): A `List.parseSpaceSeparated` parser is now available. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): CSS `transfrom` functions now accept calculations in any of their numerical components. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))


- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `List.parseCommaSeparated` and `List.parseSpaceSeparated` now accept optional `lower` and ` upper` numbers of items to parse. ([#1457](https://github.com/Siteimprove/alfa/pull/1457))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): SIA-R19 correctly searches for `id` in the full DOM tree again (instead of the subtree of the element). ([#1459](https://github.com/Siteimprove/alfa/pull/1459))

## [v0.65.1](../../compare/v0.65.0...v0.65.1) (2023-07-19)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Issue where R75 would incorrectly flag some elements with invisible text ([#1456](https://github.com/Siteimprove/alfa/pull/1456))

## [v0.65.0](../../compare/v0.64.0...v0.65.0) (2023-07-13)

### Breaking

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `List` and `Tuple` can now only contain other CSS `Value`. ([#1446](https://github.com/Siteimprove/alfa/pull/1446))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The `CALC` parameter of `Value` now defaults to `boolean` instead of `false`. ([#1443](https://github.com/Siteimprove/alfa/pull/1443))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The resolvers for `Length` and `Percentage` are now wrapped in an object. ([#1443](https://github.com/Siteimprove/alfa/pull/1443))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): Renamed public property `rectangle` to `box` which was overlooked in the last version ([#1440](https://github.com/Siteimprove/alfa/pull/1440))

### Removed

- [@siteimprove/alfa-aria](packages/alfa-aria/CHANGELOG.md), [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md), [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md), [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md), [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md), [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md), [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md): Many pieces of code are no longer exported. These were mostly internal exports that are no longer used in other files and should not impact intended usage of the packages. ([#1437](https://github.com/Siteimprove/alfa/pull/1437))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The `Gradient.parseItem` helper has been removed as it wasn't used. ([#1447](https://github.com/Siteimprove/alfa/pull/1447))
 
- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): The `@siteimprove/alfa-rules/FlattenedRules` export is no longer available. ([#1437](https://github.com/Siteimprove/alfa/pull/1437))

### Added

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): An abstraction for `AnglePercentage` is now available. ([#1443](https://github.com/Siteimprove/alfa/pull/1443))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Tuple` and `Value` can now be built of calculated values. ([#1446](https://github.com/Siteimprove/alfa/pull/1446))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): A `LengthPercentage` abstraction is now available. ([#1443](https://github.com/Siteimprove/alfa/pull/1443))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Function.parse` now also accepts a predicate instead of just a name to compare to. ([#1448](https://github.com/Siteimprove/alfa/pull/1448))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): CSS colors now accept calculated values. ([#1448](https://github.com/Siteimprove/alfa/pull/1448))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Value` can now resolve to a different `type` than the current one. ([#1443](https://github.com/Siteimprove/alfa/pull/1443))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): HSL and RGB colors now also accept the `none` keyword for any component when in modern syntax. ([#1448](https://github.com/Siteimprove/alfa/pull/1448))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): Support for optional `box` everywhere when constructing an `Element`. ([#1440](https://github.com/Siteimprove/alfa/pull/1440))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): A `Element.hasBox` predicate builder is now available. ([#1450](https://github.com/Siteimprove/alfa/pull/1450))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): All rules now have an explicit `Stability` tag. ([#1437](https://github.com/Siteimprove/alfa/pull/1437))
- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): CSS colors now accept calculated values. ([#1448](https://github.com/Siteimprove/alfa/pull/1448))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): SIA-R83 now has improved detection of containers large enough to not clip content. ([#1451](https://github.com/Siteimprove/alfa/pull/1451))
- 
- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): SIA-R13 is now inapplicable to `<iframe>` elements that are marked as decorative, following latest ACT rules changes. ([#1445](https://github.com/Siteimprove/alfa/pull/1445))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): `isVisible` now considers layout information. ([#1450](https://github.com/Siteimprove/alfa/pull/1450))


## [v0.64.0](../../compare/v0.63.3...v0.64.0) (2023-06-21)

### Breaking

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): New abstractions for calculatable numeric values (numbers, percentages, dimensions) are introduced and used in style properties. Currently, style properties only accept non-calculated numeric (except for some properties that already accepted calculated lengths or length-percentages and keep doing so). ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): The compound `Length` type has been removed from `alfa-style`. The `Length` type from `alfa-css/src/value/numeric` should be used instead. ([#1424](https://github.com/Siteimprove/alfa/pull/1424))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): the `NumberPercentage` abstraction, which doesn't exist in CSS, has been removed. ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): The `Resolver.percentage` helper has been removed. Instead, the `Percentage#resolve(base)` method (from `@siteimprove/alfa-css`) provides the same functionality. ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Deprecated R34 and R36 ([#1428](https://github.com/Siteimprove/alfa/pull/1428))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): The method `.elementDescendants()` on the classes `Document` and `Node` has been removed. In stead the function `Query.getElementDescendants()` should be used. ([#1425](https://github.com/Siteimprove/alfa/pull/1425))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): New abstractions for calculatable numeric values (numbers, percentages, dimensions) are introduced and used in style properties. Currently, style properties only accept non-calculated numeric (except for some properties that already accepted calculated lengths or length-percentages and keep doing so). ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The redundant second type parameter (Unit category) of Dimensions has been removed and is now automatically inferred from the first parameter (type string representation). ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The compound `Length` type has been removed from `alfa-style`. The `Length` type from `alfa-css/src/value/numeric` should be used instead. ([#1424](https://github.com/Siteimprove/alfa/pull/1424))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Math.resolve` now returns a `Result<Numeric, string>` instead of an `Option`. ([#1416](https://github.com/Siteimprove/alfa/pull/1416))

  - [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): No resolver is needed for `Math.resolve` on `Number` expressions.

  - [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): Math expression converters (`.toLength`, …) now return a `Result<T, string>` instead of an `option<T>`.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): The `Position.Center`, `Position.Horizontal`, `Position.Vertical` types have been grouped under the `Position.Keywords` namespace. ([#1431](https://github.com/Siteimprove/alfa/pull/1431))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Value` now require a `resolve` method. ([#1416](https://github.com/Siteimprove/alfa/pull/1416))

### Added

- [@siteimprove/alfa-wcag](packages/alfa-wcag/CHANGELOG.md): `Criterion.fromURI` now accepts URI with `/WCAG/` or `/WCAG21/` paths. ([#1435](https://github.com/Siteimprove/alfa/pull/1435))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): a `Longhand.fromKeywords` helper is now available to define longhands whose value can only be a list of keywords. ([#1431](https://github.com/Siteimprove/alfa/pull/1431))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): `List` and `Tuple` CSS values are now exported from `@siteimprove/alfa-css`. ([#1416](https://github.com/Siteimprove/alfa/pull/1416))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): A `List.parseCommaSeparated` helper is now provided, taking a value parser as input and returning a parser for list of values separated by commas.

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): `List` now implement the `Functor` interface.

- [@siteimprove/alfa-selective](packages/alfa-selective/CHANGELOG.md): `Selective.if()` now accepts any refinement and will refine to the intersection of its result and the value in the associated right side. ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-rectangle](packages/alfa-rectangle/CHANGELOG.md): New package for working with rectangles ([#1427](https://github.com/Siteimprove/alfa/pull/1427))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): Optional `Rectangle` property on `Element`. ([#1427](https://github.com/Siteimprove/alfa/pull/1427))

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): `Query` namespace with functions for querying element descendants and elements by id. ([#1413](https://github.com/Siteimprove/alfa/pull/1413))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): Most CSS value types now export a `Foo.Canonical` type which is the canonical representation of the type with calculations resolved, relative values absolutized, and dimensions converted to their canonical units. The `Canonical` type is normally the one used to represent computed values of style properties. ([#1432](https://github.com/Siteimprove/alfa/pull/1432))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Value` type now accepts a second boolean type parameter indicating whether the value may or not contain unresolved calculation.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `List` and `Tuple` CSS values are now exported from `@siteimprove/alfa-css`. ([#1416](https://github.com/Siteimprove/alfa/pull/1416))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): A `List.parseCommaSeparated` helper is now provided, taking a value parser as input and returning a parser for list of values separated by commas.

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `List` now implement the `Functor` interface.

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): `background-position-x` and `background-position-y` now correctly accept keyword values. ([#1431](https://github.com/Siteimprove/alfa/pull/1431))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): `text-shadow` now correctly accept `none`, or a list of shadows.

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): SIA-R78 now correctly has a scope of "Page". ([#1434](https://github.com/Siteimprove/alfa/pull/1434))


## [v0.63.3](../../compare/v0.63.2...v0.63.3) (2023-05-22)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): `Diagnostic.ElementDistsinguishable` is now exported. ([#1420](https://github.com/Siteimprove/alfa/pull/1420))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Correctly export `DistinguishingProperty` as `Diagnostic.ElementDistinguishable.Property`

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): a typo in `Diagnostic.Contrast` export was fixed. ([#1420](https://github.com/Siteimprove/alfa/pull/1420))

## [v0.63.2](../../compare/v0.63.1...v0.63.2) (2023-05-22)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Correctly exported the `ColorError` diagnostic. ([#1419](https://github.com/Siteimprove/alfa/pull/1419))

## [v0.63.1](../../compare/v0.63.0...v0.63.1) (2023-05-17)

### Fixed

- [@siteimprove/alfa-http](packages/alfa-http/CHANGELOG.md): Added missing dependencies ([#1418](https://github.com/Siteimprove/alfa/pull/1418))

- [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md): Added missing dependencies ([#1418](https://github.com/Siteimprove/alfa/pull/1418))

## [v0.63.0](../../compare/v0.62.2...v0.63.0) (2023-05-16)

### Breaking

- [@siteimprove/alfa-web](packages/alfa-web/CHANGELOG.md): Changed `Request#from`, `Response#from` and `Page#from` to return `Result<...>` ([#1395](https://github.com/Siteimprove/alfa/pull/1395))

- [@siteimprove/alfa-option](packages/alfa-option/CHANGELOG.md): Moved `Maybe` type out of `Option` namespace ([#1402](https://github.com/Siteimprove/alfa/pull/1402))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Linear.parse` and `Radial.parse` now require an item parser. ([#1412](https://github.com/Siteimprove/alfa/pull/1412))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Math.resolve` now returns a `Result<Numeric, string>` instead of an `Option`. ([#1406](https://github.com/Siteimprove/alfa/pull/1406))

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): No resolver is needed for `Math.resolve` on `Number` expressions.

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): `hasUniqueId` is now directly a `Predicate` ([#1408](https://github.com/Siteimprove/alfa/pull/1408))

- [@siteimprove/alfa-result](packages/alfa-result/CHANGELOG.md): Removed `Err#get` and `Ok#getErr` and added `Result#getUnsafe` and `Result#getErrUnsafe` ([#1395](https://github.com/Siteimprove/alfa/pull/1395))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Deprecate SIA-R18, SIA-R66, and SIA-R69 version 1 ([#1415](https://github.com/Siteimprove/alfa/pull/1415))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): The way style properties are defined and registered has been changed, including some changes in names. ([#1404](https://github.com/Siteimprove/alfa/pull/1404))

### Removed

- [@siteimprove/alfa-css](packages/alfa-css/CHANGELOG.md): `Math.parseLengthNumberPercentage` is no longer available. ([#1406](https://github.com/Siteimprove/alfa/pull/1406))

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom/CHANGELOG.md): `hasTabIndex` now also accepts number values ([#1409](https://github.com/Siteimprove/alfa/pull/1409))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Diagnostic subclasses have been added to the public API ([#1400](https://github.com/Siteimprove/alfa/pull/1400))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): A `withDocumentElement` helper is now available. ([#1407](https://github.com/Siteimprove/alfa/pull/1407))

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): New abstraction for math expressions ([#1406](https://github.com/Siteimprove/alfa/pull/1406))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): Deprecated rules SIA-DR62, SIA-DR91, SIA-DR92, SIA-DR93 and SIA-DR95 have been removed ([#1415](https://github.com/Siteimprove/alfa/pull/1415))

- [@siteimprove/alfa-rules](packages/alfa-rules/CHANGELOG.md): `isAriaControlsRequired` has been renamed to `isAriaControlsOptional` ([#1394](https://github.com/Siteimprove/alfa/pull/1394))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style/CHANGELOG.md): more style properties now accept calculations and math expressions as their value. ([#1411](https://github.com/Siteimprove/alfa/pull/1411))

## [0.62.0](../../compare/v0.61.0...v0.62.0) (2023-03-29)

### Breaking

- [@siteimprove/alfa-slice](packages/alfa-slice): `Slice#array` and `Slice#offset` have been made private as direct access to these could result in invalid slices. Use of `Slice#first`, `Slice#get`, or the predefined parsers combinators from [@siteimprove/alfa-parser](packages/alfa-parser) should replace these. ([#1367](../../pull/1367))

- [@siteimprove/alfa-act](packages/alfa-act): The `Q` type parameter, containing questions' metadata, is now enforced to have a meaningful shape everywhere; this should not break most usages since incorrect shape would result in `never` oracles. Rules that ask no questions now accept `any` as their oracle (since they never call it). ([#1376](../../pull/1376)) 

### Changed

- The various integrations and CLI packages have been moved to the [Siteimprove/alfa-integrations repository](https://github.com/Siteimprove/alfa-integrations). The packages will still be published on the Github registry and installed the same way. Version numbers will differ between the main packages and the integration packages. ([#1370](../../pull/1370))

- [@siteimprove/alfa-rules](packages/alfa-rules): The `Flattened` type has been reworked to produce the expected union. It should not default to `never` anymore. ([#1376](../../pull/1376)) 

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 and SIA-R19 now consider `aria-controls` as a required attribute on opened `combobox`. ([#1379](../../issues/1379), [#1381](../../pull/1381))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R13 now doesn't apply to `<iframe>` with negative `tabindex`, following the latest ACT rules changes. ([#1380](../../issues/1380), [#1386](../../pull/1386))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R44 now also checks the `rotate` property. ([#1378](../../issues/1378), [#1383](../../pull/1383))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R78 now accepts accordions headers (detected as containing a `button` or `link`, matching ARIA practices). ([#1363](../../issues/1363), [#1387](../../pull/1387))

## [0.61.0](../../compare/v0.60.0...v0.61.0) (2023-03-06)

In addition to the following changes, this release also contains caching of several frequently used methods, which should result in increased time performance for most cases (at the cost of extra memory usage).

### Added

- [@siteipmorev/alfa-dom](packages/alfa-dom): `Node.elementDescendants` is now available, returning all descendants that are also `Element`; for `Document`, this is cached for performance and should therefore be faster than the equivalent `Document.descendants().filter(isElement)` if used several time on the same `Document`. ([#1366](../../pull/1366)) 

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css): Fixed parsing of `Token` to properly handle advancing in the `Slice` even once it's been emptied; this could create unbounded recursion in some cases, notably when parsing strings ending with whitespace. ([#1365](../../pull/1365))  

## [0.60.0](../../compare/v0.59.0...v0.60.0) (2023-02-23)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom): Now uses an `exports` map which prevents importing from files in sub-directories. The exports map is mostly needed for `jsxImportSource` to work in projects using `type: module`. ([#1357](../../pull/1357))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 now consider that `aria-controls` is not required on `combobox`. This align with SIA-R19 behavior. ([#1340](../../issues/1340), [#1358](../../pull/1358))

### Added

- [@siteimprove/alfa-selector](packages/alfa-selector): The `:host` pseudo-class is now parsed. Alfa never matches any element with it yet, but CSS rules using it has part of the selector are not discarded anymore. ([#1347](../../issues/1347), [#1352](../../pull/1352)) 

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R10 now correctly accepts `webauthn` token in `autocomplete attribute. ([#1332](../../issues/1332), [#1339](../../pull/1339))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 now correctly consider that `<aside>` element not scoped to a sectionning content element have an implicit role of `complementary`. ([#1327](../../issues/1327), [#1355](../../pull/1355))

- [@siteimprove/alfa-style](packages/alfa-style): Fixed a parsing error where CSS variables whose value starts or ends with a whitespace could create a parsing failure in properties using them. ([#1291](../../issues/1291), [#1354](../../pull/1354))

## [0.59.0](../../compare/v0.58.0...v0.59.0) (2023-02-09)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules): The `transcript-perceivable` question has been removed, since it wasn't used by any rule. ([#1329](../../issues/1329), [#1336](../../pull/1336))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): Requirement mappings of SIA-R16, SIA-R47 and SIA-R95 have changed to align with the latest ACT rules versions. ([#1335](../../pull/1335))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style): Percentage `line-height` is now correctly computed according to the `font-size` of the element, not its parent. ([#1323](../../issues/1323), [#1334](../../pull/1334))

- [@siteimprove/alfa-rules](packages/alfa-rules): The text of the `has-caption`, `transcript`, and `transcript-link` questions has been improved to explicit that captions or transcript only matter if they are descriptive enough. ([#1329](../../issues/1329), [#1336](../../pull/1336))

## [0.58.0](../../compare/v0.57.3...v0.58.0) (2023-02-01)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules): The types and values exported by the `index` file have been reworked in a more intuitive way, see the associated pull request for details. ([#1330](../../pull/1330))

## [0.57.3](../../compare/v0.57.2...v0.57.3) (2023-01-31)

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER66 and SIA-ER69 now only ask `ignored-interposed-elements` about the ones encountered before the first non `interposed-descendant` problem is encountered. ([#1322](../../pull/1322))

## [0.57.2](../../compare/v0.57.1...v0.57.2) (2023-01-25)

### Fixed

- [@siteimprove/alfa-act](packages/alfa-act): Correctly serialize `outcome#mode` in EARL. ([#1321](../../pull/1321))

## [0.57.1](../../compare/v0.57.0...v0.57.1) (2023-01-25)

### Fixed

- [@siteimprove/alfa-act](packages/alfa-act): Revert an accidental breaking change from v0.57.0 where getter and JSON property `Outcome#outcome` was renamed to `Outcome#value`; it is back to `Outcome#outcome`. ([#1320](../../pull/1320))

## [0.57.0](../../compare/v0.56.0...v0.57.0) (2023-01-24)

### Added

- [@siteimprove/alfa-act](packages/alfa-act): `Outcome` now has a `mode` (automatic / semi-automatic)which records whether an oracle was successfully used for producing it. ([#1318](../../pull/1318))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R14 now considers Symbols (S) and format control (Cf) characters as non-text content. ([#1220](../../issues/1220), [#1316](../../pull/1316)) 

## [0.56.0](../../compare/v0.55.1...v0.56.0) (2023-01-20)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Added SIA-R110 checking that at least one token in a `role` attribute is valid. ([#1314](../../pull/1314))

- [@siteimprove/alfa-dom](packages/alfa-dom): `hasId` now also accepts an `Iterable<string>` as input. ([#1313](../../pull/1313))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R21 does not map to WCAG anymore, since incorrect role tokens are not a problem when a fallback exist. ([#1314](../../pull/1314))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R19 now requires that required Id ref (list) attributes point to existing elements. ([#1313](../../pull/1313))

## [0.55.1](../../compare/v0.55.0...v0.55.1) (2023-01-18)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER66 and SIA-ER69 now have improved detection of interposed descendants and ask more accurate questions. ([#1312](../../pull/1312))


## [0.55.0](../../compare/v0.54.0...v0.55.0) (2023-01-16)

### Added

- [@siteimprove/alfa-aria](packages/alfa-aria): The `generic` role is now supported and DOM elements with a `generic` role are mapped to `Container` ARIA nodes; prohibited attributes are now managed. ([#1205](../../issues/1205), [#1305](../../pull/1306), [#1310](../../pull/1310))

- [@siteimprove/alfa-act](packages/alfa-act): `Outcome` are now hashable. ([#1298](../../pull/1298))

- [@siteimprove/alfa-rules](packages/alfa-rules): Added SIA-R18 version 2 (as experimental) which rejects prohibited attributes. ([#1205](../../issues/1205), [#1310](../../pull/1310))

### Changed

- [@siteimprove/alfa-aria](packages/alfa-aria): ARIA data is now gathered from ARIA 1.2. ([#1205](../../issues/1205), [#1305](../../pull/1305))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R64 does not map to 2.4.6 anymore, following ACT rules. ([#1300](../../pull/1300))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R78 does not anymore consider empty text node as content. ([#1301](../../pull/1301))

- [@siteimprove/alfa-aria](packages/alfa-aria): Fixed `hasExplicitRole` predicate to work as intended when no argument is provided. ([#1306](../../pull/1306))

- [@siteimprove/alfa-aria](packages/alfa-aria): Added `<aside>` to the list of elements whose role depend on the presence of a name. ([#1306](../../pull/1306))

## [0.54.0](../../compare/v0.53.1...v0.54.0) (2023-01-03)

### Added

- [@siteimprove/alfa-style](packages/alfa-style): `margin-*` CSS properties are now supported. ([#1295](../../pull/1295))

### Changed

- [@siteimprove/alfa-style](packages/alfa-style): Content with large (negative) `margin-left` or `top` is now considered invisible. ([#1295](../../pull/1295))

- [@siteimprove/alfa-aria](packages/alfa-aria): `<object>` elements with non-empty `data` attribute are now exposed even without any `role` or `aria-*` attribute. ([#1285](../../issues/1285), [1297](../../pull/1297))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R63 now correctly considers only `<object>` whose MIME type is audio, image, or video; MIME type is guessed from the `type` attribute or the file extension in the `data` attribute. ([#1297](../../pull/1297))

## [0.53.1](../../compare/v0.53.0...v0.53.1) (2022-12-14)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R45 is no longer applicable to `<table>` elements whose role is not `table`. ([#1292](../../pull/1292))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R47 is not mapping anymore to 1.4.10. ([#1293](../../pull/1293))

## [0.53.0](../../compare/v0.52.1...v0.53.0) (2022-12-02)

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now also check contrast of text inside widgets (in their default state). ([#1275](../../pull/1275))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R95 version 1 is now deprecated (use SIA-DR95); SIA-R95 version 2 has essentially swapped Applicability and Expectation, following the ACT rules changes. ([#1277](../../pull/1277))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R47 is now only applicable to to `<meta viewport>` element defining one of the "interesting" properties. ([#1278](../../pull/1278))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R65 now also applies to page with a single focusable element. ([#1276](../../pull/1276))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): `<img>` elements with no or empty `src` attribute now have an implicit role of `presentation`. ([#1242](../../issues/1242), [#1273](../../pull/1273))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 now accepts content inside `(alert)dialog`; and any descendant of the first focusable element. ([#1247](../../issues/1247), [#1272](../../issues/1272), [#1274](../../pull/1274), [#1284](../../pull/1284))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R65 now correctly compares only properties values, not their source. ([#1279](../../pull/1279))

## [0.52.1](../../compare/v0.52.0...v0.52.1) (2022-11-28)

### Fixed

- Added some missing internal dependencies between packages. ([#1282](../../pull/1282))

## [0.52.0](../../compare/v0.51.0...v0.52.0) (2022-11-18)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Version 2 of rules SIA-R91, SIA-R92, and SIA-R93 is now available; it targets the text node rather than the `style` attribute, thus simplifying the text spacing computation and comparison. ([#1269](../../pull/1269))

- [@siteimprove/alfa-dom](packages/alfa-dom): Style `Declaration` in a `style` attribute now have an `owner` property pointing to the `element` owning the attribute. ([#1269](../../pull/1269))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): Version 1 of rules SIA-R91, SIA-R92, and SIA-R93 is now deprecated. ([#1269](../../pull/1269))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): Accessible name computation from `aria-labelledby` correctly include hidden descendant if the reference was itself hidden. ([#1236](../../issues/1236), [#1267](../../pull/1267))

## [0.51.0](../../compare/v0.50.0...v0.51.0) (2022-11-08)

### Breaking

- [@siteimprove/alfa-style](packages/alfa-style): `Style` objects now use (and export) Alfa's `Map` rather than native `ReadonlyMap`. ([#1259](../../pull/1259))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style): `isVisible` now correctly considers text whose color is the same as their background as invisible. ([#1251](../../issues/1251), [#1255](../../pull/1255))

- [@siteimprove/alfa-style](packages/alfa-style): Improved detection of empty elements with a background, that are stretched to occupy all the parent's box. ([#1261](../../pull/1261))

- [@siteimprove/alfa-style](packages/alfa-style): Improved detection of circular definition of inherited CSS variables, resulting in a huge performance boost in some corner cases. ([#1259](../../pull/1259))

## [0.50.0](../../compare/v0.49.0...v0.50.0) (2022-11-02)

## Added

- [@siteimprove/alfa-collection](packages/alfa-collection): All `Collection` subtypes now implement a `#tee` method, to evaluate a callback on the collection's content. ([#1253](../../pull/1253))

- [@siteimprove/alfa-rules](packages/alfa-rules): Version 2 of SIA-R66 and SIA-R69 are provided as experimental versions. These ask which interposed elements should be ignored while computing colors. ([#1253](../../pull/1253))

## Fixed

- [@siteimprove/alfa-style](packages/alfa-style): Undefined CSS variables are now correctly searched for inherited value before using fallback value. ([#1246](../../pull/1246))

## [0.49.0](../../compare/v0.48.0...v0.49.0) (2022-10-18)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules): `isVersion` type guard does not anymore accept an optional second parameter (it was redundant with the test). ([#1244](../../pull/1244))

### Added

- [@siteimprove/alfa-css](packages/alfa-css): Support for the `max()` function is now provided. ([#1241](../../pull/1241))

- [@siteimprove/alfa-array](packages/alfa-array): `Array.append` and `Array.prepend` are now typed as returning an array with at least one element; `Array.every` now accepts a `Refinement` and narrows the input type accordingly. ([#1241](../../pull/1241))

- [@siteimprove/alfa-parser](packages/alfa-parser): `Parser.separatedList` is now typed as returning an array with at least one element. ([#1241](../../pull/1241))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style): `isVisible` now correctly considers text nodes as invisible when their parent has `visibility` other than `visible`. ([#1243](../../pull/1243))

- [@siteimprove/alfa-css](packages/alfa-css): Parsing of CSS functions now accepts whitespace immediatly inside the parentheses. ([#1241](../../pull/1241))

## [0.48.0](../../compare/v0.47.0...v0.48.0) (2022-10-13)

### Breaking

- [@siteimprove/alfa-option](packages/alfa-option): `None.get()` has been removed; `Some.get()` still exists; a new `Option.getUnsafe()` is having the same behaviour as the old `Option.get()`, making the risk of uncuaght exception obvious. See the pull request for details. ([#1234](../../pull/1234))

- [@siteimprove/alfa-css](packages/alfa-css): `Calculation` are renamed as `Math` as they should also include other math expression; the full code around here has been refactored with several changes in namespaces; see the pull requests for details. ([#1239](../../pull/1239), [#1240](../../pull/1240))

### Added

- [@siteimprove/alfa-result](packages/alfa-result): `Result.getErrOr` and `Result.getErrOrElse` are now avalaible. ([#1235](../../pull/1235))
 

## [0.47.0](../../compare/v0.46.0...v0.47.0) (2022-10-03)

### Breaking

- [@siteimprove/alfa-rule](packages/alfa-rules): `getColors` (SIA-R66 and SIA-R69) now returns all problems it encounters when grabbing colors, instead of stopping at the first one. ([#1232](../../pull/1232))

### Added 

- [@siteimprove/alfa-selector](packages/alfa-selector): A `Context#withState` iterator is added, to list the elements of a context that match a given context state. ([#1231](../../pull/1231))

### Fixed

- [@siteimprove/alfa-selector](packages/alfa-selector): Performance improvement for the matching of `:hover` and `:focus-within` selectors. ([#1231](../../pull/1231))

## [0.46.0](../../compare/v0.45.0...v0.46.0) (2022-09-27)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R17, SIA-R55, SIA-R60, SIA-R61, SIA-76, SIA-R78, SIA-R90, SIA-R95 now provide an extended diagnostic with their outcome. ([#1222](../../issues/1222), [#1224](../../pull/1224))

- [@siteimprove/alfa-option](packages/alfa-option): `Option#forEach` is now provided. ([#1224](../../pull/1224))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 now correctly considers that nameless `<form>` and `<section>` are not landmarks. ([#1225](../../issues/1225), [#1226](../../pull/1226))

## [0.45.0](../../compare/v0.44.0...v0.45.0) (2022-09-16)

Only internal changes to the release pipeline.

## [0.44.0](../../compare/v0.43.2...v0.44.0) (2022-09-13)

### Added

- [@siteimprove/alfa-css](packages/alfa-css): `Calculation` now also accept length only (not length-percentage) values. ([#1219](../../pull/1219))

- [@siteimprove/alfa-style](packages/alfa-style): `outline-offset` and `outline-width` now accept `calc` values. ([#1219](../../pull/1219))

## [0.43.2](../../compare/v0.43.1...v0.43.2) (2022-09-05)

### Breaking

- [@siteimprove/alfa-css](packages/alfa-css): Easier support for `calc` expression is added, which require the type of the expression to be passed as a parameter of the `Calculation` type; the type hierarchy for `Numeric` types has been reworked. Check the pull request for details. ([#980](../../issues/980), [#1201](../../pull/1201))

### Added

- [@siteimprove/alfa-style](packages/alfa-style): The `line-height` property now accepts `calc` expressions. ([#1201](../../pull/1201))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R41 and SIA-R81 now correctly compute their test target instead of randomly dropping some groups when other links have the same name. ([#1217](../../pull/1217))

- [@siteimprove/alfa-selector](packages/alfa-selector): The `:hover` CSS selector now matches any ancestor of the element with the hovered context. ([#1158](../../issues/1158), [#1206](../../pull/1206))

- [@siteimprove/alfa-aria](packages/alfa-aria): Improved computation of name from content by adding spaces around the text of `display: block` descendants. ([#1054](../../pull/1054), [#1200](../../pull/1200)) 


## [0.43.1](../../compare/v0.43.0...v0.43.1) (2022-07-26)

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): Fixed a regression in the role of `<select>` elements. ([#1204](../../pull/1204))

## [0.43.0](../../compare/v0.42.1...v0.43.0) (2022-07-22)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): The diagnostic of SIA-R53 now correctly exposes the `previous` heading. ([#1199](../../pull/1199))

- [@siteimprove/alfa-css](packages/alfa-css): `Numeric` CSS types now have a `.scale` method, keeping the underlying type and unit. ([#1195](../../pull/1195)) 

- [@siteimprove/alfa-style](packages/alfa-style): A `Percentage` resolver is added. `Length` and `Percentage` resolvers can be curryfied. ([#1195](../../pull/1195))

### Changed

- [@siteimprove/alfa-array](packages/alfa-array), [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-iterable](packages/alfa-iterable), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-sequence](packages/alfa-sequence), [@siteimprove/alfa-slice](packages/alfa-slice): The type of `sortWith` has been improved to accept a `Comparer` on a super type of the elements but keep the type of the elements in the result. ([#1198](../../pull/1198))

## [0.42.1](../../compare/v0.42.0...v0.42.1) (2022-07-21)

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): The type `Flattened.Rule`, supertype for every rule, is now exported. ([#1197](../../pull/1197))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R19 now correctly accepts signed numbers for `aria-*` attributes. ([#1183](../../issues/1183), [#1196](../../pull/1196))

## [0.42.0](../../compare/v0.41.0...v0.42.0) (2022-07-21)

### Breaking

- [@siteimprove/alfa-aria](packages/alfa-aria): `isPerceivable` has been renamed `isPerceivableForAll`, matching its intent; the negation of `isIgnored`, named `isIncludedInTheAccessibilityTree`, has been added as it's a frequent use case. ([#1178](../../pull/1178))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 version 1 is now deprecated and will be removed in a later release; SIA-R62 version 2 is now the stable version and should be imported from `Rules`, not `experimentadlRules`. ([#1143](../../issues/1143), [#1180](../../pull/1180))

- [@siteimprove/alfa-formatter](packages/alfa-formatter), [@siteimprove/alfa-formatter-earl](packages/alfa-formatter-earl), [@siteimprove/alfa-formatter-json](packages/alfa-formatter-json), [@siteimprove/alfa-formatter-sarif](packages/alfa-formatter-sarif): Formatters are now allowed to be synchronous again. The JSON and SARIF formatters are synchronous again. The JSON formatter returns a `Future` rather than a `Promise`. ([#1194](../../pull/1194))


### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R65 now exports in its extended diagnostic the classes matching the targets, and the number of matches of targets and non-targets. ([#1161](../../issues/1161), [#1164](../../pull/1164))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R53 now exports the previous heading in its extended diagnostic. ([#1187](../../issues/1187), [#1188](../../pull/1188))

### Changed

- [@siteimprove/alfa-array](packages/alfa-array): `Array.sortWith` now keeps the type of elements even if the comparer function accepts super-type arguments. ([#1189](../../pull/1189))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R78 now correctly only searches for accessible content between accessible headings. ([#1039](../../issues/1039), [#1138](../../issues/1138), [#1179](../../pull/1179))

- [@siteimprove/alfa-rules](packages/alfa-rules): `getForeground` (SIA-R66, SIA-R69) now automatically resolves `currentcolor`. ([#1174](../../issues/1174), [#1182](../../pull/1182))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 now correctly only applies to elements with an explicit role. ([#949](../../issues/949), [#1185](../../pull/1185))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now correctly ignore texts that are used in the name of disabled widgets. ([#1149](../../issues/1149), [#1191](../../pull/1191))

- [@siteimprove/alfa-aria](packages/alfa-aria): `<input>` elements with a type of `button`, `reset` or `submit` can now correctly be named by a `<label>` element. ([#1193](../../pull/1193)) 

- [@siteimprove/alfa-aria](packages/alfa-aria): Elements that have `visibility: hidden` are now correctly ignored when computing name from content. ([#1193](../../pull/1193))

- [@siteimprove/alfa-aria](packages/alfa-aria): Names computed from `aria-labelledby` are now correctly concatenated in the order of tokens in the attribute, not in DOM order ([#1193](../../pull/1193))

## [0.41.0](../../compare/v0.40.0...v0.41.0) (2022-06-30)

### Breaking

- [@siteimprove/alfa-formatter](packages/alfa-formatter), [@siteimprove/alfa-formatter-earl](packages/alfa-formatter-earl), [@siteimprove/alfa-formatter-json](packages/alfa-formatter-json), [@siteimprove/alfa-formatter-sarif](packages/alfa-formatter-sarif): Formatters are now asynchronous.([#1167](../../pull/1167))

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R42 and SIA-R68 now export the role of the target in their diagnostic. ([#1171](../../pull/1171))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R75 now exports the declaration with the offending style in its diagnostic. ([#1172](../../pull/1172))

### Changed

- [@siteimprove/alfa-formatter-earl](packages/alfa-formatter-earl): EARL output is now using compact JSON-LD (sharing a single `@context` at top level). ([#1150](../../issues/1150), [#1167](../../pull/1167))

## [0.40.0](../../compare/v0.39.1...v0.40.0) (2022-06-22)

### Breaking

- [@siteimprove/alfa-aria](packages/alfa-aria), [@siteimprove/alfa-dom](packages/alfa-dom): ARIA trees and DOM trees are now built on top of the abstract tree representation; their traversal options are now sets of flags as defined in `alfa-flags`. ([#1153](../../pull/1153))

### Added

- [@siteimprove/alfa-flags](packages/alfa-flags): A new package has been added to represent sets of boolean flags. ([#1153](../../pull/1153))

- [@siteimprove/alfa-tree](packages/alfa-tree): A new package has been added to abstract trees and tree traversal operations. ([#1153](../../pull/1153))


### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): Mapping of some rules to WCAG have been adapted to the latest ACT-R changes. ([#1155](../../issues/1155), [#1163](../../pull/1163))

## [0.39.1](../../compare/v0.39.0...v0.39.1) (2022-06-09)

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css): Fixed a bug in the lexer that sometimes caused Alfa to drop the character following a `#`. ([#1156](../../pull/1156))

## [0.39.0](../../compare/v0.38.1...v0.39.0) (2022-06-01)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now ignore interposed descendants with a fully transparent background. ([#1118](../../issues/1118), [#1130](../../pull/1130))

### Fixed

- [@siteimprove/packages/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now ignore `box-shadow` that are obviously invisible (transparent color; or no offset, spread, nor blur). ([#1120](../../issues/1120), [#1141](../../pull/1141))

- [@siteimprove/alfa-aria](packages/alfa-aria): DOM nodes that are not rendered but referenced by `aria-owns` from another node are now correctly removed from the accessibility tree. ([#1111](../../issues/1111), [#1151](../../pull/1151))

## [0.38.1](../../compare/v0.38.0...v0.38.1) (2022-05-18)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER62 now correctly handle rare cases of nested paragraph with no non-link content inside. ([#1147](../../pull/1147))

## [0.38.0](../../compare/v0.37.0...v0.38.0) (2022-05-04)

### Fixed

- [@siteimprove/alfa-selector](packages/alfa-selector): `:focus-visible` selector now correctly matches only focused elements. ([#1135](../../pull/1135))
  
- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER62 now does not consider fully transparent background (no image, no color) on a link as a distinguishing factor. ([#1131](../../issues/1131), [#1134](../../pull/1134))

## [0.37.0](../../compare/v0.36.0...v0.37.0) (2022-04-28)

### Breaking
- [@siteimprove/alfa-aria](packages/alfa-aria), [@siteimprove/alfa-dom](packages/alfa-dom), [@siteimprove/alfa-rules](packages/alfa-rules), [@siteimprove/alfa-style](packages/alfa-style): Moves helpers and predicates from `alfa-rules` to `alfa-dom`, `alfa-style`, and `alfa-aria` ([#1121](../../pull/1121))

### Changed
- [@siteimprove/alfa-dom](packages/alfa-dom): DOM nodes' `.path` attribute is now cached for perfomance improvements ([#1132](../../pull/1132))  

## [0.36.0](../../compare/v0.35.0...v0.36.0) (2022-04-01)

### Breaking

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): Diagnostics in `Question` is now optional ([#1035](../../issues/1035), [#1115](../../pull/1115))
- [@siteimprove/alfa-act](packages/alfa-act): Rename `Rule.Event`'s `start` and `end` functions' name parameter to `total` from `rule` ([#1124](../../pull/1124))
- [@siteimprove/alfa-protractor](packages/alfa-protractor): Remove `alfa-protractor` package ([#1058](../../issues/1058), [#1117](../../pull/1117))

### Added

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): An optional fallback answer to `Question` is added ([#1035](../../issues/1035), [#1115](../../pull/1115))
- [@siteimprove/alfa-rules](packages/alfa-rules): Experimental version of SIA-R65 called SIA-ER65 is added ([#1035](../../issues/1035), [#1115](../../pull/1115))

### Changed

- [@siteimprove/alfa-cascade](packages/alfa-cascade), [@siteimprove/alfa-dom](packages/alfa-dom), [@siteimprove/alfa-media](packages/alfa-media), [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now accepts font relative media queries as handling overflow ([#941](../../issues/941), [#1116](../../pull/1116))

## [0.35.0](../../compare/v0.34.0...v0.35.0) (2022-03-24)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Export type predicates for diagnostics ([#1106](../../issues/1106), [#1107](../../issues/1107), [#1114](../../pull/1114))

### Changed

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): Flatten R82 to bound the interview's depth and add depth type parameter to expectation helper to allow type hints from callers ([#1073](../../pull/1073))
- [@siteimprove/alfa-cascade](packages/alfa-cascade), [@siteimprove/alfa-dom](packages/alfa-dom), [@siteimprove/alfa-rules](packages/alfa-rules): Pre-parse media and import rules when building style tree ([#1071](../../issues/1071), [#1110](../../pull/1110))
- [@siteimprove/alfa-rules](packages/alfa-rules): Remove the `hidden` attribute condition from `isProgrammaticallyHidden` ([#1091](../../issues/1091), [#1097](../../pull/1097))
- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R82: `error-indicator-describing-resolution` and `error-indicator-identifying-form-field` are now `node` types ([#1073](../../pull/1073))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): Remove `aria-*` attributes that are no longer global in ARIA 1.2 ([#947](../../issues/947), [#1102](../../pull/1102))
- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R18 now accepts attributes allowed by ARIA in HTML ([#856](../../issues/856), [#1087](../../pull/1087))
- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R55 and SIA-R56 now ignore `form` and `section` with no name ([#1079](../../issues/1079), [#1108](../../pull/1108))
- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R11 now applies to role inheriting from `link` ([#1103](../../issues/1103), [#1109](../../pull/1109))

## [0.34.0](../../compare/v0.33.0...v0.34.0) (2022-03-04)

### Breaking

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): The `cantTell` outcomes now contain diagnostics ([#1034](../../issues/1034), [#1098](../../pull/1098))

- [@siteimprove/alfa-rules](packages/alfa-rules): `Contrast.Pairing` fields describing colors are no longer `RGB` type, instead they are now encapsulated in a new `Color` interface ([#1066](../../issues/1066), [#1078](../../pull/1078))

### Changed

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-assert](packages/alfa-assert), [@siteimprove/alfa-performance](packages/alfa-performance), [@siteimprove/alfa-rules](packages/alfa-rules): There is now improved performance management in `alfa-act` ([#1086](../../pull/1086))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R23, SIA-R24 and SIA-R33 now only ask for the `transcript-link` ([#1059](../../issues/1059), [#1068](../../pull/1068))

- [@siteimprove/alfa-rules](packages/alfa-rules): Simplification of the expectation helper by removing `toExpectation` ([#1099](../../pull/1099))

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom): `tabindex` is now parsed according to the HTML specification ([#813](../../issues/813), [#1067](../../pull/1067))

- [@siteimprove/alfa-media](packages/alfa-media): Range media queries now accept `0` as `0px` ([#986](../../issues/986), [#1084](../../pull/1084))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R54 now parses `aria-atomic` case insensitively ([#1083](../../pull/1083))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now ignores text in `<option>` in single-line `<select>` ([#984](../../issues/984), [#1077](../../pull/1077))

- [@siteimprove/alfa-rules](packages/alfa-rules): `isClipped` recurses to offset parent and fix masking comparison ([#887](../../issues/887), [#1095](../../pull/1095))

## [0.33.0](../../compare/v0.32.0...v0.33.0) (2022-02-15)

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom): Nodes now expose a `#type` getter. ([#1074](../../issues/1074), [#1075](../../pull/1075))

## [0.32.0](../../compare/v0.31.0...v0.32.0) (2022-02-14)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom): The `.path` field has been removed from DOM serialisation due to performance issues; the `MediaRule#queries` getter has also been removed due to poor design. ([#1061](../../pull/1061)).

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R7 now also considers text in accessible names. ([#893](../../issues/893), [#1063](../../pull/1063))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R84 now correctly ignores browser context containers. ([#979](../../issues/979), [#1065](../../pull/1065))

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): The extended diagnostic of SIA-ER62 now tells which of the checked properties are distinguishing. ([#1044](../../issues/1044), [#1053](../../pull/1053))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now include an extended diagnostic in the questions they ask. ([#1033](../../pull/1033))

## [0.31.0](../../compare/v0.30.0...v0.31.0) (2022-02-03)

### Added

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): The `Question` type now accepts a `Diagnostic` to provide extra information why Alfa is asking; the `Question.of` helper accepts an optional `Diagnostic` argument. ([#1027](../../pull/1027), [#1056](../../pull/1056))

- [@siteimprove/alfa-dom](packages/alfa-dom): The JSON serialization of nodes now includes a `path` field. ([#1025](../../pull/1025))

- [@siteimprove/alfa-dom](packages/alfa-dom): `MediaRule` now pre-parse their media queries and expose them as `MediaRule#queries`. ([#1051](../../pull/1051))

- [@siteimprove/alfa-rules](packages/alfa-rules): Rules now accept a `Version` tag, to track breaking changes. Experimental version of existing rules are tagged with version 2. ([#1043](../../issues/1043), [#1047](../../pull/1047))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R75 now ignores `font-size` of `<sub>` and `<sup>` elements. ([#971](../../issues/971), [#1050](../../pull/1050))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R47 now correctly parses the value of the `<meta>` `content` attribute case-insensitively. ([#969](../../issues/969), [#1040](../../pull/1040))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER62 now only applies to link whose text color is different from the surrounding text. ([#951](../../issues/951), [#1031](../../pull/1031))

- [@siteimprove/alfa-rules](packages/alfa-rules): Elements which are stretched (by absolute positioning and setting both `top`/`bottom` and `left`/`right`) are now considered as visible. ([#985](../../issues/985), [#1045](../../pull/1045))

- [@siteimprove/alfa-rules](packages/alfa-rules): Descendants of media elements that are used as fallback content for legacy browsers are now considered as not rendered. ([#1017](../../issues/1017), [#1041](../../pull/1041))

## [0.30.0](../../compare/v0.29.0...v0.30.0) (2022-01-11)

### Breaking

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules): `Rule`, and associated `alfa-act` types, now use their `QUESTION` type variable to link questions' URI to the expected answer type (instead of just linking the type representation to the type); see the associated Pull Request for details. ([#1018](../../issues/1018), [#1020](../../pull/1020))

- [@siteimprove/alfa-rules](packages/alfa-rules): Questions now need to be pre-registered by their URI. The parameters of `Question.of` have changed (`type` is not needed, `message` is optional and moved to last). ([#1020](../../pull/1020))

- [@siteimprove/alfa-act](packages/alfa-act): Oracles should not anymore wrap their results in `question.answer`; `Interview.conduct` is now doing it automatically. ([#1020](../../pull/1020))

- [@siteimprove/alfa-rules](packages/alfa-rules): The `color` type of questions, which was not used, has been removed. ([#1020](../../pull/1020))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R82 is now marked as experimental. ([#1020](../../pull/1020))

## [0.29.0](../../compare/v0.28.0...v0.29.0) (2022-01-04)

### Added

- [@siteimprove/alfa-assert](packages/alfa-assert): `Assertion.Options` now accepts an `Oracle` to answer questions, and a predicate to filter `cantTell` result (default is to remove all of them). ([#1012](../../issues/1012), [#1013](../../pull/1013))

## [0.28.0](../../compare/v0.27.0...v0.28.0) (2021-12-14)

### Added

- [@siteimprove/alfa-act](packages/alfa-act): `hasRequirement` now also accepts a predicate as argument. ([#1009](../../pull/1009))

- [@siteimprove/alfa-rules](packages/alfa-rules): All rules now have a tag of either `Scope.Component` or `Scope.Page`. ([#993](../../issues/993), [#1010](../../pull/1010))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-ER62 now considers that a 3:1 contrast ratio between link text and surrounding text is a distinguishing factor. ([#796](../../issues/796), [#998](../../pull/998))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R109 is now considered as experimental. ([#1006](../../pull/1006))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R76 and SIA-R77 are now correctly exported. ([#1006](../../pull/1006))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R75 now correctly compares style declarations with reference rather than structural equality. ([#1006](../../pull/1006))

## [0.27.0](../../compare/v0.26.0...v0.27.0) (2021-12-08)

### Breaking

- [@siteimprove/alfa-css](packages/alfa-css): The order of horizontal and vertical offsets in the `Shadow` value has been swapped, now matching the order in CSS specifications. ([#1004](../../pull/1004))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): `<input type="image">` elements now accept `title` as a way to provide an accessible name, following specifications and ACT rules test cases. ([#1003](../../pull/1003))

## [0.26.0](../../compare/v0.25.0...v0.26.0) (2021-12-03)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): A family of `Stability` tags has been added, rules tagged with `Stability.Experimental` uses newer features and are subject to change without notice. ([#994](../../pull/994))

- [@siteimprove/alfa-wcag](packages/alfa-wcag): A `fromURI` function is now available to retrieve a Success Criterion from its URI. ([#996](../../pull/996))

- [@siteimprove/alfa-rules](packages/alfa-rules): Experimental rules ER62 and ER87 have been added. ([#994](../../pull/994))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R28 now rejects the default name of "Submit Query" on `<input type="image">` elements. ([#973](../../issues/973), [#989](../../pull/989))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): The `isClipped` predicate, part of `isVisible`, now correctly jumps to offset parents. ([#887](../../issues/887), [#964](../../pull/964))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R14 now correctly ignores punctuation. ([#972](../../issues/972), [#991](../../pull/991))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now accepts differences in `box-shadow` as a distinguishing factor. ([#888](../../issues/888), [#967](../../pull/967))

- [@siteimprove/alfa-style](packages/alfa-style): Fixed several issues in parsing of `box-shadow`. ([#967](../../pull/967))

## [0.25.0](../../compare/v0.24.1...v0.25.0) (2021-11-19)

### Added

- [@siteimprove/alfa-styles](packages/alfa-style): The `cursor` CSS property is now supported. ([#844](../../issues/844), [#946](../../pull/946))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): Fixed a regression on SIA-R14; it now again consider that non-perceivable text is non-essential and therefore excludes it from labels. ([#983](../../pull/983))

## [0.24.1](../../compare/v0.24.0...v0.24.1) (2021-11-12)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): The extended diagnostic class of SIA-R83 is now `export`ed. ([#981](../../pull/981))

## [0.24.0](../../compare/v0.23.2...v0.24.0) (2021-11-12)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now exports the found clipping ancestors in its diagnostic. ([#976](../../pull/976))

- [@siteimprove/alfa-style](packages/alfa-style): The `min-height` and `min-width` CSS properties are now supported. ([#977](../../pull/977))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now considers that elements with a font-relative `height`, `width`, `min-height` or `min-width` fully handle the corresponding overflow. ([#977](../../pull/977))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 row ignores non-link text which is whitespace only. ([#950](../../issues/950), [#965](../../pull/965))

- [@siteimprove/alfa-media](packages/alfa-media): Fixed a faulty boundary condition causing inclusive ranges to be matched exclusively and reciprocally. ([#978](../../pull/978))

## [0.23.2](../../compare/v0.23.1...v0.23.2) (2021-10-27)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R14 now computes visible labels according to the `innerText` algorithm. ([#833](../../issues/833), [#938](../../pull/938))

- [@siteimprove/alfa-map](packages/alfa-map): Fixed a rare bug when deleting items in a `Map` could result in some other items becoming unreachable; see the Pull Request for details. ([#962](../../pull/962))

## [0.23.1](../../compare/v0.23.0...v0.23.1) (2021-10-15)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 now accepts native `<input type="text" list="datalist" />` as valid comboboxes. ([#948](../../pull/948))

- [@siteimprove/alfa-style](packages/alfa-style): The `clip` property now correctly computes to `auto` for non absolutely positioned elements. ([#847](../../issues/847), [#930](../../pull/930))

## [0.23.0](../../compare/v0.22.7...v0.23.0) (2021-10-04)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): An implementation of SIA-R77 is now available. ([#841](../../issues/841), [#923](../../pull/923))

- [@siteimprove/alfa-thenable](packages/alfa-thenable): The `Thenable` type now provides the same helper functions as `Promise` and `Future`. ([#935](../../pull/935))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now correctly finds clipping ancestors of relatively positioned elements. ([#939](../../pull/939))

## [0.22.7](../../compare/v0.22.6...v0.22.7) (2021-09-30)

### Added

- [@siteimprove/alfa-style](packages/alfa-style): The CSS properties `flex-direction` and `flex-flow` are now supported. ([#934](../../pull/934))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R91, SIA-R92, and SIA-R93 now correctly handle change of properties between the element containing the declaration and the text. ([#897](../../issues/897), [#917](../../pull/917))

## [0.22.6](../../compare/v0.22.5...v0.22.6) (2021-09-29)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R21 now targets `role` attributes on elements with no role. ([#895](../../issues/895), [#916](../../pull/916))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now ignores `overflow` property on `<body>` elements, and consider that containers with `flex-wrap: wrap` definitely handle horizontal overflow. ([#932](../../pull/932))

## [0.22.5](../../compare/v0.22.4...v0.22.5) (2021-09-23)

## [0.22.4](../../compare/v0.22.3...v0.22.4) (2021-09-23)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now does not consider that fixed height element can be clipped by an ancestor. ([#928](../../pull/928))

## [0.22.3](../../compare/v0.22.2...v0.22.3) (2021-09-20)

## [0.22.2](../../compare/v0.22.1...v0.22.2) (2021-09-20)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now correctly separate detection of horizontal and vertical overflows, correctly considers interposed elements that handle overflow, and correctly restrict text overflow to text nodes parent. ([#908](../../issues/908), [#921](../../issues/921), [#922](../../issues/922), [#924](../../pull/924))

## [0.22.1](../../compare/v0.22.0...v0.22.1) (2021-09-17)

### Fixed

- [@siteimprove/alfa-collection](packages/alfa-collection): The `Indexed#compare()` method is now correctly typed and no longer double wraps its `T` as `Comparable<Comparable<T>>`.

- [@siteimprove/alfa-option](packages/alfa-option), [@siteimprove/alfa-result](packages/alfa-result): The existential methods on `Option<T>` and `Result<T, E>`, such as `#includes()`, `#some()`, and `#every()`, now correctly narrow types.

## [0.22.0](../../compare/v0.21.2...v0.22.0) (2021-09-13)

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R60, SIA-R70, SIA-R76, SIA-R79, and SIA-R109 are now available. ([#869](../../pull/869), [#870](../../pull/870), [#874](../../pull/874), [#901](../../pull/901), [#910](../../pull/910))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `text-align` CSS property. ([#899](../../pull/899))

- [@siteimprove/alfa-act](packages/alfa-act): A type for rhetorical questions, whose answer is contained in the question, is added, together with `Question.answerIf` to conditionally answer questions. ([#903](../../pull/903))

- [@siteimprove/alfa-tuple](packages/alfa-tuple): A package for handling heterogeneous array is now available. ([#894](../../pull/894))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now accepts differences in `text-align` as a distinguishing feature. ([#823](../../issues/823), [#900](../../pull/900))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R10 now isn't applicable on `on`/`off` `autocomplete` attribute; and doesn't check whether the `autocomplete` tokens are appropriate for the `<input>` type. ([#891](../../issues/891), [#911](../../pull/911))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R87 now returns `cantTell` instead of failing automatically when it cannot determine whether the first focusable element is visible on focus. ([#757](../../issues/757), [#902](../../pull/902))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R7 now ignores `lang` attributes that only affect whitespace. ([#892](../../issues/892), [#905](../../pull/905))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now return `cantTell` when detecting a non-ancestral background that is asolutely positioned. ([#758](../../issues/758), [#907](../../pull/907))

- [@siteimprove/alfa-aria](packages/alfa-aria): The `value` attribute of `<input>` element is now correctly mapped to `aria-valuenow`. ([#909](../../issues/909), [#913](../../pull/913))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R49 now accepts native `<audio>` and `<video>` control as correct sound control mechanisms. ([#920](../../pull/920))

## [0.21.2](../../compare/v0.21.1...v0.21.2) (2021-08-23)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 no longer fails invisible text nodes, such as whitespace, that it might deem not to wrap properly. ([#898](../../pull/898))

## [0.21.1](../../compare/v0.21.0...v0.21.1) (2021-08-23)

### Changed

- [@siteimprove/alfa-aria](packages/alfa-aria): The role data has been updated based on the WAI-ARIA Editor's Draft of 3 August.

- [@siteimprove/alfa-iana](packages/alfa-iana): The language data has been updated based on the latest version of the IANA language subtag registry.

- [@siteimprove/alfa-wcag](packages/alfa-wcag): The technique and criteria data has been updated based on the WCAG Working Draft of 21 May.

### Fixed

- [@siteimprove/alfa-act](packages/alfa-act): A variance regression in `Rule.Evaluate` has been fixed.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R75 no longer counts empty text nodes as content affected by `font-size`. ([#896](../../pull/896))

## [0.21.0](../../compare/v0.20.0...v0.21.0) (2021-08-20)

### Breaking

- [@siteimprove/alfa-collection](packages/alfa-collection): Previous `Collection<T>` functions that depended on details of `T` are now implemented as methods with constrained `this` types. Please see the associated pull request for more details. ([#865](../../pull/865))

- [@siteimprove/alfa-act](packages/alfa-act): The `Question` class has changed in a backwards incompatible manner to account for the new `Question#context` property. Please see the associated pull request for more details. ([#867](../../pull/867))

### Added

- [@siteimprove/alfa-collection](packages/alfa-collection): `Indexed#takeLastWhile()` and `Indexed#takeWhile()` now accept a `Refinement` for narrowing the type of the taken items. ([#860](../../pull/860))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `text-shadow` CSS property. ([#862](../../pull/862))

- [@siteimprove/alfa-act](packages/alfa-act): The `Question` class now includes a `Question#context` property for cases where a rule want to ask questions about a subject that is different from the associated test target. For these cases, the test target is expected to be passed as `Question#context`. ([#867](../../pull/867))

- [@siteimprove/alfa-act](packages/alfa-act): `Rule#hasRequirement()` and `Rule#hasTag()` are now available in addition to the shared `Scope` tag.

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now accepts distinguishing features on ancestors and descendants of the applicable link. ([#777](../../issues/777), [#860](../../pull/860))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R75 no longers fails elements whose font size does not affect text nodes. ([#810](../../issues/810), [#851](../../pull/851))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now yield a `CantTell` outcome when a `text-shadow` is encountered. ([#743](../../issues/743), [#862](../../pull/862))

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` now correctly handles duplicate `id` and `for` attributes. ([#780](../../issues/780), [#781](../../issues/781), [#866](../../pull/866))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now correctly accounts for offset parents when checking for text clipping. ([#824](../../issues/824), [#843](../../pull/843))

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` no longer joins descendant names with a space. ([#889](../../pull/889))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 no longer fails text node descendants of the first focusable element in a document. ([#871](../../issues/871), [#880](../../pull/880))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now accepts `background-image` as a distinguishing feature for links. ([#782](../../issues/782), [#875](../../pull/875))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now correctly looks at the inherited `white-space` property of the parent element of text nodes. ([#747](../../issues/747), [#879](../../pull/879))

## [0.20.0](../../compare/v0.19.0...v0.20.0) (2021-07-09)

In addition to the changes listed below, this release adjusts the compile target from `es2018` to `es2020`.

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R54, SIA-R55, and SIA-R78 are now available. ([#834](../../pull/834), [#835](../../pull/835), [#854](../../pull/854))

- [@siteimprove/alfa-scraper](packages/alfa-scraper): The `Scraper#scrape()` methods now accepts an `archive` option for storing an archive of the page scraped. ([#840](../../pull/840))

- [@siteimprove/alfa-cli](packages/alfa-cli): Two new flags, `--archive` and `--archive-format`, are now available in the `alfa scrape` command for storing an archive of the page scraped. ([#840](../../pull/840))

- [@siteimprove/alfa-hash](packages/alfa-hash): `Hash#writeBigInt()`, `Hash#writeBigInt64()`, `Hash#writeBigUint64()`, `Hash#writeUndefined()`, `Hash#writeNull()`,`Hash#writeObject()`, and `Hash#writeSymbol()` are now available. ([#853](../../pull/853))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): A bug in how names were computed for subtrees and implicitly referenced `<label>` elements has been fixed. ([#808](../../issues/808), [#859](../../pull/859))

- [@siteimprove/alfa-rules](packages/alfa-rules): The contrast ratios output in messages from SIA-R66 and SIA-R69 are now correctly listed as `<bright>:<dark>` rather than `<dark>:<bright>`.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R56 is now correctly exported and available for audits. ([#850](../../pull/850))

- [@siteimprove/alfa-rules](packages/alfa-rules): `isClipped()` now considers elements with a height or width of 0 as clipping if overflow causes scrolling. It now also checks if the ancestors of an element might cause it to clip. ([#731](../../issues/731), [#774](../../issues/774), [#827](../../pull/827), [#848](../../pull/848))

## [0.19.0](../../compare/v0.18.0...v0.19.0) (2021-06-15)

### Breaking

- [@siteimprove/alfa-rules](packages/alfa-rules): The second expectation of SIA-R62 has been removed due to poor accuracy. ([#772](../../pull/772))

- [@siteimprove/alfa-style](packages/alfa-style): The `background-size` property is now specified as and computes to a `Tuple` instance rather than a plain array tuple. ([#788](../../pull/788))

### Added

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `text-decoration-thickness` and `font-variant-*` CSS properties. ([#817](../../pull/817), [#821](../../pull/821))

- [@siteimprove/alfa-rules](packages/alfa-rules): An implementation of SIA-R56 is now available. ([#829](../../pull/829))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now accepts differences in font weight as a valid distinguishing feature for links. ([#779](../../pull/779))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R65 now accepts differences in borders as a valid focus indicator. ([#819](../../pull/819))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now return a `CantTell` outcome for targets for which a `background-size` is found. ([#789](../../pull/789))

- [@siteimprove/alfa-rules](packages/alfa-rules): `hasRole()` now uses the role assigned to an element in the accessibility tree rather than just using `Role.from()`. ([#805](../../pull/805))

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css): Functional pseudo-classes and -elements now correctly implement `#equals()` and `#toString()`. ([#773](../../pull/773))

- [@siteimprove/alfa-aria](packages/alfa-aria): The first step of `Name.from()` is now correctly skipped when descending into child nodes. Additionally, descendant names that only consist of whitespace are no longer included. ([#778](../../pull/778), [#831](../../pull/831))

- [@siteimprove/alfa-style](packages/alfa-style): The `background-size` property is now parsed correctly according to specification. ([#788](../../pull/788))

## [0.18.0](../../compare/v0.17.0...v0.18.0) (2021-06-11)

### Breaking

- [@siteimprove/alfa-graph](packages/alfa-graph), [@siteimprove/alfa-network](packages/alfa-network): Several breaking changes have been made to the `Graph` and `Network` types. Please see the associated pull request for more details. ([#765](../../pull/765))

- [@siteimprove/alfa-highlight](packages/alfa-highlight): The `syntax()` function has been removed. ([#764](../../pull/764))

- [@siteimprove/alfa-json-ld](packages/alfa-json-ld): Several unused APIs have been removed. Please see the associated pull request for more details. ([#766](../../pull/766))

### Added

- [@siteimprove/alfa-graph](packages/alfa-graph), [@siteimprove/alfa-network](packages/alfa-network): `Graph#isEmpty()`, `Network#isEmpty()`, `Graph#path()`, `Network#path()`, `Graph#reverse()`, `Network#reverse()`, `Graph#sort()`, and `Network#sort()` are now available. ([#765](../../pull/765))

## [0.17.0](../../compare/v0.16.2...v0.17.0) (2021-04-13)

### Breaking

- [@siteimprove/afa-style](packages/alfa-style): The type of the `display` has changed from a plain tuple to the `Tuple` class. ([#763](../../pull/763))

### Added

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `border-*` shorthand CSS properties. Full support for the new logical CSS properties, such as `border-block-*`, is still an area of investigation. ([#754](../../pull/754))

- [@siteimprove/alfa-thenable](packages/alfa-thenable): A new package is now available with types for modelling values that can be used in `await` expressions.

- [@siteimprove/alfa-css](packages/alfa-css): Radial gradients are now available as a type of `Gradient`. ([#438](../../pull/438))

### Changed

- [@siteimprove/alfa-formatter-earl](packages/alfa-formatter-earl), [@siteimprove/alfa-formatter-sarif](packages/alfa-formatter-sarif): The EARL and SARIF formatters now output additional vendor data. ([#753](../../pull/753))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 is now a fully automated rule and will therefore no longer pose questions during an audit. ([#760](../../pull/760))

### Fixed

- [@siteimprove/alfa-scraper](packages/alfa-scraper): Some previously uncaught exceptions during page navigation are now caught and handled, resolving an issue where the scraper wouldn't terminate in rare cases.

- [@siteimprove/alfa-style](packages/alfa-style): The `display` property now supports the full grammar as specified by CSS. ([#763](../../pull/763))

## [0.16.2](../../compare/v0.16.1...v0.16.2) (2021-03-31)

This release contains only internal API changes.

## [0.16.1](../../compare/v0.16.0...v0.16.1) (2021-03-30)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R6 now correctly checks for structural, not referential, equality of language tags. Prior to v0.16.0, the rule relied on the undocumented implementation detail that language tags were only constructed once.

## [0.16.0](../../compare/v0.15.3...v0.16.0) (2021-03-30)

### Breaking

- [@siteimprove/alfa-assert](packages/alfa-assert): `Handler.persist()` is no longer available as it broke the ability to bundle the package using certain tools due to the dependence on Node.js.

### Added

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `border-*` longhand CSS properties. Full support for the new logical CSS properties, such as `border-block-*`, is still an area of investigation. ([#718](../../pull/718))

### Changed

- [@siteimprove/alfa-aria](packages/alfa-aria): `<p>` elements now have an implicit role of `paragraph`. ([#750](../../pull/750))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now targets links inside an element with a role of `paragraph`; SIA-R71, SIA-R72, SIA-R73, and SIA-R85 now target elements with a role of `paragraph`. ([#750](../../pull/750))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): Roles that prohibit naming are now correctly considered when referenced by `aria-labelledby`. ([#750](../../pull/750))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R74 and SIA-R80 now only target text inside elements with a role of `paragraph`. ([#750](../../pull/750))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R68 now correctly passes cases where an element contains more than 1 required owned element, but the first owned element is not required.

- [@siteimprove/alfa-aria](packages/alfa-aria), [@siteimprove/alfa-css](packages/alfa-css), [@siteimprove/alfa-dom](packages/alfa-dom), [@siteimprove/alfa-iana](packages/alfa-iana), [@siteimprove/alfa-style](packages/alfa-style): Circular imports between modules in these packages were previously causing some bundlers to hoist the modules in incorrect order, leading to panics at runtime. This has now been fixed.

## [0.15.3](../../compare/v0.15.2...v0.15.3) (2021-03-23)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): `isClipped()` now correctly handles percentage dimensions when combined with `overflow-{x,y}: hidden`.

## [0.15.2](../../compare/v0.15.1...v0.15.2) (2021-03-18)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): Fix a panic in SIA-R66 and SIA-R69 when background colors cannot be determined.

## [0.15.1](../../compare/v0.15.0...v0.15.1) (2021-03-17)

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): `isClipped()` now correctly handles text nodes of clipped elements.

- [@siteimprove/alfa-cypress](packages/alfa-cypress): `Cypress.createPlugin()` no longer creates an asynchronous Chai plugin, which was causing assertion errors to not count as test failures.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R84 now only applies to elements that are possibly scrollable along the x-axis if they also specify `white-space: nowrap`. ([#746](../../pull/746))

- [@siteimprove/alfa-rules](packages/alfa-rules): `isClipped()` now correctly handles cases where only one of `width` or `height` has been set to `0` and only one of `overflow-x` or `overflow-y` set to `hidden`. Either of these cases will cause a block to collapse and its contents be hidden.

- [@siteimprove/alfa-selector](packages/alfa-selector): CSS pseudo-elements are now parsed, thus preventing the parser from entirely dropping declaration containing one of them. ([#745](../../pull/754))

## [0.15.0](../../compare/v0.14.2...v0.15.0) (2021-03-15)

### Breaking

- [@siteimprove/alfa-cypress](packages/alfa-cypress): The Cypress integration now uses a Chai plugin as its main entry point rather than a custom command. For more information, please see the associated pull request. ([#740](../../pull/740))

### Added

- [@siteimprove/alfa-trampoline](packages/alfa-trampoline): `Trampoline<T>` now provides an implementation of `Foldable<T>` and `Applicative<T>`.

- [@siteimprove/alfa-result](packages/alfa-result): `Result<T, E>` now provides an implementation of `Applicative<T>`.

- [@siteimprove/alfa-future](packages/alfa-future): `Future<T>` now provides an implementation of `Applicative<T>`.

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): `isTransparent()` now correctly handles text nodes of transparent elements. ([#741](../../pull/741))

- [@siteimprove/alfa-style](packages/alfa-style): The `font-family` property now correctly parses font families specified as whitespace-separated idents. ([#742](../../pull/742))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R84 no longer considers elements with `overflow: clip` as possibly scrollable. ([#744](../../pull/744))

## [0.14.2](../../compare/v0.14.1...v0.14.2) (2021-03-11)

### Fixed

- [@siteimprove/alfa-dom](packages/alfa-dom): The `@siteimprove/alfa-dom/jsx-runtime` module has been fixed and now correctly exposes the `jsx()`, `jsxs()`, and `jsxDEV()` entries.

## [0.14.1](../../compare/v0.14.0...v0.14.1) (2021-03-10)

### Fixed

- [@siteimprove/alfa-cheerio](packages/alfa-cheerio): The package now compiles correctly when the `esModuleInterop` compiler option is used.

## [0.14.0](../../compare/v0.13.0...v0.14.0) (2021-03-10)

### Breaking

- [@siteimprove/alfa-scraper](packages/alfa-awaiter): The `Awaiter` type has been simplified and now only returns either an error or no error. ([#737](../../pull/737))

### Added

- [@siteimprove/alfa-continuation](packages/alfa-continuation): `Continuation<T, R>` now accepts a third type parameter, `A`, denoting additional arguments passed to the continuation.

- [@siteimprove/alfa-promise](packages/alfa-promise): A new package has been added with funcitonality for working with promises.

- [@siteimprove/alfa-dom](packages/alfa-dom): A new `@siteimprove/alfa-dom/jsx-runtime` module is now available for compatibility with the new importless JSX mode.

- [@siteimprove/alfa-scraper](packages/alfa-scraper): A new awaiter, `Awaiter.animations()`, is now available. This awaiter polls the document for active animations and resolves when no animations are active. Additionally, a new option, `fit: boolean`, is now available in `Scraper#scrape()`. When set, which it is by default, the viewport will expand to fit the contents of the page. This is needed to accurately scrape pages that toggle content depending on scroll position. ([#737](../../pull/737))

- [@siteimprove/alfa-cli](packages/alfa-cli): Two new flags, `--await-animations` and `--[no-]fit` are now available in the `alfa scrape` command. These flags reflect the corresponding features in the scraper. ([#737](../../pull/737))

### Changed

- [@siteimprove/alfa-branched](packages/alfa-branched), [@siteimprove/alfa-future](packages/alfa-future), [@siteimprove/alfa-trampoline](packages/alfa-trampoline): The mapper passed to `Branched.traverse()`, `Future.traverse()`, and `Trampoline.traverse()` is now passed the index of the value being processed.

### Fixed

- [@siteimprove/alfa-array](packages/alfa-array), [@siteimprove/alfa-json](packages/alfa-json), [@siteimprove/alfa-promise](packages/alfa-promise), [@siteimprove/alfa-url](packages/alfa-url): Avoid redefining the `global` variable used in certain environments, such as Jest.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R66 and SIA-R69 now correctly compute foreground colors in presence of an `opacity` attribute. ([#739](../../pull/739))

## [0.13.0](../../compare/v0.12.0...v0.13.0) (2021-03-05)

### Breaking

- [@siteimprove/alfa-aria](packages/alfa-aria): `Role#requiredParent()` now returns `Iterable<Iterable<Role.Name>>` to make it possible to model the nested parent requirements that have been introduced in the Editor's Draft of WAI-ARIA. ([#728](../../pull/728))

### Added

- [@siteimprove/alfa-selective](packages/alfa-selective): `Selective.exhaust()` is now available in addition to an implementation of `Monad<T>` for `Selective<S, T>`.

- [@siteimprove/alfa-css](packages/alfa-css): `Unit.Length.Relative.Font` and `Unit.Length.Relative.Viewport` are now available for distinguishing between font and viewport relative lengths. In addition, `Unit.isFontRelativeLength()`, `Unit.isViewportRelativeLength()`, `Length#isFontRelative()`, and `Length#isViewportRelative()` are now also available. ([#734](../../pull/734))

- [@siteimprove/alfa-selector](packages/alfa-selector): `Selector` subclasses now have type guard functions, and `Selector#type` is now available. ([#732](../../pull/732))

- [@siteimprove/alfa-collection](packages/alfa-collection): `Indexed#reduceWhile()`, `Indexed#reduceUntil()`, and `Indexed#zip()` are now available.

- [@siteimprove/alfa-array](packages/alfa-array): `Array.reduceWhile()`, `Array.reduceUntil()`, and `Array.zip()` are now available.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.reduceWhile()`, `Iterable.reduceUntil()`, and `Iterable.zip()` are now available.

- [@siteimprove/alfa-playwright](packages/alfa-playwright): A new package has been added with conversion functions for the Playwright browser automation framework.

### Changed

- [@siteimprove/alfa-aria](packages/alfa-aria): We now track the latest Editor's Draft of WAI-ARIA, which contains several fixes already implemented by browsers and assistive technologies. ([#728](../../pull/728))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 has been limited to testing cases where a non-inline, non-font relative `height` is likely to cause text to clip when text scale is increased. This was, based on much feedback, the most common case for true positives. Cases with `white-space: nowrap` are also still tested. ([#734](../../pull/734))

- [@siteimprove/alfa-selector](packages/alfa-selector): `Selector#equals()` avoids narrowing to `never` when used on a different `Selector`. ([#732](../../pull/732))

- [@siteimprove/alfa-scraper](packages/alfa-scraper): `Scraper.scrape()` now correctly sets the viewport height to the specified device height instead of its width.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R87 now automatically passes if a skip link references an element "at the start" of an element with a role of `main`. ([#735](../../pull/735))

## [0.12.0](../../compare/v0.11.0...v0.12.0) (2021-02-26)

### Breaking

- [@siteimprove/alfa-media](packages/alfa-media): A new `Media.Value` type has been introduced and is now used for the `Media#value` property. The new type is used for modelling both discrete and range values which was not previously possible. Additionally, the `Media.Condition` type has been split into `Media.And` and `Media.Or`, and `Media.Negation` has been renamed `Media.Not`. `Media.Condition` is now an alias for `Media.And | Media.Or | Media.Not`. ([#722](../../pull/722))

- [@siteimprove/alfa-act](packages/alfa-act): The `Oracle<Q>` type has now become `Oracle<I, T, Q>`. As such, the input type `I` and test target type `T` must now be declared up front. Additionally, the `Question<Q, A, S, T>` type has now become `Question<Q, S, A, T>` to ensure alignment with the remaining types of the package. ([#699](../../pull/699))

- [@siteimprove/alfa-cli](packages/alfa-cli): The `--interactive` flag of the `alfa audit` command has been removed. A new `--interviewer` flag has instead been made available which allows callers to point to an `Interviewer` implementation for answering questions during an audit. ([#255](../../issues/255), [#699](../../pull/699))

- [@siteimprove/alfa-hash](packages/alfa-hash): The `Hash` type is now an abstract class with methods for hashing specific types of input. Additionally, `Hashable.hash()` has been removed and `Hash#writeUnknown()` introduced as a replacement. ([#670](../../pull/670))

### Added

- [@siteimprove/alfa-media](packages/alfa-media): The new range syntax for media features, such as `100px < width <= 900px`, is now supported. ([#109](../../issue/109), [#722](../../pull/722))

- [@siteimprove/alfa-css](packages/alfa-css): The `Dimension` and `Numeric` types now provide implementations of `Comparable`. The `Dimension#canonicalUnit` property is now also available to facilitate comparisons between units of same dimensional type. ([#722](../../pull/722))

- [@siteimprove/alfa-interviewer](packages/alfa-interviewer): A new package has been added with types for modelling ACT rule interviewers and functionality for loading these from external and local modules. ([#699](../../pull/699))

### Fixed

- [@siteimprove/alfa-media](packages/alfa-media): Several issues related to parsing and matching of media queries have been fixed. ([#722](../../pull/722))

- [@siteimprove/alfa-rules](packages/alfa-rules): Accessible names are now also considered empty when they consist exclusively of whitespace.

- [@siteimprove/alfa-style](packages/alfa-style): `var()` functions now accept spaces around variable names. ([#725](../../pull/725))

- [@siteimprove/alfa-style](packages/alfa-style): The source of inherited property values are no longer overwritten by the source of the `inherit` declaration.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R41 and SIA-R81 now correctly normalize computed accessible names.

## [0.11.0](../../compare/v0.10.0...v0.11.0) (2021-02-23)

### Breaking

- [@siteimprove/alfa-css](packages/alfa-css): `Lexer.lex()` now returns `Slice<Token>` as the returned array would always be wrapped in a slice by the caller.

- [@siteimprove/alfa-selector](packages/alfa-selector): `Selector.parse()` is now an instance of `Parser<Slice<Token>, Selector, string>` to allow it being used in parser combinators.

- [@siteimprove/alfa-media](packages/alfa-media): `Media.parse()` is now an instance of `Parser<Slice<Token>, Media.List, string>` to allow it being used in parser combinators.

- [@siteimprove/alfa-cache](packages/alfa-cache): `Cache<K, V>` now requires that `K` be an object type.

### Added

- [@siteimprove/alfa-predicate](packages/alfa-predicate): `Predicate.tee()` is now available.

- [@siteimprove/alfa-result](packages/alfa-result): `Result#tee()` and `Result#teeErr()` are now available.

- [@siteimprove/alfa-parser](packages/alfa-parser): `Parser.Infallible<I, T, A>`, `Parser.teeErr()`, `Parser.reject()`, `Parser.end()`, `Parser.takeBetween()`, `Parser.takeAtLeast()`, and `Parser.takeAtMost()` are now available. Additionally, `Parser.eof()` has been deprecated.

- [@siteimprove/alfa-array](packages/alfa-array): `Array.forEach()`, `Array.map()`, `Array.flatMap()`, `Array.flatten()`, `Array.filter()`, `Array.reject()`, `Array.includes()`, `Array.collect()`, `Array.collectFirst()`, `Array.some()`, `Array.none()`, `Array.every()`, `Array.count()`, `Array.distinct()`, `Array.allocate()`, `Array.apply()`, `Array.get()`, `Array.set()`, `Array.has()`, `Array.concat()`, `Array.subtract()`, `Array.intersect()`, `Array.first()`, `Array.last()`, and `Array.iterator()` are now available.

- [@siteimprove/alfa-json](packages/alfa-json): `JSON.parse()` and `JSON.stringify()` are now available.

- [@siteimprove/alfa-trampoline](packages/alfa-trampoline): `Trampoline#tee()` and `Trampoline.empty()` are now available.

- [@siteimprove/alfa-either](packages/alfa-either): `Either<L, R>` now provides an implementation of `Hashable`.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-sequence](packages/alfa-sequence): `Indexed#takeLastWhile()`, `Indexed#takeLastUntil()`, `Indexed#skipLastWhile()`, `Indexed#skipLastUntil()`, `Indexed#trim()`, `Indexed#trimLeading()`, and `Indexed#trimTrailing()` are now available and implemented by `List` and `Sequence`.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-map](packages/alfa-map), [@siteimprove/alfa-sequence](packages/alfa-sequence), [@siteimprove/alfa-set](packages/alfa-set), [@siteimprove/alfa-slice](packages/alfa-slice): `Keyed#subtract()`, `Keyed#intersect()`, `Unkeyed#subtract()`, `Unkeyed#intersect()`, `Indexed#subtract()`, and `Indexed#intersect()` are now available and implemented by `List`, `Map`, `Sequence`, `Set`, and `Slice`.

- [@siteimprove/alfa-slice](packages/alfa-slice): `Slice<T>` now provides an implementation of `Collection.Indexed<T>`

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.apply()`, `Iterable.set()`, `Iterable.insert()`, `Iterable.append()`, `Iterable.prepend()`, and `Iterable.iterator()` are now available.

- [@siteimprove/alfa-comparable](packages/alfa-comparable): `Comparable.isLessThan()`, `Comparable.isLessThanOrEqual()`, `Comparable.isGreaterThan()`, and `Comparable.isGreaterThanOrEqual()` are now available.

- [@siteimprove/alfa-network](packages/alfa-network): A package has been added with an implementation of an immutable, directed graph that allows for multiple, unique edges. ([#696](../../pull/696))

- [@siteimprove/alfa-sarif](packages/alfa-sarif): A package has been added with types for working with SARIF serialisable structures. ([#694](../../pull/694))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R65 now automatically accepts difference in `background-color` or `color`, and presence/absence of a `box-shadow` as a valid focus indicator. ([#658](../../issues/658), [#713](../../pull/713), [#714](../../pull/714), [#715](../../pull/715))

### Fixed

- [@siteimprove/alfa-css](packages/alfa-css): `Linear.parse()` now correctly parses gradient sides and corners specified as `bottom`.

- [@siteimprove/alfa-rules](packages/alfa-rules): `isVisible()` now correctly considers elements with large negative text indents and no `white-space: nowrap` as hidden.

- [@siteimprove/alfa-aria](packages/alfa-aria): `Node.from()` now correctly handles children of elements with roles that designate their children as presentational.

- [@siteimprove/alfa-cascade](packages/alfa-cascade): The user agent styles now include previously missing definitions for form controls.

- [@siteimprove/alfa-url](packages/alfa-url): `URL#toString()` now correctly serializes URLs that cannot be used as base URLs. ([#459](../../issues/459), [#676](../../pull/676))

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` now gives priority to the subtree over the `title` attribute for `<a>` elements. ([#669](../../issues/669), [#716](../../pull/716))

- [@siteimprove/alfa-style](packages/alfa-style): The `display` property now correctly parses the `inline-block`, `inline-table`, `inline-flex`, and `inline-grid` values.

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` now correctly handles self-referencing `aria-labelledby` attributes. ([#717](../../issues/717))

## [0.10.0](../../compare/v0.9.0...v0.10.0) (2021-01-29)

### Breaking

- [@siteimprove/alfa-assert](packages/alfa-assert): The package has been reworked to solve several long-standing issues in its design. This also affects all the integration packages that make use of this package. For more information, please see the associated issue and pull request. ([#270](../../issues/270), [#287](../../pull/287))

### Added

- [@siteimprove/alfa-array](packages/alfa-array): `Array.reduce()` is now available.

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R66 and SIA-R96 are now available. ([#665](../../pull/665), [#666](../../pull/666))

- [@siteimprove/alfa-protractor](packages/alfa-protractor): A new package has been added with conversion functions for the Protractor browser automation framework. ([#428](../../pull/428))

### Changed

- [@siteimprove/alfa-css](packages/alfa-css): The `Value.JSON` type is now optionally parametric. ([#667](../../pull/667))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): The `isVisible()` function now correctly accounts for content and text hidden by offscreening and text indents that cause full clipping. ([#519](../../issues/519), [#524](../../issues/524), [#616](../../pull/616))

## [0.9.0](../../compare/v0.8.0...v0.9.0) (2021-01-21)

In addition to the changes listed below, this release adjusts the compile target from `es2017` to `es2018`.

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom): `Attribute#hasName()` has been removed in favor of `Attribute.hasName()`.

- [@siteimprove/alfa-array](packages/alfa-array), [@siteimprove/alfa-branched](packages/alfa-branched), [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-either](packages/alfa-either), [@siteimprove/alfa-iterable](packages/alfa-iterable), [@siteimprove/alfa-lazy](packages/alfa-lazy), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-map](packages/alfa-map), [@siteimprove/alfa-option](packages/alfa-option), [@siteimprove/alfa-record](packages/alfa-record), [@siteimprove/alfa-result](packages/alfa-result), [@siteimprove/alfa-sequence](packages/alfa-sequence), [@siteimprove/alfa-set](packages/alfa-set), [@siteimprove/alfa-slice](packages/alfa-slice): The `#toJSON()` methods of all container types, `Type<T>`, are now parametric, ensuring deep strongly typed JSON serialisation. ([#644](../../pull/644))

- [@siteimprove/alfa-css](packages/alfa-css): The `Position` value type has been reworked to fix some outstanding issues with `Position.parse()`. This has resulted in a few breaking API changes, such as reordered type parameters (`Position<V, H>` is now `Position<H, V>`). For more information, please see the associated pull request. ([#650](../../pull/650))

### Added

- [@siteimprove/alfa-array](packages/alfa-array): `Array.find()`, `Array.findLast()`, `Array.insert()`, `Array.append()`, and `Array.prepend()` are now available.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.findLast()` is now available.

- [@siteimprove/alfa-future](packages/alfa-future): `Future#tee()` and `Future.empty()` are now available.

- [@siteimprove/alfa-callback](packages/alfa-callback): `Callback.contraMap()` is now available.

- [@siteimprove/alfa-functor](packages/alfa-functor): `Functor.Invariant<T>` is now available.

- [@siteimprove/alfa-emitter](packages/alfa-emitter): A new package has been added with an implementation of a strongly typed event emitter.

- [@siteimprove/alfa-dom](packages/alfa-dom): `Element#qualifiedName` and `Attribute#qualifiedName` are now available.

- [@siteimprove/alfa-cli](packages/alfa-cli): Two new flags, `--cpu-profile` and `--heap-profile`, are now available in the `alfa audit` command. ([#640](../../pull/640))

- [@siteimprove/alfa-performance](packages/alfa-performance): A new package has been added with functionality for working with performance measurements. ([#643](../../pull/643))

- [@siteimprove/alfa-rules](packages/alfa-rules): An implementation of SIA-R95 is now available. ([#654](../../pull/654))

- [@siteimprove/alfa-act](packages/alfa-act): `Audit#evaluate()` now accepts a `Performance` instance for measuring rule durations. ([#656](../../pull/656))

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style): The `display` property now correctly parses the `flow`, `flow-root`, `table`, `flex`, `grid`, and `ruby` values.

- [@siteimprove/alfa-xpath](packages/alfa-xpath): The `evaluate()` function now correctly respects passed `Node.Traversal` options.

- [@siteimprove/alfa-json](packages/alfa-json): Drop `undefined` property values when serializing JSON objects rather than convert them to `null` values.

- [@siteimprove/alfa-table](packages/alfa-table): `Table.from()` no longer panics when tables contain invalid elements.

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` now behaves correctly when computing names of elements that are named by their contents, but contain children that aren't.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): The `index` parameter in `Iterable.map()` now correctly increments.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R14 now correctly assumes that non-essential text is imperceivable. ([#648](../../pull/648))

- [@siteimprove/alfa-rules](packages/alfa-rules): `isRendered()` now behaves correctly in the presence of embedded documents. ([#653](../../pull/653))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R48 and SIA-R49 now correctly assume that `<audio>` elements have audio. ([#662](../../pull/662))

## [0.8.0](../../compare/v0.7.0...v0.8.0) (2021-01-06)

### Breaking

- [@siteimprove/alfa-table](packages/alfa-table): The package has been reworked to solve several long-standing issues in its design. For more information, please see the associated pull request. ([#581](../../pull/581))

### Added

- [@siteimprove/alfa-array](packages/alfa-array): A new package has been added with functionality for working with arrays.

- [@siteimprove/alfa-callback](packages/alfa-callback): `Callback<T, R>` now accepts a third type parameter, `A`, denoting additional arguments passed to the callback.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.forEach()`, `Iterable.none()`, `Iterable.compare()`, `Iterable.compareWith()`, and `Iterable.toJSON()` are now available.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-branched](alfa-branched), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-map](packages/alfa-map), [@siteimprove/alfa-set](packages/alfa-set), [@siteimprove/alfa-sequence](packages/alfa-sequence): `Collection#forEach()` and `Collection#none()` are now available and implemented by `Branched`, `List`, `Map`, `Set`, and `Sequence`.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-sequence](packages/alfa-sequence): `Indexed#compareWith()` is now available and implemented by `List` and `Sequence`. In addition, `Collection.sort()`, `Collection.compare()`, `List.compare()`, and `Sequence.compare()` are also available.

- [@siteimprove/alfa-option](packages/alfa-option): `Option.compare()` is now available.

- [@siteimprove/alfa-clone](packages/alfa-clone): `Clone.clone()` is now available.

- [@siteimprove/alfa-json](packages/alfa-json): `Serializable` now accepts a type parameter, `T extends JSON`, denoting the precise JSON type that implementations serialize to.

- [@siteimprove/alfa-earl](packages/alfa-earl): `Serializable` now accepts a type parameter, `T extends EARL`, denoting the precise EARL type that implementations serialize to.

- [@siteimprove/alfa-comparable](packages/alfa-comparable): `Comparable.compare()` now provides overloads for `string`, `number`, `bigint`, and `boolean` in addition to `Comparable<T>`.

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R90, SIA-R91, SIA-R92, SIA-R93, and SIA-R94 are now available. ([#586](../../pull/586), [#592](../../pull/592), [#609](../../pull/609))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `letter-spacing` and `word-spacing` CSS properties. ([#587](../../pull/587))

- [@siteimprove/alfa-act](packages/alfa-act), [@siteimprove/alfa-rules](packages/alfa-rules), [@siteimprove/alfa-wcag](packages/alfa-wcag): ACT rules may now list their requirements and a new package has been added that models WCAG success criteria and techniques. Existing rules now list associated success criteria and techniques. ([#299](../../pull/299))

### Changed

- [@siteimprove/alfa-selector](packages/alfa-selector): The `context` argument in `Selector#matches()` is now optional.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R62 now requires that all link states (unset, `:hover`, and `:focus`) be distinguishable.

- [@siteimprove/alfa-rules](packages/alfa-rules): The second expectation of SIA-R87 has been merged with the first. ([#629](../../pull/629))

### Fixed

- [@siteimprove/alfa-sequence](packages/alfa-sequence): `Sequence#size` is now stack safe and no longer overflows for long sequences.

- [@siteimprove/alfa-rules](packages/alfa-rules): `isVisible()` no longer considers elements with no visible children as visible. ([#549](../../pull/549), [#624](../../pull/624))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R41 and SIA-R81 now automatically passes links with references that resolve to the same URL. ([#567](../../pull/567))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now assumes a used value of `1.2` for `line-height: normal`. ([#566](../../pull/566))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R53 and SIA-R61 now correctly ignore headings not in the accessibility tree. ([#577](../../pull/577), [#589](../../pull/589))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R84 now more accurately determines if elements are possibly scrollable. ([#588](../../pull/588), [#618](../../pull/618))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R46 now accepts header cells that are themselves assigned to other header cells. ([#607](../../pull/607))

- [@siteimprove/alfa-selector](packages/alfa-selector): Matching of `:nth-*` selectors no longer degrades to quadratic complexity for certain input. ([#600](../../pull/600))

- [@siteimprove/alfa-style](packages/alfa-style): Explicit `initial` property values are now correctly assigned a source declaration. ([#637](../../pull/637))

## [0.7.0](../../compare/v0.6.0...v0.7.0) (2020-11-20)

### Breaking

- [@siteimprove/alfa-formatter](packages/alfa-formatter): The list of relevant rules are now expected to be passed as the second argument to the `Formatter<I, T, Q>` type. ([#439](../../pull/439))

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R62 and SIA-R65 are now available. ([#497](../../pull/497), [#538](../../pull/538))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `text-decoration-*`, `text-indent`, `position`, `top`, `right`, `bottom`, `left`, `inset-line-*`, and `inset-block-*` CSS properties. ([#511](../../pull/511), [#539](../../pull/539), [#541](../../pull/541), [#542](../../pull/542))

### Fixed

- [@siteimprove/alfa-cascade](packages/alfa-cascade): Fix faulty ancestor filtering that resulted in complex selectors never matching when computing cascade.

- [@siteimprove/alfa-aria](packages/alfa-aria): Elements, and descendants of elements, with `aria-hidden=true` are no longer included when computing accessible names unless explicitly referenced through `aria-labelledby`. ([#527](../../pull/527))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 now checks overflow handling of the clipping ancestor rather than the immediate parent of each applicable text node. ([#540](../../pull/540))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R10 no longer applies to disabled form controls. ([#516](../../issues/516), [#554](../../pull/554))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 no longer applies to elements not in the accessibility tree. ([#523](../../issues/523), [#555](../../pull/555))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R45 no longer applies to elements with a presentational role. ([#521](../../issues/521), [#556](../../pull/556))

## [0.6.0](../../compare/v0.5.0...v0.6.0) (2020-10-30)

### Breaking

- [@siteimprove/alfa-predicate](packages/alfa-predicate): The `Predicate<T>` type now no longer duals as a refinement type. This behavior has instead been split out into the new `Refinement<T, U extends T>` type. This also means that none of the functions on the `Predicate` namespace will perform type narrowing. Instead, an equivalent function on the `Refinement` namespace should be used if type narrowing is desired. ([#415](../../pull/415))

- [@siteimprove/alfa-http](packages/alfa-http): `Request#url` and `Response#url` now return `URL` instances rather than strings. ([#421](../../pull/421))

- [@siteimprove/alfa-frontier](packages/alfa-frontier), [@siteimprove/alfa-scraper](packages/alfa-scraper): `Frontier` and `Scraper` now work on `URL` instances from the @siteimprove/alfa-url package rather than WHATWG URL instances. ([#421](../../pull/421))

### Added

- [@siteimprove/alfa-refinement](packages/alfa-refinement): A new package has been added with functionality for working with refinement types, also known as type guards in TypeScript. ([#415](../../pull/415))

- [@siteimprove/alfa-url](packages/alfa-url): A new package has been added with an implementation of an immutable URL representation. ([#421](../../pull/421))

- [@siteimprove/alfa-result](packages/alfa-result): `Result` now provides an implementation of `Hashable`. `Result#includes()`, `Result#includesErr()`, `Result#some()`, `Result#someErr()`, `Result#none()`, `Result#noneErr()`, `Result#every()`, and `Result#everyErr()` are now also available.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.takeLastWhile()`, `Iterable.takeLastUntil()`, `Iterable.skipLastWhile()`, `Iterable.skipLastUntil()`, `Iterable.trimLeading()`, `Iterable.trimTrailing()`, `Iterable.trim()`, `Iterable.hash()`, `Iterable.sort()`, and `Iterable.sortWith()` are now available.

- [@siteimprove/alfa-comparable](packages/alfa-comparable): A `Comparer` type is now available for modelling functions that do comparisons. A new function `Comparable.isComparable()` is now also available.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-sequence](packages/alfa-sequence): `Indexed#sortWith()` is now available and implemented by `List` and `Sequence`. Additionally, `List.sort()` and `Sequence.sort()` are now also available.

- [@siteimprove/alfa-option](packages/alfa-option): `Option#compareWith()` is now available.

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the `box-shadow` and `outline-*` CSS properties. ([#481](../../pull/481), [#496](../../pull/496))

- [@siteimprove/alfa-style](packages/alfa-style): `Value#includes()`, `Value#some()`, and `Value#none()` are now available. ([#468](../../pull/468))

- [@siteimprove/alfa-rules](packages/alfa-rules): An implementation of SIA-R87 is now available. ([#468](../../pull/468))

- [@siteimprove/alfa-dom](packages/alfa-dom): `Node#tabOrder()` is now available. ([#468](../../pull/468))

- [@siteimprove/alfa-css](packages/alfa-css): `Color.isTransparent()` and `Length.isZero()` are now available.

### Changed

- [@siteimprove/alfa-option](packages/alfa-option): `Some#hash()` and `None#hash()` now write a marker byte to prevent some avoidable collisions.

- [@siteimprove/alfa-sequence](packages/alfa-sequence): `Nil#hash()` now writes a size of 0 to prevent some avoidable collisions.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 now only applies when at least one landmark is found one the page. ([#414](../../pull/414))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R15 now automatically passes `<iframe>` elements that definitely point to the same resource. ([#406](../../pull/406))

### Fixed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R14 now only applies to focusable widgets with either an `aria-label` or `aria-labelledby` attribute, as intended. ([#409](../../pull/409))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R68 now correctly excludes descendants of containers with an `aria-busy=true` attribute. ([#418](../../pull/418))

- [@siteimprove/alfa-rules](packages/alfa-rules): Rules that target sets of nodes now make use of the new `Group` class, which provides an EARL serializable wrapper around iterables. Previously, pointers for these targets were not included in EARL output. ([#427](../../pull/427))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R83 no longer fails cases where a top-level `overflow: hidden` declaration would cause deep descendants to fail due to them not handling text overflow. ([#482](../../pull/482))

- [@siteimprove/alfa-thunk](packages/alfa-thunk): `Thunk.flatMap()` now correctly defers evaluation of the passed thunk.

- [@siteimprove/alfa-aria](packages/alfa-aria): The `placeholder` attribute is now correctly accepted for `<input type="email">` elements when computing accessible names.

## [0.5.0](../../compare/v0.4.1...v0.5.0) (2020-09-22)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom): The `mode` argument in the `Shadow.of()` constructor has been moved last in the argument list. Additionally, the first child `Document` and `Shadow` node passed to `h.element()` is no longer included in the list of child nodes but instead used as the content document and shadow root, respectively, of the constructed element. ([#398](../../pull/398))

### Added

- [@siteimprove/alfa-crawler](packages/alfa-crawler): A new package has been added with an implementation of a simple crawler based on the existing scraper. ([#309](../../pull/309))

- [@siteimprove/alfa-css](packages/alfa-css), [@siteimprove/alfa-selector](packages/alfa-selector): Tree-structural pseudo-selectors (`:nth-child()`, `:last-child`, `:nth-of-type()`, etc.) are now supported. ([#367](../../pull/367))

- [@siteimprove/alfa-css](packages/alfa-css), [@siteimprove/alfa-style](packages/alfa-style): `calc()` expressions are now supported for the `font-size` property. ([#376](../../pull/376))

- [@siteimprove/alfa-media](packages/alfa-media): The `min-width`, `max-width`, `min-height`, and `max-height` media query features are now supported. ([#403](../../pull/403))

- [@siteimprove/alfa-dom](packages/alfa-dom): `h.shadow()` is now available. Additionally, `h.element()` now uses the first child `Document` and `Shadow` node as the content document and shadow root, respectively, of the constructed element. ([#398](../../pull/398))

### Fixed

- [@siteimprove/alfa-aria](packages/alfa-aria): Ensure that ownership is only resolved once per `Document` context.

- [@siteimprove/alfa-aria](packages/alfa-aria): Elements with neither a `role`, explicit or implicit, nor `aria-` attributes are now correctly excluded from the accessibility tree and instead map to `Container` instances. ([#356](../../pull/356))

- [@siteimprove/alfa-aria](packages/alfa-aria): The `Name` class now correctly implements a `#toString()` method to ensure correct stringification of `Node` instances. ([#380](../../pull/380))

- [@siteimprove/alfa-aria](packages/alfa-aria): `<select>` elements now correctly get their name from connected `<label>` elements. ([#380](../../pull/380))

- [@siteimprove/alfa-aria](packages/alfa-aria): The last step of `Name.from()` has been removed as it was causing very poor performance for certain inputs and had no noticeable effect on computed names. ([#360](../../pull/360))

- [@siteimprove/alfa-aria](packages/alfa-aria): `Name.from()` now correctly computes names for `<input>` and `<textarea>` elements, adding the previously missing name computation steps. ([#394](../../pull/394))

- [@siteimprove/alfa-aria](packages/alfa-aria): Children of `<iframe>` are now no longer incorrectly included in the accessibility tree. ([#383](../../pull/383))

- [@siteimprove/alfa-lazy](packages/alfa-lazy): Fix a bug where `#map()` and `#flatMap()` could cause a `Lazy` to be evaluated more than once. ([#355](../../pull/355))

- [@siteimprove/alfa-map](packages/alfa-map): Fix a bug where `#size` was incorrectly reported for certain combinations of keys. ([#361](../../pull/361))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R86 is now exported from the package.

- [@siteimprove/alfa-rules](packages/alfa-rules): `isPerceivable()` now correctly accounts for nodes that aren't themselves included in the accessibility, but have descendants that are. ([#356](../../pull/356))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R16 now correctly handles the `separator` role and only fails elements with missing required attributes when the element is focusable. The rule now also pulls attributes from the accessibility tree to ensure that implicit attributes are correctly accounted for. ([#371](../../pull/371))

- [@siteimprove/alfa-rules](packages/alfa-rules): `isVisible()` now correctly accounts for elements that have been hidden by giving them a size <= 1px and clipping overflow, as commonly done by `.sr-only`-like utility classes. ([#387](../../pull/387))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R46 now correctly ignores header cells in presentational tables. ([#400](../../pull/400))

- [@siteimprove/alfa-dom](packages/alfa-dom): `Element#tabIndex()` now correctly considers `<object>` elements with embedded documents as browsing context containers and assigns them a default tab index of 0. ([#399](../../pull/399))

## [0.4.1](../../compare/v0.4.0...v0.4.1) (2020-08-27)

### Changed

- [@siteimprove/alfa-parser](packages/alfa-parser): The `eof()` combinator now passes the last element of the input iterable to the error thunk.

### Fixed

- [@siteimprove/alfa-cypress](packages/alfa-cypress), [@siteimprove/alfa-puppeteer](packages/alfa-puppeteer), [@siteimprove/alfa-webdriver](packages/alfa-webdriver): Fix conversion of native CSS `@import` rules to ensure correct import conditions.

- [@siteimprove/alfa-css](packages/alfa-css): Fix parsing of square bracket (`[]`) blocks which incorrectly used the open square bracket, not the closed square bracket, as their terminator.

- [@siteimprove/alfa-selector](packages/alfa-selector): The `:is()`, `:not()`, and `:has()` functional pseudo-class selectors are now correctly parsed. Additionally, non-namespaced universal selectors are now correctly matched against elements.

## [0.4.0](../../compare/v0.3.1...v0.4.0) (2020-08-25)

### Breaking

- [@siteimprove/alfa-dom](packages/alfa-dom): Parent pointers are now handled internally to `Node` instances to separate the construction of parent nodes and their children. This means that the constructors of all `Node` subclasses have changed slightly and now no longer need children to be passed in a closure. The `h()` and `jsx()` APIs now also operate on actual `Node` instances instead of a JSON representation. ([#283](../../pull/283))

- [@siteimprove/alfa-act](packages/alfa-act): Rules are now passed to the `Audit` class during construction rather than after. This removes the need to explicitly pass type parameters during construction as inference now works. ([#286](../../pull/286))

- [@siteimprove/alfa-aria](packages/alfa-aria): The package has been reworked to solve several long-standing issues in its design. For more information, please see the associated pull request. ([#300](../../pull/300))

- [@siteimprove/alfa-css](packages/alfa-css): Several CSS value types have changed slightly to ensure better alignment across the various value types. ([#301](../../pull/301))

### Added

- [@siteimprove/alfa-option](packages/alfa-option): `Option#none()` is now available as a negation of `Option#some()`.

- [@siteimprove/alfa-dom](packages/alfa-dom): `Block#size` and `Block#isEmpty()` are now available.

- [@siteimprove/alfa-collection](packages/alfa-collection), [@siteimprove/alfa-branched](alfa-branched), [@siteimprove/alfa-list](packages/alfa-list), [@siteimprove/alfa-map](packages/alfa-map), [@siteimprove/alfa-set](packages/alfa-set), [@siteimprove/alfa-sequence](packages/alfa-sequence): `Collection#distinct()`, `Collection#collect()`, and `Collection#collectFirst()` are now available and implemented by `Branched`, `List`, `Map`, `Set`, and `Sequence`.

- [@siteimprove/alfa-iterable](packages/alfa-iterable): `Iterable.distinct()`, `Iterable.collect()`, and `Iterable.collectFirst()` are now available.

- [@siteimprove/alfa-option](packages/alfa-option): `Option#reject()` is now available.

- [@siteimprove/alfa-branched](packages/alfa-branched): `Branched#from()` is now available.

- [@siteimprove/alfa-rules](packages/alfa-rules): An implementation of SIA-R86 is now available. ([#284](../../pull/284))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports CSS Custom Properties for Cascading Variables. ([#295](../../pull/295), [#302](../../pull/302))

- [@siteimprove/alfa-style](packages/alfa-style): The style system now supports the full set of `background-*` long- and shorthand properties. ([#301](../../pull/301))

### Fixed

- [@siteimprove/alfa-cascade](packages/alfa-cascade): Style sheets referenced through `@import` rules are now correctly included when computing cascade.

- [@siteimprove/alfa-cli](packages/alfa-cli): Avoid exiting prematurely on buffered socket writes.

- [@siteimprove/alfa-dom](packages/alfa-dom): Conversion from JSON to `Node` subclasses has been trampolined and therefore no longer causes a stack overflow. ([#283](../../pull/283))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R69 now correctly determines contrasts involving linear gradients. ([#289](../../pull/289))

- [@siteimprove/alfa-css](packages/alfa-css): Function and block components used in CSS declarations are now correctly parsed. ([#296](../../pull/296), [#302](../../pull/302))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R68 now correctly only requires that at least one required child be present and not that every child be a required child. ([#304](../../pull/304))

- [@siteimprove/alfa-aria](packages/alfa-aria): Relations defined through the `aria-owns` attribute are now correctly resolved when constructing the accessibility tree. ([#306](../../pull/306))

## [0.3.1](../../compare/v0.3.0...v0.3.1) (2020-07-03)

### Fixed

- [@siteimprove/alfa-cli](packages/alfa-cli): Newlines are now correctly appended to the output, not the filename, when using the `--output` flag.

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R47 now correctly handles negative `maximum-scale` values. SIA-R67 now only applies to `<object>` elements that are in the accessibility tree.

- [@siteimprove/alfa-scraper](packages/alfa-scraper): `Scraper#scrape()` now correctly scrapes pages whose URL contains a hash fragment. ([#288](../../pull/288))

## [0.3.0](../../compare/v0.2.0...v0.3.0) (2020-07-01)

### Breaking

- [@siteimprove/alfa-act](packages/alfa-act): The way expectations are handled in rules has been reworked to allow for additional information to be passed through the new `Diagnostic` class. This means that the type of expectations has changed from `Option<Result<string>>` to `Option<Result<Diagnostic>>`; to get the status message, one therefore has to extract the `Diagnostic#message` property. ([#246](../../pull/246))

- [@siteimprove/alfa-scraper](packages/alfa-scraper): The `Awaiter` class now expects an instance of `Timeout`, rather than a `number`, for its `timeout` argument ([#254](../../pull/254))

- [@siteimprove/alfa-device](packages/alfa-device), [@siteimprove/alfa-scraper](packages/alfa-scraper), [@siteimprove/alfa-cli](packages/alfa-cli): Scripting and user preferences, such as `prefers-reduced-motion`, are now included in the `Device` class. This also means that the `javascript` option in `Scraper#scrape()` has been removed as this is now dealt with in the `Device` class. Lastly, the `--javascript` flag used by the `scrape` and `audit` CLI commands has been renamed `--scripting` to align with these changes.

- [@siteimprove/alfa-highlight](packages/alfa-highlight): Syntax definitions are now lazy loaded and so the `syntax()` function has become asynchronous and returns a `Promise<string>` rather than a `string`. ([#263](../../pull/263))

- [@siteimprove/alfa-math](packages/alfa-math): The package has been rewritten to remove its dependence on the `mathjs` library as it was the source of a performance bottleneck. ([#268](../../pull/268))

- [@siteimprove/alfa-formatter](packages/alfa-formatter): The `Formatter.load()` function now uses dynamic imports rather than `require()` for loading formatters, removing the dependence on Node.js. This also means that the `Formatter.load()` function has become asynchronous. ([#278](../../pull/278))

- [@siteimprove/alfa-dom](packages/alfa-dom): The `jsx()` now requires that the `style` attribute be passed as property-value record, `Record<string, string>`. ([#281](../../pull/281))

- [@siteimprove/alfa-cli](packages/alfa-cli): The CLI has been reworked to make use of the new [@siteimprove/alfa-command](packages/alfa-command) package. This has however required a breaking change to the `--headers`, `--cookies`, and `--outcomes` flags as outlined in the associated pull request. Make sure to check out the `--help` output for up-to-date documentation on these flags. ([#265](../../pull/265))

### Added

- [@siteimprove/alfa-parser](packages/alfa-parser): Additional arguments can now be defined for `Parser<I, T, E, A>` instances through a fourth type parameter, `A`.

- [@siteimprove/alfa-style](packages/alfa-style): The `background` shorthand property is now supported, albeit with a limited scope as it only supports a single `<color>` layer. ([#277](../../pull/277))

- [@siteimprove/alfa-future](packages/alfa-future): The `Future#get()` method has been added for synchronously resolving non-deferred futures, which was the very reason for implementing and using futures over native promises. ([#279](../../pull/279))

- [@siteimprove/alfa-dom](packages/alfa-dom): A HyperScript-like DSL is now available to ease the construction of DOM. ([#281](../../pull/281))

- [@siteimprove/alfa-command](packages/alfa-command): A new package has been added with functionality for modelling command line applications, removing the previous dependence on the oclif framework. ([#265](../../pull/265))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R67 has been updated to reflect the latest version of the rule in Sanshikan. ([#272](../../pull/272))

### Fixed

- [@siteimprove/alfa-scraper](packages/alfa-scraper): `Awaiter.loaded()` is not used as the default awaiter in `Scraper#scrape()` to fix a bug where stylesheets were not ready at the time of scraping. ([#253](../../pull/253))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R69 now correctly uses automatically determined background or foreground colors when only one of the two cannot be determined automatically. Previously, both would be deferred to `Oracle` when either couldn't be determined. ([#256](../../pull/256))

- [@siteimprove/alfa-cascade](packages/alfa-cascade), [@siteimprove/alfa-media](packages/alfa-media): User agent styles have been added for the `<noscript>` element and the associated `scripting` media feature is now matched by `Media.Query#matches()`. ([#260](../../pull/260))

- [@siteimprove/alfa-act](packages/alfa-act): The `Interview` type is now limited to a fixed recursion depth which fixes type inference in TypeScript 3.8 and below and avoids a stack overflow in TypeScript 3.9 and above. ([#266](../../pull/266))

- [@siteimprove/alfa-rules](packages/alfa-rules): The `kind` attribute of the `<video>` element is now correctly treated as an enumerable attribute. ([#269](../../pull/269))

- [@siteimprove/alfa-aria](packages/alfa-aria): Presentional roles conflict resolution is now correctly accounted for in the ARIA feature mappings. ([#264](../../pull/264))

- [@siteimprove/alfa-cascade](packages/alfa-cascade): Rules with identical selectors are no longer incorrectly deduplicated when added to the rule tree, which lead to rules being discarded. ([#274](../../pull/274))

## [0.2.0](../../compare/v0.1.0...v0.2.0) (2020-06-08)

### Breaking

- [@siteimprove/alfa-table](packages/alfa-table): The internals of how tables are built have changed to improve performance. As a side effect, several properties of various table related classes are now exposed as `Iterable` rather than `Array`. ([#237](../../237))

- [@siteimprove/alfa-dom](packages/alfa-dom): The type of the `content` argument in `Element.of()` has changed from `Option<Document>` to `Option<Mapper<Element, Document>>` to accomodate the new `Document#frame` property. ([#244](../../pull/244))

- [@siteimprove/alfa-cli](packages/alfa-cli): The `Formatter<I, T, Q>` type has moved to [@siteimprove/alfa-formatter](packages/alfa-formatter). ([#248](../../pull/248))

- [@siteimprove/alfa-scraper](packages/alfa-scraper): The `Headers` class has changed substantially to align with the new `Cookies`, `Cookie`, and `Header` classes. ([#249](../../pull/249))

### Added

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R81, SIA-R83, SIA-R84, and SIA-R85 are now available. ([#232](../../pull/232), [#239](../../pull/239), [#241](../../pull/241), [#242](../../pull/242))

- [@siteimprove/alfa-dom](packages/alfa-dom): The `Document#frame` property has been added to better model embedded documents. ([#244](../../pull/244))

- [@siteimprove/alfa-dom](packages/alfa-dom): `Node#path()` now accepts `Node.Traversal` options to make it possible to construct XPath expressions for various traversal modes. ([#245](../../pull/245))

- [@siteimprove/alfa-scraper](packages/alfa-scraper), [@siteimprove/alfa-cli](packages/alfa-cli): Both the `Scraper#scrape()` method and the `scrape` and `audit` CLI commands now accept additional HTTP headers and cookies. For more information, please see the associated pull request. ([#249](../../pull/249))

- [@siteimprove/alfa-formatter-sarif](packages/alfa-formatter-sarif): A SARIF formatter is now available. ([#250](../../pull/250))

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R57 no longer applies to text nodes that only consist of whitespace.

### Fixed

- [@siteimprove/alfa-style](packages/alfa-style): Styles set via the `style` attribute are now correctly applied.

- [@siteimprove/alfa-dom](packages/alfa-dom): `Node.fromNode()` now correctly parses `Fragment.JSON` to `Fragment`.

- [@siteimprove/alfa-dom](packages/alfa-dom): `Fragment` nodes now correctly disallow passing a parent `Node` during construction. ([#243](../../pull/243))

## [0.1.0](../../compare/v0.0.1...v0.1.0) (2020-05-26)

### Breaking

- [@siteimprove/alfa-scraper](packages/alfa-scraper), [@siteimprove/alfa-cli](packages/alfa-cli): The `Scraper` class has received a much-needed overhaul which has resulted in a couple of breaking changes. The changes also carry over to the CLI; for more information, please see the associated pull requests. ([#226](../../pull/226), [#235](../../pull/235))

- [@siteimprove/alfa-dom](packages/alfa-dom): The `Sheet.JSON` interface now requires a `condition` property. ([#220](../../pull/220))

- [@siteimprove/alfa-highlight](packages/alfa-highlight): The function `highlight()` has been renamed `syntax()` and the `Markers` namespace has been merged with the `Marker` interface. ([#225](../../pull/225))

### Added

- [@siteimprove/alfa-dom](packages/alfa-dom): The `Sheet` class now includes information about media conditions, which can be added to style sheets through `<link rel="stylesheet" media="condition">`. ([#220](../../pull/220))

- [@siteimprove/alfa-rules](packages/alfa-rules): Implementations of SIA-R69 and SIA-R82 are now available. ([#228](../../pull/228), [#231](../../pull/231))

- [@siteimprove/alfa-selector](packages/alfa-selector): Support for the pseudo-classes `:hover`, `:active`, `:focus`, and `:root` in addition to the pseudo-elements `::before` and `::after` has been added. ([#238](../../pull/238))

### Changed

- [@siteimprove/alfa-rules](packages/alfa/rules): For rules that deal with `<video>` and `<audio>` elements, the `is-streaming` question has been split into `is-video-streaming` and `is-audio-streaming` to better facilitate messaging. ([#181](../../pull/181))

### Fixed

- [@siteimprove/alfa-cascade](packages/alfa-cascade): Style sheet media conditions are now considered when computing cascade and disabled style sheets are no longer included. ([#220](../../pull/220))

- [@siteimprove/alfa-rules](packages/alfa-rules): Only look for `Element` nodes when determining ownership in SIA-R68. ([#222](../../pull/222))

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R45 now fails table cells that reference themselves in the `headers` attribute. ([#224](../../pull/224))

- [@siteimprove/alfa-css](packages/alfa-css): Property declarations that specify the `!important` flag are now correctly parsed. ([#233](../../pull/233))

## [0.0.1](../../compare/v0.0.0...v0.0.1) (2020-04-27)

### Changed

- [@siteimprove/alfa-rules](packages/alfa-rules): SIA-R21 now applies to elements with explicit _and_ implicit semantic roles, but no longer applies to elements with `role` values that consist solely of ASCII whitespace. ([#218](../../pull/218))

## [0.0.0](../../releases/tag/v0.0.0) (2020-04-22)

This is the first public of release of Alfa, available for download through [GitHub Packages](../../packages). This release is focused on providing a solid foundation of tools for people and organisations to start testing within their own workflows. Do be aware that as we are still not at a level of API stability where we feel confident in providing compatibility guarantees for future releases, this release, and the ones that follow it throughout this initial version 0, will not be considered stable.

For instructions on how to get up and running with Alfa, be sure to check out the ["Usage" section](../../#usage) of the README.
