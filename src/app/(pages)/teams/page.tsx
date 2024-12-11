import { Team2 } from "@/components/Teams/Team2";
import { Team10 } from "@/components/Teams/Team10";
import { Team14 } from "@/components/Teams/Team14";

const teamsComponents = [
  { component: Team2, title: "Team 2" },
  { component: Team10, title: "Team 10" },
  { component: Team14, title: "Team 14" },

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
