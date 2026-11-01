import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semantic Pair — Kiroween 2026",
  description:
    "Dual-remote brainstorm tool with live AI semantic-distance and creativity-stage cues.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
