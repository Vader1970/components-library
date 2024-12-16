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
        <nav className="p-4 bg-gray-800 text-white">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/navbars">Navbars</Link>
            </li>
            <li>
              <Link href="/headers">Headers</Link>
            </li>
            <li>
              <Link href="/portfolios">Portfolios</Link>
            </li>
            <li>
              <Link href="/layouts">Layouts</Link>
            </li>
            <li>
              <Link href="/faqs">FAQS</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/signups">Sign Ups</Link>
            </li>
            <li>
              <Link href="/gallerys">Gallery</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/modals">Modals</Link>
            </li>
            <li>
              <Link href="/ctas">CTAs</Link>
            </li>
            <li>
              <Link href="/footers">Footers</Link>
            </li>
            <li>
              <Link href="/timelines">Timelines</Link>
            </li>
            <li>
              <Link href="/logos">Logos</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
            <li>
              <Link href="/banners">Banners</Link>
            </li>
            <li>
              <Link href="/links">Links</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/logins">Log Ins</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/stats">Stats</Link>
            </li>
            <li>
              <Link href="/applicationshells">Application Shells</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/comparisons">Comparisons</Link>
            </li>
            <li>
              <Link href="/contents">Contents</Link>
            </li>
            <li>
              <Link href="/descriptionlists">Description Lists</Link>
            </li>
            <li>
              <Link href="/pricings">Pricings</Link>
            </li>
            <li>
              <Link href="/statcards">Stat Cards</Link>
            </li>
            <li>
              <Link href="/tables">Tables</Link>
            </li>
            <li>
              <Link href="/forms">Forms</Link>
            </li>
            <li>
              <Link href="/gridlists">Grid Lists</Link>
            </li>
            <li>
              <Link href="/stackedlists">Stacked Lists</Link>
            </li>
          </ul>
        </nav>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
