/* eslint-disable @next/next/no-img-element */

import { Button, ButtonProps, VideoIframe } from "@relume_io/relume-ui";
import { Dialog, DialogContent, DialogTrigger } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  image: ImageProps;
};

export type Layout161Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout161 = (props: Layout161Props) => {
  const { tagline, heading, icon, description, buttons, image, video } = {
    ...Layout161Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video={video} />
            </DialogContent>
          </Dialog>
          <div className="rb-12 mt-12 md:mt-18 lg:mt-20">
            <div className="mx-auto max-w-lg text-center">
              <div className="flex flex-col items-center justify-start">
                <div className="rb-5 mb-5 md:mb-6">
                  <img src={icon.src} className="size-20" alt={icon.alt} />
                </div>
                <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {heading}
                </h2>
                <p className="md:text-md">{description}</p>
                <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout161Defaults: Props = {
  icon: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Relume logo",
  },
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
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
    alt: "Relume placeholder image",
  },
  video:
    "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
};
