"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionStyle,
  MotionValue,
} from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
};

export type Layout484Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

// New component to handle individual word opacity with hooks
const WordOpacity = ({
  word,
  index,
  scrollYProgress,
}: {
  word: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index * 0.025;
  const end = start + 0.025;
  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);

  return (
    <motion.span className="inline-block" style={{ opacity } as MotionStyle}>
      {word}
    </motion.span>
  );
};

export const Layout484 = (props: Layout484Props) => {
  const { tagline, heading, buttons } = {
    ...Layout484Defaults,
    ...props,
  };

  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = heading.split(" ");

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1
          ref={headingRef}
          className="text-5xl font-bold md:text-7xl lg:text-8xl"
        >
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <WordOpacity
                word={word}
                index={index}
                scrollYProgress={scrollYProgress}
              />
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout484Defaults: Props = {
  tagline: "Tagline",
  heading:
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
};
