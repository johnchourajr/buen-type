var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/defaults.ts
var DEFAULT_HEADLINE = {
  "display-xxl": {
    _id: "headline-display-xxl",
    classAlias: ["main-headline"],
    fontWeight: "bold",
    clamp: [6, 12],
    letterSpacing: "-0.05em"
  },
  "display-xl": {
    _id: "headline-display-xl",
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "-0.05em"
  },
  "display-lg": {
    _id: "headline-display-lg",
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "-0.05em",
    lineHeight: 1
  },
  "display-md": {
    _id: "headline-display-md",
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "-0.05em",
    lineHeight: 1
  },
  "display-sm": {
    _id: "headline-display-sm",
    fontWeight: "bold",
    clamp: [1.5, 2],
    letterSpacing: "-0.05em",
    lineHeight: 1
  },
  "display-xs": {
    _id: "headline-display-xs",
    fontWeight: "bold",
    clamp: [1, 1],
    letterSpacing: "-0em",
    lineHeight: 1
  }
};
var DEFAULT_TEXT = {
  title: {
    _id: "text-title",
    fontSize: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em"
  },
  paragraph: {
    _id: "text-paragraph",
    fontSize: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0em"
  },
  string: {
    _id: "text-string",
    fontSize: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em"
  },
  body: {
    _id: "text-body",
    fontSize: "0.8rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em"
  },
  caption: {
    _id: "text-caption",
    fontSize: "0.65rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em"
  }
};

// src/utils/createRemClamp.ts
function createRemClamp(minFontSize, maxFontSize, minScreenSize = 1024, maxScreenSize = 1440) {
  const minWidth = minScreenSize / 16;
  const maxWidth = maxScreenSize / 16;
  const m = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const b = -minWidth * m + minFontSize;
  return `clamp(${minFontSize}rem, ${b}rem + ${m * 100}vw, ${maxFontSize}rem)`;
}

// src/utils/typedKeys.ts
function typedKeys(obj) {
  return Object.keys(obj);
}

// src/buenTypeTailwind.ts
function buenTypeTailwind({ addUtilities }, options) {
  const generateStyles = (definition) => {
    let styles = {
      fontFamily: definition.fontFamily,
      fontWeight: definition.fontWeight,
      lineHeight: definition.lineHeight,
      letterSpacing: definition.letterSpacing,
      textTransform: definition.textTransform,
      fontSize: definition.fontSize,
      fontStyle: definition.fontStyle,
      textDecoration: definition.textDecoration,
      textShadow: definition.textShadow,
      whiteSpace: definition.whiteSpace,
      wordSpacing: definition.wordSpacing,
      textOverflow: definition.textOverflow,
      direction: definition.direction,
      writingMode: definition.writingMode,
      textRendering: definition.textRendering,
      hyphens: definition.hyphens
    };
    if (definition.fontSize) {
      styles.fontSize = definition.fontSize;
    }
    if (definition.clamp) {
      const customMinScreenSize = (options == null ? void 0 : options.customMinScreenSize) || 1024;
      const customMaxScreenSize = (options == null ? void 0 : options.customMaxScreenSize) || 1440;
      styles.fontSize = createRemClamp(
        definition.clamp[0],
        definition.clamp[1],
        customMinScreenSize,
        customMaxScreenSize
      );
    }
    return styles;
  };
  const defaultHeadlines = (options == null ? void 0 : options.disableDefaults) ? null : DEFAULT_HEADLINE;
  const mergedHeadlines = __spreadValues(__spreadValues({}, defaultHeadlines), options == null ? void 0 : options.customHeadlines);
  const defaultTexts = (options == null ? void 0 : options.disableDefaults) ? null : DEFAULT_TEXT;
  const mergedTexts = __spreadValues(__spreadValues({}, defaultTexts), options == null ? void 0 : options.customTexts);
  let headlineUtilities = {};
  typedKeys(mergedHeadlines).forEach((key) => {
    const style = mergedHeadlines[key];
    if (style) {
      headlineUtilities[`.headline-${key}`] = generateStyles(style);
      if (style.classAlias) {
        style.classAlias.forEach((alias) => {
          headlineUtilities[`.${alias}`] = generateStyles(style);
        });
      }
    }
  });
  let textUtilities = {};
  typedKeys(mergedTexts).forEach((key) => {
    const style = mergedTexts[key];
    if (style) {
      textUtilities[`.text-${key}`] = generateStyles(style);
      if (style.classAlias) {
        style.classAlias.forEach((alias) => {
          textUtilities[`.text-${alias}`] = generateStyles(style);
        });
      }
    }
  });
  addUtilities(headlineUtilities);
  addUtilities(textUtilities);
}
export {
  buenTypeTailwind,
  createRemClamp,
  DEFAULT_HEADLINE as headlineDefault,
  DEFAULT_TEXT as textDefault
};
//# sourceMappingURL=index.mjs.map