import { Button, ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  heading: string;
  description: string;
  button: ButtonProps;
  icon: ImageProps;
};

type Props = {
  sections: SectionProps[];
  heading: string;
  video: string;
  videoType: string;
};

export type Layout274Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout274 = (props: Layout274Props) => {
  const { sections, heading, video, videoType } = {
    ...Layout274Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg text-start text-text-alternative md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="w-full">
              <img
                src={section.icon.src}
                className="mb-5 size-12 md:mb-6"
                alt={section.icon.alt}
              />
              <div>
                <h3 className="mb-5 text-xl font-bold text-text-alternative md:mb-6 md:text-2xl">
                  {section.heading}
                </h3>
                <p className="text-text-alternative ">{section.description}</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button {...section.button}>{section.button.title}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout274Defaults: Props = {
  sections: [
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo 1",
      },
    },
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo 2",
      },
    },
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo 3",
      },
    },
  ],
  heading: "Long heading is what you see here in this feature section",
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};