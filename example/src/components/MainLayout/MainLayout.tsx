import clsx from "clsx";

import type { ReactNode } from "react";
export type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps) {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "grid grid-cols-4 md:grid-cols-6 gap-x-4",
        "px-4",
      )}
    >
      {children}
    </main>
  );
}
