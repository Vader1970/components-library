import { Portfolio1 } from "@/components/Portfolios/Portfolio1";
import { Portfolio10 } from "@/components/Portfolios/Portfolio10";
import { Portfolio11 } from "@/components/Portfolios/Portfolio11";
import { Portfolio12 } from "@/components/Portfolios/Portfolio12";
import { Portfolio13 } from "@/components/Portfolios/Portfolio13";
import { Portfolio14 } from "@/components/Portfolios/Portfolio14";
import { Portfolio15 } from "@/components/Portfolios/Portfolio15";
import { Portfolio16 } from "@/components/Portfolios/Portfolio16";
import { Portfolio17 } from "@/components/Portfolios/Portfolio17";
import { Portfolio2 } from "@/components/Portfolios/Portfolio2";
import { Portfolio3 } from "@/components/Portfolios/Portfolio3";
import { Portfolio4 } from "@/components/Portfolios/Portfolio4";
import { Portfolio5 } from "@/components/Portfolios/Portfolio5";
import { Portfolio6 } from "@/components/Portfolios/Portfolio6";
import { Portfolio7 } from "@/components/Portfolios/Portfolio7";
import { Portfolio8 } from "@/components/Portfolios/Portfolio8";
import { Portfolio9 } from "@/components/Portfolios/Portfolio9";
import { PortfolioHeader1 } from "@/components/Portfolios/PortfolioHeader1";
import { PortfolioHeader10 } from "@/components/Portfolios/PortfolioHeader10";
import { PortfolioHeader11 } from "@/components/Portfolios/PortfolioHeader11";
import { PortfolioHeader12 } from "@/components/Portfolios/PortfolioHeader12";
import { PortfolioHeader2 } from "@/components/Portfolios/PortfolioHeader2";
import { PortfolioHeader3 } from "@/components/Portfolios/PortfolioHeader3";
import { PortfolioHeader4 } from "@/components/Portfolios/PortfolioHeader4";
import { PortfolioHeader5 } from "@/components/Portfolios/PortfolioHeader5";
import { PortfolioHeader8 } from "@/components/Portfolios/PortfolioHeader8";
import { PortfolioHeader9 } from "@/components/Portfolios/PortfolioHeader9";

const portfolioComponents = [
  { component: Portfolio1, title: "Portfolio 1" },
  { component: Portfolio2, title: "Portfolio 2" },
  { component: Portfolio3, title: "Portfolio 3" },
  { component: Portfolio4, title: "Portfolio 4" },
  { component: Portfolio5, title: "Portfolio 5" },
  { component: Portfolio6, title: "Portfolio 6" },
  { component: Portfolio7, title: "Portfolio 7" },
  { component: Portfolio8, title: "Portfolio 8" },
  { component: Portfolio9, title: "Portfolio 9" },
  { component: Portfolio10, title: "Portfolio 10" },
  { component: Portfolio11, title: "Portfolio 11" },
  { component: Portfolio12, title: "Portfolio 12" },
  { component: Portfolio13, title: "Portfolio 13" },
  { component: Portfolio14, title: "Portfolio 14" },
  { component: Portfolio15, title: "Portfolio 15" },
  { component: Portfolio16, title: "Portfolio 16" },
  { component: Portfolio17, title: "Portfolio 17" },
  { component: PortfolioHeader1, title: "Portfolio Header 1" },
  { component: PortfolioHeader2, title: "Portfolio Header 2" },
  { component: PortfolioHeader3, title: "Portfolio Header 3" },
  { component: PortfolioHeader4, title: "Portfolio Header 4" },
  { component: PortfolioHeader5, title: "Portfolio Header 5" },
  { component: PortfolioHeader8, title: "Portfolio Header 8" },
  { component: PortfolioHeader9, title: "Portfolio Header 9" },
  { component: PortfolioHeader10, title: "Portfolio Header 10" },
  { component: PortfolioHeader11, title: "Portfolio Header 11" },
  { component: PortfolioHeader12, title: "Portfolio Header 12" },

  // Add more portfolios as necessary
];

const PortfoliosPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Portfolios
      </h1>
      <section className="mb-4">
        {portfolioComponents.map(
          ({ component: PortfolioComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
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
