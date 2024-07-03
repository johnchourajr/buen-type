import { FC, SVGProps } from "react";

import { IconFluid } from "@/svg/IconFluid";
import { IconTailwind } from "@/svg/IconTailwind";
import { IconTypeScript } from "@/svg/IconTypeScript";

import { SliceWrapper } from "../SliceWrapper";

type FeatureItem = {
  title: string;
  description: string;
  // icon: FC;
  // icon is a component that returns an SVG element
  icon: FC<SVGProps<SVGSVGElement>>;
};

const features: FeatureItem[] = [
  {
    icon: IconFluid,
    title: "Fluid Typography",
    description:
      "Text scales smoothly between specified viewport widths, ensuring consistent readability across devices.",
  },
  {
    icon: IconTailwind,
    title: "Tailwind IntelliSense",
    description:
      "Provides intelligent autocomplete suggestions for Tailwind CSS classes, enhancing development speed and accuracy.",
  },
  {
    icon: IconTypeScript,
    title: "Typescript Safe",
    description:
      "Type safety for Tailwind CSS classes and utilities, reducing errors and improving code reliability.",
  },
];

export function SliceFeatures() {
  return (
    <SliceWrapper title="FEATURES" innerClassName="gap-y-6 py-[8vw]">
      {features.map(({ title, description, icon }) => {
        const Icon = icon;

        return (
          <div key={title} className="flex flex-col gap-y-4 col-span-2">
            <Icon className="my-10" />
            <h3 className="headline-display-sm font-bold max-w-[4em]">
              {title}
            </h3>
            <p className="text-body max-w-[15.6875rem]">{description}</p>
          </div>
        );
      })}
    </SliceWrapper>
  );
}
