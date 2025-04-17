# Buen Type Example with Tailwind CSS

This example project demonstrates the usage of the `@muybuen/type` typography plugin with Tailwind CSS.

## Compatibility

This example uses Tailwind CSS 3.x for maximum compatibility with Next.js, but the plugin itself has been updated to support both:

- **Tailwind CSS 3.x** - JavaScript-based configuration (used in this example)
- **Tailwind CSS 4.x** - CSS-based directives (see README in the main project)

## Features

- ✅ Typography scales and utility classes
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Backward compatibility
- ✅ Forward compatibility with Tailwind 4

## Installation

```bash
# Install dependencies
npm install
```

## Running the Example

```bash
# Start the development server
npm run dev
```

Visit http://localhost:3004 to see the main demo.
Visit http://localhost:3004/tailwind4 to see a specific test page demonstrating the typography utilities.

## Current Configuration (Tailwind 3)

The example project uses a standard Tailwind 3 configuration:

### Tailwind Configuration

```js
// tailwind.config.ts
import { buenTypeTailwind } from "../src/index";

const config = {
  // ... other configuration
  plugins: [buenTypeTailwind],
};

export default config;
```

### CSS Setup

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Other styles */
```

## Usage Examples

### Headline Examples
```html
<h1 class="headline-display-xxl">Display XXL</h1>
<h1 class="headline-display-xl">Display XL</h1>
<h1 class="headline-display-lg">Display LG</h1>
```

### Text Examples
```html
<p class="text-title">Title</p>
<p class="text-paragraph">Paragraph</p>
<p class="text-body">Body</p>
```

## Troubleshooting

If you encounter any issues:

1. Clear the Next.js cache: `rm -rf .next node_modules/.cache`
2. Make sure you have the latest versions of all dependencies
3. Check that your PostCSS config only uses `@tailwindcss/postcss` (not the old `tailwindcss` plugin)
