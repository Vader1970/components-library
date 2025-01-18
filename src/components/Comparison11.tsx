import { Button, ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type ImageProps = {
  src: string;
  alt?: string;
};

type ComparisonProducts = {
  title?: string;
  products: Product[];
};

type Product = {
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  comparisonProducts: ComparisonProducts[];
  features: Feature[];
  buttons: ButtonProps[];
};

export type Comparison11Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Comparison11 = (props: Comparison11Props) => {
  const { tagline, heading, description, buttons, comparisonProducts, features } = {
    ...comparison11Defaults,
    ...props,
  };
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20'>
          <p className='mb-3 font-semibold md:mb-4'>{tagline}</p>
          <h1 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>{heading}</h1>
          <p className='md:text-md'>{description}</p>
        </div>
        <div className='mx-auto'>
          <div className='grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]'>
            {comparisonProducts.map((comparison, index) => (
              <React.Fragment key={index}>
                <div className='hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6'>
                  <h2 className='text-md font-bold leading-[1.4] md:text-xl'>{comparison.title}</h2>
                </div>
                {comparison.products.map((plan, index) => (
                  <ProductPlan key={index} index={index} {...plan} />
                ))}
              </React.Fragment>
            ))}
          </div>
          <FeaturesSection features={features} />
          <div className='mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20'>
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductPlan = ({ index, ...product }: Product & { index: number }) => {
  return (
    <div
      className={clsx("flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6", {
        "bg-background-secondary": index === 0,
      })}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <img src={product.image.src} alt={product.image.alt} className='max-h-12' />
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }: { features: Feature[] }) => {
  return (
    <div>
      {features.map((feature, index) => (
        <div key={index}>
          <div key={index} className='grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]'>
            <p className='col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6'>
              {feature.text}
            </p>
            {feature.items.map((item, index) => (
              <div
                key={index}
                className={clsx("flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6", {
                  "bg-background-secondary": index === 0,
                })}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const comparison11Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  comparisonProducts: [
    {
      title: "Product comparison",
      products: [
        {
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            alt: "icon 1",
          },
        },
        {
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            alt: "icon 2",
          },
        },
        {
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
            alt: "icon 3",
          },
        },
      ],
    },
  ],
  features: [
    {
      text: "Feature text goes here",
      items: ["Unlimited", "25", "10"],
    },
    {
      text: "Feature text goes here",
      items: [
        <BiCheck key='check-1' className='size-6' />,
        <BiCheck key='check-2' className='size-6' />,
        <BiCheck key='check-12' className='size-6' />,
      ],
    },
    {
      text: "Feature text goes here",
      items: [
        <BiCheck key='check-3' className='size-6' />,
        <BiCheck key='check-4' className='size-6' />,
        <BiCheck key='check-5' className='size-6' />,
      ],
    },
    {
      text: "Feature text goes here",
      items: [
        <BiCheck key='check-6' className='size-6' />,
        <BiCheck key='check-7' className='size-6' />,
        <BiX key='check-8' className='size-6' />,
      ],
    },
    {
      text: "Feature text goes here",
      items: [
        <BiCheck key='check-9' className='size-6' />,
        <BiX key='check-10' className='size-6' />,
        <BiX key='check-11' className='size-6' />,
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    { title: "Button", variant: "link", size: "link", iconRight: <RxChevronRight /> },
  ],
};
