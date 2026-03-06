Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/defaults.ts
/**
* Default headline object
*/
const DEFAULT_HEADLINE = {
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
/**
* Default text object
*/
const DEFAULT_TEXT = {
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
//#endregion
//#region src/utils/createRemClamp.ts
/**
* A module that provides a function to create a `rem`-based `clamp` function.
*
* @param minFontSize - The minimum font size in rem
* @param maxFontSize - The maximum font size in rem
* @param minScreenSize - The minimum screen size in pixels
* @param maxScreenSize - The maximum screen size in pixels
*/
function createRemClamp(minFontSize, maxFontSize, minScreenSize = 1024, maxScreenSize = 1440) {
	const minWidth = minScreenSize / 16;
	const maxWidth = maxScreenSize / 16;
	const m = (maxFontSize - minFontSize) / (maxWidth - minWidth);
	return `clamp(${minFontSize}rem, ${-minWidth * m + minFontSize}rem + ${m * 100}vw, ${maxFontSize}rem)`;
}
//#endregion
//#region src/utils/typedKeys.ts
function typedKeys(obj) {
	return Object.keys(obj);
}
//#endregion
//#region src/buenTypeTailwind.ts
/**
* A module that converts an object of headlines and text definitions into Tailwind CSS utilities.
*
* @todo Explore making minScreenSize and maxScreenSize configurable in createRemClamp
* @todo Make addUtilities a named parameter, importing @tailwindcss/types
* @todo Make return type more specific to what tailwind plugins expect
*/
function buenTypeTailwind({ addUtilities }, options) {
	const generateStyles = (definition) => {
		const styles = {
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
		if (definition.clamp) {
			const customMinScreenSize = options?.customMinScreenSize || 1024;
			const customMaxScreenSize = options?.customMaxScreenSize || 1440;
			styles.fontSize = createRemClamp(definition.clamp[0], definition.clamp[1], customMinScreenSize, customMaxScreenSize);
		}
		return styles;
	};
	const mergedHeadlines = {
		...options?.disableDefaults ? null : DEFAULT_HEADLINE,
		...options?.customHeadlines
	};
	const mergedTexts = {
		...options?.disableDefaults ? null : DEFAULT_TEXT,
		...options?.customTexts
	};
	const headlineUtilities = {};
	typedKeys(mergedHeadlines).forEach((key) => {
		const style = mergedHeadlines[key];
		if (style) {
			headlineUtilities[`.headline-${key}`] = generateStyles(style);
			if (style.classAlias) style.classAlias.forEach((alias) => {
				headlineUtilities[`.${alias}`] = generateStyles(style);
			});
		}
	});
	const textUtilities = {};
	typedKeys(mergedTexts).forEach((key) => {
		const style = mergedTexts[key];
		if (style) {
			textUtilities[`.text-${key}`] = generateStyles(style);
			if (style.classAlias) style.classAlias.forEach((alias) => {
				textUtilities[`.text-${alias}`] = generateStyles(style);
			});
		}
	});
	addUtilities(headlineUtilities);
	addUtilities(textUtilities);
}
/**
* Factory function that returns a Tailwind plugin function.
* Works with both Tailwind v3 (config plugins array) and v4 (@plugin directive).
*
* @example Tailwind v3
* ```ts
* // tailwind.config.ts
* import { createBuenTypePlugin } from "@muybuen/type";
*
* export default {
*   plugins: [createBuenTypePlugin({ customTexts, customHeadlines })],
* };
* ```
*
* @example Tailwind v4
* ```ts
* // buen-type.plugin.ts
* import { createBuenTypePlugin } from "@muybuen/type";
* export default createBuenTypePlugin({ customTexts });
* ```
* ```css
* @plugin "./buen-type.plugin.ts";
* ```
*/
function createBuenTypePlugin(options) {
	return function({ addUtilities }) {
		buenTypeTailwind({ addUtilities }, options);
	};
}
//#endregion
exports.buenTypeTailwind = buenTypeTailwind;
exports.createBuenTypePlugin = createBuenTypePlugin;
exports.createRemClamp = createRemClamp;
exports.headlineDefault = DEFAULT_HEADLINE;
exports.textDefault = DEFAULT_TEXT;

//# sourceMappingURL=index.cjs.map