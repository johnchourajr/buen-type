# @buen/type

A utility library for managing typographic scales in Tailwind CSS or React.

## Usage

## Add Plugin

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

1. Define custom styles, using either the default keys or by expanding upon them

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
  // ...
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
  // ...
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

### Defaults
The [default styles](https://github.com/johnchourajr/buen-type/blob/main/src/defaults.ts) establish a basic type scale for building upon

#### Default Headline Types
These are the default headline types that can be used in the project:
- display-xxl
- display-xl
- display-lg
- display-md
- display-sm
- display-xs

#### Default Text Types
These are the default text types that can be used in the project:
- title
- paragraph
- string
- body
- caption

### Type Properties

| Property        | Type               | Description                                                  |
| --------------- | ------------------ | ------------------------------------------------------------ |
| `fontFamily`    | `string`           | The font family to be applied.                               |
| `fontWeight`    | `string \| number` | The weight of the font.                                      |
| `lineHeight`    | `string \| number` | The height of the line.                                      |
| `letterSpacing` | `string`           | The spacing between letters.                                 |
| `textTransform` | `string`           | The transformation applied to the text (e.g., uppercase).    |
| `fontSize`      | `string`           | The size of the font.                                        |
| `clamp`         | `[number, number]` | A tuple defining the minimum and maximum sizes for clamping. |

### Custom Types

Example Usage
Here's an example of how you might define custom type definitions:

```tsx
const customHeadlines = {
  'custom-display': {
    fontFamily: 'Arial, sans-serif',
    // styles
  },
}

const customTexts = {
  'custom-paragraph': {
    // styles
  },
}
```
