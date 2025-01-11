import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

export type Header129Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header129 = (props: Header129Props) => {
  const { heading, description, buttons, firstImage, secondImage, thirdImage } =
    {
      ...Header129Defaults,
      ...props,
    };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 w-[35%]">
              <img
                src={firstImage.src}
                className="aspect-square size-full object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="mx-[10%] w-full">
              <img
                src={secondImage.src}
                className="aspect-square size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
            <div className="absolute right-0 top-[10%] w-2/5">
              <img
                src={thirdImage.src}
                className="aspect-[3/2] size-full object-cover"
                alt={thirdImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header129Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png",
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image 2",
  },
  thirdImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape-dim.png",
    alt: "Relume placeholder image 3",
  },
};