/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  percentage: string;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  stats: CardProps[];
  image: ImageProps;
  video: string;
};

export type Stats36Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Stats36 = (props: Stats36Props) => {
  const { tagline, heading, description, image, stats, video } = {
    ...Stats36Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            {stats.map((stat, index) => (
              <Card key={index} {...stat} />
            ))}
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex size-full w-full items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-black/50" />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video={video} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = (card: CardProps) => {
  return (
    <div className="flex w-full flex-col border border-border-primary p-8">
      <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
        {card.percentage}
      </p>
      <h3 className="text-md font-bold leading-[1.4] md:text-xl">
        {card.title}
      </h3>
      <p className="mt-2">{card.description}</p>
    </div>
  );
};

export const Stats36Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316259584aee68_placeholder-video-thumbnail.svg",
    alt: "Relume placeholder image",
  },
  stats: [
    {
      percentage: "30%",
      title: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      percentage: "30%",
      title: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      percentage: "30%",
      title: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};
