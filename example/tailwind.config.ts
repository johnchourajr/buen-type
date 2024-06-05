import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import { buenTypeTailwind } from "../src/index";

function typePlugin({ addUtilities }: PluginAPI) {
  buenTypeTailwind({ addUtilities }, {
    disableDefaults: false,
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: ["GoshaSans-Ultrabold", "sans-serif"],
        sans: ["GoshaSans-Regular", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typePlugin],
};
export default config;
