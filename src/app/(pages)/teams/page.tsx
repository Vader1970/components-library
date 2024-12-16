import { Team2 } from "@/components/Teams/Team2";
import { Team10 } from "@/components/Teams/Team10";
import { Team14 } from "@/components/Teams/Team14";
import { Team1 } from "@/components/Teams/Team1";
import { Team5 } from "@/components/Teams/Team5";
import { Team8 } from "@/components/Teams/Team8";
import { Team16 } from "@/components/Teams/Team16";
import { Team18 } from "@/components/Teams/Team18";
import { Team21 } from "@/components/Teams/Team21";
import { Team22 } from "@/components/Teams/Team22";
import { Team3 } from "@/components/Teams/Team3";
import { Team4 } from "@/components/Teams/Team4";
import { Team6 } from "@/components/Teams/Team6";
import { Team7 } from "@/components/Teams/Team7";

const teamsComponents = [
  { component: Team1, title: "Team 1" },
  { component: Team2, title: "Team 2" },
  { component: Team3, title: "Team 3" },
  { component: Team4, title: "Team 4" },
  { component: Team5, title: "Team 5" },
  { component: Team6, title: "Team 6" },
  { component: Team7, title: "Team 7" },
  { component: Team8, title: "Team 8" },
  { component: Team10, title: "Team 10" },
  { component: Team14, title: "Team 14" },
  { component: Team16, title: "Team 16" },
  { component: Team18, title: "Team 18" },
  { component: Team21, title: "Team 21" },
  { component: Team22, title: "Team 22" },

  // Add more teams as necessary
];

const TeamsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <section className="mb-4">
        {teamsComponents.map(({ component: TeamComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <TeamComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamsPage;
