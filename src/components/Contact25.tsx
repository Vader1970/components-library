/* eslint-disable @next/next/no-img-element */
import { Button, ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Location = {
  map: Map;
  title: string;
  address: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  locations: Location[];
};

export type Contact25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact25 = (props: Contact25Props) => {
  const { tagline, heading, description, locations } = {
    ...Contact25Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start text-center"
            >
              <div className="mb-6 w-full md:mb-8">
                <a href={location.map.url} className="justify-self-end">
                  <img
                    src={location.map.image.src}
                    alt={location.map.image.alt}
                    className="h-[320px] w-full object-cover md:h-[384px] "
                  />
                </a>
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {location.title}
              </h3>
              <p className="text-center">{location.address}</p>
              <div className="mt-5 md:mt-6">
                <Button {...location.button}>{location.button.title}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact25Defaults: Props = {
  tagline: "Tagline",
  heading: "Locations",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  locations: [
    {
      map: {
        url: "#",
        image: {
          src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg",
          alt: "Relume placeholder map image",
        },
      },
      title: "Christchurch",
      address: "123 Sample St, Christchurch NZ",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      map: {
        url: "#",
        image: {
          src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg",
          alt: "Relume placeholder map image",
        },
      },
      title: "Rangiora",
      address: "123 Sample St, Rangiora NZ",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
