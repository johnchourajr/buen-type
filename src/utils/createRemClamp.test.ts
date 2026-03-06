import { describe, expect, it } from "vitest";
import { createRemClamp } from "./createRemClamp";

describe("createRemClamp", () => {
  it("generates a valid clamp expression with default screen sizes", () => {
    const result = createRemClamp(1, 2);
    expect(result).toMatch(/^clamp\(/);
    expect(result).toContain("1rem");
    expect(result).toContain("2rem");
    expect(result).toContain("vw");
  });

  it("uses min font size as clamp minimum", () => {
    const result = createRemClamp(1.5, 3);
    expect(result).toMatch(/^clamp\(1\.5rem,/);
    expect(result).toMatch(/3rem\)$/);
  });

  it("uses max font size as clamp maximum", () => {
    const result = createRemClamp(2, 4);
    expect(result).toMatch(/4rem\)$/);
  });

  it("accepts custom screen sizes", () => {
    const defaultResult = createRemClamp(1, 2, 1024, 1440);
    const customResult = createRemClamp(1, 2, 480, 1440);
    expect(defaultResult).not.toBe(customResult);
  });

  it("produces correct calculation for known values", () => {
    const result = createRemClamp(1, 2, 1024, 1440);
    const minWidth = 1024 / 16; // 64
    const maxWidth = 1440 / 16; // 90
    const m = (2 - 1) / (maxWidth - minWidth);
    const b = -minWidth * m + 1;
    expect(result).toBe(
      `clamp(1rem, ${b}rem + ${m * 100}vw, 2rem)`,
    );
  });

  it("handles equal min and max font sizes", () => {
    const result = createRemClamp(1, 1, 1024, 1440);
    expect(result).toMatch(/^clamp\(1rem,.*1rem\)$/);
  });

  it("handles very small font sizes", () => {
    const result = createRemClamp(0.5, 0.75, 320, 768);
    expect(result).toMatch(/^clamp\(0\.5rem,/);
    expect(result).toMatch(/0\.75rem\)$/);
  });
});
