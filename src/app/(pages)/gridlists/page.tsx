import { GridList5 } from "@/components/GridList5";
import { GridList6 } from "@/components/GridList6";

const gridlistsComponents = [
  { component: GridList5, title: "Grid List 5" },
  { component: GridList6, title: "Grid List 6" },

  // Add more grid lists as necessary
];

const GridListsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Grid List
      </h1>
      <section className="mb-4">
        {gridlistsComponents.map(
          ({ component: GridListComponent, title }, index) => (
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
                <GridListComponent />
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default GridListsPage;
