import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  children: React.ReactNode;
  heading: string;
  image: ImageProps;
};

export type Content19Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content19 = (props: Content19Props) => {
  const { children, heading, image } = {
    ...Content19Defaults,
    ...props,
  };

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='mb-12 md:mb-18 lg:mb-20'>
          <img src={image.src} className='aspect-video w-full object-cover' alt={image.alt} />
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:gap-x-20'>
          <div>
            <h3 className='text-4xl font-bold leading-[1.2] md:text-5xl  lg:text-6xl '>{heading}</h3>
          </div>
          <div>
            <div className='prose'>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content19Defaults: Props = {
  heading: "Medium length section heading goes here",
  children: (
    <React.Fragment>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis
        est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet
        nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra
        consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor
        commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat
        dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere
        pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
        gravida enim posuere cursus diam.
      </p>
    </React.Fragment>
  ),
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};
