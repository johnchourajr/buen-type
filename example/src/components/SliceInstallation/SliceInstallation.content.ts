import { PanelProps } from "../PanelCode/PanelCode.types";

export const sliceInstallTerminal: PanelProps[] = [
  {
    title: "terminal",
    content: `
  npx jsr add @buen/type
  // or
  deno add @buen/type
  // or
  yarn dlx jsr add @buen/type
  // or
  pnpm dlx jsr add @buen/type
    `,
  },
];

export const sliceInstallConfig: PanelProps[] = [
  {
    title: "tailwind.config.ts",
    content: `
  import { buenTypeTailwind } from "@buen/type";

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    //  ...
    plugins: [
      buenTypeTailwind
    ]
  };
    `,
  },
];

export const sliceInstallCustom: PanelProps[] = [
  {
    title: "type-config.ts",
    content: `
  const customHeadlines = {
    'display-xl': {
      classAlias: 'primary-headline',
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
      classAlias: 'article-body',
      fontFamily: "'Inter', 'sans-serif'",
      fontWeight: 'normal',
      fontSize: '1.1rem'
      letterSpacing: '0em',
      lineHeight: 1.5,
      textTransform: 'none',
    },
    // other text styles
  }
    `,
  },
  {
    title: "tailwind.config.js",
    content: `
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
    `,
  },
];
