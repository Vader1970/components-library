import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";

type Content = {
  heading: string;
  description: string;
};

type Props = {
  leftContent: Content[];
  rightContent: Content[];
  video: string;
  videoType: string;
  videoDialog: string;
};

export type Layout355Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout355 = (props: Layout355Props) => {
  const { leftContent, rightContent, video, videoType, videoDialog } = {
    ...Layout355Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative">
      <div className="px-[5%]">
        <div className="container">
          <div className="grid auto-cols-fr grid-cols-1 pb-8 md:grid-cols-[1fr_10rem_1fr] md:pb-0 lg:grid-cols-[1fr_12rem_1fr]">
            <div className="relative md:mt-[100vh]">
              {leftContent.map((content, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center py-8 md:h-screen md:py-0"
                >
                  <div className="w-full max-w-sm">
                    <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
                    <p className="text-text-alternative md:text-md">
                      {content.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="static top-0 order-first flex h-[50vh] items-center justify-center md:sticky md:order-none md:h-screen">
              <Dialog>
                <DialogTrigger asChild className="cursor-pointer">
                  <button className="absolute z-20 flex items-center justify-center text-white">
                    <span className="flex size-20 flex-col items-center justify-center">
                      <FaCirclePlay className="absolute z-20 size-16 text-white" />
                    </span>
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <VideoIframe video={videoDialog} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative md:pt-[150vh]">
              {rightContent.map((content, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center py-8 md:h-screen md:py-0"
                >
                  <div className="w-full max-w-sm">
                    <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
                    <p className="text-text-alternative md:text-md">
                      {content.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[-100vh]" />
        </div>
      </div>
      <div className="sticky bottom-0 -z-10 h-screen w-screen">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="sticky bottom-0 z-0 h-screen w-screen overflow-hidden object-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute -bottom-full -left-full -right-full -top-full z-[-100] m-auto size-full bg-cover object-cover [background-position:50%]"
          >
            <source src={video} type={videoType} />
          </video>
        </div>
      </div>
    </section>
  );
};

export const Layout355Defaults: Props = {
  leftContent: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
  rightContent: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
  videoDialog:
    "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
};
