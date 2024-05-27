import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "../defaults";
import {
  CSSOutput,
  TypeDefinition,
  TypeDefinitionHeadlines,
  TypeDefinitionTexts,
} from "../types";
import { createRemClamp } from "./createRemClamp";

export const generateStyles = (
  type: "headline" | "text",
  key: string,
): CSSOutput => {
  let definition: TypeDefinition | undefined;

  if (type === "headline") {
    definition = (DEFAULT_HEADLINE as TypeDefinitionHeadlines)[key];
  } else {
    definition = (DEFAULT_TEXT as TypeDefinitionTexts)[key];
  }

  if (!definition) {
    throw new Error(`Type definition for ${type} ${key} not found`);
  }

  const styles: CSSOutput = {
    fontFamily: definition.fontFamily,
    fontWeight: definition.fontWeight,
    lineHeight: definition.lineHeight,
    letterSpacing: definition.letterSpacing,
    textTransform: definition.textTransform,
    fontSize: definition.fontSize,
  };

  if (definition.clamp) {
    styles.fontSize = createRemClamp(...definition.clamp);
  }

  return styles;
};
