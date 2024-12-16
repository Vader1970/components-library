import { Cta1 } from "@/components/Ctas/Cta1";
import { Cta2 } from "@/components/Ctas/Cta2";
import { Cta3 } from "@/components/Ctas/Cta3";
import { Cta7 } from "@/components/Ctas/Cta7";
import { Cta8 } from "@/components/Ctas/Cta8";
import { Cta9 } from "@/components/Ctas/Cta9";
import { Cta13 } from "@/components/Ctas/Cta13";
import { Cta15 } from "@/components/Ctas/Cta15";
import { Cta16 } from "@/components/Ctas/Cta16";
import { Cta25 } from "@/components/Ctas/Cta25";
import { Cta37 } from "@/components/Ctas/Cta37";
import { Cta38 } from "@/components/Ctas/Cta38";
import { Cta57 } from "@/components/Ctas/Cta57";
import { Cta58 } from "@/components/Ctas/Cta58";
import { Cta33 } from "@/components/Ctas/Cta33";
import { Cta4 } from "@/components/Ctas/Cta4";
import { Cta5 } from "@/components/Ctas/Cta5";
import { Cta6 } from "@/components/Ctas/Cta6";
import { Cta10 } from "@/components/Ctas/Cta10";
import { Cta11 } from "@/components/Ctas/Cta11";
import { Cta12 } from "@/components/Ctas/Cta12";
import { Cta14 } from "@/components/Ctas/Cta14";
import { Cta17 } from "@/components/Ctas/Cta17";
import { Cta18 } from "@/components/Ctas/Cta18";
import { Cta19 } from "@/components/Ctas/Cta19";
import { Cta20 } from "@/components/Ctas/Cta20";
import { Cta21 } from "@/components/Ctas/Cta21";
import { Cta22 } from "@/components/Ctas/Cta22";
import { Cta23 } from "@/components/Ctas/Cta23";
import { Cta24 } from "@/components/Ctas/Cta24";

const ctaComponents = [
  { component: Cta1, title: "CTA 1" },
  { component: Cta2, title: "CTA 2" },
  { component: Cta3, title: "CTA 3" },
  { component: Cta4, title: "CTA 4" },
  { component: Cta5, title: "CTA 5" },
  { component: Cta6, title: "CTA 6" },
  { component: Cta7, title: "CTA 7" },
  { component: Cta8, title: "CTA 8" },
  { component: Cta9, title: "CTA 9" },
  { component: Cta10, title: "CTA 10" },
  { component: Cta11, title: "CTA 11" },
  { component: Cta12, title: "CTA 12" },
  { component: Cta13, title: "CTA 13" },
  { component: Cta14, title: "CTA 14" },
  { component: Cta15, title: "CTA 15" },
  { component: Cta16, title: "CTA 16" },
  { component: Cta17, title: "CTA 17" },
  { component: Cta18, title: "CTA 18" },
  { component: Cta19, title: "CTA 19" },
  { component: Cta20, title: "CTA 20" },
  { component: Cta21, title: "CTA 21" },
  { component: Cta22, title: "CTA 22" },
  { component: Cta23, title: "CTA 23" },
  { component: Cta24, title: "CTA 24" },
  { component: Cta25, title: "CTA 25" },
  { component: Cta33, title: "CTA 33" },
  { component: Cta37, title: "CTA 37" },
  { component: Cta38, title: "CTA 38" },
  { component: Cta57, title: "CTA 57" },
  { component: Cta58, title: "CTA 58" },

  // Add more CTAs as necessary
];

const CtasPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CTAs</h1>
      <section className="mb-4">
        {ctaComponents.map(({ component: CtaComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <CtaComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CtasPage;
