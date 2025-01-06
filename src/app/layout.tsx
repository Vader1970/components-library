// import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component Lbrary",
  description: "Component Library for Rapid Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
