/* eslint-disable @next/next/no-img-element */
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@relume_io/relume-ui";
import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type MetaTagProps = {
  title: string;
  description: string;
};

type Props = {
  children: React.ReactNode;
  heading: string;
  metatags: MetaTagProps[];
  image: ImageProps;
  video: string;
};

export type Content25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content25 = (props: Content25Props) => {
  const { children, heading, metatags, image, video } = {
    ...Content25Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl  lg:text-6xl ">
              {heading}
            </h3>
          </div>
          <div>
            <div className="prose mb-16 md:mb-[5.5rem] lg:mb-24">
              {children}
            </div>
            <div>
              {metatags.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-8 border-b border-b-border-primary py-5 first:border-t first:border-t-border-primary"
                >
                  <h3 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-video size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </button>
            </DialogTrigger>
            <DialogContent>
              {!isIframeLoaded && (
                <CgSpinner className="mx-auto size-16 animate-spin text-white" />
              )}
              <iframe
                className={clsx(
                  "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                  {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  }
                )}
                src={video}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export const Content25Defaults: Props = {
  heading: "Medium length section heading goes here",
  metatags: [
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
  ],
  children: (
    <React.Fragment>
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
    </React.Fragment>
  ),
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316216244aee67_Placeholder%20Video%20-%20Landscape.svg",
    alt: "Relume placeholder image",
  },
};
