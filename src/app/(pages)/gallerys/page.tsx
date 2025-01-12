"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Gallery7 } from "@/components/Gallery7";
import { Gallery13 } from "@/components/Gallery13";
import { Gallery15 } from "@/components/Gallery15";
import { Gallery19 } from "@/components/Gallery19";
import { Gallery21 } from "@/components/Gallery21";
import { Gallery24 } from "@/components/Gallery24";
import { Gallery2 } from "@/components/Gallery2";
import { Gallery3 } from "@/components/Gallery3";
import { Gallery4 } from "@/components/Gallery4";
import { Gallery5 } from "@/components/Gallery5";
import { Gallery6 } from "@/components/Gallery6";
import { Gallery8 } from "@/components/Gallery8";
import { Gallery10 } from "@/components/Gallery10";
import { Gallery23 } from "@/components/Gallery23";
import { Gallery1 } from "@/components/Gallery1";
import { Gallery9 } from "@/components/Gallery9";
import { Gallery11 } from "@/components/Gallery11";
import { Gallery12 } from "@/components/Gallery12";
import { Gallery16 } from "@/components/Gallery16";
import { Gallery17 } from "@/components/Gallery17";
import { Gallery18 } from "@/components/Gallery18";
import { Gallery20 } from "@/components/Gallery20";
import { Gallery22 } from "@/components/Gallery22";

const galleryComponents = [
  { component: Gallery1, title: "Gallery 1" },
  { component: Gallery2, title: "Gallery 2" },
  { component: Gallery3, title: "Gallery 3" },
  { component: Gallery4, title: "Gallery 4" },
  { component: Gallery5, title: "Gallery 5" },
  { component: Gallery6, title: "Gallery 6" },
  { component: Gallery7, title: "Gallery 7" },
  { component: Gallery8, title: "Gallery 8" },
  { component: Gallery9, title: "Gallery 9" },
  { component: Gallery10, title: "Gallery 10" },
  { component: Gallery11, title: "Gallery 11" },
  { component: Gallery12, title: "Gallery 12" },
  { component: Gallery13, title: "Gallery 13" },
  { component: Gallery15, title: "Gallery 15" },
  { component: Gallery16, title: "Gallery 16" },
  { component: Gallery17, title: "Gallery 17" },
  { component: Gallery18, title: "Gallery 18" },
  { component: Gallery19, title: "Gallery 19" },
  { component: Gallery20, title: "Gallery 20" },
  { component: Gallery21, title: "Gallery 21" },
  { component: Gallery22, title: "Gallery 22" },
  { component: Gallery23, title: "Gallery 23" },
  { component: Gallery24, title: "Gallery 24" },

  // Add more gallerys as necessary
];

const GallerysPage = () => {
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
      <h1 className='text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl'>
        Gallery
      </h1>

      {/* Search Section */}
      <Search placeholder='Search for a component (e.g., Gallery 9)' onSearch={handleSearch} />

      <section className='mb-4'>
        {galleryComponents.map(({ component: GalleryComponent, title }, index) => (
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
            <GalleryComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default GallerysPage;
