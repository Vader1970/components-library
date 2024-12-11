import { Event1 } from "@/components/Events/Event1";
// import { Event2 } from "@/components/Events/Event2";
import { Event4 } from "@/components/Events/Event4";
import { Event8 } from "@/components/Events/Event8";
import { Event10 } from "@/components/Events/Event10";
import { Event16 } from "@/components/Events/Event16";
import { Event20 } from "@/components/Events/Event20";
import { Event26 } from "@/components/Events/Event26";
import { Event28 } from "@/components/Events/Event28";
import { Event30 } from "@/components/Events/Event.30";
import { Event31 } from "@/components/Events/Event31";
import { Event32 } from "@/components/Events/Event32";
import { Event33 } from "@/components/Events/Event.33";
import { Event34 } from "@/components/Events/Event34";
import { Event36 } from "@/components/Events/Event36";
import { EventHeader2 } from "@/components/Events/EventHeader2";
import { EventHeader3 } from "@/components/Events/EventHeader3";
import { EventHeader4 } from "@/components/Events/EventHeader4";
import { EventItemHeader1 } from "@/components/Events/EventItemHeader1";
import { EventItemHeader3 } from "@/components/Events/EventItemHeader3";
import { EventItemHeader5 } from "@/components/Events/EventItemHeader5";

const eventComponents = [
  { component: Event1, title: "Event 1" },
  //   { component: Event2, title: "Event 2" },
  { component: Event4, title: "Event 4" },
  { component: Event8, title: "Event 8" },
  { component: Event10, title: "Event 10" },
  { component: Event16, title: "Event 16" },
  { component: Event20, title: "Event 20" },
  { component: Event26, title: "Event 26" },
  { component: Event28, title: "Event 28" },
  { component: Event30, title: "Event 30" },
  { component: Event31, title: "Event 31" },
  { component: Event32, title: "Event 32" },
  { component: Event33, title: "Event 33" },
  { component: Event34, title: "Event 34" },
  { component: Event36, title: "Event 36" },
  { component: EventHeader2, title: "Event Header 2" },
  { component: EventHeader3, title: "Event Header 3" },
  { component: EventHeader4, title: "Event Header 4" },
  { component: EventItemHeader1, title: "Event Item Header 1" },
  { component: EventItemHeader3, title: "Event Item Header 3" },
  { component: EventItemHeader5, title: "Event Item Header 5" },

  // Add more eventss as necessary
];

const EventsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <section className="mb-4">
        {eventComponents.map(({ component: EventComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <EventComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;
