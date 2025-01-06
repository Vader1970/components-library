import { Faq1 } from "@/components/FAQs/Faq1";
import { Faq2 } from "@/components/FAQs/Faq2";
import { Faq3 } from "@/components/FAQs/Faq3";
import { Faq4 } from "@/components/FAQs/Faq4";
import { Faq5 } from "@/components/FAQs/Faq5";
import { Faq6 } from "@/components/FAQs/Faq6";
import { Faq11 } from "@/components/FAQs/Faq11";
import { Faq7 } from "@/components/FAQs/Faq7";
import { Faq13 } from "@/components/FAQs/Faq13";
import { Faq14 } from "@/components/FAQs/Faq14";
import { Faq8 } from "@/components/FAQs/Faq8";
import { Faq9 } from "@/components/FAQs/Faq9";
import { Faq10 } from "@/components/FAQs/Faq10";
import { Faq12 } from "@/components/FAQs/Faq12";

const faqComponents = [
  { component: Faq1, title: "FAQ 1" },
  { component: Faq2, title: "FAQ 2" },
  { component: Faq3, title: "FAQ 3" },
  { component: Faq4, title: "FAQ 4" },
  { component: Faq5, title: "FAQ 5" },
  { component: Faq6, title: "FAQ 6" },
  { component: Faq7, title: "FAQ 7" },
  { component: Faq8, title: "FAQ 8" },
  { component: Faq9, title: "FAQ 9" },
  { component: Faq10, title: "FAQ 10" },
  { component: Faq11, title: "FAQ 11" },
  { component: Faq12, title: "FAQ 12" },
  { component: Faq13, title: "FAQ 13" },
  { component: Faq14, title: "FAQ 14" },

  // Add more FAQs as necessary
];

const FaqsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        FAQS
      </h1>
      <section className="mb-4">
        {faqComponents.map(({ component: FaqComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
              {title}
            </h2>
            {/* Render the component */}
            <FaqComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqsPage;
