import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  heading: string;
  description: string;
  logos: ImageProps[];
  image: ImageProps;
};

export type Layout15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout15 = (props: Layout15Props) => {
  const { heading, description, logos, image } = {
    ...Layout15Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-5 md:mb-6 md:text-md">{description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pb-2 pt-4 md:py-2">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  width={120}
                  height={48}
                  className="max-h-12 object-contain"
                  alt={logo.alt}
                />
              ))}
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

export const Layout15Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "logo 2",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "placeholder image",
  },
};
