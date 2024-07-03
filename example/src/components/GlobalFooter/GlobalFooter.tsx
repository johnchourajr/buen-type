"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlobalFooter() {
  const path = usePathname();

  if (path === "/scale") {
    return null;
  }
  return (
    <footer className="p-4">
      Buenos dias, © 2024{" "}
      <Link href={"https://john.design"} target="_blank" className="underline">
        John Choura
      </Link>
    </footer>
  );
}
