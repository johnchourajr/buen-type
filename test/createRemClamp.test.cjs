"use strict";
const { createRemClamp } = require("../dist/index.js");
const assert = require("node:assert");
const { describe, it } = require("node:test");

describe("createRemClamp", () => {
  it("returns expected clamp string with default viewport", () => {
    const result = createRemClamp(1, 2, 1024, 1440);
    assert.ok(result.startsWith("clamp(1rem,"));
    assert.ok(result.includes("2rem"));
    assert.ok(result.endsWith(")"));
  });

  it("uses custom min/max screen sizes when provided", () => {
    const result = createRemClamp(0.5, 3, 320, 1920);
    assert.ok(result.includes("0.5rem"));
    assert.ok(result.includes("3rem"));
  });

  it("produces valid clamp() CSS", () => {
    const result = createRemClamp(1, 2, 1024, 1440);
    assert.match(result, /^clamp\(\d+rem,\s*-?[\d.]+rem\s*\+\s*[\d.]+vw,\s*\d+rem\)$/);
  });
});
