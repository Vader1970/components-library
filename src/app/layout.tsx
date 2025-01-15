// import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Component Lbrary",
  description: "Component Library for Rapid Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
