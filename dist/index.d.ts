/**
 * Default headline types, e.g. `display-xxl`, `display-xl`, etc.
 */
type DefaultHeadlineTypes = "display-xxl" | "display-xl" | "display-lg" | "display-md" | "display-sm" | "display-xs";
/**
 * Default text types, e.g. `title`, `paragraph`, etc.
 */
type DefaultTextTypes = "title" | "paragraph" | "string" | "body" | "caption";
/**
 * Type definition properties
 *
 * @todo refactor to import types from @react/types
 *
 * @param classAlias - e.g., ["main-headline"]
 * @param fontFamily - e.g., Arial, sans-serif, monospace
 * @param fontWeight - e.g., normal, bold, 400, 700
 * @param lineHeight - e.g., 1.5, 150%, 1.5em
 * @param letterSpacing - e.g., 0.1em, 1px
 * @param textTransform - e.g., uppercase, lowercase, capitalize, none
 * @param fontSize - e.g., 1.5rem, 1.5em, 150%, 1.5vw
 * @param clamp - e.g., [1, 2]
 * @param color - e.g., #000, rgba(0, 0, 0, 0.5)
 * @param fontStyle - e.g., normal, italic, oblique
 * @param textDecoration - e.g., underline, overline, line-through, none
 * @param textAlign - e.g., left, right, center, justify
 * @param textShadow - e.g., 1px 1px 2px black
 * @param whiteSpace - e.g., normal, nowrap, pre
 * @param wordSpacing - e.g., normal, 0.25em
 * @param textOverflow - e.g., clip, ellipsis
 * @param textIndent - e.g., 50px, 5%
 * @param direction - e.g., ltr, rtl
 * @param writingMode - e.g., horizontal-tb, vertical-rl
 * @param textRendering - e.g., auto, optimizeLegibility, geometricPrecision
 * @param hyphens - e.g., none, manual, auto
 */
type TypeDefinition = {
    _id?: string;
    classAlias?: string[] | ["some-class-alias"];
    fontFamily?: string | "sans-serif" | "monospace";
    fontWeight?: string | number | "normal" | "bold" | 400 | 700;
    lineHeight?: string | number | 1.5 | "150%" | "1.5em";
    letterSpacing?: string | "-0.01em";
    textTransform?: string | "uppercase" | "lowercase" | "capitalize" | "none";
    fontSize?: string | "1.5rem" | "1.5em" | "150%" | "1.5vw";
    clamp?: [number, number];
    fontStyle?: string | "normal" | "italic" | "oblique";
    textDecoration?: string | "underline" | "overline" | "line-through" | "none";
    textShadow?: string | "1px 1px 2px black";
    whiteSpace?: string | "normal" | "nowrap" | "pre";
    wordSpacing?: string | "normal" | "0.25em";
    textOverflow?: string | "clip" | "ellipsis";
    direction?: string | "ltr" | "rtl";
    writingMode?: string | "horizontal-tb" | "vertical-rl";
    textRendering?: string | "auto" | "optimizeLegibility" | "geometricPrecision";
    hyphens?: string | "none" | "manual" | "auto";
};
/**
 * Default type definitions for headlines
 */
type TypeDefinitionHeadlines = Record<DefaultHeadlineTypes, TypeDefinition>;
/**
 * Default type definitions for text elements
 */
type TypeDefinitionTexts = Record<DefaultTextTypes, TypeDefinition>;
/**
 * Custom type definitions for headlines and texts.
 */
type CustomTypeDefinitions = {
    customHeadlines?: Record<string, TypeDefinition>;
    customTexts?: Record<string, TypeDefinition>;
    disableDefaults?: boolean;
    customMinScreenSize?: number;
    customMaxScreenSize?: number;
};

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
declare function buenTypeTailwind({ addUtilities }: {
    addUtilities: AddUtilities;
}, options?: CustomTypeDefinitions): void;

/**
 * A module that provides a function to create a `rem`-based `clamp` function.
 *
 * @param minFontSize - The minimum font size in rem
 * @param maxFontSize - The maximum font size in rem
 * @param minScreenSize - The minimum screen size in pixels
 * @param maxScreenSize - The maximum screen size in pixels
 */
declare function createRemClamp(minFontSize: number, maxFontSize: number, minScreenSize?: number, maxScreenSize?: number): string;

/**
 * Default headline object
 */
declare const DEFAULT_HEADLINE: TypeDefinitionHeadlines;
/**
 * Default text object
 */
declare const DEFAULT_TEXT: TypeDefinitionTexts;

export { type CustomTypeDefinitions, type TypeDefinition, type TypeDefinitionHeadlines, type TypeDefinitionTexts, buenTypeTailwind, createRemClamp, DEFAULT_HEADLINE as headlineDefault, DEFAULT_TEXT as textDefault };
