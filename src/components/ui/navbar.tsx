"use client";

import { useState, useEffect } from "react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // User is scrolling down
        setShowNavbar(false);
      } else {
        // User is scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full p-5 border-b transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } !bg-black !text-white`}
    >
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 ease-in-out duration-300"
        >
          <span className="font-bold mb-5 text-2xl">Component Library</span>
        </Link>

        <div className="flex h-auto">
          <div className="flex flex-1 items-center">
            <nav className="flex flex-row flex-wrap items-center justify-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-blue-500 hover:underline ease-in-out duration-300",
                    pathname === category.href
                      ? "underline text-blue-500"
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
