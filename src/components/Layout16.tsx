import Image from "next/image";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
  href?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
  href?: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: (ButtonProps & { href?: string })[];
  image: ImageProps;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout16 = (props: Layout16Props) => {
  const { tagline, heading, description, features, buttons, image } = {
    ...Layout16Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">{description}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    {feature.href ? (
                      <Link href={feature.href}>
                        <Image
                          src={feature.icon.src}
                          alt={feature.icon.alt || ""}
                          width={24}
                          height={24}
                          className="size-6"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={feature.icon.src}
                        alt={feature.icon.alt || ""}
                        width={24}
                        height={24}
                        className="size-6"
                      />
                    )}
                  </div>
                  <span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) =>
                button.href ? (
                  <Link key={index} href={button.href}>
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
          <div className="relative aspect-square w-full">
            <Image
              src={image.src}
              alt={image.alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout16Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  features: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
        href: "#",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 2",
        href: "#",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 3",
        href: "#",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary", href: "/secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
      href: "#",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
    href: "#",
  },
};
