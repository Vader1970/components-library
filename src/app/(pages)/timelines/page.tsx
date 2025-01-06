import { Timeline2 } from "@/components/Timelines/Timeline2";
import { Timeline4 } from "@/components/Timelines/Timeline4";
import { Timeline5 } from "@/components/Timelines/Timeline5";
import { Timeline6 } from "@/components/Timelines/Timeline6";
import { Timeline8 } from "@/components/Timelines/Timeline8";
import { Timeline9 } from "@/components/Timelines/Timeline9";
import { Timeline10 } from "@/components/Timelines/Timeline10";
import { Timeline12 } from "@/components/Timelines/Timeline12";
import { Timeline20 } from "@/components/Timelines/Timeline20";
import { Timeline14 } from "@/components/Timelines/Timeline14";
import { Timeline15 } from "@/components/Timelines/Timeline15";
import { Timeline16 } from "@/components/Timelines/Timeline16";
import { Timeline17 } from "@/components/Timelines/Timeline17";
import { Timeline18 } from "@/components/Timelines/Timeline18";
import { Timeline19 } from "@/components/Timelines/Timeline19";
import { Timeline21 } from "@/components/Timelines/Timeline21";
import { Timeline1 } from "@/components/Timelines/Timeline1";
import { Timeline3 } from "@/components/Timelines/Timeline3";
import { Timeline7 } from "@/components/Timelines/Timeline7";
import { Timeline11 } from "@/components/Timelines/Timeline11";
import { Timeline13 } from "@/components/Timelines/Timeline13";

const timelineComponents = [
  { component: Timeline1, title: "Timeline 1" },
  { component: Timeline2, title: "Timeline 2" },
  { component: Timeline3, title: "Timeline 3" },
  { component: Timeline4, title: "Timeline 4" },
  { component: Timeline5, title: "Timeline 5" },
  { component: Timeline6, title: "Timeline 6" },
  { component: Timeline7, title: "Timeline 7" },
  { component: Timeline8, title: "Timeline 8" },
  { component: Timeline9, title: "Timeline 9" },
  { component: Timeline10, title: "Timeline 10" },
  { component: Timeline11, title: "Timeline 11" },
  { component: Timeline12, title: "Timeline 12" },
  { component: Timeline13, title: "Timeline 13" },
  { component: Timeline14, title: "Timeline 14" },
  { component: Timeline15, title: "Timeline 15" },
  { component: Timeline16, title: "Timeline 16" },
  { component: Timeline17, title: "Timeline 17" },
  { component: Timeline18, title: "Timeline 18" },
  { component: Timeline19, title: "Timeline 19" },
  { component: Timeline20, title: "Timeline 20" },
  { component: Timeline21, title: "Timeline 21" },

  // Add more timelines as necessary
];

const TimelinesPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Timelines
      </h1>
      <section className="mb-4">
        {timelineComponents.map(
          ({ component: TimelineComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              {/* Render the component */}
              <TimelineComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default TimelinesPage;
