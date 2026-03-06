# @muybuen/type

![image](https://github.com/johnchourajr/buen-type/assets/6431920/0d383554-fe9a-4177-8907-796d9e5b33c7)

[![npm version](https://badge.fury.io/js/%40muybuen%2Ftype.svg)](https://badge.fury.io/js/%40muybuen%2Ftype)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@muybuen/type.svg)](https://www.npmjs.com/package/@muybuen/type)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/johnchourajr/type/graphs/commit-activity)


----

A utility library for managing typographic scales in Tailwind CSS. Works with both Tailwind v3 and v4.

**Contents**
- [Installation](#installation)
- [Usage](#usage)
  - [Tailwind v4 (Recommended)](#tailwind-v4-recommended)
  - [Tailwind v3](#tailwind-v3)
  - [Custom Type Definitions](#custom-type-definitions)
- [Defaults](#defaults)
- [Type Properties](#type-properties)
  - [Clamp Property](#clamp-property)
- [Custom Style Keys](#custom-style-keys)
- [Custom Aliases for Styles](#custom-aliases-for-styles)
- [Disable Default Type Styles](#disable-default-type-styles)
- [Contributing](#contributing)
- [License](#license)

## Installation

### With NPM

```bash
npm install @muybuen/type

# or with Yarn
yarn add @muybuen/type

# or with PNPM
pnpm add @muybuen/type
```

### With JSR

```bash
npx jsr add @muybuen/type

# or with Deno
deno add @muybuen/type
```

## Usage

### Tailwind v4 (Recommended)

1. Create a plugin file that configures the typography:

```ts
// buen-type.plugin.ts
import { createBuenTypePlugin } from "@muybuen/type";

export default createBuenTypePlugin();
```

2. Load it in your CSS with the `@plugin` directive:

```css
@import "tailwindcss";
@plugin "./buen-type.plugin.ts";
```

3. Use the generated utility classes:

```tsx
<h1 className="headline-display-xl">Hello World</h1>
<p className="text-body">Lorem ipsum dolor sit amet.</p>
```

### Tailwind v3

Use `createBuenTypePlugin` in your Tailwind config:

```ts
// tailwind.config.ts
import { createBuenTypePlugin } from "@muybuen/type";

export default {
  plugins: [createBuenTypePlugin()],
};
```

Or use the lower-level `buenTypeTailwind` function if you need direct access to `addUtilities`:

```ts
// tailwind.config.ts
import { buenTypeTailwind } from "@muybuen/type";

function typePlugin({ addUtilities }) {
  buenTypeTailwind({ addUtilities }, {
    customHeadlines,
    customTexts,
  });
}

export default {
  plugins: [typePlugin],
};
```

### Custom Type Definitions

Define custom styles using either the default keys or your own [custom keys](#custom-style-keys):

```ts
// type-config.ts
import { TypeDefinition } from "@muybuen/type";

export const customHeadlines: Record<string, TypeDefinition> = {
  'display-xl': {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 'bold',
    clamp: [4.5, 9],
    letterSpacing: '-0.1em',
    lineHeight: 1,
    textTransform: 'uppercase',
  },
};

export const customTexts: Record<string, TypeDefinition> = {
  'body': {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 'normal',
    fontSize: '1.1rem',
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
};
```

Pass them to the plugin:

```ts
// buen-type.plugin.ts
import { createBuenTypePlugin } from "@muybuen/type";
import { customHeadlines, customTexts } from "./type-config";

export default createBuenTypePlugin({
  customHeadlines,
  customTexts,
});
```

## Defaults

The [default styles](https://github.com/johnchourajr/buen-type/blob/main/src/defaults.ts) provide a basic type scale for further customization.

**Default Headline Types:**
- `display-xxl`
- `display-xl`
- `display-lg`
- `display-md`
- `display-sm`
- `display-xs`

**Default Text Types:**
- `title`
- `paragraph`
- `string`
- `body`
- `caption`

## Type Properties

| Property         | Type               | Description                                                  |
| ---------------- | ------------------ | ------------------------------------------------------------ |
| `fontFamily`     | `string`           | The font family to be applied.                               |
| `fontWeight`     | `string \| number` | The weight of the font.                                      |
| `lineHeight`     | `string \| number` | The height of the line.                                      |
| `letterSpacing`  | `string`           | The spacing between letters.                                 |
| `textTransform`  | `string`           | The transformation applied to the text (e.g., uppercase).    |
| `fontSize`       | `string`           | The size of the font.                                        |
| `clamp`          | `[number, number]` | A tuple defining the minimum and maximum sizes for clamping. |
| `fontStyle`      | `string`           | The style of the font (e.g., normal, italic, oblique).       |
| `textDecoration` | `string`           | Decorations added to the text (e.g., underline).             |
| `textShadow`     | `string`           | Adds shadow to the text.                                     |
| `whiteSpace`     | `string`           | Specifies how white space inside an element is handled.      |
| `wordSpacing`    | `string`           | The spacing between words.                                   |
| `textOverflow`   | `string`           | How overflowed content is signaled to the user.              |
| `direction`      | `string`           | Sets the text direction (e.g., ltr, rtl).                    |
| `writingMode`    | `string`           | Defines the layout of text (horizontal or vertical).         |
| `textRendering`  | `string`           | Provides rendering hints to the browser.                     |
| `hyphens`        | `string`           | Specifies how words should be hyphenated.                    |

### Clamp Property

The clamp property sets the range for fluid font sizes. The first value is the minimum size in rem, the second is the maximum. Font size scales fluidly between `customMinScreenSize` (default 1024px) and `customMaxScreenSize` (default 1440px).

```ts
const customHeadlines = {
  'display-xl': {
    fontFamily: 'Arial, sans-serif',
    clamp: [4.5, 9],
  },
};
```

To customize the screen size range:

```ts
createBuenTypePlugin({
  customHeadlines,
  customMinScreenSize: 480,
  customMaxScreenSize: 1920,
});
```

## Custom Style Keys

Custom type definitions can use any kebab-case string as a key. Custom headline keys are prefixed with `headline-` and custom text keys with `text-` when used as Tailwind classes.

```ts
const customHeadlines = {
  'custom-display': {
    fontFamily: 'Arial, sans-serif',
    clamp: [3, 6],
  },
};
// Usage: className="headline-custom-display"

const customTexts = {
  'custom-paragraph': {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.1rem',
  },
};
// Usage: className="text-custom-paragraph"
```

## Custom Aliases for Styles

Add alternative class names for a style using the `classAlias` property:

```ts
const customHeadlines = {
  'display-xl': {
    fontFamily: 'Arial, sans-serif',
    classAlias: ['primary-headline', 'hero-text'],
  },
};
// Usage: className="headline-display-xl" or className="primary-headline" or className="hero-text"
```

## Disable Default Type Styles

To use only your custom definitions without any defaults:

```ts
createBuenTypePlugin({
  disableDefaults: true,
  customHeadlines: { /* ... */ },
  customTexts: { /* ... */ },
});
```

## Contributing

This project is maintained by John Choura, but it open to contributions from anyone. See [CONTRIBUTORS](https://github.com/johnchourajr/buen-type/blob/main/CONTRIBUTORS.md) for a guide on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/johnchourajr/buen-type/blob/main/LICENSE) file for details.
