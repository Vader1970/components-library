import { Links10 } from "@/components/Links/Links10";
import { Links11 } from "@/components/Links/Links11";
import { Links12 } from "@/components/Links/Links12";
import { Links13 } from "@/components/Links/Links13";
import { Links14 } from "@/components/Links/Links14";
import { Links15 } from "@/components/Links/Links15";
import { Links16 } from "@/components/Links/Links16";
import { Links2 } from "@/components/Links/Links2";
import { Links3 } from "@/components/Links/Links3";
import { Links4 } from "@/components/Links/Links4";
import { Links5 } from "@/components/Links/Links5";
import { Links6 } from "@/components/Links/Links6";
import { Links7 } from "@/components/Links/Links7";
import { Links8 } from "@/components/Links/Links8";
import { Links9 } from "@/components/Links/Links9";

const linkComponents = [
  { component: Links2, title: "Link 2" },
  { component: Links3, title: "Link 3" },
  { component: Links4, title: "Link 4" },
  { component: Links5, title: "Link 5" },
  { component: Links6, title: "Link 6" },
  { component: Links7, title: "Link 7" },
  { component: Links8, title: "Link 8" },
  { component: Links9, title: "Link 9" },
  { component: Links10, title: "Link 10" },
  { component: Links11, title: "Link 11" },
  { component: Links12, title: "Link 12" },
  { component: Links13, title: "Link 13" },
  { component: Links14, title: "Link 14" },
  { component: Links15, title: "Link 15" },
  { component: Links16, title: "Link 16" },

  // Add more links as necessary
];

const LinksPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Links
      </h1>
      <section className="mb-4">
        {linkComponents.map(({ component: LinkComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
              {title}
            </h2>
            {/* Render the component */}
            <LinkComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default LinksPage;
