"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type BreadcrumbProps = {
  url: string;
  title: string;
};

type GalleryProps = {
  images: ImageProps[];
};

type RatingProps = {
  review: number;
  starsNumber: number;
};

type TabProps = {
  value: string;
  trigger: string;
  description: string;
};

type SelectVariant = {
  value: string;
  label: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  images: ImageProps[];
  description: string;
  price: string;
  rating: RatingProps;
  addToCartbutton: ButtonProps;
  buyNowButtons: ButtonProps;
  options: ButtonProps[];
  quantityInputPlaceholder: string;
  freeShipping: string;
  defaultTabValue: string;
  tabs: TabProps[];
  selectVariants: SelectVariant[];
};

export type ProductHeader6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ProductHeader6 = (props: ProductHeader6Props) => {
  const {
    breadcrumbs,
    heading,
    images,
    price,
    description,
    rating,
    addToCartbutton,
    buyNowButtons,
    options,
    quantityInputPlaceholder,
    freeShipping,
    tabs,
    selectVariants,
  } = {
    ...ProductHeader6Defaults,
    ...props,
  };
  const [variantInput, setVariantInput] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      variantInput,
      optionInput,
      quantityInput,
    });
  };
  return (
    <header id="relume">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Gallery images={images} />
        <div>
          <div className="px-[5%] pb-20 pt-8 md:pt-12 lg:sticky lg:top-0 lg:py-20 lg:pl-20 lg:pr-[5vw]">
            <div className="lg:max-w-md">
              <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
                <BreadcrumbList>
                  {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        <BreadcrumbLink href={item.url}>
                          {item.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
              <div>
                <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  {heading}
                </h1>
                <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
                  <p className="text-xl font-bold md:text-2xl">{price}</p>
                  <div className="mx-4 hidden w-px self-stretch bg-background-alternative sm:block"></div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Star rating={rating.starsNumber} />
                    <p className="text-sm">{`(${rating.starsNumber} stars) • ${rating.review} reviews`}</p>
                  </div>
                </div>
                <p className="mb-5 md:mb-6">{description}</p>
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                      <Label className="mb-2">Variant</Label>
                      <Select onValueChange={setVariantInput}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectVariants.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col">
                      <Label className="mb-2">Variant</Label>
                      <div className="flex flex-wrap gap-4">
                        {options.map((option, index) => (
                          <Button
                            key={index}
                            className="px-4 py-2"
                            asChild
                            onClick={() => setOptionInput(option.title || "")}
                            {...option}
                          >
                            <a
                              href={option.url}
                              className={clsx({
                                "pointer-events-none opacity-25":
                                  option.disabled,
                              })}
                            >
                              {option.title}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="grid grid-cols-[4rem_1fr] gap-x-4">
                      <div className="flex flex-col">
                        <Input
                          type="number"
                          placeholder={quantityInputPlaceholder}
                          value={quantityInput}
                          onChange={(e) => setQuantityInput(e.target.value)}
                        />
                      </div>
                      <Button {...addToCartbutton}>
                        {addToCartbutton.title}
                      </Button>
                    </div>
                    <div className="my-4">
                      <Button {...buyNowButtons} className="w-full">
                        {buyNowButtons.title}
                      </Button>
                    </div>
                    <p className="text-center text-xs">{freeShipping}</p>
                  </div>
                </form>
                <InformationTabs tabs={tabs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Star = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <React.Fragment>
      <div className="relative block w-full pt-[120%] lg:hidden">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        {images.map((slide, index) => (
          <div key={index} className="relative lg:h-screen lg:max-h-[60rem]">
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const InformationTabs = ({ tabs }: { tabs: TabProps[] }) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList className="mb-5 flex-wrap items-center gap-6 md:mb-6">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.value}
            className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
          >
            {tab.trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent
          key={index}
          value={tab.value}
          className="data-[state=active]:animate-tabs"
        >
          <p>{tab.description}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export const ProductHeader6Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "Shop all" },
    { url: "#", title: "Category" },
    { url: "#", title: "Product name" },
  ],
  heading: "Product name",
  price: "$55",
  rating: {
    review: 10,
    starsNumber: 3.5,
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  selectVariants: [
    { value: "first-choice", label: "Option One" },
    { value: "second-choice", label: "Option Two" },
    { value: "third-choice", label: "Option Three" },
  ],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
  ],
  addToCartbutton: { title: "Add to cart" },
  buyNowButtons: { title: "Buy now", variant: "secondary" },
  options: [
    {
      title: "Option one",
      url: "#",
    },
    { title: "Option two", url: "#", variant: "secondary" },
    { title: "Option three", url: "#", variant: "secondary", disabled: true },
  ],
  quantityInputPlaceholder: "1",
  freeShipping: "Free shipping over $50",
  defaultTabValue: "tab-details",
  tabs: [
    {
      value: "tab-details",
      trigger: "Details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      value: "tab-shipping",
      trigger: "Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      value: "tab-returns",
      trigger: "Returns",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};
