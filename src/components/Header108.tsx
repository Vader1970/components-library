/* eslint-disable @next/next/no-img-element */

"use client";

import { useRef } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type Header108Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header108 = (props: Header108Props) => {
  const { title, description, buttons, images } = {
    ...Header108Defaults,
    ...props,
  };

  // Ref for the section to localize scroll tracking
  const sectionRef = useRef<HTMLElement>(null);

  // Media query for mobile screens
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transforms for animations (adjusted for mobile and desktop)
  const leftImageGroupX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-32vw"]
  );

  const centerImageX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-32vw"]
  );

  const centerImageWidth = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["50vw", "100vw"] : ["36vw", "100vw"]
  );

  const centerImageHeight = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["60vh", "100vh"] : ["80vh", "100vh"]
  );

  const rightImageGroupX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vw", "25vw"] : ["0vw", "32vw"]
  );

  return (
    <section ref={sectionRef} id="relume" className="relative h-[250vh]">
      {/* Content */}
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Images */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%] content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          {/* Left Image Group */}
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={{ x: leftImageGroupX }}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                src={images[0]?.src}
                alt={images[0]?.alt || ""}
              />
            </div>
            <div className="relative w-[40vw] grid grid-cols-1 gap-4 self-center md:w-[18vw]">
              <img
                className="aspect-square w-full object-cover"
                src={images[1]?.src}
                alt={images[1]?.alt || ""}
              />
              <img
                className="aspect-[3/4] w-full object-cover"
                src={images[2]?.src}
                alt={images[2]?.alt || ""}
              />
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="relative"
            style={{
              x: centerImageX,
              width: centerImageWidth,
              height: centerImageHeight,
            }}
          >
            <img
              className="size-full object-cover"
              src={images[3]?.src}
              alt={images[3]?.alt || ""}
            />
          </motion.div>

          {/* Right Image Group */}
          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={{ x: rightImageGroupX }}
          >
            <div className="relative w-[40vw] grid grid-cols-1 gap-4 self-center md:w-[18vw]">
              <img
                className="aspect-[3/4] w-full object-cover"
                src={images[4]?.src}
                alt={images[4]?.alt || ""}
              />
              <img
                className="aspect-square w-full object-cover"
                src={images[5]?.src}
                alt={images[5]?.alt || ""}
              />
            </div>
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                src={images[6]?.src}
                alt={images[6]?.alt || ""}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const Header108Defaults: Props = {
  title: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 6",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Image 7",
    },
  ],
};
