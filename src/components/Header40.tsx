"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  video: string;
};

export type Header40Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header40 = (props: Header40Props) => {
  const { heading, description, buttons, image, video } = {
    ...Header40Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 overflow-x-auto pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full object-cover lg:h-screen lg:max-h-[60rem]">
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex size-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt || "Image"}
                  className="size-full object-cover"
                  width={1280}
                  height={960}
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
      </div>
    </section>
  );
};

export const Header40Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  video:
    "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
    alt: "placeholder image",
  },
};
