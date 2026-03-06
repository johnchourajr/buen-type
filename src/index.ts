/**
 * Tailwind CSS plugin for typographic scales. Works with both Tailwind v3 and v4.
 *
 * @example Tailwind v4 (recommended)
 * ```ts
 * // buen-type.plugin.ts
 * import { createBuenTypePlugin } from "@muybuen/type";
 * export default createBuenTypePlugin({ customHeadlines, customTexts });
 * ```
 * ```css
 * @import "tailwindcss";
 * @plugin "./buen-type.plugin.ts";
 * ```
 *
 * @example Tailwind v3
 * ```ts
 * // tailwind.config.ts
 * import { createBuenTypePlugin } from "@muybuen/type";
 * export default { plugins: [createBuenTypePlugin()] };
 * ```
 *
 * @module
 */
export { buenTypeTailwind, createBuenTypePlugin } from "./buenTypeTailwind";

/**
 * A module that provides a function to create a `rem`-based `clamp` function.
 *
 * @example
 * ```ts
 * import { createRemClamp } from "@muybuen/type";
 *
 * createRemClamp(1, 2, 1024, 1440); // "clamp(1rem, 1rem + 0.06666666666666667vw, 2rem)"
 * ```
 *
 * @module
 */
export { createRemClamp } from "./utils/createRemClamp";

/**
 * Types for the Buen Type module, for use when implementing custom type definitions.
 *
 * @module
 */
export type {
  CustomTypeDefinitions,
  TypeDefinition,
  TypeDefinitionHeadlines,
  TypeDefinitionTexts,
} from "./types.ts";

/**
 * Default objects for headline and text definitions.
 *
 * @module
 */
export {
  DEFAULT_HEADLINE as headlineDefault,
  DEFAULT_TEXT as textDefault,
} from "./defaults";
