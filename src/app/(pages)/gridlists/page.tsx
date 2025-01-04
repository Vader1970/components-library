import { GridList5 } from "@/components/GridLists/GridList5";
import { GridList6 } from "@/components/GridLists/GridList6";

const gridlistsComponents = [
  { component: GridList5, title: "Grid List 5" },
  { component: GridList6, title: "Grid List 6" },

  // Add more grid lists as necessary
];

const GridListsPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Grid List</h1>
      <section className='mb-4'>
        {gridlistsComponents.map(({ component: GridListComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <GridListComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default GridListsPage;
