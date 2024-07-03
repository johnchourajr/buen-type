import clsx from "clsx";
import type { ReactNode } from "react";

export type SliceWrapperProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  title: string;
};

export function SliceWrapper({
  children,
  className,
  innerClassName,
  title,
}: SliceWrapperProps) {
  return (
    <section
      className={clsx(
        "grid grid-cols-subgrid border-t-2 border-[--color-primary] col-span-full pt-2 mt-[4vw] overflow-hidden",
        className,
      )}
    >
      <h2 className="text-string whitespace-pre col-span-full">{title}</h2>
      <div
        className={clsx(
          "relative grid grid-cols-subgrid col-span-full my-6",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
