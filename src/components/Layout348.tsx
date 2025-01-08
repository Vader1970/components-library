"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  contents: ContentProps[];
};

export type Layout348Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout348 = (props: Layout348Props) => {
  const { contents } = {
    ...Layout348Defaults,
    ...props,
  };

  const [activeSection, setActiveSection] = useState(0);

  // Intersection observer logic
  const handleIntersection = useCallback((index: number) => {
    setActiveSection(index);
  }, []);

  return (
    <section className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='relative grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-20'>
          {/* Sticky Images */}
          <div className='sticky top-0 hidden h-screen flex-col items-center justify-center md:flex'>
            {contents.map((content, index) => (
              <img
                key={index}
                src={content.image.src}
                alt={content.image.alt}
                className={clsx("absolute w-full transition-opacity duration-500", {
                  "opacity-100 z-10": activeSection === index,
                  "opacity-0 z-0": activeSection !== index,
                })}
              />
            ))}
          </div>

          {/* Scrollable Content */}
          <div className='grid grid-cols-1 gap-12'>
            {contents.map((content, index) => (
              <ObservedSection key={index} index={index} onIntersect={handleIntersection}>
                <ContentSection content={content} />
              </ObservedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ObservedSection = ({
  index,
  onIntersect,
  children,
}: {
  index: number;
  onIntersect: (index: number) => void;
  children: React.ReactNode;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(index);
        }
      },
      { threshold: 0.3 } // Adjust threshold for better visibility detection
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [index, onIntersect]);

  return <div ref={sectionRef}>{children}</div>;
};

const ContentSection = ({ content }: { content: ContentProps }) => (
  <div className='flex flex-col items-start justify-center md:h-screen'>
    <p className='mb-3 font-semibold md:mb-4'>{content.tagline}</p>
    <h2 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>{content.heading}</h2>
    <p className='md:text-md'>{content.description}</p>
    <div className='mt-6 flex flex-wrap items-center gap-4 md:mt-8'>
      {content.buttons.map((button, index) => (
        <Button key={index} {...button}>
          {button.title}
        </Button>
      ))}
    </div>
    <div className='mt-10 block w-full md:hidden'>
      <img src={content.image.src} alt={content.image.alt} className='w-full' />
    </div>
  </div>
);

export const Layout348Defaults: Props = {
  contents: [
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: { src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg", alt: "Image 1" },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: { src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg", alt: "Image 2" },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat..",
      buttons: [
        { title: "Button", variant: "secondary" },
        { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: { src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg", alt: "Image 3" },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: { src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg", alt: "Image 4" },
    },
  ],
};
