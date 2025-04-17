import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "./defaults";
import { CustomTypeDefinitions, TypeDefinition } from "./types";
import { createRemClamp } from "./utils/createRemClamp";
import { typedKeys } from "./utils/typedKeys";

interface PluginAPI {
  addUtilities: (utilities: Record<string, any>, options?: any) => void;
  utility?: (utilities: Record<string, any>) => void;
  addComponents?: (components: Record<string, any>) => void;
  matchUtility?: (utilities: Record<string, any>, options?: any) => void;
  theme?: (path: string, defaultValue?: any) => any;
}

/**
 * A module that converts an object of headlines and text definitions into Tailwind CSS utilities.
 *
 * @todo Explore making minScreenSize and maxScreenSize configurable in createRemClamp
 * @todo Make return type more specific to what tailwind plugins expect
 */
export function buenTypeTailwind(
  api: PluginAPI,
  options?: CustomTypeDefinitions,
): void {
  // Extract API methods, supporting both v3 and v4 interfaces
  const { addUtilities, utility, addComponents, theme, matchUtility } = api;

  // Check if we're using Tailwind v4 (utility exists) or v3 (only addUtilities exists)
  const isV4 =
    typeof utility === "function" && typeof addComponents === "function";

  const generateStyles = (definition: TypeDefinition) => {
    // For Tailwind v4, we'll use CSS variables for key properties
    if (isV4) {
      let styles: Record<string, any> = {
        "--font-family": definition.fontFamily,
        "--font-weight": definition.fontWeight,
        "--line-height": definition.lineHeight,
        "--letter-spacing": definition.letterSpacing,
        "--text-transform": definition.textTransform,
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-weight)",
        lineHeight: "var(--line-height)",
        letterSpacing: "var(--letter-spacing)",
        textTransform: "var(--text-transform)",
        fontStyle: definition.fontStyle,
        textDecoration: definition.textDecoration,
        textShadow: definition.textShadow,
        whiteSpace: definition.whiteSpace,
        wordSpacing: definition.wordSpacing,
        textOverflow: definition.textOverflow,
        direction: definition.direction,
        writingMode: definition.writingMode,
        textRendering: definition.textRendering,
        hyphens: definition.hyphens,
      };

      if (definition.fontSize) {
        styles["--font-size"] = definition.fontSize;
        styles.fontSize = "var(--font-size)";
      }

      if (definition.clamp) {
        const customMinScreenSize = options?.customMinScreenSize || 1024;
        const customMaxScreenSize = options?.customMaxScreenSize || 1440;
        const clampValue = createRemClamp(
          definition.clamp[0],
          definition.clamp[1],
          customMinScreenSize,
          customMaxScreenSize,
        );
        styles["--font-size"] = clampValue;
        styles.fontSize = "var(--font-size)";
      }

      return styles;
    } else {
      // For Tailwind v3, use the original approach
      let styles: TypeDefinition = {
        fontFamily: definition.fontFamily,
        fontWeight: definition.fontWeight,
        lineHeight: definition.lineHeight,
        letterSpacing: definition.letterSpacing,
        textTransform: definition.textTransform,
        fontSize: definition.fontSize,
        fontStyle: definition.fontStyle,
        textDecoration: definition.textDecoration,
        textShadow: definition.textShadow,
        whiteSpace: definition.whiteSpace,
        wordSpacing: definition.wordSpacing,
        textOverflow: definition.textOverflow,
        direction: definition.direction,
        writingMode: definition.writingMode,
        textRendering: definition.textRendering,
        hyphens: definition.hyphens,
      };

      if (definition.fontSize) {
        styles.fontSize = definition.fontSize;
      }

      if (definition.clamp) {
        const customMinScreenSize = options?.customMinScreenSize || 1024;
        const customMaxScreenSize = options?.customMaxScreenSize || 1440;
        styles.fontSize = createRemClamp(
          definition.clamp[0],
          definition.clamp[1],
          customMinScreenSize,
          customMaxScreenSize,
        );
      }

      return styles;
    }
  };

  /**
   * @todo Look into using deepmerge to merge the default and custom definitions
   */
  const defaultHeadlines = options?.disableDefaults ? null : DEFAULT_HEADLINE;
  const mergedHeadlines = {
    ...defaultHeadlines,
    ...options?.customHeadlines,
  };

  const defaultTexts = options?.disableDefaults ? null : DEFAULT_TEXT;
  const mergedTexts = { ...defaultTexts, ...options?.customTexts };

  // Add global CSS variables for typography if using v4
  if (isV4 && addComponents) {
    addComponents({
      ":root": {
        "--buen-headline-font": "var(--font-family-sans, sans-serif)",
        "--buen-body-font": "var(--font-family-serif, serif)",
        "--buen-headline-color": "var(--color-gray-900, #111827)",
        "--buen-text-color": "var(--color-gray-700, #374151)",
        "@media (prefers-color-scheme: dark)": {
          "--buen-headline-color": "var(--color-gray-100, #f3f4f6)",
          "--buen-text-color": "var(--color-gray-300, #d1d5db)",
        },
      },
    });
  }

  // Generate utilities
  let headlineUtilities: Record<string, any> = {};
  typedKeys(mergedHeadlines).forEach((key) => {
    const style = mergedHeadlines[key];
    if (style) {
      headlineUtilities[`.headline-${key}`] = generateStyles(style);
      if (style.classAlias) {
        style.classAlias.forEach((alias) => {
          headlineUtilities[`.${alias}`] = generateStyles(style);
        });
      }
    }
  });

  let textUtilities: Record<string, any> = {};
  typedKeys(mergedTexts).forEach((key) => {
    const style = mergedTexts[key];
    if (style) {
      textUtilities[`.text-${key}`] = generateStyles(style);
      if (style.classAlias) {
        style.classAlias.forEach((alias) => {
          textUtilities[`.text-${alias}`] = generateStyles(style);
        });
      }
    }
  });

  // Add fluid typography utility if using v4
  if (isV4 && matchUtility && theme) {
    matchUtility(
      {
        "text-fluid": (value: number[] | string | number) => {
          if (Array.isArray(value) && value.length === 2) {
            const [min, max] = value;
            return {
              fontSize: `clamp(${min}rem, 5vw, ${max}rem)`,
            };
          }
          return { fontSize: value };
        },
      },
      { values: theme("fontSize", {}) },
    );
  }

  // Add utilities using appropriate API
  addUtilities(headlineUtilities);
  addUtilities(textUtilities);
}
