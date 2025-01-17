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

export type Header107Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header107 = (props: Header107Props) => {
  const { title, description, buttons, images } = {
    ...Header107Defaults,
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
  const containerHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["60vh", "100vh"] : ["70vh", "100vh"]
  );

  const leftImageGroupX = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-50vw"]
  );

  const centerImageX = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-50vw"]
  );

  const centerImageWidth = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["50vw", "100vw"] : ["30vw", "100vw"]
  );

  const centerImageHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["50vh", "100vh"] : ["70vh", "100vh"]
  );

  const rightImageX = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? ["0vw", "25vw"] : ["0vw", "20vw"]
  );

  return (
    <section ref={sectionRef} id="relume" className="relative h-[250vh]">
      {/* Content */}
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
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

      {/* Sticky Images */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div
          className="z-10 grid w-full grid-flow-col grid-cols-[25%_50%_25%] justify-center md:grid-cols-[50%_30%_20%]"
          style={{ height: containerHeight }}
        >
          {/* Left Image Group */}
          <motion.div
            className="grid grid-flow-col grid-cols-1 justify-items-end gap-4 justify-self-end px-4"
            style={{ x: leftImageGroupX }}
          >
            <div className="relative top-[5%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                {...images[0]}
              />
            </div>
            <div className="relative top-[-5%] flex flex-col gap-4 self-center">
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img
                  className="aspect-square w-full object-cover"
                  {...images[1]}
                />
              </div>
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img
                  className="aspect-[3/4] w-full object-cover"
                  {...images[2]}
                />
              </div>
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
            <img className="size-full object-cover" {...images[4]} />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="grid grid-flow-col grid-cols-1 gap-4 justify-self-start px-4"
            style={{ x: rightImageX }}
          >
            <div className="relative top-[5%] w-[40vw] md:w-[25vw] lg:w-[22vw]">
              <img
                className="aspect-[3/4] w-full object-cover"
                {...images[5]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const Header107Defaults: Props = {
  title: "Long heading is what you see here in this header section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [
    {
      title: "Button",
    },
    {
      title: "Button",
      variant: "secondary",
    },
  ],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder image 6",
    },
  ],
};
