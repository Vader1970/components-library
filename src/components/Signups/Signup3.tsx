"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  footerText: string;
};

export type Signup3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Signup3 = (props: Signup3Props) => {
  const {
    logo,
    logInText,
    logInLink,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    footerText,
  } = {
    ...Signup3Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section
      id="relume"
      className="relative flex min-h-svh flex-col justify-center overflow-auto px-[5%] py-24 lg:py-20"
    >
      <div className="absolute left-0 right-0 top-0 flex h-16 items-center justify-center md:h-18">
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} />
        </a>
      </div>
      <div className="mx-auto w-full max-w-sm border border-border-primary px-6 py-8 sm:px-8 md:p-12">
        <div className="mb-6 text-center md:mb-8">
          <h1 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1">
            <Label htmlFor="name" className="mb-2">
              Name*
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <Label htmlFor="email" className="mb-2">
              Email*
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <Label htmlFor="password" className="mb-2">
              Password*
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Button
              variant={signUpButton.variant}
              size={signUpButton.size}
              iconLeft={signUpButton.iconLeft}
              iconRight={signUpButton.iconRight}
            >
              {signUpButton.title}
            </Button>
            <Button
              variant={signUpWithGoogleButton.variant}
              size={signUpWithGoogleButton.size}
              iconLeft={signUpWithGoogleButton.iconLeft}
              iconRight={signUpWithGoogleButton.iconRight}
              className="gap-x-3"
            >
              {signUpWithGoogleButton.title}
            </Button>
          </div>
        </form>
        <div className="mt-5 flex justify-center gap-x-1 text-center md:mt-6">
          <p>{logInText}</p>
          <a href={logInLink.url} className="underline">
            {logInLink.text}
          </a>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center md:h-18">
        <p className="text-sm">{footerText}</p>
      </footer>
    </section>
  );
};

export const Signup3Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log In",
    url: "#",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  footerText: "© 2024 Relume",
};
