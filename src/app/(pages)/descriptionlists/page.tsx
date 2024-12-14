import { DescriptionList2 } from "@/components/DescriptionLists/DescriptionList2";
import { DescriptionList4 } from "@/components/DescriptionLists/DescriptionList4";

const descriptionlistsComponents = [
  { component: DescriptionList2, title: "Description List 2" },
  { component: DescriptionList4, title: "Description List 2" },

  // Add more description lists as necessary
];

const DescriptionListsPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Description Lists</h1>
      <section className='mb-4'>
        {descriptionlistsComponents.map(({ component: DescriptionListComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='text-xl mt-20 mb-5'>{title}</h2>
            {/* Render the component */}
            <DescriptionListComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DescriptionListsPage;
