"use client";

import clsx from "clsx";
import { useState } from "react";
import { panelContent } from "./PanelCode.content";

export function PanelCode() {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = panelContent[activeTab].content;

  return (
    <div className="md:w-[33%] w-full mt-8 md:mt-0 border-2 border-[--color-primary] rounded-2xl md:h-full md:absolute right-0 top-0 z-0 overflow-hidden col-span-full">
      <div className="flex flex-row items-start w-full overflow-scroll justify-start border-b-2 border-[--color-primary]">
        {panelContent.map((tab, index) => (
          <button
            key={tab.title}
            className={clsx(
              "px-4 py-3 border-r-2 border-[--color-primary] h-full",
            )}
            onClick={() => setActiveTab(index)}
          >
            <p
              className={clsx(
                "whitespace-pre",
                activeTab === index ? "opacity-1" : "opacity-45",
              )}
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
