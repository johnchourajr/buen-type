import { TypeScale } from "@/components/TypeScale";
import { headlineDefault, textDefault } from "@buen/type";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between gap-4 md:gap-10 ">
      <section className="flex flex-row w-full items-start justify-between p-10 md:px-24">
        <h1 className="uppercase text-body">@buen/type</h1>
        <div className="flex flex-row gap-10">
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
            <Image src={"/github.svg"} width={18} height={18} alt={"github"} />
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-start justify-between px-10 md:px-24">
        <TypeScale typeData={headlineDefault} />
        <TypeScale typeData={textDefault} />
      </section>
    </main>
  );
}
