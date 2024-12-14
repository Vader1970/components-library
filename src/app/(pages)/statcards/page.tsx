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
      <h1 className='text-2xl font-bold mb-4'>Stat Cards</h1>
      <section className='mb-4'>
        {statcardsComponents.map(({ component: StatCardComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='text-xl mt-20 mb-5'>{title}</h2>
            {/* Render the component */}
            <StatCardComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatCardsPage;
