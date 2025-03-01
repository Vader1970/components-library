/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Button,
  Input,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  inputPlaceholder?: string;
  termsAndConditions: string;
  image: ImageProps;
  video: string;
};

export type Header148Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header148 = (props: Header148Props) => {
  const {
    heading,
    description,
    button,
    inputPlaceholder,
    termsAndConditions,
    video,
    image,
  } = {
    ...Header148Defaults,
    ...props,
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="flex w-full flex-col items-center text-center">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form
                className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                onSubmit={handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder={inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button {...button}>{button.title}</Button>
              </form>
              <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
            </div>
          </div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="relative flex w-full items-center justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-video size-full object-cover"
          />
          <span className="absolute inset-0 z-10 bg-black/50" />
          <FaCirclePlay className="absolute z-20 size-16 text-white" />
        </DialogTrigger>
        <DialogContent>
          {!isIframeLoaded && (
            <CgSpinner className="mx-auto size-16 animate-spin text-white" />
          )}
          <iframe
            className={clsx(
              "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
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
    </section>
  );
};

export const Header148Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
    <p class='text-xs'>
      By clicking Sign Up you're confirming that you agree with our
      <a href='#' class='underline'>Terms and Conditions</a>.
    </p>
    `,
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
    alt: "Relume placeholder image",
  },
};
