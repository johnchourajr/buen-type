# @muybuen/type

![image](https://github.com/johnchourajr/buen-type/assets/6431920/0d383554-fe9a-4177-8907-796d9e5b33c7)

[![npm version](https://badge.fury.io/js/%40muybuen%2Ftype.svg)](https://badge.fury.io/js/%40muybuen%2Ftype)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@muybuen/type.svg)](https://www.npmjs.com/package/@muybuen/type)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/johnchourajr/type/graphs/commit-activity)


----

A utility library for managing typographic scales in Tailwind CSS.

**Contents**
- [@muybuen/type](#muybuentype)
  - [Installation](#installation)
    - [With NPM](#with-npm)
    - [With JSR](#with-jsr)
  - [Usage](#usage)
    - [Add Plugin](#add-plugin)
    - [Custom Type](#custom-type)
  - [Defaults](#defaults)
  - [Type Properties](#type-properties)
    - [Clamp Property](#clamp-property)
  - [Custom Style Keys](#custom-style-keys)
  - [Custom Aliases for Styles](#custom-aliases-for-styles)
  - [Disable default type styles](#disable-default-type-styles)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

### With NPM

```bash
# NPM package with NPM
npm install @muybuen/type

# -or- NPM package with Yarn
yarn add @muybuen/type

# -or- NPM package with PNPM
pnpm add @muybuen/type
```


### With JSR

**NPM**
```bash
# JSR package with NPM
npx jsr add @muybuen/type

# -or- JSR package with Demo
deno add @muybuen/type

# -or- JSR package with Yarn
yarn dlx jsr add @muybuen/type

# -or- JSR package with PNPM
pnpm dlx jsr add @muybuen/type
```

## Usage

### Add Plugin

```tsx
// tailwind.config.js

import { buenTypeTailwind } from "@muybuen/type";

module.exports = {
  //  ...
  plugins: [
    buenTypeTailwind
  ]
};
```

### Custom Type

1. Define custom styles, using either the default keys. You can also add [custom keys](#custom-style-keys).

```ts
// type-config.ts

const customHeadlines = {
  'display-xl': {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: 'bold',
    clamp: [4.5, 9],
    letterSpacing: '-0.1em',
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  // other headline styles
}

const customTexts = {
  'body': {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: 'normal',
    fontSize: '1.1rem'
    letterSpacing: '0em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  // other text styles
}
```

2. Add the custom styles to the plugin

```tsx
// tailwind.config.ts

import { buenTypeTailwind } from "@muybuen/type";
import { customHeadlines, customTexts } from "./type-config";

function typePlugin({ addUtilities }) {
  buenTypeTailwind({ addUtilities }, {
    customHeadlines,
    customTexts
  });
};

module.exports = {
  //  ...
  plugins: [
    typePlugin
  ]
};
```

3. Use tailwind utility classes in the code

```tsx
// SomeComponent.tsx

export const SomeComponent = () => (
  <div>
    <h1 className="headline-display-xl">Hello World</h1>
    <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
);

```

## Defaults
The [default styles](https://github.com/johnchourajr/buen-type/blob/main/src/defaults.ts) provide a basic type scale for further development.

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
| `color`          | `string`           | The color of the text.                                       |
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

The clamp property is used to set the range for font sizes for a particular type. The first value represents the minimum size, while the second value represents the maximum size. Consequently, the resulting font size will dynamically scale between 1024px and 1440px.

```tsx
// type-config.ts

const customHeadlines = {
  'display-xl': {
    fontFamily: 'Arial, sans-serif',
    clamp: [4.5, 9],
  },
  // other styles
}
```

## Custom Style Keys

When creating custom type definitions, either the default keys can be used or they can be expanded. They should be written in kebab-case strings.

The following is an example of how to define custom type definitions:

```tsx
// type-config.ts

const customHeadlines = {
  'custom-display': {
    fontFamily: 'Arial, sans-serif',
    // use stype properties
  },
  // other headline styles
}

const customTexts = {
  'custom-paragraph': {
    fontFamily: 'Arial, sans-serif',
    // use stype properties
  },
  // other text styles
}
```

When using custom styled keys as tailwind classes, they'll be named as `headline-your-key-name`. For example, if your key was `'custom-display'` in the `customHeadlines` object, it would be used as `'headline-custom-display'` class in tailwind.

## Custom Aliases for Styles

If you're replaceing an existing style in the defaults, you can add a custom alias for the style. This is done by adding a `classAlias` key to the style object.

```tsx
// type-config.ts

const customHeadlines = {
  'display-xl': {
    fontFamily: 'Arial, sans-serif',
    classAlias: 'primary-headline',
  },
  // other headline styles
}
```

## Disable default type styles

To disable the default type styles, set the `disableDefaults` option to `true`.

```tsx
// tailwind.config.ts

import { buenTypeTailwind } from "@muybuen/type";
import { customHeadlines, customTexts } from "./type-config";

function typePlugin({ addUtilities }) {
  buenTypeTailwind(
    { addUtilities },
    {
      disableDefaults: true,
    },
  );
};

module.exports = {
  //  ...
  plugins: [
    typePlugin
  ]
};
```

## Contributing

This project is maintained by John Choura, but it open to contributions from anyone. See [CONTRIBUTORS](https://github.com/johnchourajr/buen-type/blob/main/CONTRIBUTORS.md) for a guide on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/johnchourajr/buen-type/blob/main/LICENSE) file for details.
