import { GlobalFooter } from "@/components/GlobalFooter";
import { GlobalHeader } from "@/components/GlobalHeader";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buen Type",
  description:
    "A Tailwind CSS Plugin for creating and managing good typography systems",
  openGraph: {
    images: [
      {
        url: "/og.png",
        alt: "Buen Type",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
      </head>
      <body className="font-sans">
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
