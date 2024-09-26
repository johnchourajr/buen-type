import { SvgHeader } from "../SvgHeader";

export function SliceHero() {
  return (
    <>
      <section className="col-span-full flex flex-col items-center justify-end h-[43vw] min-h-[50vh] mt-40 md:mt-0">
        <SvgHeader className="w-[calc(100%+32px)] -mx-4 -mt-0.25em" />
      </section>
    </>
  );
}
