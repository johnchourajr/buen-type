"use client";
import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { GlobalHeaderActionMessage } from "./GlobalHeaderActionMessage";

export function GlobalHeaderCopyButton({ text }: { text: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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
    <button
      onClick={() => copyText(text)}
      onMouseEnter={() => !isCopied && setIsHovering(true)}
      onMouseLeave={() => !isCopied && setIsHovering(false)}
      className={clsx(
        "relative overflow-hidden",
        "flex w-full border-dashed rounded-sm border-primary border-[0.5px] h-9 px-3 justify-start items-center",
      )}
    >
      <pre className="!font-mono text-caption select-text">{text}</pre>
      <AnimatePresence>
        {isHovering && !isCopied && (
          <GlobalHeaderActionMessage key="copy" text="copy" />
        )}
        {isCopied && <GlobalHeaderActionMessage key="copied" text="copied" />}
      </AnimatePresence>
    </button>
  );
}
