# @muybuen/type

![image](https://github.com/johnchourajr/buen-type/assets/6431920/0d383554-fe9a-4177-8907-796d9e5b33c7)

[![npm version](https://badge.fury.io/js/%40muybuen%2Ftype.svg)](https://badge.fury.io/js/%40muybuen%2Ftype)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@muybuen/type.svg)](https://www.npmjs.com/package/@muybuen/type)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/johnchourajr/type/graphs/commit-activity)

---

A utility library for managing typographic scales in Tailwind CSS, with support for both Tailwind CSS 3 and 4.

## 🚀 New in Version 2.0.0: Tailwind CSS 4 Support

Version 2.0.0 adds support for Tailwind CSS 4 while maintaining backward compatibility with Tailwind CSS 3. Key features include:

- **Dual API Support**: Works with both Tailwind CSS 3 (JavaScript-based) and Tailwind CSS 4 (CSS-based)
- **CSS Variables**: Enhanced customization through CSS variables for Tailwind CSS 4
- **Fluid Typography**: New fluid typography utility for responsive text scaling
- **Improved Flexibility**: Better control over typography styles across your project

See the [Migration Guide](./MIGRATION.md) for detailed information about upgrading.

**Contents**

- [@muybuen/type](#muybuentype)
  - [Installation](#installation)
    - [With NPM](#with-npm)
    - [With JSR](#with-jsr)
  - [Usage](#usage)
    - [Tailwind CSS 4 (CSS-based configuration)](#tailwind-css-4-css-based-configuration)
    - [Tailwind CSS 3 (JS-based configuration)](#tailwind-css-3-js-based-configuration)
  - [Defaults](#defaults)
  - [Type Properties](#type-properties)
    - [Clamp Property](#clamp-property)
  - [Custom Style Keys](#custom-style-keys)
  - [Custom Aliases for Styles](#custom-aliases-for-styles)
  - [Disable default type styles](#disable-default-type-styles)
  - [Framework Compatibility](#framework-compatibility)
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

### Tailwind CSS 4 (CSS-based configuration)

In Tailwind CSS 4, you can use the plugin with the new CSS-based configuration:

```css
/* main.css */
@import "tailwindcss";
@plugin '@muybuen/type';

/* Optional customization using CSS variables */
@theme {
  --buen-headline-font: "Inter", sans-serif;
  --buen-body-font: "Merriweather", serif;
  --buen-headline-color: #1a202c;
  --buen-text-color: #4a5568;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  @theme {
    --buen-headline-color: #f7fafc;
    --buen-text-color: #e2e8f0;
  }
}
```

Using the generated classes:

```html
<!-- Default headline classes -->
<h1 class="headline-display-xl">Large Headline</h1>
<p class="text-body">Regular paragraph</p>

<!-- New fluid typography utility -->
<h2 class="text-fluid-[2,4]">Fluid Heading</h2>
```

### Tailwind CSS 3 (JS-based configuration)

For Tailwind CSS 3 projects, use the JavaScript-based configuration:

```js
// tailwind.config.js
import { buenTypeTailwind } from "@muybuen/type";

module.exports = {
  //  ...
  plugins: [buenTypeTailwind],
};
```

#### Custom Type Definitions

1. Define custom styles:

```ts
// type-config.ts
import { TypeDefinition } from "@muybuen/type";

const customHeadlines: Record<string, TypeDefinition> = {
  "display-xl": {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: "bold",
    clamp: [4.5, 9],
    letterSpacing: "-0.1em",
    lineHeight: 1,
    textTransform: "uppercase",
  },
  // other headline styles
};

const customTexts: Record<string, TypeDefinition> = {
  body: {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: "normal",
    fontSize: "1.1rem",
    letterSpacing: "0em",
    lineHeight: 1.5,
    textTransform: "none",
  },
  // other text styles
};
```

2. Add the custom styles to the plugin:

```js
// tailwind.config.js
import { buenTypeTailwind } from "@muybuen/type";
import { customHeadlines, customTexts } from "./type-config";

function typePlugin({ addUtilities }) {
  buenTypeTailwind(
    { addUtilities },
    {
      customHeadlines,
      customTexts,
      customMinScreenSize: 480, // Optional: Default is 1024
      customMaxScreenSize: 1280, // Optional: Default is 1440
    },
  );
}

module.exports = {
  //  ...
  plugins: [typePlugin],
};
```

3. Use the utility classes:

```jsx
// SomeComponent.jsx
export const SomeComponent = () => (
  <div>
    <h1 className="headline-display-xl">Hello World</h1>
    <p className="text-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
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

The clamp property sets a responsive font size range. The first value is the minimum size (rem), and the second is the maximum size (rem). The font size dynamically scales between these values based on the viewport width (from the minimum screen size to the maximum screen size).

```ts
// type-config.ts
const customHeadlines = {
  "display-xl": {
    fontFamily: "Arial, sans-serif",
    clamp: [4.5, 9], // Will scale from 4.5rem to 9rem
  },
  // other styles
};
```

## Custom Style Keys

You can use default keys or create custom ones in kebab-case:

```ts
// type-config.ts
const customHeadlines = {
  "custom-display": {
    fontFamily: "Arial, sans-serif",
    // use type properties
  },
  // other headline styles
};

const customTexts = {
  "custom-paragraph": {
    fontFamily: "Arial, sans-serif",
    // use type properties
  },
  // other text styles
};
```

These will be accessible as `headline-custom-display` and `text-custom-paragraph` classes.

## Custom Aliases for Styles

You can add aliases for existing styles:

```ts
// type-config.ts
const customHeadlines = {
  "display-xl": {
    fontFamily: "Arial, sans-serif",
    classAlias: ["primary-headline", "main-title"],
  },
  // other headline styles
};
```

This makes the style available through the additional class names.

## Disable default type styles

To use only your custom styles:

```js
// tailwind.config.js
import { buenTypeTailwind } from "@muybuen/type";
import { customHeadlines, customTexts } from "./type-config";

function typePlugin({ addUtilities }) {
  buenTypeTailwind(
    { addUtilities },
    {
      customHeadlines,
      customTexts,
      disableDefaults: true,
    },
  );
}

module.exports = {
  //  ...
  plugins: [typePlugin],
};
```

## Framework Compatibility

- **Next.js**: We recommend using the Tailwind CSS 3 approach until Next.js provides official Tailwind CSS 4 support.
- **Vite/Standalone**: Tailwind CSS 4's CSS-based approach should work well.
- **Custom Build Setups**: Test thoroughly with your specific toolchain.

For more details, see the [Migration Guide](./MIGRATION.md).

## Contributing

This project is maintained by John Choura, but is open to contributions from anyone. See [CONTRIBUTING.md](https://github.com/johnchourajr/buen-type/blob/main/CONTRIBUTING.md) for a guide on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/johnchourajr/buen-type/blob/main/LICENSE) file for details.
