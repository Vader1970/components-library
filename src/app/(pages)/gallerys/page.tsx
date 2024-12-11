import { Gallery7 } from "@/components/Gallerys/Gallery7";
import { Gallery13 } from "@/components/Gallerys/Gallery13";
import { Gallery15 } from "@/components/Gallerys/Gallery15";
import { Gallery19 } from "@/components/Gallerys/Gallery19";
import { Gallery21 } from "@/components/Gallerys/Gallery21";
import { Gallery24 } from "@/components/Gallerys/Gallery24";

const galleryComponents = [
  { component: Gallery7, title: "Gallery 7" },
  { component: Gallery13, title: "Gallery 13" },
  { component: Gallery15, title: "Gallery 15" },
  { component: Gallery19, title: "Gallery 19" },
  { component: Gallery21, title: "Gallery 21" },
  { component: Gallery24, title: "Gallery 24" },

  // Add more gallerys as necessary
];

const GallerysPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <section className="mb-4">
        {galleryComponents.map(
          ({ component: GalleryComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
              {/* Render the component */}
              <GalleryComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default GallerysPage;
