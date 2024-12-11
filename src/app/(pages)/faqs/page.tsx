import { Faq1 } from "@/components/FAQs/Faq1";
import { Faq2 } from "@/components/FAQs/Faq2";
import { Faq3 } from "@/components/FAQs/Faq3";
import { Faq4 } from "@/components/FAQs/Faq4";
import { Faq5 } from "@/components/FAQs/Faq5";
import { Faq6 } from "@/components/FAQs/Faq6";
import { Faq11 } from "@/components/FAQs/Faq11";

const faqComponents = [
  { component: Faq1, title: "FAQ 1" },
  { component: Faq2, title: "FAQ 2" },
  { component: Faq3, title: "FAQ 3" },
  { component: Faq4, title: "FAQ 4" },
  { component: Faq5, title: "FAQ 5" },
  { component: Faq6, title: "FAQ 6" },
  { component: Faq11, title: "FAQ 11" },

  // Add more FAQs as necessary
];

const FaqsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">FAQS</h1>
      <section className="mb-4">
        {faqComponents.map(({ component: FaqComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <FaqComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqsPage;
