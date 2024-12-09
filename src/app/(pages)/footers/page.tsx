import { Footer2 } from "@/components/Footers/Footer2";
import { Footer3 } from "@/components/Footers/Footer3";
import { Footer4 } from "@/components/Footers/Footer4";
import { Footer5 } from "@/components/Footers/Footer5";
import { Footer6 } from "@/components/Footers/Footer6";
import { Footer7 } from "@/components/Footers/Footer7";
import { Footer8 } from "@/components/Footers/Footer8";
import { Footer14 } from "@/components/Footers/Footer14";
import { Footer15 } from "@/components/Footers/Footer15";
import { Footer16 } from "@/components/Footers/Footer16";
import { Footer17 } from "@/components/Footers/Footer17";

const footerComponents = [
  { component: Footer2, title: "Footer 2" },
  { component: Footer3, title: "Footer 3" },
  { component: Footer4, title: "Footer 4" },
  { component: Footer5, title: "Footer 5" },
  { component: Footer6, title: "Footer 6" },
  { component: Footer7, title: "Footer 7" },
  { component: Footer8, title: "Footer 8" },
  { component: Footer14, title: "Footer 14" },
  { component: Footer15, title: "Footer 15" },
  { component: Footer16, title: "Footer 16" },
  { component: Footer17, title: "Footer 17" },

  // Add more Footers as necessary
];

const FootersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Footers</h1>
      <section className="mb-4">
        {footerComponents.map(
          ({ component: FooterComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
              {/* Render the component */}
              <FooterComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default FootersPage;
