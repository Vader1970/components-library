// "use client";

// import { Button } from "@relume_io/relume-ui";
// import type { ButtonProps } from "@relume_io/relume-ui";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type ImageProps = {
//   src: string;
//   alt?: string;
// };

// type Props = {
//   heading: string;
//   description: string;
//   buttons: ButtonProps[];
//   imageLeft: ImageProps;
//   imageCenter: ImageProps;
//   imageRight: ImageProps;
// };

// export type Header140Props = React.ComponentPropsWithoutRef<"section"> &
//   Partial<Props>;

// export const Header140 = (props: Header140Props) => {
//   const { heading, description, buttons, imageLeft, imageCenter, imageRight } =
//     {
//       ...Header140Defaults,
//       ...props,
//     };

//   // Ref for localized scroll tracking
//   const sectionRef = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Motion transforms
//   const leftImageTranslate = {
//     y: useTransform(scrollYProgress, [0, 0.8], ["-15.444%", "0%"]),
//   };

//   const centerImageTranslate = {
//     y: useTransform(scrollYProgress, [0, 0.8], ["15.333%", "0%"]),
//   };

//   const rightImageTranslate = {
//     y: useTransform(scrollYProgress, [0, 0.5], ["11.333%", "-20%"]),
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="relume"
//       className="relative px-[5%] py-16 md:py-24 lg:py-28"
//     >
//       <div className="container">
//         {/* Content Section */}
//         <div className="mb-12 md:mb-18 lg:mb-20">
//           <div className="w-full max-w-lg">
//             <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
//               {heading}
//             </h1>
//             <p className="md:text-md">{description}</p>
//             <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
//               {buttons.map((button, index) => (
//                 <Button key={index} {...button}>
//                   {button.title}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Images Section */}
//         <div className="relative flex justify-center gap-6 sm:gap-8">
//           {/* Left Image */}
//           <motion.div
//             className="relative w-1/3 sm:w-2/5"
//             style={leftImageTranslate}
//           >
//             <img
//               src={imageLeft.src}
//               alt={imageLeft.alt}
//               className="aspect-square size-full object-cover"
//             />
//           </motion.div>

//           {/* Center Image */}
//           <motion.div
//             className="relative w-1/3 sm:w-1/2"
//             style={centerImageTranslate}
//           >
//             <img
//               src={imageCenter.src}
//               alt={imageCenter.alt}
//               className="aspect-square size-full object-cover"
//             />
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             className="relative w-1/3 sm:w-2/5"
//             style={rightImageTranslate}
//           >
//             <img
//               src={imageRight.src}
//               alt={imageRight.alt}
//               className="aspect-[4/3] size-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export const Header140Defaults: Props = {
//   heading: "Long heading is what you see here in this header section",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//   buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
//   imageLeft: {
//     src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png",
//     alt: "Relume placeholder image 1",
//   },
//   imageCenter: {
//     src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
//     alt: "Relume placeholder image 2",
//   },
//   imageRight: {
//     src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png",
//     alt: "Relume placeholder image 3",
//   },
// };
