import { Comparison1 } from "@/components/Comparison1";
import { Comparison10 } from "@/components/Comparison10";
import { Comparison11 } from "@/components/Comparison11";
import { Comparison12 } from "@/components/Comparison12";
import { Comparison13 } from "@/components/Comparison13";
import { Comparison14 } from "@/components/Comparison14";
import { Comparison15 } from "@/components/Comparison15";
import { Comparison2 } from "@/components/Comparison2";
import { Comparison3 } from "@/components/Comparison3";
import { Comparison4 } from "@/components/Comparison4";
import { Comparison5 } from "@/components/Comparison5";
import { Comparison6 } from "@/components/Comparison6";
import { Comparison7 } from "@/components/Comparison7";
import { Comparison8 } from "@/components/Comparison8";
import { Comparison9 } from "@/components/Comparison9";

const comparisonsComponents = [
  { component: Comparison1, title: "Comparison 1" },
  { component: Comparison2, title: "Comparison 2" },
  { component: Comparison3, title: "Comparison 3" },
  { component: Comparison4, title: "Comparison 4" },
  { component: Comparison5, title: "Comparison 5" },
  { component: Comparison6, title: "Comparison 6" },
  { component: Comparison7, title: "Comparison 7" },
  { component: Comparison8, title: "Comparison 8" },
  { component: Comparison9, title: "Comparison 9" },
  { component: Comparison10, title: "Comparison 10" },
  { component: Comparison11, title: "Comparison 11" },
  { component: Comparison12, title: "Comparison 12" },
  { component: Comparison13, title: "Comparison 13" },
  { component: Comparison14, title: "Comparison 14" },
  { component: Comparison15, title: "Comparison 15" },

  // Add more comparisons as necessary
];

const ComparisonsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Comparisons
      </h1>
      <section className="mb-4">
        {comparisonsComponents.map(
          ({ component: ComparisonComponent, title }, index) => (
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
              <ComparisonComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ComparisonsPage;
