import { Portfolio17 } from "@/components/Portfolios/Portfolio17";

const portfolioComponents = [
  { component: Portfolio17, title: "Portfolio 17" },

  // Add more portfolios as necessary
];

const PortfoliosPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Portfolios</h1>
      <section className="mb-4">
        {portfolioComponents.map(
          ({ component: PortfolioComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
              {/* Render the component */}
              <PortfolioComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default PortfoliosPage;
