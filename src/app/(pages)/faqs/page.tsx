import { Faq1 } from "@/components/Faq1";
import { Faq2 } from "@/components/Faq2";
import { Faq3 } from "@/components/Faq3";
import { Faq4 } from "@/components/Faq4";
import { Faq5 } from "@/components/Faq5";
import { Faq6 } from "@/components/Faq6";
import { Faq11 } from "@/components/Faq11";
import { Faq7 } from "@/components/Faq7";
import { Faq13 } from "@/components/Faq13";
import { Faq14 } from "@/components/Faq14";
import { Faq8 } from "@/components/Faq8";
import { Faq9 } from "@/components/Faq9";
import { Faq10 } from "@/components/Faq10";
import { Faq12 } from "@/components/Faq12";

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
            <FaqComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqsPage;
