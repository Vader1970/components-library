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

const ctaComponents = [
  { component: Cta1, title: "CTA 1" },
  { component: Cta2, title: "CTA 2" },
  { component: Cta3, title: "CTA 3" },
  { component: Cta7, title: "CTA 7" },
  { component: Cta8, title: "CTA 8" },
  { component: Cta9, title: "CTA 9" },
  { component: Cta13, title: "CTA 13" },
  { component: Cta15, title: "CTA 15" },
  { component: Cta16, title: "CTA 16" },
  { component: Cta25, title: "CTA 25" },
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
