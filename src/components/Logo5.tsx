type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Logo5 = (props: Logo5Props) => {
  const { heading, logos } = {
    ...Logo5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mb-6 w-full max-w-lg font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 pb-2 pt-4 sm:items-start sm:justify-start md:py-2">
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

export const Logo5Defaults: Props = {
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
      alt: "logo 5",
    },
  ],
};
