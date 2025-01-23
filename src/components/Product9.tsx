/* eslint-disable @next/next/no-img-element */
import type { ButtonProps } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type ProductCardProps = {
  url: string;
  image: ImageProps;
  title: string;
  price: string;
  variant: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  products: ProductCardProps[];
};

export type Product9Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Product9 = (props: Product9Props) => {
  const { tagline, heading, description, button, products } = {
    ...Product9Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">{tagline}</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="mt-14 flex justify-center md:mt-20 lg:mt-24">
          <Button {...button}>{button.title}</Button>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({
  url,
  image,
  title,
  price,
  variant,
}) => {
  return (
    <a href={url} className="text-center font-semibold md:text-md">
      <div className="mb-3 aspect-[5/6] md:mb-4">
        <img
          src={image.src}
          alt={image.alt}
          className="size-full object-cover"
        />
      </div>
      <div className="mb-2">
        <h3>{title}</h3>
        <div className="text-sm font-normal">{variant}</div>
      </div>
      <div className="text-md md:text-lg">{price}</div>
    </a>
  );
};

const productData = {
  url: "#",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  title: "Product name",
  price: "$55",
  variant: "Variant",
};

export const Product9Defaults: Props = {
  tagline: "Tagline",
  heading: "Products",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: {
    variant: "secondary",
    size: "primary",
    title: "View all",
  },
  products: [
    productData,
    productData,
    productData,
    productData,
    productData,
    productData,
  ],
};
