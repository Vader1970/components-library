import { Stats13 } from "@/components/Stats/Stats13";
import { Stats19 } from "@/components/Stats/Stats19";
import { Stats2 } from "@/components/Stats/Stats2";
import { Stats20 } from "@/components/Stats/Stats20";
import { Stats21 } from "@/components/Stats/Stats21";
import { Stats22 } from "@/components/Stats/Stats22";
import { Stats23 } from "@/components/Stats/Stats23";
import { Stats24 } from "@/components/Stats/Stats24";
import { Stats25 } from "@/components/Stats/Stats25";
import { Stats26 } from "@/components/Stats/Stats26";
import { Stats27 } from "@/components/Stats/Stats27";
import { Stats28 } from "@/components/Stats/Stats28";
import { Stats29 } from "@/components/Stats/Stats29";
import { Stats30 } from "@/components/Stats/Stats30";
import { Stats31 } from "@/components/Stats/Stats31";
import { Stats32 } from "@/components/Stats/Stats32";
import { Stats33 } from "@/components/Stats/Stats33";
import { Stats34 } from "@/components/Stats/Stats34";
import { Stats35 } from "@/components/Stats/Stats35";
import { Stats36 } from "@/components/Stats/Stats36";
import { Stats37 } from "@/components/Stats/Stats37";
import { Stats38 } from "@/components/Stats/Stats38";
import { Stats39 } from "@/components/Stats/Stats39";
import { Stats4 } from "@/components/Stats/Stats4";
import { Stats40 } from "@/components/Stats/Stats40";
import { Stats41 } from "@/components/Stats/Stats41";
import { Stats42 } from "@/components/Stats/Stats42";
import { Stats43 } from "@/components/Stats/Stats43";
import { Stats44 } from "@/components/Stats/Stats44";
import { Stats45 } from "@/components/Stats/Stats45";
import { Stats46 } from "@/components/Stats/Stats46";
import { Stats47 } from "@/components/Stats/Stats47";
import { Stats48 } from "@/components/Stats/Stats48";
import { Stats49 } from "@/components/Stats/Stats49";
import { Stats50 } from "@/components/Stats/Stats50";
import { Stats51 } from "@/components/Stats/Stats51";
import { Stats52 } from "@/components/Stats/Stats52";
import { Stats53 } from "@/components/Stats/Stats53";
import { Stats54 } from "@/components/Stats/Stats54";
import { Stats55 } from "@/components/Stats/Stats55";
import { Stats56 } from "@/components/Stats/Stats56";
import { Stats57 } from "@/components/Stats/Stats57";
import { Stats58 } from "@/components/Stats/Stats58";
import { Stats59 } from "@/components/Stats/Stats59";
import { Stats60 } from "@/components/Stats/Stats60";
import { Stats8 } from "@/components/Stats/Stats8";

const statComponents = [
  { component: Stats2, title: "Stats 2" },
  { component: Stats4, title: "Stats 4" },
  { component: Stats8, title: "Stats 8" },
  { component: Stats13, title: "Stats 13" },
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
      <h1 className="text-2xl font-bold mb-4">Stats</h1>
      <section className="mb-4">
        {statComponents.map(({ component: StatComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <StatComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatsPage;
