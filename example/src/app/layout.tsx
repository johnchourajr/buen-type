import { GlobalFooter } from "@/components/GlobalFooter";
import { GlobalHeader } from "@/components/GlobalHeader";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://type.dev.bueno.enterprises"),
  title: "Bueno Type",
  description:
    "A Tailwind CSS Plugin for creating and managing good typography systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
