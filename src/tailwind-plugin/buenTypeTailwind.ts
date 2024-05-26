import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "../defaults.ts";
import { CustomTypeDefinitions, TypeDefinition } from "../types.ts";
import { createRemClamp } from "../utils/createRemClamp.ts";
import { typedKeys } from "../utils/typedKeys.ts";

export const buenTypeTailwind = function (
  { addUtilities },
  customDefinitions?: CustomTypeDefinitions
) {
  const generateStyles = (definition: TypeDefinition) => {
    let styles = {
      fontFamily: definition.fontFamily,
      fontWeight: definition.fontWeight,
      lineHeight: definition.lineHeight,
      letterSpacing: definition.letterSpacing,
      textTransform: definition.textTransform,
      fontSize: definition.size,
    };
    if (definition.size) {
      styles.fontSize = definition.size;
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

  let headlineUtilities = {};
  typedKeys(mergedHeadlines).forEach((key) => {
    const style = mergedHeadlines[key];
    if (style) {
      headlineUtilities[`.headline-${key}`] = generateStyles(style);
    }
  });

  let textUtilities = {};
  typedKeys(mergedTexts).forEach((key) => {
    const style = mergedTexts[key];
    if (style) {
      textUtilities[`.text-${key}`] = generateStyles(style);
    }
  });

  addUtilities(headlineUtilities);
  addUtilities(textUtilities);
};
