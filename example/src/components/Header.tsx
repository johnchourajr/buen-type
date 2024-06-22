"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 56) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div
      className={clsx(
        "w-full fixed top-0 ",
        "grid grid-cols-4 md:grid-cols-6 gap-x-4",
        "px-4 pointer-events-none",
      )}
    >
      <section className="subgrid col-span-full py-3 pointer-events-none">
        <motion.div
          className={clsx(
            "subgrid col-start-1 col-span-full md:col-start-5 gap-y-4",
            "relative pointer-events-auto",
            "before:absolute before:-inset-4 before:content-[''] before:bg-black before:-z-10",
          )}
          layout
        >
          <div className="col-span-full flex w-full gap-4 items-center justify-center">
            <div className="flex w-full border-dashed rounded-sm border-[--foreground-rgb] border-0.5 h-9 px-3 justify-start items-center">
              <pre className="!font-mono text-body">npx jsr add @buen/type</pre>
            </div>
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
            initial={{ opacity: 1, height: "auto" }}
            animate={{
              opacity: isScrolled ? 0 : 1,
              height: isScrolled ? 0 : "auto",
            }}
          >
            <div className="col-span-full border-b-1 pb-3 border-[--foreground-rgb]">
              <h1 className="uppercase text-body ">@buen/type</h1>
            </div>
            <div className="col-span-full">
              <p className="text-string max-w-[15em]">
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
