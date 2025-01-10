"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Content1 } from "@/components/Content1";
import { Content10 } from "@/components/Content10";
import { Content11 } from "@/components/Content11";
import { Content12 } from "@/components/Content12";
import { Content13 } from "@/components/Content13";
import { Content14 } from "@/components/Content14";
import { Content15 } from "@/components/Content15";
import { Content16 } from "@/components/Content16";
import { Content17 } from "@/components/Content17";
import { Content18 } from "@/components/Content18";
import { Content19 } from "@/components/Content19";
import { Content2 } from "@/components/Content2";
import { Content20 } from "@/components/Content20";
import { Content21 } from "@/components/Content21";
import { Content22 } from "@/components/Content22";
import { Content23 } from "@/components/Content23";
import { Content24 } from "@/components/Content24";
import { Content25 } from "@/components/Content25";
import { Content26 } from "@/components/Content26";
import { Content27 } from "@/components/Content27";
import { Content28 } from "@/components/Content28";
import { Content29 } from "@/components/Content29";
import { Content3 } from "@/components/Content3";
import { Content30 } from "@/components/Content30";
import { Content31 } from "@/components/Content31";
import { Content32 } from "@/components/Content32";
import { Content4 } from "@/components/Content4";
import { Content7 } from "@/components/Content7";
import { Content8 } from "@/components/Content8";
import { Content9 } from "@/components/Content9";

const contentComponents = [
  { component: Content1, title: "Content 1" },
  { component: Content2, title: "Content 2" },
  { component: Content3, title: "Content 3" },
  { component: Content4, title: "Content 4" },
  { component: Content7, title: "Content 7" },
  { component: Content8, title: "Content 8" },
  { component: Content9, title: "Content 9" },
  { component: Content10, title: "Content 10" },
  { component: Content11, title: "Content 11" },
  { component: Content12, title: "Content 12" },
  { component: Content13, title: "Content 13" },
  { component: Content14, title: "Content 14" },
  { component: Content15, title: "Content 15" },
  { component: Content16, title: "Content 16" },
  { component: Content17, title: "Content 17" },
  { component: Content18, title: "Content 18" },
  { component: Content19, title: "Content 19" },
  { component: Content20, title: "Content 20" },
  { component: Content21, title: "Content 21" },
  { component: Content22, title: "Content 22" },
  { component: Content23, title: "Content 23" },
  { component: Content24, title: "Content 24" },
  { component: Content25, title: "Content 25" },
  { component: Content26, title: "Content 26" },
  { component: Content27, title: "Content 27" },
  { component: Content28, title: "Content 28" },
  { component: Content29, title: "Content 29" },
  { component: Content30, title: "Content 30" },
  { component: Content31, title: "Content 31" },
  { component: Content32, title: "Content 32" },

  // Add more contents as necessary
];

const ContentsPage = () => {
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
        Content
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Content 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {contentComponents.map(
          ({ component: ContentComponent, title }, index) => (
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
              <ContentComponent />
            </div>
          )
        )}
      </section>
      <ScrollUp />
    </div>
  );
};

export default ContentsPage;
