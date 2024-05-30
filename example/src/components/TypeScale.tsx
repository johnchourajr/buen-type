import clsx from "clsx";
import { TypeDefinition } from "../../../src/index";

export type TypeScaleProps = {
  typeData: Record<string, TypeDefinition>;
};

function sanitizeTitle(str: string) {
  return (
    str
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      // remove "headline-" or "text-"
      .filter((word) => word !== "Headline" && word !== "Text")
      // capitalize xl, xxl, lg, md, sm, xs
      .map((word) => {
        if (word === "Xl") {
          return "XL";
        } else if (word === "Xxl") {
          return "XXL";
        } else if (word === "Lg") {
          return "LG";
        } else if (word === "Md") {
          return "MD";
        } else if (word === "Sm") {
          return "SM";
        } else if (word === "Xs") {
          return "XS";
        }
        return word;
      })
      .join(" ")
  );
}

export function TypeScale({ typeData }: TypeScaleProps) {
  return (
    <>
      {Object.keys(typeData).map((key) => {
        const { _className } = typeData[key];

        function style() {
          switch (_className) {
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

        return (
          <div key={key} className="mb-10">
            <h2 className={clsx("text-start font-bold", style())}>
              {sanitizeTitle(_className?.toString() || key)}
            </h2>
            <pre>
              <code className="text-body font-mono">
                {JSON.stringify(typeData[key], null, 2)}
              </code>
            </pre>
          </div>
        );
      })}
    </>
  );
}
