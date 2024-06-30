import { IframeWrapper } from "@/components/IframeWrapper";
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
      <section className="border-t-2 border-[--color-primary] col-span-full pt-2 mt-2">
        <h2 className="text-string whitespace-pre">Fluid Typography is Buen</h2>
        <IframeWrapper
          src="/scale"
          className="w-full col-span-full min-h-[50vw] my-6"
        />
      </section>
    </main>
  );
}
