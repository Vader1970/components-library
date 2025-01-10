"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Footer2 } from "@/components/Footer2";
import { Footer3 } from "@/components/Footer3";
import { Footer4 } from "@/components/Footer4";
import { Footer5 } from "@/components/Footer5";
import { Footer6 } from "@/components/Footer6";
import { Footer7 } from "@/components/Footer7";
import { Footer8 } from "@/components/Footer8";
import { Footer14 } from "@/components/Footer14";
import { Footer15 } from "@/components/Footer15";
import { Footer16 } from "@/components/Footer16";
import { Footer17 } from "@/components/Footer17";
import { Footer1 } from "@/components/Footer1";
import { Footer9 } from "@/components/Footer9";
import { Footer10 } from "@/components/Footer10";
import { Footer11 } from "@/components/Footer11";
import { Footer12 } from "@/components/Footer12";
import { Footer13 } from "@/components/Footer13";

const footerComponents = [
  { component: Footer1, title: "Footer 1" },
  { component: Footer2, title: "Footer 2" },
  { component: Footer3, title: "Footer 3" },
  { component: Footer4, title: "Footer 4" },
  { component: Footer5, title: "Footer 5" },
  { component: Footer6, title: "Footer 6" },
  { component: Footer7, title: "Footer 7" },
  { component: Footer8, title: "Footer 8" },
  { component: Footer9, title: "Footer 9" },
  { component: Footer10, title: "Footer 10" },
  { component: Footer11, title: "Footer 11" },
  { component: Footer12, title: "Footer 12" },
  { component: Footer13, title: "Footer 13" },
  { component: Footer14, title: "Footer 14" },
  { component: Footer15, title: "Footer 15" },
  { component: Footer16, title: "Footer 16" },
  { component: Footer17, title: "Footer 17" },

  // Add more Footers as necessary
];

const FootersPage = () => {
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
        Footers
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Footer 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {footerComponents.map(
          ({ component: FooterComponent, title }, index) => (
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
              <FooterComponent />
            </div>
          )
        )}
      </section>
      <ScrollUp />
    </div>
  );
};

export default FootersPage;
