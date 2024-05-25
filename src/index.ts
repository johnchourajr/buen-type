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
