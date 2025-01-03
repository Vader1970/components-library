import { ApplicationShell2 } from "@/components/ApllicationShells/ApplicationShell2";
import { ApplicationShell3 } from "@/components/ApllicationShells/ApplicationShell3";
import { ApplicationShell4 } from "@/components/ApllicationShells/ApplicationShell4";

const applicationshellsComponents = [
  { component: ApplicationShell2, title: "Application Shell 2" },
  { component: ApplicationShell3, title: "Application Shell 3" },
  { component: ApplicationShell4, title: "Application Shell 4" },

  // Add more applicationshellss as necessary
];

const ApplicationShellsPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Application Shells</h1>
      <section className='mb-4'>
        {applicationshellsComponents.map(({ component: ApplicationShellComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <ApplicationShellComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ApplicationShellsPage;
