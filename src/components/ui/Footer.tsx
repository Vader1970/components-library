"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/categories";

export function Footer() {
  const pathname = usePathname();

  // List of routes where the Footer should not be displayed
  const hideOnRoutes = ["/view-code"];

  // Check if the current route starts with any of the hideOnRoutes
  const shouldHideFooter = hideOnRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldHideFooter) {
    return null;
  }

  return (
    <footer className="w-full bg-black text-white py-6 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* App Name */}
        <div className="text-lg font-bold text-center">Component Library</div>

        {/* Categories Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
