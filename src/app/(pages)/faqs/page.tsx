"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

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
  { component: Faq1, title: "Faq 1" },
  { component: Faq2, title: "Faq 2" },
  { component: Faq3, title: "Faq 3" },
  { component: Faq4, title: "Faq 4" },
  { component: Faq5, title: "Faq 5" },
  { component: Faq6, title: "Faq 6" },
  { component: Faq7, title: "Faq 7" },
  { component: Faq8, title: "Faq 8" },
  { component: Faq9, title: "Faq 9" },
  { component: Faq10, title: "Faq 10" },
  { component: Faq11, title: "Faq 11" },
  { component: Faq12, title: "Faq 12" },
  { component: Faq13, title: "Faq 13" },
  { component: Faq14, title: "Faq 14" },

  // Add more FAQs as necessary
];

const FaqsPage = () => {
  const handleSearch = (query: string) => {
    const target = document.getElementById(query);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Component not found");
    }
  };

  return (
    <div>
      <h1 className='text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl'>FAQS</h1>

      {/* Search Section */}
      <Search placeholder='Search for a component (e.g., Faq 9)' onSearch={handleSearch} />

      <section className='mb-4'>
        {faqComponents.map(({ component: FaqComponent, title }, index) => (
          <div key={index} id={title.toLowerCase().replace(/\s+/g, "")}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-black text-white text-base sm:text-2xl font-bold text-center py-10 px-[5%] flex justify-between items-center'>
              {title}
              <a
                href={`/view-code/${title.replace(/\s+/g, "")}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 text-white text-base px-4 py-2 rounded hover:bg-blue-600 transition duration-200'
              >
                View Code
              </a>
            </h2>
            {/* Render the component */}
            <FaqComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default FaqsPage;
