import { TypeDefinitionHeadlines, TypeDefinitionTexts } from "./types.ts";

export const DEFAULT_HEADLINE: TypeDefinitionHeadlines = {
  "display-xxl": {
    fontWeight: "bold",
    clamp: [6, 12],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-xl": {
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-lg": {
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-md": {
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-sm": {
    fontWeight: "bold",
    clamp: [1.5, 2],
    letterSpacing: "0.1em",
    lineHeight: 1,
  },
  "display-xs": {
    fontWeight: "bold",
    clamp: [1, 1],
    letterSpacing: "0.1em",
    lineHeight: 1,
  },
};

export const DEFAULT_TEXT: TypeDefinitionTexts = {
  title: {
    fontSize: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.1em",
  },
  paragraph: {
    fontSize: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0.05em",
  },
  string: {
    fontSize: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },

  body: {
    fontSize: "0.8rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },
  caption: {
    fontSize: "0.65rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },
};
