"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  tagline: string;
  headings: string[];
};

export type Layout424Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout424 = (props: Layout424Props) => {
  const { tagline, headings } = {
    ...Layout424Defaults,
    ...props,
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "end start"],
  });

  const headingOneTransform = {
    opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
    y: useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]),
  };
  const headingTwoTransform = {
    opacity: useTransform(
      scrollYProgress,
      [0.25, 0.35, 0.35, 0.5],
      [0, 1, 1, 0]
    ),
    y: useTransform(
      scrollYProgress,
      [0.25, 0.35, 0.35, 0.5],
      ["0%", "-100%", "-100%", "-200%"]
    ),
  };
  const headingThreeTransform = {
    opacity: useTransform(scrollYProgress, [0.5, 0.6, 0.6, 0.75], [0, 1, 1, 0]),
    y: useTransform(
      scrollYProgress,
      [0.5, 0.6, 0.6, 0.75],
      ["-100%", "-200%", "-200%", "-300%"]
    ),
  };
  const headingFourTransform = {
    opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
    y: useTransform(scrollYProgress, [0.75, 0.85], ["-200%", "-300%"]),
  };

  return (
    <section ref={ref} className="min-h-screen">
      <div className="container">
        <div className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <div className="text-center">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <div className="h-[6rem] overflow-hidden sm:h-[7rem] md:h-[11rem]">
                {headings.map((heading, index) => (
                  <motion.h2
                    key={index}
                    className="whitespace-nowrap text-7xl font-bold leading-[1.2] md:text-[6rem]"
                    style={
                      [
                        headingOneTransform,
                        headingTwoTransform,
                        headingThreeTransform,
                        headingFourTransform,
                      ][index]
                    }
                  >
                    {heading}
                  </motion.h2>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 mt-[100vh]" />
        </div>
      </div>
    </section>
  );
};

export const Layout424Defaults: Props = {
  tagline: "Tagline",
  headings: ["Heading one", "Heading two", "Heading three", "Heading four"],
};
