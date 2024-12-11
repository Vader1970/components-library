import { Logo1 } from "@/components/Logos/Logo1";
import { Logo3 } from "@/components/Logos/Logo3";
import { Logo4 } from "@/components/Logos/Logo4";

const logoComponents = [
  { component: Logo1, title: "Logo 1" },
  { component: Logo3, title: "Logo 3" },
  { component: Logo4, title: "Logo 4" },

  // Add more logos as necessary
];

const LogosPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Logos</h1>
      <section className="mb-4">
        {logoComponents.map(({ component: LogoComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <LogoComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default LogosPage;
