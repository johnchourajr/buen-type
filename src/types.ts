export type DefaultHeadlineTypes =
  | "display-xxl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "display-xs";

export type DefaultTextTypes =
  | "title"
  | "paragraph"
  | "string"
  | "body"
  | "caption";

export type TypeDefinition = {
  fontFamily?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textTransform?: string;
  fontSize?: string;
  clamp?: [number, number];
};

export type TypeDefinitions = Record<string, TypeDefinition>;

export type TypeDefinitionHeadlines = Record<
  DefaultHeadlineTypes,
  TypeDefinition
>;

export type TypeDefinitionTexts = Record<DefaultTextTypes, TypeDefinition>;

export type CustomTypeDefinitions = {
  customHeadlines?: Record<string, TypeDefinition>;
  customTexts?: Record<string, TypeDefinition>;
};
