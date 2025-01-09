import { DescriptionList2 } from "@/components/DescriptionList2";
import { DescriptionList4 } from "@/components/DescriptionList4";

const descriptionlistsComponents = [
  { component: DescriptionList2, title: "Description List 2" },
  { component: DescriptionList4, title: "Description List 4" },

  // Add more description lists as necessary
];

const DescriptionListsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Description Lists
      </h1>
      <section className="mb-4">
        {descriptionlistsComponents.map(
          ({ component: DescriptionListComponent, title }, index) => (
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
              {/* Render the component */}
              <DescriptionListComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default DescriptionListsPage;
