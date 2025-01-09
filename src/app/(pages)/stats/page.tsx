import { Stats1 } from "@/components/Stats1";
import { Stats10 } from "@/components/Stats10";
import { Stats11 } from "@/components/Stats11";
import { Stats12 } from "@/components/Stats12";
import { Stats13 } from "@/components/Stats13";
import { Stats14 } from "@/components/Stats14";
import { Stats15 } from "@/components/Stats15";
import { Stats16 } from "@/components/Stats16";
import { Stats17 } from "@/components/Stats17";
import { Stats18 } from "@/components/Stats18";
import { Stats19 } from "@/components/Stats19";
import { Stats2 } from "@/components/Stats2";
import { Stats20 } from "@/components/Stats20";
import { Stats21 } from "@/components/Stats21";
import { Stats22 } from "@/components/Stats22";
import { Stats23 } from "@/components/Stats23";
import { Stats24 } from "@/components/Stats24";
import { Stats25 } from "@/components/Stats25";
import { Stats26 } from "@/components/Stats26";
import { Stats27 } from "@/components/Stats27";
import { Stats28 } from "@/components/Stats28";
import { Stats29 } from "@/components/Stats29";
import { Stats3 } from "@/components/Stats3";
import { Stats30 } from "@/components/Stats30";
import { Stats31 } from "@/components/Stats31";
import { Stats32 } from "@/components/Stats32";
import { Stats33 } from "@/components/Stats33";
import { Stats34 } from "@/components/Stats34";
import { Stats35 } from "@/components/Stats35";
import { Stats36 } from "@/components/Stats36";
import { Stats37 } from "@/components/Stats37";
import { Stats38 } from "@/components/Stats38";
import { Stats39 } from "@/components/Stats39";
import { Stats4 } from "@/components/Stats4";
import { Stats40 } from "@/components/Stats40";
import { Stats41 } from "@/components/Stats41";
import { Stats42 } from "@/components/Stats42";
import { Stats43 } from "@/components/Stats43";
import { Stats44 } from "@/components/Stats44";
import { Stats45 } from "@/components/Stats45";
import { Stats46 } from "@/components/Stats46";
import { Stats47 } from "@/components/Stats47";
import { Stats48 } from "@/components/Stats48";
import { Stats49 } from "@/components/Stats49";
import { Stats5 } from "@/components/Stats5";
import { Stats50 } from "@/components/Stats50";
import { Stats51 } from "@/components/Stats51";
import { Stats52 } from "@/components/Stats52";
import { Stats53 } from "@/components/Stats53";
import { Stats54 } from "@/components/Stats54";
import { Stats55 } from "@/components/Stats55";
import { Stats56 } from "@/components/Stats56";
import { Stats57 } from "@/components/Stats57";
import { Stats58 } from "@/components/Stats58";
import { Stats59 } from "@/components/Stats59";
import { Stats6 } from "@/components/Stats6";
import { Stats60 } from "@/components/Stats60";
import { Stats7 } from "@/components/Stats7";
import { Stats8 } from "@/components/Stats8";
import { Stats9 } from "@/components/Stats9";

const statComponents = [
  { component: Stats1, title: "Stats 1" },
  { component: Stats2, title: "Stats 2" },
  { component: Stats3, title: "Stats 3" },
  { component: Stats4, title: "Stats 4" },
  { component: Stats5, title: "Stats 5" },
  { component: Stats6, title: "Stats 6" },
  { component: Stats7, title: "Stats 7" },
  { component: Stats8, title: "Stats 8" },
  { component: Stats9, title: "Stats 9" },
  { component: Stats10, title: "Stats 10" },
  { component: Stats11, title: "Stats 11" },
  { component: Stats12, title: "Stats 12" },
  { component: Stats13, title: "Stats 13" },
  { component: Stats14, title: "Stats 14" },
  { component: Stats15, title: "Stats 15" },
  { component: Stats16, title: "Stats 16" },
  { component: Stats17, title: "Stats 17" },
  { component: Stats18, title: "Stats 18" },
  { component: Stats19, title: "Stats 19" },
  { component: Stats20, title: "Stats 20" },
  { component: Stats21, title: "Stats 21" },
  { component: Stats22, title: "Stats 22" },
  { component: Stats23, title: "Stats 23" },
  { component: Stats24, title: "Stats 24" },
  { component: Stats25, title: "Stats 25" },
  { component: Stats26, title: "Stats 26" },
  { component: Stats27, title: "Stats 27" },
  { component: Stats28, title: "Stats 28" },
  { component: Stats29, title: "Stats 29" },
  { component: Stats30, title: "Stats 30" },
  { component: Stats31, title: "Stats 31" },
  { component: Stats32, title: "Stats 32" },
  { component: Stats33, title: "Stats 33" },
  { component: Stats34, title: "Stats 34" },
  { component: Stats35, title: "Stats 35" },
  { component: Stats36, title: "Stats 36" },
  { component: Stats37, title: "Stats 37" },
  { component: Stats38, title: "Stats 38" },
  { component: Stats39, title: "Stats 39" },
  { component: Stats40, title: "Stats 40" },
  { component: Stats41, title: "Stats 41" },
  { component: Stats42, title: "Stats 42" },
  { component: Stats43, title: "Stats 43" },
  { component: Stats44, title: "Stats 44" },
  { component: Stats45, title: "Stats 45" },
  { component: Stats46, title: "Stats 46" },
  { component: Stats47, title: "Stats 47" },
  { component: Stats48, title: "Stats 48" },
  { component: Stats49, title: "Stats 49" },
  { component: Stats50, title: "Stats 50" },
  { component: Stats51, title: "Stats 51" },
  { component: Stats52, title: "Stats 52" },
  { component: Stats53, title: "Stats 53" },
  { component: Stats54, title: "Stats 54" },
  { component: Stats55, title: "Stats 55" },
  { component: Stats56, title: "Stats 56" },
  { component: Stats57, title: "Stats 57" },
  { component: Stats58, title: "Stats 58" },
  { component: Stats59, title: "Stats 59" },
  { component: Stats60, title: "Stats 60" },

  // Add more stats as necessary
];

const StatsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Stats
      </h1>
      <section className="mb-4">
        {statComponents.map(({ component: StatComponent, title }, index) => (
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
            <StatComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatsPage;
