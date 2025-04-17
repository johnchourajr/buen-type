"use client";

import { computeFontSize } from "@/utils/computeFontSize";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { TypeDefinition } from "../../../../src/index";
import { sanitizeTitle } from "./TypeScale.utils";

export type TypeScaleProps = {
  typeData: Record<string, TypeDefinition>;
  windowWidth: number;
};

export function TypeScale({ typeData, windowWidth = 0 }: TypeScaleProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {Object.keys(typeData).map((key) => {
        const { _id, clamp } = typeData[key];

        function style() {
          switch (_id) {
            case "headline-display-xxl":
              return "headline-display-xxl";
            case "headline-display-xl":
              return "headline-display-xl";
            case "headline-display-lg":
              return "headline-display-lg";
            case "headline-display-md":
              return "headline-display-md";
            case "headline-display-sm":
              return "headline-display-sm";
            case "headline-display-xs":
              return "headline-display-xs";
            case "text-title":
              return "text-title";
            case "text-paragraph":
              return "text-paragraph";
            case "text-string":
              return "text-string";
            case "text-body":
              return "text-body";
            case "text-caption":
              return "text-caption";
            default:
              return "";
          }
        }

        const newClamp =
          isClient && windowWidth > 0 && clamp
            ? computeFontSize(windowWidth, clamp[0], clamp[1], 480)
            : null;

        return (
          <div key={key} className="col-span-full flex flex-col">
            <h2
              className={clsx(
                "text-start font-bold leading-none whitespace-pre",
                "-ml-0.05em mb-0.25rem",
                style(),
              )}
            >
              {sanitizeTitle(_id?.toString() || key)}
            </h2>
            {isClient && (
              <pre>
                {newClamp && <span>{newClamp}</span>}
                {newClamp && <span>rem</span>}
              </pre>
            )}
          </div>
        );
      })}
    </>
  );
}
