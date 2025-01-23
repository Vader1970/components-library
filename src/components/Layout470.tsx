/* eslint-disable @next/next/no-img-element */
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image1: ImageProps;
  image2: ImageProps;
  image3: ImageProps;
};

export type Layout470Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout470 = (props: Layout470Props) => {
  const { tagline, heading, description, buttons, image1, image2, image3 } = {
    ...Layout470Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-x-16">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative flex">
            <div className="absolute bottom-[10%] left-0 w-1/2">
              <img
                src={image1.src}
                className="aspect-[3/2] size-full object-cover"
                alt={image1.alt}
              />
            </div>
            <div className="absolute right-0 top-[10%] w-2/5">
              <img
                src={image2.src}
                className="aspect-square size-full object-cover"
                alt={image2.alt}
              />
            </div>
            <div className="mx-[15%]">
              <img
                src={image3.src}
                className="aspect-[2/3] size-full object-cover"
                alt={image3.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout470Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
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
  image1: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png",
    alt: "Relume placeholder image 1",
  },
  image2: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png",
    alt: "Relume placeholder image 2",
  },
  image3: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image 3",
  },
};
