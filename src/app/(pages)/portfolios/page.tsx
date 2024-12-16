import { Portfolio11 } from "@/components/Portfolios/Portfolio11";
import { Portfolio12 } from "@/components/Portfolios/Portfolio12";
import { Portfolio13 } from "@/components/Portfolios/Portfolio13";
import { Portfolio14 } from "@/components/Portfolios/Portfolio14";
import { Portfolio15 } from "@/components/Portfolios/Portfolio15";
import { Portfolio16 } from "@/components/Portfolios/Portfolio16";
import { Portfolio17 } from "@/components/Portfolios/Portfolio17";

const portfolioComponents = [
  { component: Portfolio11, title: "Portfolio 11" },
  { component: Portfolio12, title: "Portfolio 12" },
  { component: Portfolio13, title: "Portfolio 13" },
  { component: Portfolio14, title: "Portfolio 14" },
  { component: Portfolio15, title: "Portfolio 15" },
  { component: Portfolio16, title: "Portfolio 16" },

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
