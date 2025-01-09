"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Heading = {
  title: string;
  image: ImageProps;
};

type Props = {
  headingsTop: Heading[];
  headingsBottom: Heading[];
};

export type Banner16Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Banner16 = (props: Banner16Props) => {
  const { headingsTop, headingsBottom } = {
    ...Banner16Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 991px)");

  const headingTopTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["5%", "0%"] : ["25%", "0%"]
  );
  const headingBottomTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-5%", "0%"] : ["-25%", "0%"]
  );

  const renderHeadings = (
    headings: Heading[],
    translate: MotionValue<string>
  ) => (
    <motion.div
      className="grid auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-2"
      style={{ x: translate }}
    >
      {headings.map((heading, index) => (
        <Heading key={index} title={heading.title} image={heading.image} />
      ))}
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className="flex w-screen max-w-full flex-col justify-end overflow-hidden"
    >
      <div className="flex justify-end">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsTop, headingTopTranslate)}
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-start">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsBottom, headingBottomTranslate)}
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

const Heading = ({ title, image }: Heading) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center whitespace-nowrap px-4 text-center lg:text-left">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square size-full max-h-16 object-cover"
        />
      </div>
    </React.Fragment>
  );
};

export const Banner16Defaults: Props = {
  headingsTop: [
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 1",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 2",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 3",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 4",
      },
    },
  ],

  headingsBottom: [
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 5",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 6",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 7",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "Library 8",
      },
    },
  ],
};
