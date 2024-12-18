import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

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
        <nav className="sticky top-0 z-50 p-4 bg-gray-800 text-white">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/navbars">Navbars</Link>
            </li>
            <li className="hover:underline">
              <Link href="/headers">Headers</Link>
            </li>
            <li className="hover:underline">
              <Link href="/portfolios">Portfolios</Link>
            </li>
            <li className="hover:underline">
              <Link href="/layouts">Layouts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/faqs">FAQS</Link>
            </li>
            <li className="hover:underline">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="hover:underline">
              <Link href="/signups">Sign Ups</Link>
            </li>
            <li className="hover:underline">
              <Link href="/gallerys">Gallery</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contacts">Contacts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="hover:underline">
              <Link href="/modals">Modals</Link>
            </li>
            <li className="hover:underline">
              <Link href="/ctas">CTAs</Link>
            </li>
            <li className="hover:underline">
              <Link href="/footers">Footers</Link>
            </li>
            <li className="hover:underline">
              <Link href="/timelines">Timelines</Link>
            </li>
            <li className="hover:underline">
              <Link href="/logos">Logos</Link>
            </li>
            <li className="hover:underline">
              <Link href="/teams">Teams</Link>
            </li>
            <li className="hover:underline">
              <Link href="/banners">Banners</Link>
            </li>
            <li className="hover:underline">
              <Link href="/links">Links</Link>
            </li>
            <li className="hover:underline">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:underline">
              <Link href="/logins">Log Ins</Link>
            </li>
            <li className="hover:underline">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:underline">
              <Link href="/stats">Stats</Link>
            </li>
            <li className="hover:underline">
              <Link href="/applicationshells">Application Shells</Link>
            </li>
            <li className="hover:underline">
              <Link href="/careers">Careers</Link>
            </li>
            <li className="hover:underline">
              <Link href="/comparisons">Comparisons</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contents">Contents</Link>
            </li>
            <li className="hover:underline">
              <Link href="/descriptionlists">Description Lists</Link>
            </li>
            <li className="hover:underline">
              <Link href="/pricings">Pricings</Link>
            </li>
            <li className="hover:underline">
              <Link href="/statcards">Stat Cards</Link>
            </li>
            <li className="hover:underline">
              <Link href="/tables">Tables</Link>
            </li>
            <li className="hover:underline">
              <Link href="/forms">Forms</Link>
            </li>
            <li className="hover:underline">
              <Link href="/gridlists">Grid Lists</Link>
            </li>
            <li className="hover:underline">
              <Link href="/stackedlists">Stacked Lists</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
