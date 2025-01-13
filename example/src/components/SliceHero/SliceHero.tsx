"use client";

import { useEffect, useRef, useState } from "react";
import { GenThreeShader } from "../GenThreeShader";
import { wavesShader } from "../GenThreeShader/shaders/wavesShader";
import { logotype } from "../SvgHeader/logotype";

export function SliceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    <section
      ref={containerRef}
      className="col-span-full relative flex flex-col items-center justify-end h-[43vw] min-h-[50vh] mt-40 md:mt-0"
    >
      <div
        className="absolute bottom-0 w-full aspect-[21/9]"
        style={{ mask: "url(#logotypeMask)", WebkitMask: "url(#logotypeMask)" }}
      >
        <GenThreeShader
          className="w-full h-full"
          shaderConfig={{
            fragmentShader: wavesShader,
            uniforms: {
              time: { value: 0 },
              scale: { value: 0.1 },
              speed: { value: 1 },
              distortion: { value: 10 },
              colorIntensity: { value: 1 },
            },
          }}
        />
      </div>
      <svg
        className="absolute bottom-0 w-full aspect-[23.6/9]"
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
    </section>
  );
}
