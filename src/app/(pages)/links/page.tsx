"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Links10 } from "@/components/Link10";
import { Links11 } from "@/components/Link11";
import { Links12 } from "@/components/Link12";
import { Links13 } from "@/components/Link13";
import { Links14 } from "@/components/Link14";
import { Links15 } from "@/components/Link15";
import { Links16 } from "@/components/Link16";
import { Links2 } from "@/components/Link2";
import { Links3 } from "@/components/Link3";
import { Links4 } from "@/components/Link4";
import { Links5 } from "@/components/Link5";
import { Links6 } from "@/components/Link6";
import { Links7 } from "@/components/Link7";
import { Links8 } from "@/components/Link8";
import { Links9 } from "@/components/Link9";

const linkComponents = [
  { component: Links2, title: "Link 2" },
  { component: Links3, title: "Link 3" },
  { component: Links4, title: "Link 4" },
  { component: Links5, title: "Link 5" },
  { component: Links6, title: "Link 6" },
  { component: Links7, title: "Link 7" },
  { component: Links8, title: "Link 8" },
  { component: Links9, title: "Link 9" },
  { component: Links10, title: "Link 10" },
  { component: Links11, title: "Link 11" },
  { component: Links12, title: "Link 12" },
  { component: Links13, title: "Link 13" },
  { component: Links14, title: "Link 14" },
  { component: Links15, title: "Link 15" },
  { component: Links16, title: "Link 16" },

  // Add more links as necessary
];

const LinksPage = () => {
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
        Links
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Link 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {linkComponents.map(({ component: LinkComponent, title }, index) => (
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
            <LinkComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default LinksPage;
