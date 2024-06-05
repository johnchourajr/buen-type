import { TypeDefinitionHeadlines, TypeDefinitionTexts } from "./types.ts";

/**
 * Default headline object
 */
export const DEFAULT_HEADLINE: TypeDefinitionHeadlines = {
  "display-xxl": {
    _id: "headline-display-xxl",
    classAlias: ["main-headline"],
    fontWeight: "bold",
    clamp: [6, 12],
    letterSpacing: "-0.05em",
  },
  "display-xl": {
    _id: "headline-display-xl",
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "-0.05em",
  },
  "display-lg": {
    _id: "headline-display-lg",
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-md": {
    _id: "headline-display-md",
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-sm": {
    _id: "headline-display-sm",
    fontWeight: "bold",
    clamp: [1.5, 2],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-xs": {
    _id: "headline-display-xs",
    fontWeight: "bold",
    clamp: [1, 1],
    letterSpacing: "-0em",
    lineHeight: 1
  },
};

/**
 * Default text object
 */
export const DEFAULT_TEXT: TypeDefinitionTexts = {
  title: {
    _id: "text-title",
    fontSize: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  paragraph: {
    _id: "text-paragraph",
    fontSize: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  string: {
    _id: "text-string",
    fontSize: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  body: {
    _id: "text-body",
    fontSize: "0.8rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  caption: {
    _id: "text-caption",
    fontSize: "0.65rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
};
