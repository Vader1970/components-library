import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
};

export type Contact20Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact20 = (props: Contact20Props) => {
  const { tagline, heading, description, contacts } = {
    ...Contact20Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start text-center"
            >
              <div className="mb-5 lg:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 text-center md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact20Defaults: Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "hello@relume.io",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "123 Sample St, Sydney NSW 2000 AU",
        url: "#",
      },
    },
  ],
};
