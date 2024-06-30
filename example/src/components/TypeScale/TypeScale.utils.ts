"use client";
export function sanitizeTitle(str: string) {
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
