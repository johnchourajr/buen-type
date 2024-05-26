export type TypeDefinition = {
  fontFamily?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textTransform?: string;
  size?: string;
  clamp?: [number, number];
};

export type TypeDefAndId = TypeDefinition & { id: string };

export type TypeDefinitions = Record<string, TypeDefinition | TypeDefAndId>;

export type CustomTypeDefinitions = {
  customHeadlines?: Record<string, TypeDefinition>;
  customTexts?: Record<string, TypeDefinition>;
};
