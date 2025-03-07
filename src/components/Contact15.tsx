/* eslint-disable @next/next/no-img-element */
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  link?: LinkProps;
  button?: ButtonProps;
  description?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  image: ImageProps;
};

export type Contact15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact15 = (props: Contact15Props) => {
  const { tagline, heading, description, contacts, image } = {
    ...Contact15Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex flex-row">
                    <div className="mr-4 md:mb-4">{contact.icon}</div>
                    <div>
                      <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                        {contact.title}
                      </h3>
                      <p>{contact.description}</p>
                      {contact.title === "Office" && contact.button ? (
                        <div className="mt-5 md:mt-6">
                          <Button {...contact.button}>
                            {contact.button.title}
                          </Button>
                        </div>
                      ) : (
                        contact.link && (
                          <a className="underline" href={contact.link.url}>
                            {contact.link.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
    </section>
  );
};

export const Contact15Defaults: Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

  contacts: [
    {
      icon: <BiEnvelope className="size-6" />,
      title: "Email",
      link: {
        label: "hello@email.io",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-6" />,
      title: "Phone",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-6" />,
      title: "Office",
      description: "123 Sample St, Christchurch NZ",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};
