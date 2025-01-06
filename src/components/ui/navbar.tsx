"use client";

// import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Search } from 'lucide-react';
// import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils";

const categories = [
  { name: "Home", href: "/" },
  { name: "Layouts", href: "/layouts" },
  { name: "Headers", href: "/headers" },
  { name: "Navbars", href: "/navbars" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Forms", href: "/forms" },
  { name: "Portfolios", href: "/portfolios" },
  { name: "FAQs", href: "/faqs" },
  { name: "Sign Ups", href: "/signups" },
  { name: "Gallery", href: "/gallerys" },
  { name: "Contacts", href: "/contacts" },
  { name: "Blogs", href: "/blogs" },
  { name: "Modals", href: "/modals" },
  { name: "CTAs", href: "/ctas" },
  { name: "Footers", href: "/footers" },
  { name: "Timelines", href: "/timelines" },
  { name: "Logos", href: "/logos" },
  { name: "Teams", href: "/teams" },
  { name: "Banners", href: "/banners" },
  { name: "Links", href: "/links" },
  { name: "Events", href: "/events" },
  { name: "Log Ins", href: "/logins" },
  { name: "Products", href: "/products" },
  { name: "Stats", href: "/stats" },
  { name: "Application Shells", href: "/applicationshells" },
  { name: "Careers", href: "/careers" },
  { name: "Comparisons", href: "/comparisons" },
  { name: "Contents", href: "/contents" },
  { name: "Description Lists", href: "/descriptionlists" },
  { name: "Pricings", href: "/pricings" },
  { name: "Stat Cards", href: "/statcards" },
  { name: "Grid Lists", href: "/gridlists" },
  { name: "Stacked Lists", href: "/stackedlists" },
  { name: "Tables", href: "/tables" },
];

export function Navbar() {
  //   const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full !bg-black !text-white p-5 border-b">
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="flex items-center  hover:text-gray-400 ease-in-out duration-300"
        >
          <span className="font-bold mb-5 text-2xl">Component Library</span>
        </Link>

        <div className="flex h-auto">
          <div className="flex flex-1 items-center">
            <div className="flex">
              {/* <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search components..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
            </div>
            <nav className="flex flex-row flex-wrap items-center justify-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-gray-400 hover:underline ease-in-out duration-300",
                    pathname === category.href
                      ? "underline text-gray-400"
                      : "text-muted-foreground"
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
