"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Navbar1 } from "@/components/Navbar1";
import { Navbar2 } from "@/components/Navbar2";
// import { Navbar3 } from "@/components/Navbar3";
import { Navbar7 } from "@/components/Navbar7";
import { Navbar8 } from "@/components/Navbar8";
import { Navbar10 } from "@/components/Navbar10";
import { Navbar12 } from "@/components/Navbar12";
import { Navbar16 } from "@/components/Navbar16";
import { Navbar17 } from "@/components/Navbar17";
import { Navbar18 } from "@/components/Navbar18";
import { Navbar19 } from "@/components/Navbar19";
import { Navbar20 } from "@/components/Navbar20";
import { Navbar21 } from "@/components/Navbar21";
import { Navbar22 } from "@/components/Navbar22";
import { Navbar5 } from "@/components/Navbar5";
import { Navbar11 } from "@/components/Navbar11";
import { Navbar4 } from "@/components/Navbar4";
import { Navbar6 } from "@/components/Navbar6";
import { Navbar13 } from "@/components/Navbar13";
//Navbar14 sticky nav
// import { Navbar14 } from "@/components/Navbar14";
// import { Navbar15 } from "@/components/Navbar15";
import { Navbar9 } from "@/components/Navbar9";

const navComponents = [
  // { component: Navbar3, title: "Navbar 3" },
  { component: Navbar1, title: "Navbar 1" },
  { component: Navbar2, title: "Navbar 2" },
  { component: Navbar4, title: "Navbar 4" },
  { component: Navbar5, title: "Navbar 5" },
  { component: Navbar6, title: "Navbar 6" },
  { component: Navbar7, title: "Navbar 7" },
  { component: Navbar8, title: "Navbar 8" },
  { component: Navbar9, title: "Navbar 9" },
  { component: Navbar10, title: "Navbar 10" },
  { component: Navbar11, title: "Navbar 11" },
  { component: Navbar12, title: "Navbar 12" },
  { component: Navbar13, title: "Navbar 13" },
  //Navbar 14 stcky nav
  // { component: Navbar14, title: "Navbar 14" },
  // { component: Navbar15, title: "Navbar 15" },
  { component: Navbar16, title: "Navbar 16" },
  { component: Navbar17, title: "Navbar 17" },
  { component: Navbar18, title: "Navbar 18" },
  { component: Navbar19, title: "Navbar 19" },
  { component: Navbar20, title: "Navbar 20" },
  { component: Navbar21, title: "Navbar 21" },
  { component: Navbar22, title: "Navbar 22" },
];

const NavbarPage = () => {
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
        Navbars
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Navbar 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {navComponents.map(({ component: NavComponent, title }, index) => (
          <div
            key={index}
            className="mb-[1000px]"
            id={title.toLowerCase().replace(/\s+/g, "")}
          >
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
            {/* Render the component directly */}
            <NavComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default NavbarPage;
