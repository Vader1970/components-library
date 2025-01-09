import { Testimonial1 } from "@/components/Testimonial1";
import { Testimonial2 } from "@/components/Testimonial2";
import { Testimonial3 } from "@/components/Testimonial3";
import { Testimonial4 } from "@/components/Testimonial4";
import { Testimonial5 } from "@/components/Testimonial5";
import { Testimonial6 } from "@/components/Testimonial6";
import { Testimonial7 } from "@/components/Testimonial7";
import { Testimonial8 } from "@/components/Testimonial8";
import { Testimonial9 } from "@/components/Testimonial9";
import { Testimonial10 } from "@/components/Testimonial10";
import { Testimonial11 } from "@/components/Testimonial11";
import { Testimonial12 } from "@/components/Testimonial12";
import { Testimonial13 } from "@/components/Testimonial13";
import { Testimonial14 } from "@/components/Testimonial14";
import { Testimonial15 } from "@/components/Testimonial15";
import { Testimonial16 } from "@/components/Testimonial16";
import { Testimonial17 } from "@/components/Testimonial17";
import { Testimonial21 } from "@/components/Testimonial21";
import { Testimonial23 } from "@/components/Testimonial23";
import { Testimonial29 } from "@/components/Testimonial29";
import { Testimonial34 } from "@/components/Testimonial34";
import { Testimonial35 } from "@/components/Testimonial35";
import { Testimonial19 } from "@/components/Testimonial19";
import { Testimonial20 } from "@/components/Testimonial20";
import { Testimonial22 } from "@/components/Testimonial22";
import { Testimonial24 } from "@/components/Testimonial24";
import { Testimonial25 } from "@/components/Testimonial25";
import { Testimonial26 } from "@/components/Testimonial26";
import { Testimonial36 } from "@/components/Testimonial36";
import { Testimonial37 } from "@/components/Testimonial37";
import { Testimonial38 } from "@/components/Testimonial38";
import { Testimonial39 } from "@/components/Testimonial39";
import { Testimonial32 } from "@/components/Testimonial32";
import { Testimonial27 } from "@/components/Testimonial27";
import { Testimonial28 } from "@/components/Testimonial28";
import { Testimonial30 } from "@/components/Testimonial30";
import { Testimonial31 } from "@/components/Testimonial31";
import { Testimonial33 } from "@/components/Testimonial33";

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
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Testimonials
      </h1>
      <section className="mb-4">
        {testimonialComponents.map(
          ({ component: TestimonialComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-base sm:text-2xl font-bold text-center py-10 px-[5%] flex justify-between items-center">
                {title}
                <a
                  href={`/view-code/${title.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white text-base px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  View Code
                </a>
              </h2>
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
