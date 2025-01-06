import { Stat1 } from "@/components/StatCards/StatCard1";
import { Stat2 } from "@/components/StatCards/StatCard2";

const statcardsComponents = [
  { component: Stat1, title: "Stat Cards 1" },
  { component: Stat2, title: "Stat Cards 2" },

  // Add more stat cards as necessary
];

const StatCardsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Stat Cards
      </h1>
      <section className="mb-4">
        {statcardsComponents.map(
          ({ component: StatCardComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              <div className="p-10">
                {/* Render the component */}
                <StatCardComponent />
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default StatCardsPage;
