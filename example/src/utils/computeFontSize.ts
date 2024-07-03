/**
 * Computes the font size in rem based on the provided screen width
 * using the createRemClamp function and rounds to the fourth decimal place.
 *
 * @param screenWidth - The current screen width in pixels
 * @param minFontSize - The minimum font size in rem
 * @param maxFontSize - The maximum font size in rem
 * @param minScreenSize - The minimum screen size in pixels
 * @param maxScreenSize - The maximum screen size in pixels
 * @returns The computed font size in rem, rounded to the fourth decimal place
 */
export function computeFontSize(
  screenWidth: number,
  minFontSize: number,
  maxFontSize: number,
  minScreenSize: number = 1024,
  maxScreenSize: number = 1440,
): number {
  if (screenWidth <= minScreenSize) {
    return minFontSize;
  }

  if (screenWidth >= maxScreenSize) {
    return maxFontSize;
  }

  const minWidth = minScreenSize / 16;
  const maxWidth = maxScreenSize / 16;
  const m = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const b = -minWidth * m + minFontSize;

  const vw = screenWidth / 16;
  const fontSize = b + m * vw;

  // Round to the fourth decimal place
  return Math.round(fontSize * 10000) / 10000;
}
