import { Timeline2 } from "@/components/Timelines/Timeline2";
import { Timeline4 } from "@/components/Timelines/Timeline4";
import { Timeline5 } from "@/components/Timelines/Timeline5";
import { Timeline6 } from "@/components/Timelines/Timeline6";
import { Timeline8 } from "@/components/Timelines/Timeline8";
import { Timeline9 } from "@/components/Timelines/Timeline9";
import { Timeline10 } from "@/components/Timelines/Timeline10";
import { Timeline12 } from "@/components/Timelines/Timeline12";
import { Timeline20 } from "@/components/Timelines/Timeline20";

const timelineComponents = [
  { component: Timeline4, title: "Timeline 4" },
  { component: Timeline2, title: "Timeline 2" },
  { component: Timeline5, title: "Timeline 5" },
  { component: Timeline6, title: "Timeline 6" },
  { component: Timeline8, title: "Timeline 8" },
  { component: Timeline9, title: "Timeline 9" },
  { component: Timeline10, title: "Timeline 10" },
  { component: Timeline12, title: "Timeline 12" },
  { component: Timeline20, title: "Timeline 20" },

  // Add more timelines as necessary
];

const TimelinesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Timelines</h1>
      <section className="mb-4">
        {timelineComponents.map(
          ({ component: TimelineComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
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
