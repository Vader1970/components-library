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
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  inputPlaceholder: string;
  button: ButtonProps;
  termsAndConditions: string;
  video: string;
  image: ImageProps;
};

export type Header18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header18 = (props: Header18Props) => {
  const {
    heading,
    description,
    inputPlaceholder,
    button,
    termsAndConditions,
    video,
    image,
  } = {
    ...Header18Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <div>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form
                className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
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
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full max-w-full items-center justify-center">
                <img
                  src={image.src}
                  className="w-full object-cover"
                  alt={image.alt}
                />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
                <span className="absolute inset-0 z-10 bg-black/50" />
              </button>
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
        </div>
      </div>
    </section>
  );
};

export const Header18Defaults: Props = {
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
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
    alt: "Relume placeholder image",
  },
};
