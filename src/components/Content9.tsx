/* eslint-disable @next/next/no-img-element */
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
};

export type Content9Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content9 = (props: Content9Props) => {
  const { heading, children, image } = {
    ...Content9Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <img
            src={image.src}
            className="w-full object-cover"
            alt={image.alt}
          />
        </div>
        <div className="mx-auto w-full max-w-lg items-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="prose">{children}</div>
        </div>
      </div>
    </section>
  );
};

export const Content9Defaults: Props = {
  heading: "Short heading goes here",
  children: (
    <div>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
        scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque
        amet nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
        condimentum mi massa. In tincidunt pharetra consectetur sed duis
        facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
        dictum eget nibh tortor commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
        Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
        posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
        cursus diam.
      </p>
    </div>
  ),
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};
