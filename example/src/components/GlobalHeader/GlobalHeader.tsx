"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GlobalHeaderCopyButton } from "./GlobalHeaderCopyButton";

export function GlobalHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  const path = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 56) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const parentVariants = {
    initial: { rowGap: "1rem" },
    hidden: {
      rowGap: 0,
    },
  };

  const variants = {
    initial: { opacity: 1, height: "auto" },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  if (path === "/scale") {
    return null;
  }

  return (
    <div
      className={clsx(
        "w-full fixed top-0 z-50",
        "grid grid-cols-4 md:grid-cols-6 gap-x-4",
        "px-4 pointer-events-none",
      )}
    >
      <section className="subgrid col-span-full py-3 pointer-events-none">
        <motion.div
          className={clsx(
            "subgrid col-start-1 col-span-full md:col-start-5 gap-y-4",
            "relative pointer-events-auto",
            "before:absolute before:-inset-4 before:content-[''] before:bg-black before:-z-10 before:rounded-bl-md",
          )}
          initial={"initial"}
          variants={parentVariants}
          animate={scrolled ? "hidden" : "initial"}
        >
          <div className="col-span-full flex w-full gap-4 items-center justify-center">
            <GlobalHeaderCopyButton text={"npx jsr add @buen/type"} />
            <Link
              href={"https://jsr.io/@buen/type"}
              className="uppercase text-body"
              target="_blank"
            >
              <Image src={"/jsr.svg"} width={30} height={16} alt={"jsr"} />
            </Link>
            <Link
              href={"https://github.com/johnchourajr/buen-type"}
              className="uppercase text-body"
              target="_blank"
            >
              <Image
                src={"/github.svg"}
                width={18}
                height={18}
                alt={"github"}
              />
            </Link>
          </div>
          <motion.div
            className="subgrid col-span-full gap-y-3 overflow-hidden"
            initial={"initial"}
            variants={variants}
            animate={scrolled ? "hidden" : "initial"}
          >
            <div className="col-span-full border-b-1 pb-3 border-[--color-primary]">
              <h1 className="uppercase text-string ">@buen/type</h1>
            </div>
            <div className="col-span-full">
              <p className="text-body max-w-[15em]">
                A Tailwind CSS Plugin for creating and managing good typography
                systems
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
