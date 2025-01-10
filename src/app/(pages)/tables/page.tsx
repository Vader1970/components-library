"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Table1 } from "@/components/Tables1";

const tablesComponents = [
  { component: Table1, title: "Tables 1" },

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
