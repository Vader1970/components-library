"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/categories";

export function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Disable body scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable body scrolling
    }
  };

  // Check screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Medium breakpoint (768px)
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  // Handle scrolling effect for large screens only
  useEffect(() => {
    if (!isLargeScreen) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isLargeScreen]);

  // Clean up body scroll style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full p-5 border-b transition-transform duration-300 ${
        isLargeScreen && !showNavbar ? "-translate-y-full" : "translate-y-0"
      } bg-black text-white`}
    >
      <div className="flex flex-row items-center md:flex-col justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 ease-in-out duration-300 md:mb-4"
        >
          <span className="font-bold text-2xl">Component Library</span>
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-blue-500 hover:underline ease-in-out duration-300",
                pathname === category.href
                  ? "underline text-blue-500"
                  : "text-white"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-black mt-2 max-h-[60vh] overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }} // Smooth scrolling for iOS
        >
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "block px-4 py-2 text-white hover:bg-gray-800",
                pathname === category.href ? "bg-gray-800 text-blue-500" : ""
              )}
              onClick={toggleMenu}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
