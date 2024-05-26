import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "../defaults.ts";
import { CustomTypeDefinitions, TypeDefinition } from "../types.ts";
import { createRemClamp } from "../utils/createRemClamp.ts";
import { typedKeys } from "../utils/typedKeys.ts";

// Type definition for the addUtilities function parameter
interface AddUtilities {
  (utilities: Record<string, any>, options?: any): void;
}

export const buenTypeTailwind = function (
  { addUtilities }: { addUtilities: AddUtilities },
  customDefinitions?: CustomTypeDefinitions
) {
  const generateStyles = (definition: TypeDefinition) => {
    let styles: TypeDefinition = {
      fontFamily: definition.fontFamily,
      fontWeight: definition.fontWeight,
      lineHeight: definition.lineHeight,
      letterSpacing: definition.letterSpacing,
      textTransform: definition.textTransform,
      fontSize: definition.fontSize,
    };
    if (definition.fontSize) {
      styles.fontSize = definition.fontSize;
    }
    if (definition.clamp) {
      styles.fontSize = createRemClamp(...definition.clamp);
    }

    return styles;
  };

  const mergedHeadlines = {
    ...DEFAULT_HEADLINE,
    ...customDefinitions?.customHeadlines,
  };
  const mergedTexts = { ...DEFAULT_TEXT, ...customDefinitions?.customTexts };

  let headlineUtilities: Record<string, any> = {};
  typedKeys(mergedHeadlines).forEach((key) => {
    const style = mergedHeadlines[key];
    if (style) {
      headlineUtilities[`.headline-${key}`] = generateStyles(style);
    }
  });

  let textUtilities: Record<string, any> = {};
  typedKeys(mergedTexts).forEach((key) => {
    const style = mergedTexts[key];
    if (style) {
      textUtilities[`.text-${key}`] = generateStyles(style);
    }
  });

  addUtilities(headlineUtilities);
  addUtilities(textUtilities);
};
