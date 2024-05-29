# @buen/type

A utility library for managing typographic scales in Tailwind CSS or React.

**Contents**
- [@buen/type](#buentype)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Add Plugin](#add-plugin)
    - [Custom Type](#custom-type)
  - [Defaults](#defaults)
  - [Type Properties](#type-properties)
    - [Clamp Property](#clamp-property)
  - [Custom Style Keys](#custom-style-keys)

## Installation

**NPM**
```bash
npx jsr add @buen/type
```

**Deno**
```bash
deno add @buen/type
```

**Yarn**
```bash
yarn dlx jsr add @buen/type
```

**PNPM**
```bash
pnpm dlx jsr add @buen/type
```

## Usage

### Add Plugin

```tsx
// tailwind.config.js

import { buenTypeTailwind } from "@buen/type";

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

import { buenTypeTailwind } from "@buen/type";
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

| Property        | Type               | Description                                                  |
| --------------- | ------------------ | ------------------------------------------------------------ |
| `fontFamily`    | `string`           | The font family to be applied.                               |
| `fontWeight`    | `string \| number` | The weight of the font.                                      |
| `lineHeight`    | `string \| number` | The height of the line.                                      |
| `letterSpacing` | `string`           | The spacing between letters.                                 |
| `textTransform` | `string`           | The transformation applied to the text (e.g., uppercase).    |
| `fontSize`      | `string`           | The size of the font.                                        |
| `clamp`         | `[number, number]` | A tuple defining the minimum and maximum sizes for clamping. |

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
    // styles
  },
  // other headline styles
}

const customTexts = {
  'custom-paragraph': {
    // styles
  },
  // other text styles
}
```
