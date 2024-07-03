import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="p-4">
      Buenos dias, © 2024{" "}
      <Link href={"https://john.design"} target="_blank" className="underline">
        John Choura
      </Link>
    </footer>
  );
}
