"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { PanelProps } from "./PanelCode.types";

type PanelCodeProps = {
  className?: string;
  panelContent?: PanelProps[];
};

export function PanelCode({ className, panelContent }: PanelCodeProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const activeContent = panelContent ? panelContent[activeTab].content : "";

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
        setIsHovering(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const copyText = (string: string) => {
    navigator.clipboard.writeText(string);
    setIsCopied(true);
  };

  return (
    <div
      className={clsx(
        "@container",
        "w-full mt-8 md:mt-0 border-2 border-[--color-primary] rounded-2xl md:h-full right-0 top-0 z-0 overflow-hidden col-span-full",
        className,
      )}
    >
      <div className="relative flex flex-row items-start w-full overflow-scroll justify-start border-b-2 border-[--color-primary]">
        {panelContent &&
          panelContent.map((tab, index) => (
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
        <div className="hidden justify-end w-full h-full grow @[21rem]:flex">
          <button
            onClick={() => copyText(activeContent)}
            onMouseEnter={() => !isCopied && setIsHovering(true)}
            onMouseLeave={() => !isCopied && setIsHovering(false)}
            className={clsx("px-4 py-3 h-full")}
          >
            {isCopied ? "copied" : "copy"}
          </button>
        </div>
      </div>
      <div className="px-4 py-3 h-full overflow-scroll">
        <pre>{activeContent}</pre>
      </div>
    </div>
  );
}
