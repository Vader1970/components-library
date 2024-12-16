"use client";

import { useState } from "react";
import clsx from "clsx";
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
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabContent = {
  image?: ImageProps;
  video?: VideoProps;
};

type Tab = {
  value: string;
  trigger: string;
  content: TabContent;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  tabs: Tab[];
};

export type Layout509Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout509 = (props: Layout509Props) => {
  const { tagline, heading, description, buttons, tabs } = {
    ...Layout509Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="lg:mt-[6.5rem]">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Tabs
              defaultValue={tabs[0].value}
              className="flex flex-col items-center"
            >
              <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    value={tab.value}
                    className="border-0 border-b border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                  >
                    {tab.trigger}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="aspect-square w-full">
                {tabs.map((tab, index) => (
                  <TabsContent
                    key={index}
                    value={tab.value}
                    className="data-[state=active]:animate-tabs"
                  >
                    {tab.content?.image && (
                      <img
                        src={tab.content.image.src}
                        alt={tab.content.image.alt}
                        className="size-full object-cover"
                      />
                    )}
                    {tab.content?.video && (
                      <Dialog
                        open={isDialogOpen}
                        onOpenChange={(open) => {
                          setIsDialogOpen(open);
                          setIsIframeLoaded(!open);
                        }}
                      >
                        <DialogTrigger asChild>
                          <button className="relative flex w-full items-center justify-center">
                            <img
                              src={tab.content.video.image.src}
                              alt={tab.content.video.image.alt}
                              className="size-full object-cover"
                            />
                            <span className="absolute inset-0 z-10 bg-black/50" />
                            <FaCirclePlay className="absolute z-20 size-16 text-white" />
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          {!isIframeLoaded && (
                            <CgSpinner className="mx-auto size-16 animate-spin text-white" />
                          )}
                          <iframe
                            className={clsx(
                              "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                              {
                                hidden: !isIframeLoaded,
                              }
                            )}
                            src={tab.content.video.url}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            onLoad={() => {
                              setIsIframeLoaded(true);
                            }}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout509Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  tabs: [
    {
      value: "tab-one",
      trigger: "Tab one",
      content: {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image 1",
        },
      },
    },
    {
      value: "tab-two",
      trigger: "Tab two",
      content: {
        video: {
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
            alt: "Relume placeholder image 2",
          },
          url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
        },
      },
    },
    {
      value: "tab-three",
      trigger: "Tab three",
      content: {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image 3",
        },
      },
    },
  ],
};
