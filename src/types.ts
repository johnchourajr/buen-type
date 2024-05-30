
/**
 * Default headline types, e.g. `display-xxl`, `display-xl`, etc.
 */
export type DefaultHeadlineTypes =
  | "display-xxl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "display-xs";

/**
 * Default text types, e.g. `title`, `paragraph`, etc.
 */
export type DefaultTextTypes =
  | "title"
  | "paragraph"
  | "string"
  | "body"
  | "caption";

/**
 * Type definition properties
 *
 * @todo explore adding more properties,
 * @todo refactor to import types from @react/types
 */
export type TypeDefinition = {
  _className?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textTransform?: string;
  fontSize?: string;
  clamp?: [number, number];
};

/**
 * CSS output properties, mirrors TypeDefinition excluding clamp and _className
 *
 * @todo refactor to reference TypeDefinition and exclude _className and clamp
 */
export type CSSOutput = {
  fontFamily?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textTransform?: string;
  fontSize?: string;
};

/**
 * Type definitions object
 */
export type TypeDefinitions = Record<string, TypeDefinition>;

/**
 * Default type definitions for headlines
 */
export type TypeDefinitionHeadlines = Record<
  DefaultHeadlineTypes,
  TypeDefinition
>;

/**
 * Default type definitions for text elements
 */
export type TypeDefinitionTexts = Record<DefaultTextTypes, TypeDefinition>;

/**
 * Custom type definitions for headlines and texts.
 */
export type CustomTypeDefinitions = {
  customHeadlines?: Record<string, TypeDefinition>;
  customTexts?: Record<string, TypeDefinition>;
};
