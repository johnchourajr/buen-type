import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "../defaults.ts";
import { CustomTypeDefinitions, TypeDefinition } from "../types.ts";
import { createRemClamp } from "../utils/createRemClamp.ts";
import { typedKeys } from "../utils/typedKeys.ts";

type AddUtilities = {
  (utilities: Record<string, any>, options?: any): void;
};

/**
 * A module that converts an object of headlines and text definitions into Tailwind CSS utilities.
 *
 * @todo Explore making minScreenSize and maxScreenSize configurable in createRemClamp
 * @todo Make addUtilities a named parameter, importing @tailwindcss/types
 * @todo Make return type more specific to what tailwind plugins expect
 */
export function buenTypeTailwind(
  { addUtilities }: { addUtilities: AddUtilities },
  options?: CustomTypeDefinitions,
): void {
  const generateStyles = (definition: TypeDefinition) => {
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

  addUtilities(headlineUtilities);
  addUtilities(textUtilities);
}
