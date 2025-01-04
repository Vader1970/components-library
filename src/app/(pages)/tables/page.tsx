import { Table1 } from "@/components/Tables/Tables1";

const tablesComponents = [
  { component: Table1, title: "Table 1" },

  // Add more tables as necessary
];

const TablesPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Tables</h1>
      <section className='mb-4'>
        {tablesComponents.map(({ component: TableComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <TableComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default TablesPage;
