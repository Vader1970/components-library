/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  percentage?: string;
  heading?: string;
  description?: string;
  image?: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  cards: CardProps[];
};

export type Stats42Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Stats42 = (props: Stats42Props) => {
  const { heading, description, cards } = {
    ...Stats42Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl  lg:text-6xl ">
              {heading}
            </h3>
          </div>

          <div>
            <p className=" md:text-md">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ isFirst, ...card }: CardProps & { isFirst?: boolean }) => {
  return (
    <React.Fragment>
      {card.image ? (
        <div>
          <img
            className="aspect-[3/2] size-full object-cover"
            src={card.image.src}
            alt={card.image.alt}
          />
        </div>
      ) : (
        <div className="first:group first:is-first border border-border-primary p-8 first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
          <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
            {card.heading}
          </h3>
          <p
            className={clsx(
              "text-right text-10xl font-bold leading-[1.3]  md:text-[4rem] lg:text-[5rem]",
              {
                "mt-auto": isFirst,
              }
            )}
          >
            {card.percentage}
          </p>
          <div className="my-4 h-px w-full bg-border-primary" />
          <p className="text-right">{card.description}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export const Stats42Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  cards: [
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
    },
  ],
};
