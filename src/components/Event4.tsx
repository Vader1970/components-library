import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Date = {
  weekday: string;
  day: string;
  month: string;
  year: string;
};

type FeaturedEvent = {
  url: string;
  image: ImageProps;
  date: Date;
  title: string;
  status: string | null;
  location: string;
  description: string;
  button: ButtonProps;
};

type Tab = {
  value: string;
  trigger: string;
  content: FeaturedEvent[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
};

export type Event4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Event4 = (props: Event4Props) => {
  const { tagline, heading, description, tabs } = {
    ...Event4Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h4 className="font-semibold">{tagline}</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">{description}</p>
          </div>
          <Tabs
            defaultValue={tabs[0].value}
            className="flex flex-col justify-start"
          >
            <TabsList className="no-scrollbar mb-12 flex w-full items-center overflow-auto md:justify-center md:overflow-hidden">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  {tab.trigger}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {tab.content.map((event, index) => (
                    <FeaturedEvent key={index} {...event} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const FeaturedEvent: React.FC<FeaturedEvent> = ({
  date,
  url,
  image,
  title,
  location,
  status,
  description,
  button,
}) => {
  return (
    <div className="flex flex-col border border-border-primary md:flex-row">
      <div className="relative aspect-[3/2] w-full shrink-0 md:aspect-auto md:w-48 lg:aspect-square">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute size-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-8 p-6 sm:p-8 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-0 sm:gap-4">
            <a href={url}>
              <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
            </a>
            {status && (
              <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                {status}
              </p>
            )}
          </div>
          <div className="mb-3 flex items-center text-sm md:mb-4">
            <span>
              {date.weekday} {date.day} {date.month} {date.year}
            </span>
            <span className="mx-2 text-base">&bull;</span>
            <span>{location}</span>
          </div>
          <p>{description}</p>
        </div>
        <Button
          {...button}
          className="flex items-center justify-center gap-x-2"
        >
          {button.title}
        </Button>
      </div>
    </div>
  );
};

export const Event4Defaults: Props = {
  tagline: "Tagline",
  heading: "Events",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  tabs: [
    {
      value: "view-all",
      trigger: "View all",
      content: [
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Fri",
            day: "09",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: "Sold out",
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sat",
            day: "10",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sun",
            day: "11",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
      ],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Fri",
            day: "09",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: "Sold out",
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sat",
            day: "10",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
      ],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Fri",
            day: "09",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: "Sold out",
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sat",
            day: "10",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
      ],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Fri",
            day: "09",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: "Sold out",
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sat",
            day: "10",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
      ],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Fri",
            day: "09",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: "Sold out",
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
        {
          url: "#",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
          date: {
            weekday: "Sat",
            day: "10",
            month: "Feb",
            year: "2024",
          },
          title: "Event title heading",
          status: null,
          location: "Location",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          button: {
            variant: "secondary",
            size: "sm",
            title: "Save my spot",
          },
        },
      ],
    },
  ],
};
