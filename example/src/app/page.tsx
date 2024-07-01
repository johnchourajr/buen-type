import { IframeWrapper } from "@/components/IframeWrapper";
import { PanelCode } from "@/components/PanelCode";
import { SvgHeader } from "@/components/SvgHeader";
import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "grid grid-cols-4 md:grid-cols-6 gap-x-4",
        "px-4",
      )}
    >
      <section className="col-span-full h-[43vw] ">
        <SvgHeader className="w-[calc(100%+32px)] -mx-4 -mt-0.25em" />
      </section>
      <section className="grid grid-cols-subgrid border-t-2 border-[--color-primary] col-span-full pt-2 mt-2">
        <h2 className="text-string whitespace-pre col-span-full">
          Fluid Typography is Buen
        </h2>
        <div className="relative col-span-full my-6">
          <IframeWrapper
            src="/scale"
            className={clsx(
              "relative w-full col-span-full min-h-[50vw] z-10",
              "after:content-[''] after:absolute after:w-[10%] after:bg-gradient-to-r after:from-black after:to-transparent after:right-[-10%] after:top-0 after:h-full after:z-10 after:pointer-events-none",
            )}
          />
          <PanelCode />
        </div>
      </section>
    </main>
  );
}
