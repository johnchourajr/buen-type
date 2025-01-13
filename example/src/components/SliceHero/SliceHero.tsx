"use client";

import { useRef } from "react";
import { GenThreeShader } from "../GenThreeShader";
import { wavesShader } from "../GenThreeShader/shaders/wavesShader";
import { SvgHeader } from "../SvgHeader";

export function SliceHero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <SvgHeader containerRef={containerRef} />
    </section>
  );
}
