"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  image: ImageProps;
};

export type Cta2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta2 = (props: Cta2Props) => {
  const {
    heading,
    description,
    inputPlaceholder,
    button,
    termsAndConditions,
    image,
  } = {
    ...Cta2Defaults,
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
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
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta2Defaults: Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
    <p class='text-xs'>
      By clicking Sign Up you're confirming that you agree with our
      <a href='#' class='underline'>Terms and Conditions</a>.
    </p>
    `,
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};