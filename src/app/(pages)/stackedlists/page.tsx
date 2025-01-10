"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { StackedList2 } from "@/components/StackedList2";
import { StackedList3 } from "@/components/StackedList3";

const stackedlistsComponents = [
  { component: StackedList2, title: "Stacked List 2" },
  { component: StackedList3, title: "Stacked List 3" },

  // Add more stcked lists as necessary
];

const StackedListsPage = () => {
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
        Stacked Lists
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Stacked List 3)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {stackedlistsComponents.map(
          ({ component: StackedListComponent, title }, index) => (
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
              <div className="p-10">
                {/* Render the component */}
                <StackedListComponent />
              </div>
            </div>
          )
        )}
      </section>
      <ScrollUp />
    </div>
  );
};

export default StackedListsPage;
