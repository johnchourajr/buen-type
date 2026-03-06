import { ClientShell } from "@/components/ClientShell";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://type.muybuen.dev"),
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
      <body className="font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
