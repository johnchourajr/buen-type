/**
 * A module that converts an object of headlinea and text defs into Tailwind CSS utilities.
 *
 * @example
 *
 *  1. Define custom styles, using either the default keys or by expanding upon them
 *
 * ```ts
 * // type-config.ts
 *
 * const customHeadlines = {
 *   'display-xl': {
 *     fontFamily: "'Inter', 'sans-serif'",
 *     fontWeight: 'bold',
 *     clamp: [4.5, 9],
 *     letterSpacing: '-0.1em',
 *     lineHeight: 1,
 *     textTransform: 'uppercase',
 *   },
 *   // ...
 * }
 *
 * const customTexts = {
 *   'body': {
 *     fontFamily: "'Inter', 'sans-serif'",
 *     fontWeight: 'normal',
 *     fontSize: '1.1rem'
 *     letterSpacing: '0em',
 *     lineHeight: 1.5,
 *     textTransform: 'none',
 *   },
 *   // ...
 * }
 * ```
 *
 * 2. Add the custom styles to the plugin
 *
 * ```tsx
 * // tailwind.config.ts
 * import { buenTypeTailwind } from "@buen/type";
 * import { customHeadlines, customTexts } from "./type-config";
 *
 * function typePlugin({ addUtilities }) {
 *   buenTypeTailwind({ addUtilities }, {
 *     customHeadlines,
 *     customTexts
 *   });
 * };
 *
 * module.exports = {
 *   //  ...
 *   plugins: [
 *     typePlugin
 *   ]
 * };
 * ```
 *
 * @module
 */
export { buenTypeTailwind } from "./tailwind-plugin/buenTypeTailwind.ts";

/**
 * A module that provides a function to create a `rem`-based `clamp` function.
 *
 * @example
 * ```ts
 * import { createRemClamp } from "@buen/type";
 *
 * createRemClamp(1, 2, 1024, 1440); // "clamp(1rem, 1rem + 0.06666666666666667vw, 2rem)"
 * ```
 *
 * @module
 */
export { createRemClamp } from "./utils/createRemClamp.ts";

/**
 * Types for the Buen Type module, for use when implementing custom type definitions.
 *
 * @module
 */
export type {
  CustomTypeDefinitions,
  TypeDefinition,
  TypeDefinitionHeadlines,
  TypeDefinitionTexts
} from "./types.ts";


/**
 * Default objects for headline and text definitions.
 *
 * @module
 */
export {
  DEFAULT_HEADLINE as headlineDefault,
  DEFAULT_TEXT as textDefault
} from "./defaults.ts";

