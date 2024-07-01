"use client";

import clsx from "clsx";
import { useState } from "react";

const panelContent = [
  {
    title: "index.ts",
    content: `
  function App() {
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

export function PanelCode() {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = panelContent[activeTab].content;

  return (
    <div className="w-[33%] border-2 border-[--color-primary] rounded-2xl h-full absolute right-0 top-0 z-0">
      <div className="flex flex-row items-start justify-start border-b-2 border-[--color-primary]">
        {panelContent.map((tab, index) => (
          <button
            key={tab.title}
            className={clsx(
              "px-4 py-3 border-r-2 border-[--color-primary] h-full",
            )}
            onClick={() => setActiveTab(index)}
          >
            <p
              className={clsx(activeTab === index ? "opacity-1" : "opacity-45")}
            >
              {tab.title}
            </p>
          </button>
        ))}
      </div>
      <div className="px-4 py-3 h-full overflow-scroll">
        <pre>{activeContent}</pre>
      </div>
    </div>
  );
}
