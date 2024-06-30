"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

export function IframeTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={clsx(
        "absolute -top-2 bg-black p-1 w-auto right-5 rounded-md",
        "text-[--color-primary-hex]",
        "pointer-events-none select-none",
      )}
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
    >
      {children}
    </motion.div>
  );
}
