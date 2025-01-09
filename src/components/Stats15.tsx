import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type StatsProps = {
  percentage: string;
  heading: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatsProps[];
  image: ImageProps;
};

export type Stats15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Stats15 = (props: Stats15Props) => {
  const { tagline, heading, description, stats, buttons, image } = {
    ...Stats15Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-[4.75rem]">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-text-alternative md:text-md">{description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-l-2 border-border-alternative pl-8"
              >
                <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                  {stat.percentage}
                </p>
                <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                  {stat.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <img
          src={image.src}
          className="size-full object-cover"
          alt={image.alt}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Stats15Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary-alt" },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  stats: [
    {
      percentage: "50%",
      heading: "Short heading goes here",
    },
    {
      percentage: "50%",
      heading: "Short heading goes here",
    },
    {
      percentage: "50%",
      heading: "Short heading goes here",
    },
    {
      percentage: "50%",
      heading: "Short heading goes here",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
