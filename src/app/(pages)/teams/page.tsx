"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Team2 } from "@/components/Team2";
import { Team10 } from "@/components/Team10";
import { Team14 } from "@/components/Team14";
import { Team1 } from "@/components/Team1";
import { Team5 } from "@/components/Team5";
import { Team8 } from "@/components/Team8";
import { Team16 } from "@/components/Team16";
import { Team18 } from "@/components/Team18";
import { Team21 } from "@/components/Team21";
import { Team22 } from "@/components/Team22";
import { Team3 } from "@/components/Team3";
import { Team4 } from "@/components/Team4";
import { Team6 } from "@/components/Team6";
import { Team7 } from "@/components/Team7";
import { Team15 } from "@/components/Team15";
import { Team17 } from "@/components/Team17";
import { Team9 } from "@/components/Team9";
import { Team11 } from "@/components/Team11";
import { Team12 } from "@/components/Team12";
import { Team13 } from "@/components/Team13";
import { Team19 } from "@/components/Team19";
import { Team20 } from "@/components/Team20";

const teamsComponents = [
  { component: Team1, title: "Team 1" },
  { component: Team2, title: "Team 2" },
  { component: Team3, title: "Team 3" },
  { component: Team4, title: "Team 4" },
  { component: Team5, title: "Team 5" },
  { component: Team6, title: "Team 6" },
  { component: Team7, title: "Team 7" },
  { component: Team8, title: "Team 8" },
  { component: Team9, title: "Team 9" },
  { component: Team10, title: "Team 10" },
  { component: Team11, title: "Team 11" },
  { component: Team12, title: "Team 12" },
  { component: Team13, title: "Team 13" },
  { component: Team14, title: "Team 14" },
  { component: Team15, title: "Team 15" },
  { component: Team16, title: "Team 16" },
  { component: Team17, title: "Team 17" },
  { component: Team18, title: "Team 18" },
  { component: Team19, title: "Team 19" },
  { component: Team20, title: "Team 20" },
  { component: Team21, title: "Team 21" },
  { component: Team22, title: "Team 22" },

  // Add more teams as necessary
];

const TeamsPage = () => {
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
        Teams
      </h1>

      {/* Search Section */}
      <Search
        placeholder="Search for a component (e.g., Team 9)"
        onSearch={handleSearch}
      />

      <section className="mb-4">
        {teamsComponents.map(({ component: TeamComponent, title }, index) => (
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
            <TeamComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default TeamsPage;
