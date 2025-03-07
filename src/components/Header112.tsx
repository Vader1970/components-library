import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header112Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header112 = (props: Header112Props) => {
  const { heading, description, buttons, image } = {
    ...Header112Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative">
      <div className="px-[5%]">
        <div className="container flex max-h-[60rem] min-h-svh">
          <div className="py-16 md:py-24 lg:py-28">
            <div className="grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
              <div className="mx-[7.5%] flex flex-col justify-end">
                <p className="text-text-alternative md:text-md">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="order-first flex flex-col md:order-last">
                <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                  {heading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/50">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative w-full h-full">
          <Image
            src={image.src}
            className="absolute inset-0 size-full object-cover"
            alt={image.alt || "Background Image"}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export const Header112Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
