import type { Config, NewChangesetWithCommit } from "@changesets/types";
import type { Packages } from "@manypkg/get-packages";
import type { Result } from "@siteimprove/alfa-result";

/**
 * Exit codes
 *
 * @public
 */

export namespace Error {
  export const INVALID_CHANGESET_CONFIG = 1;
  export const NO_GLOBAL_CHANGELOG_PROVIDER = 2;
  export const NO_ROOT_PACKAGE = 3;
  export const INVALID_PACKAGE_MANAGER_TOOL = 4;
  export const freeFrom = 100;
}

/**
 * @public
 */
export interface ChangelogFunctions {
  getBody(
    changesets: Array<NewChangesetWithCommit>,
    packages: Packages,
    config: Config,
  ): Promise<string>;

  insertBody(oldBody: string, newBody: string): string;
}

/**
 * @internal
 */
export function getOrDie<T>(result: Result<T, string>, code: number): T {
  if (result.isErr()) {
    console.error(result.getErr());
    process.exit(code);
  }

  return result.getUnsafe();
}

/**
 * @public
 */
export function getConfigOption(config: Config, option: string): string {
  const changelog = config.changelog;
  if (changelog === false) {
    console.error(
      "Changeset config.changelog is not in the correct format (missing options)",
    );
    process.exit(Error.INVALID_CHANGESET_CONFIG);
  }
  const value = changelog[1]?.[option];

  if (typeof value !== "string") {
    console.error(
      `Changeset config.changelog is not in the correct format (missing ${option})`,
    );
    process.exit(Error.INVALID_CHANGESET_CONFIG);
  }

  return value;
}

/**
 * @internal
 */
export function getPackagesShim(packages: Packages) {
  const rootPackage = packages.rootPackage;
  const tool = packages.tool.type;

  if (rootPackage === undefined) {
    console.error("Could not resolve root package");
    process.exit(Error.NO_ROOT_PACKAGE);
  }

  if (tool !== "yarn") {
    console.error(`Tool must be \`yarn\`, but was: ${tool}`);
    process.exit(Error.INVALID_PACKAGE_MANAGER_TOOL);
  }

  return {
    tool,
    packages: packages.packages,
    root: rootPackage,
  } as const;
}
