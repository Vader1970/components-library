/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  logos: ImageProps[];
  video: string;
};

export type Layout205Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout205 = (props: Layout205Props) => {
  const { tagline, heading, description, buttons, image, logos, video } = {
    ...Layout205Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
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
                    "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
                    {
                      visible: isIframeLoaded,
                      hidden: !isIframeLoaded,
                    }
                  )}
                  src={video}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsIframeLoaded(true)}
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">{description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2 ">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12"
                />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout205Defaults: Props = {
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
  video:
    "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
    alt: "Relume placeholder image",
  },
  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 2",
    },
  ],
};
