import { Stat1 } from "@/components/StatCard1";
import { Stat2 } from "@/components/StatCard2";

const statcardsComponents = [
  { component: Stat1, title: "Stat Card 1" },
  { component: Stat2, title: "Stat Card 2" },

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
