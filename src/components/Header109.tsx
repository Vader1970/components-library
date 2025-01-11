// "use client";

// import { Button, Dialog, DialogContent, DialogTrigger, useMediaQuery, VideoIframe } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaCirclePlay } from "react-icons/fa6";
// import { useRef } from "react";

// type ImageProps = {
//   src: string;
//   alt: string;
// };

// type Props = {
//   title: string;
//   description: string;
//   buttons: ButtonProps[];
//   video: string;
//   image: ImageProps;
// };

// export type Header109Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// export const Header109 = (props: Header109Props) => {
//   const { title, description, buttons, video, image } = {
//     ...Header109Defaults,
//     ...props,
//   };

//   // Ref for the section to localize scroll tracking
//   const sectionRef = useRef<HTMLElement>(null);

//   // Media queries
//   const isMobile = useMediaQuery("(max-width: 767px)");
//   const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");

//   // Scroll tracking
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Adjusted Video dialog transforms for quicker shrinking
//   const videoDialogY = useTransform(scrollYProgress, [0.2, 0.4], ["0vh", "40vh"]);
//   const videoDialogWidth = useTransform(
//     scrollYProgress,
//     [0.2, 0.4],
//     isMobile ? ["100%", "50%"] : isTablet ? ["100%", "25%"] : ["100%", "10%"]
//   );
//   const videoDialogHeight = useTransform(
//     scrollYProgress,
//     [0.2, 0.4],
//     isMobile ? ["100%", "25%"] : isTablet ? ["100%", "30%"] : ["100%", "20%"]
//   );
//   const videoDialogTop = useTransform(
//     scrollYProgress,
//     [0.2, 0.4],
//     isMobile ? ["0%", "37.5%"] : isTablet ? ["0%", "35%"] : ["0%", "40%"]
//   );
//   const videoDialogLeft = useTransform(
//     scrollYProgress,
//     [0.2, 0.4],
//     isMobile ? ["0%", "25%"] : isTablet ? ["0%", "37.5%"] : ["0%", "45%"]
//   );

//   return (
//     <section ref={sectionRef} id='relume' className='relative flex h-[300vh] flex-col items-center mb-28'>
//       {/* Sticky Container: Video + Content */}
//       <div className='sticky top-0 flex w-full flex-col items-center justify-center'>
//         {/* Video */}
//         <div className='relative z-10 flex h-screen w-full items-center justify-center'>
//           <Dialog>
//             <DialogTrigger asChild>
//               <motion.button
//                 style={{
//                   y: videoDialogY,
//                   width: videoDialogWidth,
//                   height: videoDialogHeight,
//                   top: videoDialogTop,
//                   left: videoDialogLeft,
//                 }}
//                 className='absolute inset-0 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center'
//               >
//                 <img src={image.src} alt={image.alt} className='size-full object-cover' />
//                 <FaCirclePlay className='absolute z-20 size-16 text-white' />
//                 <span className='absolute inset-0 z-10 bg-black/50' />
//               </motion.button>
//             </DialogTrigger>
//             <DialogContent>
//               <VideoIframe video={video} />
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* Content (Positioned under video) */}
//         <div className='relative w-full max-w-lg px-[5%] text-center'>
//           <h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl'>{title}</h1>
//           <p className='md:text-md'>{description}</p>
//           <div className='mt-6 flex items-center justify-center gap-x-4 md:mt-8'>
//             {buttons.map((button, index) => (
//               <Button key={index} {...button}>
//                 {button.title}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Extra Scroll Space */}
//       <div className='absolute inset-0 -z-10 mt-[100vh]' />
//     </section>
//   );
// };

// export const Header109Defaults: Props = {
//   title: "Medium length hero heading goes here",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
//   buttons: [
//     {
//       title: "Button",
//     },
//     {
//       title: "Button",
//       variant: "secondary",
//     },
//   ],
//   video: "https://www.pixelperfectwebdesigns.co.nz/services/diy-digital-marketing",
//   image: {
//     src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
//     alt: "placeholder image",
//   },
// };
