import SvgHeader from "@/components/SvgHeader";
import { TypeScale } from "@/components/TypeScale";
import clsx from "clsx";
import { headlineDefault, textDefault } from "../../../src/index";

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "grid grid-cols-4 md:grid-cols-6 gap-x-4",
        "px-4",
      )}
    >
      <div className="col-span-full h-[42.98611111vw] ">
        <SvgHeader className="w-[calc(100%+32px)] -mx-4 -mt-0.25em" />
      </div>
      <section className="subgrid col-span-full items-start justify-between ">
        <TypeScale typeData={headlineDefault} />
        <TypeScale typeData={textDefault} />
      </section>
    </main>
  );
}
