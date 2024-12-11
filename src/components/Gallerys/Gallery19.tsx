"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery19Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Gallery19 = (props: Gallery19Props) => {
  const { heading, description, images } = {
    ...Gallery19Defaults,
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
    <section>
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          {/* for all available options: https://www.embla-carousel.com/api/options/ */}
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 px-3 md:basis-1/4 md:px-4"
                  >
                    <div className="w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-square size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx(
                    "relative mx-[3px] inline-block size-2 rounded-full",
                    {
                      "bg-black": current === index + 1,
                      "bg-neutral-darker/40": current !== index + 1,
                    }
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const Gallery19Defaults: Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 7",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 8",
    },
  ],
};
