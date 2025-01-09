import { Career1 } from "@/components/Career1";
import { Career10 } from "@/components/Career10";
import { Career11 } from "@/components/Career11";
import { Career12 } from "@/components/Career12";
import { Career13 } from "@/components/Career13";
import { Career14 } from "@/components/Career14";
import { Career15 } from "@/components/Career15";
import { Career16 } from "@/components/Career16";
import { Career17 } from "@/components/Career17";
import { Career18 } from "@/components/Career18";
import { Career19 } from "@/components/Career19";
import { Career2 } from "@/components/Career2";
import { Career20 } from "@/components/Career20";
import { Career21 } from "@/components/Career21";
import { Career22 } from "@/components/Career22";
import { Career23 } from "@/components/Career23";
import { Career24 } from "@/components/Career24";
import { Career25 } from "@/components/Career25";
import { Career26 } from "@/components/Career26";
import { Career27 } from "@/components/Career27";
import { Career3 } from "@/components/Career3";
import { Career4 } from "@/components/Career4";
import { Career5 } from "@/components/Career5";
import { Career6 } from "@/components/Career6";
import { Career7 } from "@/components/Career7";
import { Career8 } from "@/components/Career8";
import { Career9 } from "@/components/Career9";

const careersComponents = [
  { component: Career1, title: "Career 1" },
  { component: Career2, title: "Career 2" },
  { component: Career3, title: "Career 3" },
  { component: Career4, title: "Career 4" },
  { component: Career5, title: "Career 5" },
  { component: Career6, title: "Career 6" },
  { component: Career7, title: "Career 7" },
  { component: Career8, title: "Career 8" },
  { component: Career9, title: "Career 9" },
  { component: Career10, title: "Career 10" },
  { component: Career11, title: "Career 11" },
  { component: Career12, title: "Career 12" },
  { component: Career13, title: "Career 13" },
  { component: Career14, title: "Career 14" },
  { component: Career15, title: "Career 15" },
  { component: Career16, title: "Career 16" },
  { component: Career17, title: "Career 17" },
  { component: Career18, title: "Career 18" },
  { component: Career19, title: "Career 19" },
  { component: Career20, title: "Career 20" },
  { component: Career21, title: "Career 21" },
  { component: Career22, title: "Career 22" },
  { component: Career23, title: "Career 23" },
  { component: Career24, title: "Career 24" },
  { component: Career25, title: "Career 25" },
  { component: Career26, title: "Career 26" },
  { component: Career27, title: "Career 27" },

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
              <CareerComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default CareersPage;
