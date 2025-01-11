import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number; // Add optional width
  height?: number; // Add optional height
};

type Props = {
  heading: string;
  description: string;
  buttons: (ButtonProps & { href?: string })[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header1 = (props: Header1Props) => {
  const { heading, description, buttons, image } = {
    ...Header1Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) =>
                button.href ? (
                  <Link key={index} href={button.href} passHref>
                    <Button {...button}>{button.title}</Button>
                  </Link>
                ) : (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                )
              )}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              alt={image.alt || "Image"} // Fallback alt text
              width={image.width || 800} // Default width if not provided
              height={image.height || 600} // Default height if not provided
              className="w-full object-cover"
              priority // Optional: Ensure above-the-fold images load faster
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", href: "/about" },
    { title: "Button", variant: "secondary", href: "/contact" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "placeholder image",
    width: 1200, // Example width
    height: 800, // Example height
  },
};