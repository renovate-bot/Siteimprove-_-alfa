# @siteimprove/alfa-toolchain

## 0.68.0

## 0.67.0

### Minor Changes

- **Added:** Initial release of a package to handle the toolchain ([#1462](https://github.com/Siteimprove/alfa/pull/1462))

  This package currently handles changelog generation and several validations of the code structure:

  - Checking that API extractor config is defined on each workspace.
  - Checking that `package.json` match the expected structure.
  - Checking that `package.json`'s dependencies match `tsconfig.json`'s references.