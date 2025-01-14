"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number; // Add optional width
  height?: number; // Add optional height
};

type Props = {
  heading: string;
  description: string;
  buttons: (ButtonProps & { href?: string })[];
  video: string;
  image: ImageProps;
};

export type Header3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header3 = (props: Header3Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { heading, description, buttons, video, image } = {
    ...Header3Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) =>
                button.href ? (
                  <Link key={index} href={button.href} passHref>
                    <Button {...button}>{button.title}</Button>
                  </Link>
                ) : (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                )
              )}
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt || "Image"} // Fallback alt text
                  width={image.width || 600} // Default width if not provided
                  height={image.height || 600} // Default height if not provided
                  className="w-full object-cover"
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

export const Header3Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", href: "/about" },
    { title: "Button", variant: "secondary", href: "/contact" },
  ],
  video:
    "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "placeholder image",
    width: 600, // Example width
    height: 600, // Example height
  },
};
