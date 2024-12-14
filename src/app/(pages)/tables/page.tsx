import { Table1 } from "@/components/Tables/Tables1";

const tablesComponents = [
  { component: Table1, title: "Table 1" },

  // Add more tables as necessary
];

const TablesPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Tables</h1>
      <section className='mb-4'>
        {tablesComponents.map(({ component: TableComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='text-xl mt-20 mb-5'>{title}</h2>
            {/* Render the component */}
            <TableComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default TablesPage;
