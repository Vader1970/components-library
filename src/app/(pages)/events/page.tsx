import { Event1 } from "@/components/Event1";
import { Event2 } from "@/components/Event2";
import { Event4 } from "@/components/Event4";
import { Event8 } from "@/components/Event8";
import { Event10 } from "@/components/Event10";
import { Event16 } from "@/components/Event16";
import { Event20 } from "@/components/Event20";
import { Event26 } from "@/components/Event26";
import { Event28 } from "@/components/Event28";
import { Event30 } from "@/components/Event30";
import { Event31 } from "@/components/Event31";
import { Event32 } from "@/components/Event32";
import { Event33 } from "@/components/Event33";
import { Event34 } from "@/components/Event34";
import { Event36 } from "@/components/Event36";
import { EventHeader2 } from "@/components/EventHeader2";
import { EventHeader3 } from "@/components/EventHeader3";
import { EventHeader4 } from "@/components/EventHeader4";
import { EventItemHeader1 } from "@/components/EventItemHeader1";
import { EventItemHeader3 } from "@/components/EventItemHeader3";
import { EventItemHeader5 } from "@/components/EventItemHeader5";
import { Event3 } from "@/components/Event3";
import { Event5 } from "@/components/Event5";
import { Event6 } from "@/components/Event6";
import { Event7 } from "@/components/Event7";
import { Event9 } from "@/components/Event9";
import { Event11 } from "@/components/Event11";
import { Event12 } from "@/components/Event12";
import { Event13 } from "@/components/Event13";
import { Event14 } from "@/components/Event14";
import { Event15 } from "@/components/Event15";
import { Event17 } from "@/components/Event17";
import { Event18 } from "@/components/Event18";
import { Event19 } from "@/components/Event19";
import { Event21 } from "@/components/Event21";
import { Event22 } from "@/components/Event22";
import { Event23 } from "@/components/Event23";
import { Event24 } from "@/components/Event24";
import { Event25 } from "@/components/Event25";
import { Event27 } from "@/components/Event27";
import { Event29 } from "@/components/Event29";
import { Event35 } from "@/components/Event35";
import { Event37 } from "@/components/Event37";
import { EventHeader1 } from "@/components/EventHeader1";
import { EventHeader5 } from "@/components/EventHeader5";
import { EventHeader6 } from "@/components/EventHeader6";
import { EventItemHeader4 } from "@/components/EventItemHeader4";
import { EventItemHeader2 } from "@/components/EventItemHeader2";
import { EventItemHeader6 } from "@/components/EventItemHeader6";
import { EventItemHeader7 } from "@/components/EventItemHeader7";
import { EventItemHeader8 } from "@/components/EventItemHeader8";
import { EventItemHeader9 } from "@/components/EventItemHeader9";
import { EventItemHeader10 } from "@/components/EventItemHeader10";

const eventComponents = [
  { component: Event1, title: "Event 1" },
  { component: Event2, title: "Event 2" },
  { component: Event3, title: "Event 3" },
  { component: Event4, title: "Event 4" },
  { component: Event5, title: "Event 5" },
  { component: Event6, title: "Event 6" },
  { component: Event7, title: "Event 7" },
  { component: Event8, title: "Event 8" },
  { component: Event9, title: "Event 9" },
  { component: Event10, title: "Event 10" },
  { component: Event11, title: "Event 11" },
  { component: Event12, title: "Event 12" },
  { component: Event13, title: "Event 13" },
  { component: Event14, title: "Event 14" },
  { component: Event15, title: "Event 15" },
  { component: Event16, title: "Event 16" },
  { component: Event17, title: "Event 17" },
  { component: Event18, title: "Event 18" },
  { component: Event19, title: "Event 19" },
  { component: Event20, title: "Event 20" },
  { component: Event21, title: "Event 21" },
  { component: Event22, title: "Event 22" },
  { component: Event23, title: "Event 23" },
  { component: Event24, title: "Event 24" },
  { component: Event25, title: "Event 25" },
  { component: Event26, title: "Event 26" },
  { component: Event27, title: "Event 27" },
  { component: Event28, title: "Event 28" },
  { component: Event29, title: "Event 29" },
  { component: Event30, title: "Event 30" },
  { component: Event31, title: "Event 31" },
  { component: Event32, title: "Event 32" },
  { component: Event33, title: "Event 33" },
  { component: Event34, title: "Event 34" },
  { component: Event35, title: "Event 35" },
  { component: Event36, title: "Event 36" },
  { component: Event37, title: "Event 37" },
  { component: EventHeader1, title: "Event Header 1" },
  { component: EventHeader2, title: "Event Header 2" },
  { component: EventHeader3, title: "Event Header 3" },
  { component: EventHeader4, title: "Event Header 4" },
  { component: EventHeader5, title: "Event Header 5" },
  { component: EventHeader6, title: "Event Header 6" },
  { component: EventItemHeader1, title: "Event Item Header 1" },
  { component: EventItemHeader2, title: "Event Item Header 2" },
  { component: EventItemHeader3, title: "Event Item Header 3" },
  { component: EventItemHeader4, title: "Event Item Header 4" },
  { component: EventItemHeader5, title: "Event Item Header 5" },
  { component: EventItemHeader6, title: "Event Item Header 6" },
  { component: EventItemHeader7, title: "Event Item Header 7" },
  { component: EventItemHeader8, title: "Event Item Header 8" },
  { component: EventItemHeader9, title: "Event Item Header 9" },
  { component: EventItemHeader10, title: "Event Item Header 10" },

  // Add more eventss as necessary
];

const EventsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Events
      </h1>
      <section className="mb-4">
        {eventComponents.map(({ component: EventComponent, title }, index) => (
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
            <EventComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;
