import { Header1 } from "@/components/Headers/Header1";
import { Header2 } from "@/components/Headers/Header2";
import { Header3 } from "@/components/Headers/Header3";
import { Header4 } from "@/components/Headers/Header4";
import { Header5 } from "@/components/Headers/Header5";
import { Header6 } from "@/components/Headers/Header6";
import { Header7 } from "@/components/Headers/Header7";
import { Header8 } from "@/components/Headers/Header8";
import { Header9 } from "@/components/Headers/Header9";
import { Header10 } from "@/components/Headers/Header10";
import { Header13 } from "@/components/Headers/Header13";
import { Header14 } from "@/components/Headers/Header14";
import { Header19 } from "@/components/Headers/Header19";
import { Header20 } from "@/components/Headers/Header20";
import { Header21 } from "@/components/Headers/Header21";
import { Header22 } from "@/components/Headers/Header22";
import { Header26 } from "@/components/Headers/Header26";
import { Header28 } from "@/components/Headers/Header28";
import { Header30 } from "@/components/Headers/Header30";
import { Header33 } from "@/components/Headers/Header33";
import { Header36 } from "@/components/Headers/Header36";
import { Header37 } from "@/components/Headers/Header37";
import { Header39 } from "@/components/Headers/Header39";
import { Header40 } from "@/components/Headers/Header40";
import { Header56 } from "@/components/Headers/Header56";
import { Header57 } from "@/components/Headers/Header57";
import { Header58 } from "@/components/Headers/Header58";
import { Header59 } from "@/components/Headers/Header59";
import { Header60 } from "@/components/Headers/Header60";
import { Header61 } from "@/components/Headers/Header61";
import { Header65 } from "@/components/Headers/Header65";
import { Header66 } from "@/components/Headers/Header66";
import { Header71 } from "@/components/Headers/Header71";
import { Header72 } from "@/components/Headers/Header72";
import { Header74 } from "@/components/Headers/Header74";
import { Header76 } from "@/components/Headers/Header76";
import { Header77 } from "@/components/Headers/Header77";
import { Header78 } from "@/components/Headers/Header78";
import { Header79 } from "@/components/Headers/Header79";
import { Header80 } from "@/components/Headers/Header80";
import { Header81 } from "@/components/Headers/Header81";
// import { Header82 } from "@/components/Headers/Header82";
import { Header88 } from "@/components/Headers/Header88";
import { Header102 } from "@/components/Headers/Header102";
import { Header103 } from "@/components/Headers/Header103";
import { Header104 } from "@/components/Headers/Header104";
// import { Header106 } from "@/components/Headers/Header106";
// import { Header108 } from "@/components/Headers/Header108";
// import { Header109 } from "@/components/Headers/Header109";
import { Header111 } from "@/components/Headers/Header111";
import { Header112 } from "@/components/Headers/Header112";
import { Header113 } from "@/components/Headers/Header113";
import { Header114 } from "@/components/Headers/Header114";
import { Header115 } from "@/components/Headers/Header115";
import { Header127 } from "@/components/Headers/Header127";
import { Header137 } from "@/components/Headers/Header137";
import { Header142 } from "@/components/Headers/Header142";

const headerComponents = [
  { component: Header1, title: "Header 1" },
  { component: Header2, title: "Header 2" },
  { component: Header3, title: "Header 3" },
  { component: Header4, title: "Header 4" },
  { component: Header5, title: "Header 5" },
  { component: Header6, title: "Header 6" },
  { component: Header7, title: "Header 7" },
  { component: Header8, title: "Header 8" },
  { component: Header9, title: "Header 9" },
  { component: Header10, title: "Header 10" },
  { component: Header13, title: "Header 13" },
  { component: Header14, title: "Header 14" },
  { component: Header19, title: "Header 19" },
  { component: Header20, title: "Header 20" },
  { component: Header21, title: "Header 21" },
  { component: Header22, title: "Header 22" },
  { component: Header26, title: "Header 26" },
  { component: Header28, title: "Header 28" },
  { component: Header30, title: "Header 30" },
  { component: Header33, title: "Header 33" },
  { component: Header36, title: "Header 36" },
  { component: Header37, title: "Header 37" },
  { component: Header39, title: "Header 39" },
  { component: Header40, title: "Header 40" },
  { component: Header56, title: "Header 56" },
  { component: Header57, title: "Header 57" },
  { component: Header58, title: "Header 58" },
  { component: Header59, title: "Header 59" },
  { component: Header60, title: "Header 60" },
  { component: Header61, title: "Header 61" },
  { component: Header65, title: "Header 65" },
  { component: Header66, title: "Header 66" },
  { component: Header71, title: "Header 71" },
  { component: Header72, title: "Header 72" },
  { component: Header74, title: "Header 74" },
  { component: Header76, title: "Header 76" },
  { component: Header77, title: "Header 77" },
  { component: Header78, title: "Header 78" },
  { component: Header79, title: "Header 79" },
  { component: Header80, title: "Header 80" },
  { component: Header81, title: "Header 81" },
  // { component: Header82, title: "Header 82" },
  { component: Header88, title: "Header 88" },
  { component: Header102, title: "Header 102" },
  { component: Header103, title: "Header 103" },
  { component: Header104, title: "Header 104" },
  // { component: Header106, title: "Header 106" },
  // { component: Header108, title: "Header 108" },
  // { component: Header109, title: "Header 109" },
  { component: Header111, title: "Header 111" },
  { component: Header112, title: "Header 112" },
  { component: Header113, title: "Header 113" },
  { component: Header114, title: "Header 114" },
  { component: Header115, title: "Header 115" },
  { component: Header127, title: "Header 127" },
  { component: Header137, title: "Header 137" },
  { component: Header142, title: "Header 142" },
  // Add more headers as necessary
];

const HeadersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HEADERS</h1>
      <section className="mb-4">
        {headerComponents.map(
          ({ component: HeaderComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-5 mt-5">{title}</h2>
              {/* Render the component */}
              <HeaderComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default HeadersPage;
