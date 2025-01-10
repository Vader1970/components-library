"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { ContactModal1 } from "@/components/ContactModal1";
import { ContactModal4 } from "@/components/ContactModal4";

const modalComponents = [
  { component: ContactModal1, title: "Contact Modal 1" },
  { component: ContactModal4, title: "Contact Modal 4" },

  // Add more modals as necessary
];

const ModalsPage = () => {
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
        MODALS
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Contact Modal 4)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {modalComponents.map(({ component: ModalComponent, title }, index) => (
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
            <ModalComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default ModalsPage;
