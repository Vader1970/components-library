import { Gallery7 } from "@/components/Gallerys/Gallery7";
import { Gallery13 } from "@/components/Gallerys/Gallery13";
import { Gallery15 } from "@/components/Gallerys/Gallery15";
import { Gallery19 } from "@/components/Gallerys/Gallery19";
import { Gallery21 } from "@/components/Gallerys/Gallery21";
import { Gallery24 } from "@/components/Gallerys/Gallery24";
import { Gallery2 } from "@/components/Gallerys/Gallery2";
import { Gallery3 } from "@/components/Gallerys/Gallery3";
import { Gallery4 } from "@/components/Gallerys/Gallery4";
import { Gallery5 } from "@/components/Gallerys/Gallery5";
import { Gallery6 } from "@/components/Gallerys/Gallery6";
import { Gallery8 } from "@/components/Gallerys/Gallery8";
import { Gallery10 } from "@/components/Gallerys/Gallery10";
import { Gallery23 } from "@/components/Gallerys/Gallery23";
import { Gallery1 } from "@/components/Gallerys/Gallery1";
import { Gallery9 } from "@/components/Gallerys/Gallery9";
import { Gallery11 } from "@/components/Gallerys/Gallery11";
import { Gallery12 } from "@/components/Gallerys/Gallery12";
import { Gallery16 } from "@/components/Gallerys/Gallery16";
import { Gallery17 } from "@/components/Gallerys/Gallery17";
import { Gallery18 } from "@/components/Gallerys/Gallery18";
import { Gallery20 } from "@/components/Gallerys/Gallery20";
import { Gallery22 } from "@/components/Gallerys/Gallery22";

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
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Gallery</h1>
      <section className='mb-4'>
        {galleryComponents.map(({ component: GalleryComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <GalleryComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default GallerysPage;
