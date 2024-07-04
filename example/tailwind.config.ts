import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import { buenTypeTailwind } from "../src/index";
import { customTexts } from "./src/config/type";

function typePlugin({ addUtilities }: PluginAPI) {
  buenTypeTailwind(
    { addUtilities },
    {
      customTexts,
      disableDefaults: false,
      customMinScreenSize: 480,
    },
  );
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      "0.5": "0.5px",
      "1": "1px",
      "2": "2px",
      "3": "3px",
    },
    color: {
      foreground: "#00ff0a",
      background: "#000000",
    },
    extend: {
      spacing: {
        "0.05em": "0.05em",
        "0.1em": "0.1em",
        "0.15em": "0.15em",
        "0.25em": "0.25em",
        "0.5em": "0.5em",
        "1em": "1em",
        "2em": "2em",
        "3em": "3em",
        "0.25rem": "0.25rem",
        "0.5rem": "0.5rem",
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
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
  plugins: [typePlugin, containerQueries],
};

export default config;
