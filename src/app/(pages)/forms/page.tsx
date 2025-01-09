import { Form15 } from "@/components/Form15";
import { Form5 } from "@/components/Form5";

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
            <FormComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormsPage;
