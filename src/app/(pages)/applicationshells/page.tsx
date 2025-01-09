import { ApplicationShell2 } from "@/components/ApplicationShell2";
import { ApplicationShell3 } from "@/components/ApplicationShell3";
import { ApplicationShell4 } from "@/components/ApplicationShell4";

const applicationshellsComponents = [
  { component: ApplicationShell2, title: "Application Shell 2" },
  { component: ApplicationShell3, title: "Application Shell 3" },
  { component: ApplicationShell4, title: "Application Shell 4" },

  // Add more applicationshellss as necessary
];

const ApplicationShellsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Application Shells
      </h1>
      <section className="mb-4">
        {applicationshellsComponents.map(
          ({ component: ApplicationShellComponent, title }, index) => (
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
              <ApplicationShellComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ApplicationShellsPage;
