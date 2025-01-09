"use client";

import { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  video: string;
  videoType: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
};

export type Header68Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header68 = (props: Header68Props) => {
  const {
    tagline,
    heading,
    description,
    video,
    videoType,
    inputPlaceholder,
    button,
    termsAndConditions,
  } = {
    ...Header68Defaults,
    ...props,
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">
          {tagline}
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="text-text-alternative md:text-md">{description}</p>
        <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
          <form
            className="rb-4 mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
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
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header68Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Sign up",
  },
  termsAndConditions: `
  <p class='text-xs text-text-alternative'>
    By clicking Sign Up you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  `,
};
