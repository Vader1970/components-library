"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Logo1 } from "@/components/Logo1";
import { Logo2 } from "@/components/Logo2";
import { Logo3 } from "@/components/Logo3";
import { Logo4 } from "@/components/Logo4";
import { Logo5 } from "@/components/Logo5";
import { Logo6 } from "@/components/Logo6";

const logoComponents = [
  { component: Logo1, title: "Logo 1" },
  { component: Logo2, title: "Logo 2" },
  { component: Logo3, title: "Logo 3" },
  { component: Logo4, title: "Logo 4" },
  { component: Logo5, title: "Logo 5" },
  { component: Logo6, title: "Logo 6" },

  // Add more logos as necessary
];

const LogosPage = () => {
  const handleSearch = (query: string) => {
    const target = document.getElementById(query);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Component not found");
    }
  };

  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Logos
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Logo 4)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {logoComponents.map(({ component: LogoComponent, title }, index) => (
          <div key={index} id={title.toLowerCase().replace(/\s+/g, "")}>
            {/* Render the title as an h2 element */}
            <h2 className="bg-black text-white text-base sm:text-2xl font-bold text-center py-10 px-[5%] flex justify-between items-center">
              {title}
              <a
                href={`/view-code/${title.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white text-base px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                View Code
              </a>
            </h2>
            {/* Render the component */}
            <LogoComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default LogosPage;
