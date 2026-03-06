import { describe, expect, it, vi } from "vitest";
import { buenTypeTailwind, createBuenTypePlugin } from "./buenTypeTailwind";
import { DEFAULT_HEADLINE, DEFAULT_TEXT } from "./defaults";

function collectUtilities(options?: Parameters<typeof buenTypeTailwind>[1]) {
  const utilities: Record<string, Record<string, unknown>> = {};
  const addUtilities = vi.fn((u: Record<string, unknown>) => {
    Object.assign(utilities, u);
  });

  buenTypeTailwind({ addUtilities }, options);
  return { utilities, addUtilities };
}

describe("buenTypeTailwind", () => {
  it("calls addUtilities with headline and text utilities", () => {
    const { addUtilities } = collectUtilities();
    expect(addUtilities).toHaveBeenCalledTimes(2);
  });

  it("generates default headline utilities", () => {
    const { utilities } = collectUtilities();
    expect(utilities[".headline-display-xxl"]).toBeDefined();
    expect(utilities[".headline-display-xl"]).toBeDefined();
    expect(utilities[".headline-display-lg"]).toBeDefined();
    expect(utilities[".headline-display-md"]).toBeDefined();
    expect(utilities[".headline-display-sm"]).toBeDefined();
    expect(utilities[".headline-display-xs"]).toBeDefined();
  });

  it("generates default text utilities", () => {
    const { utilities } = collectUtilities();
    expect(utilities[".text-title"]).toBeDefined();
    expect(utilities[".text-paragraph"]).toBeDefined();
    expect(utilities[".text-string"]).toBeDefined();
    expect(utilities[".text-body"]).toBeDefined();
    expect(utilities[".text-caption"]).toBeDefined();
  });

  it("applies clamp-based fontSize for headlines", () => {
    const { utilities } = collectUtilities();
    const xxl = utilities[".headline-display-xxl"] as Record<string, string>;
    expect(xxl.fontSize).toMatch(/^clamp\(/);
  });

  it("applies static fontSize for text definitions", () => {
    const { utilities } = collectUtilities();
    const body = utilities[".text-body"] as Record<string, string>;
    expect(body.fontSize).toBe(DEFAULT_TEXT.body.fontSize);
  });

  it("preserves fontWeight from definitions", () => {
    const { utilities } = collectUtilities();
    const xxl = utilities[".headline-display-xxl"] as Record<string, string>;
    expect(xxl.fontWeight).toBe(DEFAULT_HEADLINE["display-xxl"].fontWeight);
  });

  it("generates alias classes", () => {
    const { utilities } = collectUtilities();
    expect(utilities[".main-headline"]).toBeDefined();
    const alias = utilities[".main-headline"] as Record<string, string>;
    const original = utilities[".headline-display-xxl"] as Record<string, string>;
    expect(alias.fontSize).toBe(original.fontSize);
  });

  it("merges custom headlines with defaults", () => {
    const { utilities } = collectUtilities({
      customHeadlines: {
        "custom-hero": {
          fontWeight: "900",
          clamp: [5, 10],
          letterSpacing: "-0.02em",
        },
      },
    });

    expect(utilities[".headline-custom-hero"]).toBeDefined();
    expect(utilities[".headline-display-xxl"]).toBeDefined();
  });

  it("merges custom texts with defaults", () => {
    const { utilities } = collectUtilities({
      customTexts: {
        "custom-label": {
          fontSize: "0.6rem",
          fontWeight: "bold",
        },
      },
    });

    expect(utilities[".text-custom-label"]).toBeDefined();
    expect(utilities[".text-body"]).toBeDefined();
  });

  it("disables defaults when disableDefaults is true", () => {
    const { utilities } = collectUtilities({
      disableDefaults: true,
      customHeadlines: {
        hero: { fontWeight: "bold", clamp: [4, 8] },
      },
      customTexts: {
        label: { fontSize: "0.75rem" },
      },
    });

    expect(utilities[".headline-hero"]).toBeDefined();
    expect(utilities[".text-label"]).toBeDefined();
    expect(utilities[".headline-display-xxl"]).toBeUndefined();
    expect(utilities[".text-body"]).toBeUndefined();
  });

  it("uses custom screen sizes for clamp calculation", () => {
    const { utilities: defaultUtils } = collectUtilities();
    const { utilities: customUtils } = collectUtilities({
      customMinScreenSize: 480,
      customMaxScreenSize: 1920,
    });

    const defaultFontSize = (defaultUtils[".headline-display-xxl"] as Record<string, string>).fontSize;
    const customFontSize = (customUtils[".headline-display-xxl"] as Record<string, string>).fontSize;
    expect(defaultFontSize).not.toBe(customFontSize);
  });
});

describe("createBuenTypePlugin", () => {
  it("returns a function that accepts addUtilities", () => {
    const plugin = createBuenTypePlugin();
    expect(typeof plugin).toBe("function");

    const addUtilities = vi.fn();
    plugin({ addUtilities });
    expect(addUtilities).toHaveBeenCalled();
  });

  it("passes options through to buenTypeTailwind", () => {
    const plugin = createBuenTypePlugin({
      disableDefaults: true,
      customHeadlines: {
        hero: { fontWeight: "bold", clamp: [4, 8] },
      },
    });

    const utilities: Record<string, unknown> = {};
    const addUtilities = vi.fn((u: Record<string, unknown>) => {
      Object.assign(utilities, u);
    });

    plugin({ addUtilities });
    expect(utilities[".headline-hero"]).toBeDefined();
    expect(utilities[".headline-display-xxl"]).toBeUndefined();
  });
});
