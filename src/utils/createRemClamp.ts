/**
 * A module that provides a function to create a `rem`-based `clamp` function.
 *
 * @param minFontSize - The minimum font size in rem
 * @param maxFontSize - The maximum font size in rem
 * @param minScreenSize - The minimum screen size in pixels
 * @param maxScreenSize - The maximum screen size in pixels */
export function createRemClamp(
  minFontSize: number,
  maxFontSize: number,
  minScreenSize: number = 1024,
  maxScreenSize: number = 1440,
): string {
  const minWidth = minScreenSize / 16;
  const maxWidth = maxScreenSize / 16;
  const m = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const b = -minWidth * m + minFontSize;

  return `clamp(${minFontSize}rem, ${b}rem + ${m * 100}vw, ${maxFontSize}rem)`;
}
