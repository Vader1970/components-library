import { Banner1 } from "@/components/Banner1";
import { Banner10 } from "@/components/Banner10";
import { Banner11 } from "@/components/Banner11";
import { Banner12 } from "@/components/Banner12";
import { Banner13 } from "@/components/Banner13";
import { Banner14 } from "@/components/Banner14";
import { Banner15 } from "@/components/Banner15";
import { Banner16 } from "@/components/Banner16";
import { Banner2 } from "@/components/Banner2";
import { Banner3 } from "@/components/Banner3";
import { Banner4 } from "@/components/Banner4";
import { Banner5 } from "@/components/Banner5";
import { Banner6 } from "@/components/Banner6";
import { Banner7 } from "@/components/Banner7";
import { Banner8 } from "@/components/Banner8";
import { Banner9 } from "@/components/Banner9";

const bannerComponents = [
  { component: Banner1, title: "Banner 1" },
  { component: Banner2, title: "Banner 2" },
  { component: Banner3, title: "Banner 3" },
  { component: Banner4, title: "Banner 4" },
  { component: Banner5, title: "Banner 5" },
  { component: Banner6, title: "Banner 6" },
  { component: Banner7, title: "Banner 7" },
  { component: Banner8, title: "Banner 8" },
  { component: Banner9, title: "Banner 9" },
  { component: Banner10, title: "Banner 10" },
  { component: Banner11, title: "Banner 11" },
  { component: Banner12, title: "Banner 12" },
  { component: Banner13, title: "Banner 13" },
  { component: Banner14, title: "Banner 14" },
  { component: Banner15, title: "Banner 15" },
  { component: Banner16, title: "Banner 16" },

  // Add more banners as necessary
];

const BannersPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Banners
      </h1>
      <section>
        {bannerComponents.map(
          ({ component: BannerComponent, title }, index) => (
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
              <div className="py-10">
                {/* Render the component */}
                <BannerComponent />
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default BannersPage;
