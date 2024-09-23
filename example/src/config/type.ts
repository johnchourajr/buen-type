import { TypeDefinition } from "@muybuen/type";

export const customTexts: Record<
  "body" | "string" | "caption",
  TypeDefinition
> = {
  body: {
    fontWeight: "normal",
    fontSize: "1rem",
    lineHeight: 1.25,
    textTransform: "none",
  },
  string: {
    fontWeight: "normal",
    fontSize: "1rem",
    letterSpacing: ".12em",
    lineHeight: 1.25,
    textTransform: "uppercase",
  },
  caption: {
    fontWeight: "normal",
    fontSize: ".75rem",
    lineHeight: 1.25,
  },
};
