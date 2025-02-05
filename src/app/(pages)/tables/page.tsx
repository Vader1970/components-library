"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Table1 } from "@/components/Tables1";
import { Table2 } from "@/components/Tables2";
import { Table3 } from "@/components/Tables3";
import { Table4 } from "@/components/Tables4";
import { Table5 } from "@/components/Tables5";
import { Table6 } from "@/components/Tables6";
import { Table7 } from "@/components/Tables7";
import { Table8 } from "@/components/Tables8";
import { Table9 } from "@/components/Tables9";

const tablesComponents = [
  { component: Table1, title: "Tables 1" },
  { component: Table2, title: "Tables 2" },
  { component: Table3, title: "Tables 3" },
  { component: Table4, title: "Tables 4" },
  { component: Table5, title: "Tables 5" },
  { component: Table6, title: "Tables 6" },
  { component: Table7, title: "Tables 7" },
  { component: Table8, title: "Tables 8" },
  { component: Table9, title: "Tables 9" },

  // Add more tables as necessary
];

const TablesPage = () => {
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
        Tables
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Tables 1)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {tablesComponents.map(({ component: TableComponent, title }, index) => (
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
            <TableComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default TablesPage;
