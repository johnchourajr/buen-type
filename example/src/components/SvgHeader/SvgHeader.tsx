"use client";

import clsx from "clsx";
import { RefObject, useEffect, useState } from "react";
import { logotype } from "./logotype";

type SvgHeaderProps = {
  className?: string;
  containerRef: RefObject<HTMLDivElement>;
};

const SvgHeader = ({ className, containerRef }: SvgHeaderProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const { width } = containerRef.current.getBoundingClientRect();
      // Adjust these values to control how the logo scales
      const baseWidth = 208; // Original SVG width
      const newScale = width / baseWidth;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <svg
      className={clsx("absolute bottom-0 w-full aspect-[23.6/9]", className)}
      viewBox="0 0 208 79"
      preserveAspectRatio="xMidYMid meet"
      vectorEffect={"non-scaling-stroke"}
    >
      <defs>
        <mask id="logotypeMask">
          <g transform={`translate(0, ${20 * scale}) scale(${scale})`}>
            <path d={logotype} fill="white" transform="translate(0, -10)" />
          </g>
        </mask>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={logotype}
        fill="none"
        stroke="currentColor"
        strokeWidth={0.2}
        strokeDasharray={0.75}
      />
    </svg>
  );
};
export default SvgHeader;
