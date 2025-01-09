import { Pricing1 } from "@/components/Pricing1";
import { Pricing10 } from "@/components/Pricing10";
import { Pricing11 } from "@/components/Pricing11";
import { Pricing12 } from "@/components/Pricing12";
import { Pricing13 } from "@/components/Pricing13";
import { Pricing14 } from "@/components/Pricing14";
import { Pricing15 } from "@/components/Pricing15";
import { Pricing16 } from "@/components/Pricing16";
import { Pricing17 } from "@/components/Pricing17";
import { Pricing18 } from "@/components/Pricing18";
import { Pricing19 } from "@/components/Pricing19";
import { Pricing2 } from "@/components/Pricing2";
import { Pricing20 } from "@/components/Pricing20";
import { Pricing21 } from "@/components/Pricing21";
import { Pricing22 } from "@/components/Pricing22";
import { Pricing23 } from "@/components/Pricing23";
import { Pricing24 } from "@/components/Pricing24";
import { Pricing25 } from "@/components/Pricing25";
import { Pricing26 } from "@/components/Pricing26";
import { Pricing27 } from "@/components/Pricing27";
import { Pricing3 } from "@/components/Pricing3";
import { Pricing4 } from "@/components/Pricing4";
import { Pricing5 } from "@/components/Pricing5";
import { Pricing7 } from "@/components/Pricing7";
import { Pricing8 } from "@/components/Pricing8";
import { Pricing9 } from "@/components/Pricing9";
import { Pricing6 } from "@/components/Pricing6";

const pricingComponents = [
  { component: Pricing1, title: "Pricing 1" },
  { component: Pricing2, title: "Pricing 2" },
  { component: Pricing3, title: "Pricing 3" },
  { component: Pricing4, title: "Pricing 4" },
  { component: Pricing5, title: "Pricing 5" },
  { component: Pricing6, title: "Pricing 6" },
  { component: Pricing7, title: "Pricing 7" },
  { component: Pricing8, title: "Pricing 8" },
  { component: Pricing9, title: "Pricing 9" },
  { component: Pricing10, title: "Pricing 10" },
  { component: Pricing11, title: "Pricing 11" },
  { component: Pricing12, title: "Pricing 12" },
  { component: Pricing13, title: "Pricing 13" },
  { component: Pricing14, title: "Pricing 14" },
  { component: Pricing15, title: "Pricing 15" },
  { component: Pricing16, title: "Pricing 16" },
  { component: Pricing17, title: "Pricing 17" },
  { component: Pricing18, title: "Pricing 18" },
  { component: Pricing19, title: "Pricing 19" },
  { component: Pricing20, title: "Pricing 20" },
  { component: Pricing21, title: "Pricing 21" },
  { component: Pricing22, title: "Pricing 22" },
  { component: Pricing23, title: "Pricing 23" },
  { component: Pricing24, title: "Pricing 24" },
  { component: Pricing25, title: "Pricing 25" },
  { component: Pricing26, title: "Pricing 26" },
  { component: Pricing27, title: "Pricing 27" },

  // Add more pricings as necessary
];

const PricingsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Pricings
      </h1>
      <section className="mb-4">
        {pricingComponents.map(
          ({ component: PricingComponent, title }, index) => (
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
              <PricingComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default PricingsPage;
