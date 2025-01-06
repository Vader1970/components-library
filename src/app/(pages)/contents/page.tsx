import { Content1 } from "@/components/Contents/Content1";
import { Content10 } from "@/components/Contents/Content10";
import { Content11 } from "@/components/Contents/Content11";
import { Content12 } from "@/components/Contents/Content12";
import { Content13 } from "@/components/Contents/Content13";
import { Content14 } from "@/components/Contents/Content14";
import { Content15 } from "@/components/Contents/Content15";
import { Content16 } from "@/components/Contents/Content16";
import { Content17 } from "@/components/Contents/Content17";
import { Content18 } from "@/components/Contents/Content18";
import { Content19 } from "@/components/Contents/Content19";
import { Content2 } from "@/components/Contents/Content2";
import { Content20 } from "@/components/Contents/Content20";
import { Content21 } from "@/components/Contents/Content21";
import { Content22 } from "@/components/Contents/Content22";
import { Content23 } from "@/components/Contents/Content23";
import { Content24 } from "@/components/Contents/Content24";
import { Content25 } from "@/components/Contents/Content25";
import { Content26 } from "@/components/Contents/Content26";
import { Content27 } from "@/components/Contents/Content27";
import { Content28 } from "@/components/Contents/Content28";
import { Content29 } from "@/components/Contents/Content29";
import { Content3 } from "@/components/Contents/Content3";
import { Content30 } from "@/components/Contents/Content30";
import { Content31 } from "@/components/Contents/Content31";
import { Content32 } from "@/components/Contents/Content32";
import { Content4 } from "@/components/Contents/Content4";
import { Content7 } from "@/components/Contents/Content7";
import { Content8 } from "@/components/Contents/Content8";
import { Content9 } from "@/components/Contents/Content9";

const contentComponents = [
  { component: Content1, title: "Content 1" },
  { component: Content2, title: "Content 2" },
  { component: Content3, title: "Content 3" },
  { component: Content4, title: "Content 4" },
  { component: Content7, title: "Content 7" },
  { component: Content8, title: "Content 8" },
  { component: Content9, title: "Content 9" },
  { component: Content10, title: "Content 10" },
  { component: Content11, title: "Content 11" },
  { component: Content12, title: "Content 12" },
  { component: Content13, title: "Content 13" },
  { component: Content14, title: "Content 14" },
  { component: Content15, title: "Content 15" },
  { component: Content16, title: "Content 16" },
  { component: Content17, title: "Content 17" },
  { component: Content18, title: "Content 18" },
  { component: Content19, title: "Content 19" },
  { component: Content20, title: "Content 20" },
  { component: Content21, title: "Content 21" },
  { component: Content22, title: "Content 22" },
  { component: Content23, title: "Content 23" },
  { component: Content24, title: "Content 24" },
  { component: Content25, title: "Content 25" },
  { component: Content26, title: "Content 26" },
  { component: Content27, title: "Content 27" },
  { component: Content28, title: "Content 28" },
  { component: Content29, title: "Content 29" },
  { component: Content30, title: "Content 30" },
  { component: Content31, title: "Content 31" },
  { component: Content32, title: "Content 32" },

  // Add more contents as necessary
];

const ContentsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Content
      </h1>
      <section className="mb-4">
        {contentComponents.map(
          ({ component: ContentComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              {/* Render the component */}
              <ContentComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ContentsPage;
