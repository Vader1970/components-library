"use client";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Input,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiEnvelope,
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type AuthorDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  position: string;
  location: string;
};

enum CategoryLinkType {
  Button = "button",
  Card = "card",
}

type CategoryLinkProps = {
  button: ButtonProps;
  image?: ImageProps;
  description?: string;
  variant?: string;
  type: CategoryLinkType;
};

type CategoryProps = {
  heading?: string;
  links: CategoryLinkProps[];
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

type NewsletterProps = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  submitButton: ButtonProps;
  termsAndConditions: string;
};

type Props = {
  author: AuthorDetailsProps;
  categories: CategoryProps[];
  button: ButtonProps;
  newsLetter: NewsletterProps;
  socialLinks: SocialLinkProps[];
};

export type Links10Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Links10 = (props: Links10Props) => {
  const { author, categories, button, newsLetter, socialLinks } = {
    ...Links10Defaults,
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
      <div className="container max-w-md">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14 lg:mb-16">
          <img
            src={author.avatar.src}
            alt={author.avatar.alt}
            className="mb-5 size-24 rounded-full object-cover md:mb-6"
          />
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {author.fullName}
          </h2>
          <p>{author.position}</p>
          <div className="mt-3 flex items-center justify-center gap-2 md:mt-4">
            <MdLocationOn className="size-5" />
            <p>{author.location}</p>
          </div>
        </div>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="w-full gap-4 whitespace-normal border border-border-primary p-4 text-left"
                {...button}
              />
            </DialogTrigger>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-black/25"
              className="flex size-full flex-col justify-center bg-white px-[5%] pb-28 pt-12 md:size-auto md:w-[90%] md:px-12 md:py-12 lg:max-w-sm"
            >
              <div className="mb-8 text-center md:mb-12">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  {newsLetter.heading}
                </h2>
                <p>{newsLetter.description}</p>
              </div>
              <form
                className="mb-4 flex flex-col gap-y-4"
                onSubmit={handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder={newsLetter.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button {...newsLetter.submitButton}>
                  {newsLetter.submitButton.title}
                </Button>
              </form>
              <div
                dangerouslySetInnerHTML={{
                  __html: newsLetter.termsAndConditions,
                }}
              />
            </DialogContent>
          </Dialog>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Category = (category: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      {category.heading && (
        <h3 className="text-md font-bold leading-[1.4] md:text-xl">
          {category.heading}
        </h3>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {category.links.map((link, index) => (
          <Button
            key={index}
            className={clsx({
              "flex-col items-start gap-0 px-5 py-4 text-left sm:px-4":
                link.type === CategoryLinkType.Card,
              "md:col-span-2": link.type === CategoryLinkType.Button,
            })}
            {...link.button}
            asChild
          >
            <a href={link.button.url}>
              {link.type === CategoryLinkType.Button ? (
                link.button.title
              ) : (
                <React.Fragment>
                  <span className="mb-4 block">
                    <img
                      src={link.image?.src}
                      alt={link.image?.alt}
                      className="size-8"
                    />
                  </span>
                  <span className="flex flex-col gap-y-1 whitespace-normal">
                    <span className="font-semibold md:text-md">
                      {link.button.title}
                    </span>
                    <span>{link.description}</span>
                  </span>
                </React.Fragment>
              )}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export const Links10Defaults: Props = {
  author: {
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
      alt: "Relume placeholder avatar",
    },
    fullName: "Name Surname",
    position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Location",
  },
  categories: [
    {
      links: [
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Link one",
            variant: "secondary",
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Relume placeholder image 1",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Link two",
            variant: "secondary",
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Relume placeholder image 2",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link three",
            variant: "secondary",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link four",
            variant: "secondary",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link five",
            variant: "secondary",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link six",
            variant: "secondary",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link seven",
            variant: "secondary",
          },
        },
      ],
    },
  ],
  button: {
    variant: "secondary",
    children: (
      <>
        <BiEnvelope className="size-8 shrink-0" />
        <span className="flex grow flex-col items-start">
          <span className="font-semibold md:text-md">Join our newsletter</span>
          <span className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </span>
      </>
    ),
  },
  newsLetter: {
    heading: "Join our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    inputPlaceholder: "Enter your email",
    submitButton: {
      title: "Subscribe",
    },
    termsAndConditions: `
		<p class='text-xs'>
			By subscribing you agree to with our  
			<a href='#' class='underline'>Privacy Policy</a> and provide consent to receive updates from our company.
		</p>
  `,
  },
  socialLinks: [
    { href: "#", icon: <BiLogoFacebookCircle className="size-8" /> },
    { href: "#", icon: <BiLogoInstagram className="size-8" /> },
    { href: "#", icon: <FaXTwitter className="size-8" /> },
    { href: "#", icon: <BiLogoLinkedinSquare className="size-8" /> },
    { href: "#", icon: <BiLogoYoutube className="size-8" /> },
  ],
};
