# Migrating from Tailwind CSS 3 to Tailwind CSS 4

## Overview

Version 2.0.0 of `@muybuen/type` adds support for Tailwind CSS 4 while maintaining backward compatibility with Tailwind CSS 3. This document outlines the key changes and provides guidance for migrating your project.

## Key Changes

- **Dual API Support**: The plugin now supports both Tailwind CSS 3's JavaScript-based configuration and Tailwind CSS 4's CSS-based directives.
- **CSS Variables**: Added CSS variables for dynamic theming in Tailwind CSS 4.
- **Fluid Typography**: Enhanced support for fluid typography using Tailwind CSS 4's new features.
- **Improved Customization**: More flexible options for customizing typography styles.

## Migration Guide

### For Tailwind CSS 3 Users

If you're using Tailwind CSS 3, your existing configuration will continue to work without changes:

```js
// tailwind.config.js
import { buenTypeTailwind } from "@muybuen/type";

module.exports = {
  // ...
  plugins: [buenTypeTailwind],
};
```

With custom styles:

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
      // Other options...
    },
  );
}

module.exports = {
  // ...
  plugins: [typePlugin],
};
```

### For Tailwind CSS 4 Users

For Tailwind CSS 4, you can use the new CSS-based approach:

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

### New Features in Tailwind CSS 4

#### CSS Variables

Tailwind CSS 4 introduces CSS variables for customization, which can be modified through the `@theme` directive:

```css
@theme {
  --buen-headline-font: "Inter", sans-serif;
  --buen-body-font: "Merriweather", serif;
}
```

#### Fluid Typography

With Tailwind CSS 4, you can use the new fluid typography utility:

```html
<h1 class="text-fluid-[2,4]">Fluid Heading</h1>
```

This creates a responsive text size that scales between 2rem and 4rem based on viewport width.

## Framework Compatibility Notes

### Next.js

If you're using Next.js, we recommend continuing with the Tailwind CSS 3 approach until Next.js provides official Tailwind CSS 4 integration:

```js
// Next.js project with Tailwind CSS 3
import { buenTypeTailwind } from "@muybuen/type";

module.exports = {
  // ...
  plugins: [buenTypeTailwind],
};
```

### Standalone or Vite Projects

For standalone or Vite projects, Tailwind CSS 4's CSS-based approach should work well:

```css
/* main.css */
@import "tailwindcss";
@plugin '@muybuen/type';
```

## Troubleshooting

If you encounter issues integrating with Tailwind CSS 4, consider:

1. **Framework Compatibility**: Not all frameworks have full Tailwind CSS 4 support yet
2. **PostCSS Configuration**: Tailwind CSS 4 uses `@tailwindcss/postcss` as a separate package
3. **CSS Architecture**: Verify your main CSS file correctly imports Tailwind with `@import 'tailwindcss'`

Always check your framework's documentation for specific Tailwind CSS 4 integration steps.
