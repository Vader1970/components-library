"use client";

import { useState } from "react";
import { Button, Select, SelectTrigger, SelectContent, SelectItem } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type BlogSelect = {
  value: string;
  trigger: string;
  content: BlogPost[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultValue: string;
  selects: BlogSelect[];
};

export type Blog30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog30 = (props: Blog30Props) => {
  const { tagline, heading, description, selects, defaultValue } = {
    ...Blog30Defaults,
    ...props,
  };

  const [activeSelect, setActiveSelect] = useState<string>(defaultValue);

  const currentSelect = selects.find((select) => select.value === activeSelect);

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container flex max-w-lg flex-col'>
        <div className='mb-12 text-center md:mb-18 lg:mb-20'>
          <div className='w-full max-w-lg'>
            <p className='mb-3 font-semibold md:mb-4'>{tagline}</p>
            <h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl'>{heading}</h1>
            <p className='md:text-md'>{description}</p>
          </div>
        </div>
        <div className='flex flex-col justify-start'>
          <div className='md:min-w- mb-10'>
            <Select value={activeSelect} onValueChange={setActiveSelect}>
              <SelectTrigger className='min-w-[12.5rem] px-4 py-2 md:w-auto'>
                {currentSelect ? currentSelect.trigger : "Select Category"}
              </SelectTrigger>

              <SelectContent>
                {selects.map((select, index) => (
                  <SelectItem key={index} value={select.value}>
                    {select.trigger}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence mode='wait'>
            {currentSelect && (
              <motion.div
                key={currentSelect.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <div className='grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16'>
                  {currentSelect.content.map((post, index) => (
                    <div
                      key={index}
                      className='flex
                        flex-col border border-border-primary'
                    >
                      <a href={post.url} className='inline-block w-full max-w-full overflow-hidden'>
                        <div className='w-full overflow-hidden'>
                          <img
                            src={post.image.src}
                            alt={post.image.alt}
                            className='aspect-video size-full object-cover'
                          />
                        </div>
                      </a>
                      <div className='px-5 py-6 md:px-6'>
                        <div className='rb-4 mb-4 flex w-full items-center justify-start'>
                          <p className='mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold'>
                            {post.category}
                          </p>
                          <p className='inline text-sm font-semibold'>{post.readTime}</p>
                        </div>
                        <a href={post.url} className={"mb-2 block max-w-full"}>
                          <h5 className='text-2xl font-bold md:text-4xl'>{post.title}</h5>
                        </a>
                        <p>{post.description}</p>
                        <Button {...post.button} className='mt-6 flex items-center justify-center gap-x-2'>
                          {post.button.title}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const blogPost: BlogPost = {
  url: "#",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "placeholder image",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  button: {
    title: "Read more",
    variant: "link",
    size: "link",
    iconRight: <RxChevronRight />,
  },
};

export const Blog30Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  selects: [
    {
      value: "all-posts",
      trigger: "All Posts",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [blogPost, blogPost, blogPost],
    },
  ],
  defaultValue: "all-posts",
};
