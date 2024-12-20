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
      <h1 className="text-8xl text-center font-bold mb-4">Stacked Lists</h1>
      <section className="mb-4">
        {stackedlistsComponents.map(
          ({ component: StackedListComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-4xl font-bold text-center mt-20 mb-5">
                {title}
              </h2>
              {/* Render the component */}
              <StackedListComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default StackedListsPage;
