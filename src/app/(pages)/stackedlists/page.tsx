import { StackedList2 } from "@/components/StackedLists/StackedList2";
import { StackedList3 } from "@/components/StackedLists/StackedList3";

const stackedlistsComponents = [
  { component: StackedList2, title: "Stacked List 2" },
  { component: StackedList3, title: "Stacked List 3" },

  // Add more stcked lists as necessary
];

const StackedListsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Stacked Lists
      </h1>
      <section className="mb-4">
        {stackedlistsComponents.map(
          ({ component: StackedListComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              <div className="p-10">
                {/* Render the component */}
                <StackedListComponent />
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default StackedListsPage;
