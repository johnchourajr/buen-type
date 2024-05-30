import { TypeDefinitionHeadlines, TypeDefinitionTexts } from "./types.ts";

export const DEFAULT_HEADLINE: TypeDefinitionHeadlines = {
  "display-xxl": {
    _className: "headline-display-xxl",
    fontWeight: "bold",
    clamp: [6, 12],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-xl": {
    _className: "headline-display-xl",
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-lg": {
    _className: "headline-display-lg",
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-md": {
    _className: "headline-display-md",
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-sm": {
    _className: "headline-display-sm",
    fontWeight: "bold",
    clamp: [1.5, 2],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-xs": {
    _className: "headline-display-xs",
    fontWeight: "bold",
    clamp: [1, 1],
    letterSpacing: "-0em",
    lineHeight: 1,
  },
};

export const DEFAULT_TEXT: TypeDefinitionTexts = {
  title: {
    _className: "text-title",
    fontSize: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  paragraph: {
    _className: "text-paragraph",
    fontSize: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  string: {
    _className: "text-string",
    fontSize: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  body: {
    _className: "text-body",
    fontSize: "0.8rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  caption: {
    _className: "text-caption",
    fontSize: "0.65rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
};
