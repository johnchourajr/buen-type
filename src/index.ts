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
 * import { buenTypeTailwind } from "@muybuen/type";
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
import { buenTypeTailwind as buenTypeTailwindCore } from "./buenTypeTailwind";
import { CustomTypeDefinitions } from "./types";

/**
 * Main plugin export with compatibility for both Tailwind CSS 3 and 4.
 *
 * For Tailwind CSS 3:
 * ```js
 * // tailwind.config.js
 * const { buenTypeTailwind } = require('@muybuen/type');
 *
 * module.exports = {
 *   plugins: [buenTypeTailwind]
 * }
 * ```
 *
 * For Tailwind CSS 4:
 * ```css
 * @import 'tailwindcss';
 * @plugin '@muybuen/type';
 * ```
 */
export const buenTypeTailwind = Object.assign(
  // For Tailwind CSS 3 - Function that accepts the API directly
  buenTypeTailwindCore,
  // For Tailwind CSS 4 - Plugin handler that can be called by the CSS @plugin directive
  {
    handler: (api: any, options: CustomTypeDefinitions = {}) => {
      return buenTypeTailwindCore(api, options);
    }
  }
);

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
} from "./defaults";

