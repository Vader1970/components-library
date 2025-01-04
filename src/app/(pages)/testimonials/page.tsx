import { Testimonial1 } from "@/components/Testimonials/Testimonial1";
import { Testimonial2 } from "@/components/Testimonials/Testimonial2";
import { Testimonial3 } from "@/components/Testimonials/Testimonial3";
import { Testimonial4 } from "@/components/Testimonials/Testimonial4";
import { Testimonial5 } from "@/components/Testimonials/Testimonial5";
import { Testimonial6 } from "@/components/Testimonials/Testimonial6";
import { Testimonial7 } from "@/components/Testimonials/Testimonial7";
import { Testimonial8 } from "@/components/Testimonials/Testimonial8";
import { Testimonial9 } from "@/components/Testimonials/Testimonial9";
import { Testimonial10 } from "@/components/Testimonials/Testimonial10";
import { Testimonial11 } from "@/components/Testimonials/Testimonial11";
import { Testimonial12 } from "@/components/Testimonials/Testimonial12";
import { Testimonial13 } from "@/components/Testimonials/Testimonial13";
import { Testimonial14 } from "@/components/Testimonials/Testimonial14";
import { Testimonial15 } from "@/components/Testimonials/Testimonial15";
import { Testimonial16 } from "@/components/Testimonials/Testimonial16";
import { Testimonial17 } from "@/components/Testimonials/Testimonial17";
import { Testimonial21 } from "@/components/Testimonials/Testimonial21";
import { Testimonial23 } from "@/components/Testimonials/Testimonial23";
import { Testimonial29 } from "@/components/Testimonials/Testimonial29";
import { Testimonial34 } from "@/components/Testimonials/Testimonial34";
import { Testimonial35 } from "@/components/Testimonials/Testimonial35";
import { Testimonial19 } from "@/components/Testimonials/Testimonial19";
import { Testimonial20 } from "@/components/Testimonials/Testimonial20";
import { Testimonial22 } from "@/components/Testimonials/Testimonial22";
import { Testimonial24 } from "@/components/Testimonials/Testimonial24";
import { Testimonial25 } from "@/components/Testimonials/Testimonial25";
import { Testimonial26 } from "@/components/Testimonials/Testimonial26";
import { Testimonial36 } from "@/components/Testimonials/Testimonial36";
import { Testimonial37 } from "@/components/Testimonials/Testimonial37";
import { Testimonial38 } from "@/components/Testimonials/Testimonial38";
import { Testimonial39 } from "@/components/Testimonials/Testimonial39";
import { Testimonial32 } from "@/components/Testimonials/Testimonial32";
import { Testimonial27 } from "@/components/Testimonials/Testimonial27";
import { Testimonial28 } from "@/components/Testimonials/Testimonial28";
import { Testimonial30 } from "@/components/Testimonials/Testimonial30";
import { Testimonial31 } from "@/components/Testimonials/Testimonial31";
import { Testimonial33 } from "@/components/Testimonials/Testimonial33";

const testimonialComponents = [
  { component: Testimonial1, title: "Testimonial 1" },
  { component: Testimonial2, title: "Testimonial 2" },
  { component: Testimonial3, title: "Testimonial 3" },
  { component: Testimonial4, title: "Testimonial 4" },
  { component: Testimonial5, title: "Testimonial 5" },
  { component: Testimonial6, title: "Testimonial 6" },
  { component: Testimonial7, title: "Testimonial 7" },
  { component: Testimonial8, title: "Testimonial 8" },
  { component: Testimonial9, title: "Testimonial 9" },
  { component: Testimonial10, title: "Testimonial 10" },
  { component: Testimonial11, title: "Testimonial 11" },
  { component: Testimonial12, title: "Testimonial 12" },
  { component: Testimonial13, title: "Testimonial 13" },
  { component: Testimonial14, title: "Testimonial 14" },
  { component: Testimonial15, title: "Testimonial 15" },
  { component: Testimonial16, title: "Testimonial 16" },
  { component: Testimonial17, title: "Testimonial 17" },
  { component: Testimonial19, title: "Testimonial 19" },
  { component: Testimonial20, title: "Testimonial 20" },
  { component: Testimonial21, title: "Testimonial 21" },
  { component: Testimonial22, title: "Testimonial 22" },
  { component: Testimonial23, title: "Testimonial 23" },
  { component: Testimonial24, title: "Testimonial 24" },
  { component: Testimonial25, title: "Testimonial 25" },
  { component: Testimonial26, title: "Testimonial 26" },
  { component: Testimonial27, title: "Testimonial 27" },
  { component: Testimonial28, title: "Testimonial 28" },
  { component: Testimonial29, title: "Testimonial 29" },
  { component: Testimonial30, title: "Testimonial 30" },
  { component: Testimonial31, title: "Testimonial 31" },
  { component: Testimonial32, title: "Testimonial 32" },
  { component: Testimonial33, title: "Testimonial 33" },
  { component: Testimonial34, title: "Testimonial 34" },
  { component: Testimonial35, title: "Testimonial 35" },
  { component: Testimonial36, title: "Testimonial 36" },
  { component: Testimonial37, title: "Testimonial 37" },
  { component: Testimonial38, title: "Testimonial 38" },
  { component: Testimonial39, title: "Testimonial 39" },

  // Add more testimonials as necessary
];

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Testimonials</h1>
      <section className='mb-4'>
        {testimonialComponents.map(({ component: TestimonialComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <TestimonialComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default TestimonialsPage;
