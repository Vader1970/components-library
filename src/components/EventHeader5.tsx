/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";

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

type Event = {
  url: string;
  image: ImageProps;
  video: string;
  category: string;
  date: Date;
  title: string;
  status: string | null;
  description: string;
  button: ButtonProps;
};

type FeaturedEvent = Omit<
  Event,
  "image" | "video" | "category" | "date" | "button"
> & {
  duration: string;
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
  event: Event;
  tabs: Tab[];
};

export type EventHeader5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const EventHeader5 = (props: EventHeader5Props) => {
  const { tagline, heading, description, event, tabs } = {
    ...EventHeader5Defaults,
    ...props,
  };
  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="mb-16 grid auto-cols-fr auto-rows-auto grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full items-center justify-center">
                <img
                  src={event.image.src}
                  alt={event.image.alt}
                  className="aspect-[3/2] size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <p className="absolute left-4 top-4 z-20 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {event.category}
                </p>
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </button>
            </DialogTrigger>
            <DialogContent>
              {!isIframeLoaded && (
                <CgSpinner className="mx-auto size-16 animate-spin text-white" />
              )}
              <iframe
                className={clsx(
                  "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
                  {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  }
                )}
                src={event.video}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col items-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="mb-4 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <BiCalendarAlt className="size-6 flex-none" />
                  {event.date.weekday} {event.date.day} {event.date.month}{" "}
                  {event.date.year}
                </div>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <a href={event.url}>
                  <h2 className="text-xl font-bold md:text-2xl">
                    {event.title}
                  </h2>
                </a>
                {event?.status && (
                  <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {event.status}
                  </p>
                )}
              </div>
              <p>{event.description}</p>
              <Button
                {...event.button}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                {event.button.title}
              </Button>
            </div>
          </div>
        </div>
        <Tabs
          defaultValue={tabs[0].value}
          className="flex flex-col justify-start"
        >
          <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
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
              {tab.content.map((event, index) => (
                <FeaturedEvent key={index} {...event} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const FeaturedEvent: React.FC<FeaturedEvent> = ({
  duration,
  status,
  url,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-border-primary py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <MdAccessTime className="size-6 flex-none" />
            <span>{duration} minutes</span>
          </div>
          {status && (
            <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">
              {status}
            </p>
          )}
        </div>
        <a href={url} className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        </a>
        <p className="line-clamp-3">{description}</p>
      </div>
      <Button variant="link" size="link" className="flex">
        <FaCirclePlay className="block text-8xl" />
      </Button>
    </div>
  );
};

export const EventHeader5Defaults: Props = {
  tagline: "Tagline",
  heading: "Webinars",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  event: {
    url: "#",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
      alt: "Relume placeholder image",
    },
    video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
    category: "Category",
    date: {
      weekday: "Sat",
      day: "10",
      month: "Feb",
      year: "2024",
    },
    title: "Webinar title heading",
    status: null,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    button: {
      variant: "secondary",
      size: "primary",
      title: "Register now",
    },
  },
  tabs: [
    {
      value: "view-all",
      trigger: "View all",
      content: [
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: "Coming soon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: "Coming soon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: "Coming soon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: "Coming soon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          url: "#",
          title: "Webinar title heading",
          duration: "45",
          status: "Coming soon",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    },
  ],
};
