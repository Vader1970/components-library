type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Logo1 = (props: Logo1Props) => {
  const { heading, logos } = {
    ...Logo1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 md:max-h-14"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo1Defaults: Props = {
  heading: "Used by the world's leading companies",
  logos: [
    {
      src: "/logo.png",
      alt: "logo 1",
    },
    {
      src: "/logo.png",
      alt: "logo 1",
    },
    {
      src: "/logo.png",
      alt: "logo 2",
    },
    {
      src: "/logo.png",
      alt: "logo 2",
    },
    {
      src: "/logo.png",
      alt: "logo 3",
    },
    {
      src: "/logo.png",
      alt: "logo 3",
    },
    {
      src: "/logo.png",
      alt: "logo 4",
    },
    {
      src: "/logo.png",
      alt: "logo 4",
    },
    {
      src: "/logo.png",
      alt: "logo 5",
    },
    {
      src: "/logo.png",
      alt: "logo 5",
    },
    {
      src: "/logo.png",
      alt: "logo 6",
    },
  ],
};
