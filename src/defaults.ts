import { TypeDefinitions } from "./types.ts";

export const DEFAULT_HEADLINE: TypeDefinitions = {
  "display-xxl": {
    id: "headline-display-xxl",
    fontWeight: "bold",
    clamp: [6, 12],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-xl": {
    id: "headline-display-xl",
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-lg": {
    id: "headline-display-lg",
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-md": {
    id: "headline-display-md",
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "0em",
    lineHeight: 1,
  },
  "display-sm": {
    id: "headline-display-sm",
    fontWeight: "bold",
    clamp: [1.5, 2],
    letterSpacing: "0.1em",
    lineHeight: 1,
  },
  "display-xs": {
    id: "headline-display-xs",
    fontWeight: "bold",
    clamp: [1, 1],
    letterSpacing: "0.1em",
    lineHeight: 1,
  },
};

export const DEFAULT_TEXT: TypeDefinitions = {
  title: {
    id: "text-title",
    size: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.1em",
  },
  paragraph: {
    id: "text-paragraph",
    size: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0.05em",
  },
  string: {
    id: "text-string",
    size: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },

  body: {
    id: "text-body",
    size: "0.8rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },
  caption: {
    id: "text-caption",
    size: "0.65rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0.15em",
  },
};
