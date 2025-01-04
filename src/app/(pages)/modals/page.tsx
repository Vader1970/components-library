import { ContactModal1 } from "@/components/Modals/Modal1";
import { ContactModal4 } from "@/components/Modals/Modal4";

const modalComponents = [
  { component: ContactModal1, title: "Contact Modal 1" },
  { component: ContactModal4, title: "Contact Modal 4" },

  // Add more modals as necessary
];

const ModalsPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>MODALS</h1>
      <section className='mb-4'>
        {modalComponents.map(({ component: ModalComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <ModalComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ModalsPage;
