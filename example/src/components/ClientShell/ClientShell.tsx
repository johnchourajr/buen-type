"use client";

import { GlobalFooter } from "@/components/GlobalFooter";
import { GlobalHeader } from "@/components/GlobalHeader";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function ClientShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && <GlobalHeader />}
      {children}
      {mounted && <GlobalFooter />}
    </>
  );
}
