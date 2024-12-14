import { Pricing1 } from "@/components/Pricings/Pricing1";
import { Pricing10 } from "@/components/Pricings/Pricing10";
import { Pricing11 } from "@/components/Pricings/Pricing11";
import { Pricing12 } from "@/components/Pricings/Pricing12";
import { Pricing13 } from "@/components/Pricings/Pricing13";
import { Pricing14 } from "@/components/Pricings/Pricing14";
import { Pricing15 } from "@/components/Pricings/Pricing15";
import { Pricing16 } from "@/components/Pricings/Pricing16";
import { Pricing18 } from "@/components/Pricings/Pricing18";
import { Pricing19 } from "@/components/Pricings/Pricing19";
import { Pricing20 } from "@/components/Pricings/Pricing20";
import { Pricing21 } from "@/components/Pricings/Pricing21";
import { Pricing22 } from "@/components/Pricings/Pricing22";
import { Pricing23 } from "@/components/Pricings/Pricing23";
import { Pricing24 } from "@/components/Pricings/Pricing24";
import { Pricing25 } from "@/components/Pricings/Pricing25";
import { Pricing26 } from "@/components/Pricings/Pricing26";
import { Pricing27 } from "@/components/Pricings/Pricing27";
import { Pricing3 } from "@/components/Pricings/Pricing3";
import { Pricing4 } from "@/components/Pricings/Pricing4";
import { Pricing8 } from "@/components/Pricings/Pricing8";
import { Pricing9 } from "@/components/Pricings/Pricing9";
import { Pricing6 } from "@/components/Pricings/Priding6";

const pricingComponents = [
  { component: Pricing1, title: "Pricing 1" },
  { component: Pricing3, title: "Pricing 3" },
  { component: Pricing4, title: "Pricing 4" },
  { component: Pricing6, title: "Pricing 6" },
  { component: Pricing8, title: "Pricing 8" },
  { component: Pricing9, title: "Pricing 9" },
  { component: Pricing10, title: "Pricing 10" },
  { component: Pricing11, title: "Pricing 11" },
  { component: Pricing12, title: "Pricing 12" },
  { component: Pricing13, title: "Pricing 13" },
  { component: Pricing14, title: "Pricing 14" },
  { component: Pricing15, title: "Pricing 15" },
  { component: Pricing16, title: "Pricing 16" },
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
      <h1 className='text-2xl font-bold mb-4'>Pricings</h1>
      <section className='mb-4'>
        {pricingComponents.map(({ component: PricingComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='text-xl mb-2'>{title}</h2>
            {/* Render the component */}
            <PricingComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PricingsPage;
