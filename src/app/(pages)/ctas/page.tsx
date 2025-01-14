"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Cta1 } from "@/components/Cta1";
import { Cta2 } from "@/components/Cta2";
import { Cta3 } from "@/components/Cta3";
import { Cta7 } from "@/components/Cta7";
import { Cta8 } from "@/components/Cta8";
import { Cta9 } from "@/components/Cta9";
import { Cta13 } from "@/components/Cta13";
import { Cta15 } from "@/components/Cta15";
import { Cta16 } from "@/components/Cta16";
import { Cta25 } from "@/components/Cta25";
import { Cta37 } from "@/components/Cta37";
import { Cta38 } from "@/components/Cta38";
import { Cta57 } from "@/components/Cta57";
import { Cta58 } from "@/components/Cta58";
import { Cta33 } from "@/components/Cta33";
import { Cta4 } from "@/components/Cta4";
import { Cta5 } from "@/components/Cta5";
import { Cta6 } from "@/components/Cta6";
import { Cta10 } from "@/components/Cta10";
import { Cta11 } from "@/components/Cta11";
import { Cta12 } from "@/components/Cta12";
import { Cta14 } from "@/components/Cta14";
import { Cta17 } from "@/components/Cta17";
import { Cta18 } from "@/components/Cta18";
import { Cta19 } from "@/components/Cta19";
import { Cta20 } from "@/components/Cta20";
import { Cta21 } from "@/components/Cta21";
import { Cta22 } from "@/components/Cta22";
import { Cta23 } from "@/components/Cta23";
import { Cta24 } from "@/components/Cta24";
import { Cta26 } from "@/components/Cta26";
import { Cta27 } from "@/components/Cta27";
import { Cta28 } from "@/components/Cta28";
import { Cta29 } from "@/components/Cta29";
import { Cta30 } from "@/components/Cta30";
import { Cta31 } from "@/components/Cta31";
import { Cta32 } from "@/components/Cta32";
import { Cta34 } from "@/components/Cta34";
import { Cta35 } from "@/components/Cta35";
import { Cta36 } from "@/components/Cta36";
import { Cta39 } from "@/components/Cta39";
import { Cta40 } from "@/components/Cta40";
import { Cta41 } from "@/components/Cta41";
import { Cta42 } from "@/components/Cta42";
import { Cta43 } from "@/components/Cta43";
import { Cta44 } from "@/components/Cta44";
import { Cta45 } from "@/components/Cta45";
import { Cta46 } from "@/components/Cta46";
import { Cta47 } from "@/components/Cta47";
import { Cta48 } from "@/components/Cta48";
import { Cta49 } from "@/components/Cta49";
import { Cta50 } from "@/components/Cta50";
import { Cta51 } from "@/components/Cta51";
import { Cta52 } from "@/components/Cta52";
import { Cta53 } from "@/components/Cta53";
import { Cta54 } from "@/components/Cta54";
import { Cta55 } from "@/components/Cta55";
import { Cta56 } from "@/components/Cta56";

const ctaComponents = [
  { component: Cta1, title: "Cta 1" },
  { component: Cta2, title: "CTA 2" },
  { component: Cta3, title: "CTA 3" },
  { component: Cta4, title: "CTA 4" },
  { component: Cta5, title: "CTA 5" },
  { component: Cta6, title: "CTA 6" },
  { component: Cta7, title: "CTA 7" },
  { component: Cta8, title: "CTA 8" },
  { component: Cta9, title: "CTA 9" },
  { component: Cta10, title: "CTA 10" },
  { component: Cta11, title: "CTA 11" },
  { component: Cta12, title: "CTA 12" },
  { component: Cta13, title: "CTA 13" },
  { component: Cta14, title: "CTA 14" },
  { component: Cta15, title: "CTA 15" },
  { component: Cta16, title: "CTA 16" },
  { component: Cta17, title: "CTA 17" },
  { component: Cta18, title: "CTA 18" },
  { component: Cta19, title: "CTA 19" },
  { component: Cta20, title: "CTA 20" },
  { component: Cta21, title: "CTA 21" },
  { component: Cta22, title: "CTA 22" },
  { component: Cta23, title: "CTA 23" },
  { component: Cta24, title: "CTA 24" },
  { component: Cta25, title: "CTA 25" },
  { component: Cta26, title: "CTA 26" },
  { component: Cta27, title: "CTA 27" },
  { component: Cta28, title: "CTA 28" },
  { component: Cta29, title: "CTA 29" },
  { component: Cta30, title: "CTA 30" },
  { component: Cta31, title: "CTA 31" },
  { component: Cta32, title: "CTA 32" },
  { component: Cta33, title: "CTA 33" },
  { component: Cta34, title: "CTA 34" },
  { component: Cta35, title: "CTA 35" },
  { component: Cta36, title: "CTA 36" },
  { component: Cta37, title: "CTA 37" },
  { component: Cta38, title: "CTA 38" },
  { component: Cta39, title: "CTA 39" },
  { component: Cta40, title: "CTA 40" },
  { component: Cta41, title: "CTA 41" },
  { component: Cta42, title: "CTA 42" },
  { component: Cta43, title: "CTA 43" },
  { component: Cta44, title: "CTA 44" },
  { component: Cta45, title: "CTA 45" },
  { component: Cta46, title: "CTA 46" },
  { component: Cta47, title: "CTA 47" },
  { component: Cta48, title: "CTA 48" },
  { component: Cta49, title: "CTA 49" },
  { component: Cta50, title: "CTA 50" },
  { component: Cta51, title: "CTA 51" },
  { component: Cta52, title: "CTA 52" },
  { component: Cta53, title: "CTA 53" },
  { component: Cta54, title: "CTA 54" },
  { component: Cta55, title: "CTA 55" },
  { component: Cta56, title: "CTA 56" },
  { component: Cta57, title: "CTA 57" },
  { component: Cta58, title: "CTA 58" },

  // Add more CTAs as necessary
];

const CtasPage = () => {
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
      <h1 className='text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl'>CTAs</h1>

      {/* Search Section */}
      <Search placeholder='Search for a component (e.g., Cta 4)' onSearch={handleSearch} />

      <section className='mb-4'>
        {ctaComponents.map(({ component: CtaComponent, title }, index) => (
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
            <CtaComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default CtasPage;
