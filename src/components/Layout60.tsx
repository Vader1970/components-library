type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
  icon: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
};

export type Layout60Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout60 = (props: Layout60Props) => {
  const { heading, description, subHeadings } = {
    ...Layout60Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img
                      src={subHeading.icon.src}
                      className="size-12"
                      alt={subHeading.icon.alt}
                    />
                  </div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p>{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout60Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  subHeadings: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
};
