"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  image: ImageProps;
};

export type Header82Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header82 = (props: Header82Props) => {
  const { heading, description, buttons, video, image } = {
    ...Header82Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Ref for the section
  const sectionRef = useRef<HTMLElement>(null);

  // Localized scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Attach scroll tracking to this section
    offset: ["start start", "end start"], // Measure scroll progress when section enters viewport
  });

  // Smooth out scroll progress
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    bounce: 0,
  });

  // Animation transforms
  const fadeOut = useTransform(animatedScrollYProgress, [0, 0.5], [1, 0]);
  const scaleDown = useTransform(animatedScrollYProgress, [0, 0.5], [1, 0.95]);
  const width = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["90%", "100%"]
  );
  const height = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["80vh", "100vh"]
  );
  const y = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-10vh"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[300vh] flex-col items-center"
    >
      <div className="px-[5%]">
        {/* Animated Heading, Description, and Buttons */}
        <div className="sticky top-0 z-0 mx-auto flex min-h-[80vh] max-w-lg items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <motion.div
            style={{
              opacity: fadeOut,
              scale: scaleDown,
              transformOrigin: "center",
            }}
          >
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Video */}
      <motion.div
        style={{ width, height, y }}
        className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start"
      >
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative flex size-full items-center justify-center">
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
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const Header82Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
    alt: "Relume placeholder image",
  },
};
