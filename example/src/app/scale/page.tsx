"use client";

import clsx from "clsx";
import React, { useEffect } from "react";

import { TypeScale } from "@/components/TypeScale/TypeScale";
import { useWindowWidth } from "@/utils/useWindowWidth";

import { headlineDefault } from "../../../../src/index";

function ScaleLine({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed top-0 h-full border-r-1",
        "border-dashed border-[rgba(var(--color-primary),.25)]",
        "after:absolute after:right-1 after:-top-2 after:p-1 after:rounded-md after:text-[rgba(var(--color-primary),.5)]",
        "before:absolute before:right-1 before:-bottom-1 before:p-1 before:rounded-md before:text-[rgba(var(--color-primary),.5)]",
        className,
      )}
    />
  );
}

const ScalePageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        { iframeHeight: height },
        window.location.origin,
      );
    };

    // Send height on load and on resize
    sendHeight();
    window.addEventListener("resize", sendHeight);

    return () => {
      window.removeEventListener("resize", sendHeight);
    };
  }, []);

  return <>{children}</>;
};

export default function Scale() {
  const windowWidth = useWindowWidth();

  return (
    <ScalePageWrapper>
      <section className="flex w-full items-start justify-between">
        <div className="flex flex-col gap-y-6">
          <TypeScale typeData={headlineDefault} windowWidth={windowWidth} />
        </div>

        {/* <TypeScale typeData={textDefault} /> */}
      </section>
      <ScaleLine
        className={clsx(
          "left-[464px]",
          "after:content-['480px']",
          "before:content-['floor'] ",
        )}
      />
      <ScaleLine
        className={clsx(
          "left-[1424px]",
          "after:content-['1440px']",
          "before:content-['cieling'] ",
        )}
      />
    </ScalePageWrapper>
  );
}
