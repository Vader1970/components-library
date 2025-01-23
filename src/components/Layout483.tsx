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

export type Layout483Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout483 = (props: Layout483Props) => {
  const { tagline, heading, description, buttons, image1, image2, image3 } = {
    ...Layout483Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative mb-12 flex md:mb-18 lg:mb-20">
          <div className="absolute bottom-[10%] left-0 w-[35%]">
            <img
              src={image1.src}
              className="aspect-[3/2] size-full object-cover"
              alt={image1.alt}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[35%]">
            <img
              src={image2.src}
              className="aspect-square size-full object-cover"
              alt={image2.alt}
            />
          </div>
          <div className="mx-[15%] mb-[10%]">
            <img
              src={image3.src}
              className="aspect-[3/2] size-full object-cover"
              alt={image3.alt}
            />
          </div>
        </div>
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout483Defaults: Props = {
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
