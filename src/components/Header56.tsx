import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header56Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header56 = (props: Header56Props) => {
  const { heading, description, buttons, tagline, image } = {
    ...Header56Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              {tagline}
            </p>
            <h1 className="text-6xl font-bold text-text-alternative md:text-9xl lg:text-10xl">
              {heading}
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt || "Background Image"}
          fill
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header56Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
