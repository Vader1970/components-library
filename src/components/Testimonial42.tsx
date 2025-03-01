/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";
import { BiSolidStar } from "react-icons/bi";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial42Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial42 = (props: Testimonial42Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial42Defaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="w-full max-w-md lg:mb-24">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="overflow-hidden"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-12 flex items-center justify-between">
              <div className="mt-5 flex w-full items-start justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={clsx(
                      "mx-[3px] inline-block size-2 rounded-full",
                      {
                        "bg-black": current === index + 1,
                        "bg-neutral-light": current !== index + 1,
                      }
                    )}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
                <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
      <div className="mb-5 flex md:mb-6">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="size-6" />
          ))}
      </div>
      <blockquote className="md:text-md">{testimonial.quote}</blockquote>
      <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
        <div>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="size-12 min-h-12 min-w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p>
            <span>{testimonial.position}</span>,{" "}
            <span>{testimonial.companyName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonial = {
  numberOfStars: 5,
  quote:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Testimonial avatar 1",
  },
  name: "Name Surname",
  position: "Position",
  companyName: "Company name",
};

export const Testimonial42Defaults: Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    testimonial,
    testimonial,
    testimonial,
    testimonial,
    testimonial,
    testimonial,
    testimonial,
  ],
};
