import { Comparison1 } from "@/components/Comparisons/Comparison1";
import { Comparison10 } from "@/components/Comparisons/Comparison10";
import { Comparison11 } from "@/components/Comparisons/Comparison11";
import { Comparison12 } from "@/components/Comparisons/Comparison12";
import { Comparison13 } from "@/components/Comparisons/Comparison13";
import { Comparison14 } from "@/components/Comparisons/Comparison14";
import { Comparison15 } from "@/components/Comparisons/Comparison15";
import { Comparison2 } from "@/components/Comparisons/Comparison2";
import { Comparison3 } from "@/components/Comparisons/Comparison3";
import { Comparison4 } from "@/components/Comparisons/Comparison4";
import { Comparison5 } from "@/components/Comparisons/Comparison5";
import { Comparison6 } from "@/components/Comparisons/Comparison6";
import { Comparison7 } from "@/components/Comparisons/Comparison7";
import { Comparison8 } from "@/components/Comparisons/Comparison8";
import { Comparison9 } from "@/components/Comparisons/Comparison9";

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
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Comparisons</h1>
      <section className='mb-4'>
        {comparisonsComponents.map(({ component: ComparisonComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <ComparisonComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ComparisonsPage;
