/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Section = {
  title: string;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  logos: ImageProps[];
  buttons: ButtonProps[];
  image: ImageProps;
  sections: Section[];
};

export type Layout13Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout600 = (props: Layout13Props) => {
  const { tagline, heading, description, buttons, image, sections } = {
    ...Layout13Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">{description}</p>
            {/* Banner Section */}
            <div className="py-4">
              <section
                id="relume"
                className="flex w-screen max-w-full justify-end overflow-hidden"
              >
                <div className="flex justify-end">
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="grid animate-marquee-right auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-4"
                      >
                        {sections.map((section, index) => (
                          <React.Fragment key={index}>
                            <div className="flex items-center justify-center whitespace-nowrap px-8 text-center lg:text-left">
                              <h1 className="text-2xl font-bold md:text-2xl lg:text-2xl">
                                {section.title}
                              </h1>
                            </div>
                            <div className="relative aspect-[3/2] w-full overflow-hidden object-cover">
                              <img
                                src={section.image.src}
                                alt={section.image.alt}
                                className="aspect-[3/2] size-full h-10 max-h-24 object-cover"
                              />
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                </div>
              </section>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout13Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
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
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  sections: [
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "Relume Library",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "Relume Library",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "Relume Library",
      },
    },
    {
      title: "Lorem Ipsum Dolor",
      image: {
        src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "Relume Library",
      },
    },
  ],
};
