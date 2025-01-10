"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Form15 } from "@/components/Form15";
import { Form5 } from "@/components/Form5";

const formsComponents = [
  { component: Form5, title: "Form 5" },
  { component: Form15, title: "Form 15" },

  // Add more forms as necessary
];

const FormsPage = () => {
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
        Forms
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Form 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {formsComponents.map(({ component: FormComponent, title }, index) => (
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
            <FormComponent />
          </div>
        ))}
      </section>

      <ScrollUp />
    </div>
  );
};

export default FormsPage;
