import { Form15 } from "@/components/Forms/Form15";
import { Form5 } from "@/components/Forms/Form5";

const formsComponents = [
  { component: Form5, title: "Form 5" },
  { component: Form15, title: "Form 15" },

  // Add more forms as necessary
];

const FormsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Forms
      </h1>
      <section className="mb-4">
        {formsComponents.map(({ component: FormComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
              {title}
            </h2>
            {/* Render the component */}
            <FormComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormsPage;
