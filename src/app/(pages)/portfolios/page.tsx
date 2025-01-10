"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Portfolio1 } from "@/components/Portfolio1";
import { Portfolio10 } from "@/components/Portfolio10";
import { Portfolio11 } from "@/components/Portfolio11";
import { Portfolio12 } from "@/components/Portfolio12";
import { Portfolio13 } from "@/components/Portfolio13";
import { Portfolio14 } from "@/components/Portfolio14";
import { Portfolio15 } from "@/components/Portfolio15";
import { Portfolio16 } from "@/components/Portfolio16";
import { Portfolio17 } from "@/components/Portfolio17";
import { Portfolio2 } from "@/components/Portfolio2";
import { Portfolio3 } from "@/components/Portfolio3";
import { Portfolio4 } from "@/components/Portfolio4";
import { Portfolio5 } from "@/components/Portfolio5";
import { Portfolio6 } from "@/components/Portfolio6";
import { Portfolio7 } from "@/components/Portfolio7";
import { Portfolio8 } from "@/components/Portfolio8";
import { Portfolio9 } from "@/components/Portfolio9";
import { PortfolioHeader1 } from "@/components/PortfolioHeader1";
import { PortfolioHeader10 } from "@/components/PortfolioHeader10";
import { PortfolioHeader11 } from "@/components/PortfolioHeader11";
import { PortfolioHeader12 } from "@/components/PortfolioHeader12";
import { PortfolioHeader2 } from "@/components/PortfolioHeader2";
import { PortfolioHeader3 } from "@/components/PortfolioHeader3";
import { PortfolioHeader4 } from "@/components/PortfolioHeader4";
import { PortfolioHeader5 } from "@/components/PortfolioHeader5";
import { PortfolioHeader8 } from "@/components/PortfolioHeader8";
import { PortfolioHeader9 } from "@/components/PortfolioHeader9";

const portfolioComponents = [
  { component: Portfolio1, title: "Portfolio 1" },
  { component: Portfolio2, title: "Portfolio 2" },
  { component: Portfolio3, title: "Portfolio 3" },
  { component: Portfolio4, title: "Portfolio 4" },
  { component: Portfolio5, title: "Portfolio 5" },
  { component: Portfolio6, title: "Portfolio 6" },
  { component: Portfolio7, title: "Portfolio 7" },
  { component: Portfolio8, title: "Portfolio 8" },
  { component: Portfolio9, title: "Portfolio 9" },
  { component: Portfolio10, title: "Portfolio 10" },
  { component: Portfolio11, title: "Portfolio 11" },
  { component: Portfolio12, title: "Portfolio 12" },
  { component: Portfolio13, title: "Portfolio 13" },
  { component: Portfolio14, title: "Portfolio 14" },
  { component: Portfolio15, title: "Portfolio 15" },
  { component: Portfolio16, title: "Portfolio 16" },
  { component: Portfolio17, title: "Portfolio 17" },
  { component: PortfolioHeader1, title: "Portfolio Header 1" },
  { component: PortfolioHeader2, title: "Portfolio Header 2" },
  { component: PortfolioHeader3, title: "Portfolio Header 3" },
  { component: PortfolioHeader4, title: "Portfolio Header 4" },
  { component: PortfolioHeader5, title: "Portfolio Header 5" },
  { component: PortfolioHeader8, title: "Portfolio Header 8" },
  { component: PortfolioHeader9, title: "Portfolio Header 9" },
  { component: PortfolioHeader10, title: "Portfolio Header 10" },
  { component: PortfolioHeader11, title: "Portfolio Header 11" },
  { component: PortfolioHeader12, title: "Portfolio Header 12" },

  // Add more portfolios as necessary
];

const PortfoliosPage = () => {
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
        Portfolios
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Portfolio 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {portfolioComponents.map(
          ({ component: PortfolioComponent, title }, index) => (
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
              <PortfolioComponent />
            </div>
          )
        )}
      </section>
      <ScrollUp />
    </div>
  );
};

export default PortfoliosPage;
