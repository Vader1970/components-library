import { Event1 } from "@/components/Events/Event1";
import { Event2 } from "@/components/Events/Event2";
import { Event4 } from "@/components/Events/Event4";
import { Event8 } from "@/components/Events/Event8";
import { Event10 } from "@/components/Events/Event10";
import { Event16 } from "@/components/Events/Event16";
import { Event20 } from "@/components/Events/Event20";
import { Event26 } from "@/components/Events/Event26";
import { Event28 } from "@/components/Events/Event28";
import { Event30 } from "@/components/Events/Event30";
import { Event31 } from "@/components/Events/Event31";
import { Event32 } from "@/components/Events/Event32";
import { Event33 } from "@/components/Events/Event33";
import { Event34 } from "@/components/Events/Event34";
import { Event36 } from "@/components/Events/Event36";
import { EventHeader2 } from "@/components/Events/EventHeader2";
import { EventHeader3 } from "@/components/Events/EventHeader3";
import { EventHeader4 } from "@/components/Events/EventHeader4";
import { EventItemHeader1 } from "@/components/Events/EventItemHeader1";
import { EventItemHeader3 } from "@/components/Events/EventItemHeader3";
import { EventItemHeader5 } from "@/components/Events/EventItemHeader5";
import { Event3 } from "@/components/Events/Event3";
import { Event5 } from "@/components/Events/Event5";
import { Event6 } from "@/components/Events/Event6";
import { Event7 } from "@/components/Events/Event7";
import { Event9 } from "@/components/Events/Event9";
import { Event11 } from "@/components/Events/Event11";
import { Event12 } from "@/components/Events/Event12";
import { Event13 } from "@/components/Events/Event13";
import { Event14 } from "@/components/Events/Event14";
import { Event15 } from "@/components/Events/Event15";
import { Event17 } from "@/components/Events/Event17";
import { Event18 } from "@/components/Events/Event18";
import { Event19 } from "@/components/Events/Event19";
import { Event21 } from "@/components/Events/Event21";
import { Event22 } from "@/components/Events/Event22";
import { Event23 } from "@/components/Events/Event23";
import { Event24 } from "@/components/Events/Event24";
import { Event25 } from "@/components/Events/Event25";
import { Event27 } from "@/components/Events/Event27";
import { Event29 } from "@/components/Events/Event29";
import { Event35 } from "@/components/Events/Events35";
import { Event37 } from "@/components/Events/Event37";
import { EventHeader1 } from "@/components/Events/EventHeader1";
import { EventHeader5 } from "@/components/Events/EventHeader5";
import { EventHeader6 } from "@/components/Events/EventHeader6";
import { EventItemHeader4 } from "@/components/Events/EventItemHeader4";
import { EventItemHeader2 } from "@/components/Events/EventItemHeader2";
import { EventItemHeader6 } from "@/components/Events/EventItemHeader6";
import { EventItemHeader7 } from "@/components/Events/EventItemHeader7";
import { EventItemHeader8 } from "@/components/Events/EventItemHeader8";
import { EventItemHeader9 } from "@/components/Events/EventItemHeader9";
import { EventItemHeader10 } from "@/components/Events/EventItemHeader10";

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
      <h1 className='text-8xl text-center font-bold mb-4'>Events</h1>
      <section className='mb-4'>
        {eventComponents.map(({ component: EventComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='text-4xl font-bold text-center mt-20 mb-5'>{title}</h2>
            {/* Render the component */}
            <EventComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;
