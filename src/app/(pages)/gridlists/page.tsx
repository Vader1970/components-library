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
      <h1 className="text-2xl font-bold mb-4">Grid List</h1>
      <section className="mb-4">
        {gridlistsComponents.map(
          ({ component: GridListComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mt-20 mb-5">{title}</h2>
              {/* Render the component */}
              <GridListComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default GridListsPage;
