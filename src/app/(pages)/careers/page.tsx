import { Career1 } from "@/components/Careers/Career1";
import { Career10 } from "@/components/Careers/Career10";
import { Career11 } from "@/components/Careers/Career11";
import { Career12 } from "@/components/Careers/Career12";
import { Career13 } from "@/components/Careers/Career13";
import { Career14 } from "@/components/Careers/Career14";
import { Career15 } from "@/components/Careers/Career15";
import { Career16 } from "@/components/Careers/Career16";
import { Career17 } from "@/components/Careers/Career17";
import { Career18 } from "@/components/Careers/Career18";
import { Career19 } from "@/components/Careers/Career19";
import { Career2 } from "@/components/Careers/Career2";
import { Career20 } from "@/components/Careers/Career20";
import { Career21 } from "@/components/Careers/Career21";
import { Career22 } from "@/components/Careers/Career22";
import { Career23 } from "@/components/Careers/Career23";
import { Career24 } from "@/components/Careers/Career24";
import { Career25 } from "@/components/Careers/Career25";
import { Career26 } from "@/components/Careers/Career26";
import { Career27 } from "@/components/Careers/Career27";
import { Career3 } from "@/components/Careers/Career3";
import { Career4 } from "@/components/Careers/Career4";
import { Career5 } from "@/components/Careers/Career5";
import { Career6 } from "@/components/Careers/Career6";
import { Career7 } from "@/components/Careers/Career7";
import { Career8 } from "@/components/Careers/Career8";
import { Career9 } from "@/components/Careers/Career9";

const careersComponents = [
  { component: Career1, title: "Careers 1" },
  { component: Career2, title: "Careers 2" },
  { component: Career3, title: "Careers 3" },
  { component: Career4, title: "Careers 4" },
  { component: Career5, title: "Careers 5" },
  { component: Career6, title: "Careers 6" },
  { component: Career7, title: "Careers 7" },
  { component: Career8, title: "Careers 8" },
  { component: Career9, title: "Careers 9" },
  { component: Career10, title: "Careers 10" },
  { component: Career11, title: "Careers 11" },
  { component: Career12, title: "Careers 12" },
  { component: Career13, title: "Careers 13" },
  { component: Career14, title: "Careers 14" },
  { component: Career15, title: "Careers 15" },
  { component: Career16, title: "Careers 16" },
  { component: Career17, title: "Careers 17" },
  { component: Career18, title: "Careers 18" },
  { component: Career19, title: "Careers 19" },
  { component: Career20, title: "Careers 20" },
  { component: Career21, title: "Careers 21" },
  { component: Career22, title: "Careers 22" },
  { component: Career23, title: "Careers 23" },
  { component: Career24, title: "Careers 24" },
  { component: Career25, title: "Careers 25" },
  { component: Career26, title: "Careers 26" },
  { component: Career27, title: "Careers 27" },

  // Add more careers as necessary
];

const CareersPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Careers
      </h1>
      <section className="mb-4">
        {careersComponents.map(
          ({ component: CareerComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              {/* Render the component */}
              <CareerComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default CareersPage;
