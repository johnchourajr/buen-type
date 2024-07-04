import { PanelProps } from "../PanelCode/PanelCode.types";

export const slicePanelContent: PanelProps[] = [
  {
    title: "index.ts",
    content: `
  export default function App() {
    return(
      <main>
        <div>
          <p class="headline-display-xxl">Display XXL</p>
          <p class="headline-display-xl">Display XL</p>
          <p class="headline-display-lg">Display LG</p>
          <p class="headline-display-md">Display MD</p>
          <p class="headline-display-sm">Display SM</p>
          <p class="headline-display-xs">Display XS</p>
        </div>
      </main>
    );
  }
    `,
  },
  {
    title: "tailwind-config.ts",
    content: `
  import type { Config } from "tailwindcss";
  import { PluginAPI } from "tailwindcss/types/config";
  import { buenTypeTailwind } from "@buen-type";

  function typePlugin({ addUtilities }: PluginAPI) {
    buenTypeTailwind(
      { addUtilities },
      {
        customMinScreenSize: 480,
      },
    );
  }

  export default const config: Config = {
    ...
    plugins: [typePlugin],
  };
    `,
  },
];
