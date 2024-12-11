import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number; // Optional: For Next.js Image
  height?: number; // Optional: For Next.js Image
  href?: string; // Optional: Link for each image
};

type Props = {
  heading: string;
  description: string;
  buttons: (ButtonProps & { href?: string })[]; // Add `href` for button navigation
  images: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header76 = (props: Header76Props) => {
  const { heading, description, buttons, images } = {
    ...Header76Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      {/* Heading, Description, and Buttons */}
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((button, index) =>
            button.href ? (
              // Wrap button in a Next.js Link for navigation
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

      {/* Images Grid */}
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          {/* First Image Column */}
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  {image.href ? (
                    // Wrap image in a Next.js Link if `href` is provided
                    <Link href={image.href} passHref>
                      <Image
                        src={image.src}
                        alt={image.alt || `Image ${index + 1}`}
                        fill
                        className="absolute inset-0 size-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt || `Image ${index + 1}`}
                      fill
                      className="absolute inset-0 size-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Image Column */}
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  {image.href ? (
                    <Link href={image.href} passHref>
                      <Image
                        src={image.src}
                        alt={image.alt || `Image ${index + 1}`}
                        fill
                        className="absolute inset-0 size-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt || `Image ${index + 1}`}
                      fill
                      className="absolute inset-0 size-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header76Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Learn More", href: "/learn-more" },
    { title: "Contact Us", variant: "secondary", href: "/contact" },
  ],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
      href: "/image1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
      href: "/image2",
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
  ],
};
