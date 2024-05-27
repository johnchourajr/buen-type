/**
 * A module that converts an object of headlinea and text defs into Tailwind CSS utilities.
 *
 * @example
 * ```ts
 * // tailwind.config.js
 * import { buenTypeTailwind } from "@buen/type";
 *
 * const typePlugin = buenTypeTailwind({ addUtilities }, {
 *  customHeadlines: {
 *    ... // define custom headlines
 *  },
 *  customTexts: {
 *    ... // define custom texts
 *  }
 * });
 *
 * module.exports = {
 *  ...
 *  plugins: [
 *    typePlugin
 *  ]
 * };
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
