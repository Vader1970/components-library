/* eslint-disable @next/next/no-img-element */

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
};

export type Layout137Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout137 = (props: Layout137Props) => {
  const { heading, description, icon } = {
    ...Layout137Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="rb-5 mb-5 md:mb-6">
            <img src={icon.src} className="size-12" alt={icon.alt} />
          </div>
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <p className="mt-5 md:mt-6 md:text-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

export const Layout137Defaults: Props = {
  icon: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Relume logo",
  },
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
};
