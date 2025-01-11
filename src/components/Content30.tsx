import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@relume_io/relume-ui";

type BreadcrumbProps = {
  url: string;
  title: string;
};

type SocialMediaLinksProps = {
  icon: React.ReactNode;
  url: string;
};

type Tag = {
  label: string;
  url: string;
};

type ImageProps = {
  src: string;
  alt?: string;
};

type AuthorProps = {
  name: string;
  titleAndCompany: string;
  logo: ImageProps;
};

type Props = {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbProps[];
  socialMediaLinks: SocialMediaLinksProps[];
  tags: Tag[];
  author: AuthorProps;
  shareTitle: string;
};

export type Content30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content30 = (props: Content30Props) => {
  const { children, socialMediaLinks, tags, author, breadcrumbs, shareTitle } = {
    ...Content30Defaults,
    ...props,
  };

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='mx-auto max-w-lg'>
          <div className='mb-14 flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between md:mb-16 md:gap-y-0'>
            <Breadcrumb className='flex items-center'>
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-start gap-2'>
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className='size-8 rounded-[1.25rem] bg-background-secondary p-1'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className='prose mb-12 md:prose-md lg:prose-lg md:mb-16 lg:mb-20'>{children}</div>
          <div className='mb-8 text-center md:mb-10 lg:mb-12'>
            <p className='font-semibold md:text-md'>{shareTitle}</p>
            <div className='mb-8 mt-3 flex items-start justify-center gap-2 sm:mb-0 md:mt-4'>
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className='size-8 rounded-[1.25rem] bg-background-secondary p-1'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <ul className='flex flex-wrap justify-center gap-2'>
            {tags.map((tag, index) => (
              <li key={index} className='flex'>
                <a href={tag.url} className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
                  {tag.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='my-8 h-px bg-border-primary md:my-10 lg:my-12' />
          <div className='flex flex-col items-center gap-4 text-center'>
            <div>
              <img src={author.logo.src} alt={author.logo.alt} className='size-14 rounded-full object-cover' />
            </div>
            <div className='grow'>
              <p className='font-semibold md:text-md'>{author.name}</p>
              <p>{author.titleAndCompany}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content30Defaults: Props = {
  shareTitle: "Share this post",
  breadcrumbs: [
    { url: "#", title: "Blog" },
    { url: "#", title: "Category" },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLinkAlt className='size-6' /> },
    { url: "#", icon: <BiLogoLinkedinSquare className='size-6' /> },
    { url: "#", icon: <FaXTwitter className='size-6 p-0.5' /> },
    { url: "#", icon: <BiLogoFacebookCircle className='size-6' /> },
  ],
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
    {
      label: "Tag four",
      url: "#",
    },
  ],
  author: {
    name: "Full name",
    titleAndCompany: "Job title, Company name",
    logo: {
      src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg",
      alt: "Logo",
    },
  },
  children: (
    <React.Fragment>
      <h3>Introduction</h3>
      <p>
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
        vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu
        amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
      </p>
      <p>
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
        Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In
        turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
      </p>
      <figure>
        <img
          src='https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg'
          alt='Relume placeholder image'
        />
        <figcaption>Image caption goes here</figcaption>
      </figure>
      <h6>
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque
        aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </h6>
      <p>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed
        condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus,
        volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
        Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus,
        pharetra, porttitor.
      </p>
      <blockquote>
        &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget
        consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.&quot;
      </blockquote>
      <p>
        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat
        cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus
        viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
      </p>
      <h4>Conclusion</h4>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis
        est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet
        nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra
        consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor
        commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat
        dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere
        pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere
        gravida enim posuere cursus diam.
      </p>
    </React.Fragment>
  ),
};