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
import { Testimonial23 } from "@/components/Testimonials/Testimonials23";
import { Testimonial29 } from "@/components/Testimonials/Testimonial29";
import { Testimonial34 } from "@/components/Testimonials/Testimonial34";
import { Testimonial35 } from "@/components/Testimonials/Testimonial35";

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
  { component: Testimonial21, title: "Testimonial 21" },
  { component: Testimonial23, title: "Testimonial 23" },
  { component: Testimonial29, title: "Testimonial 29" },
  { component: Testimonial34, title: "Testimonial 34" },
  { component: Testimonial35, title: "Testimonial 35" },

  // Add more testimonials as necessary
];

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <section className="mb-4">
        {testimonialComponents.map(
          ({ component: TestimonialComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
              {/* Render the component */}
              <TestimonialComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default TestimonialsPage;
