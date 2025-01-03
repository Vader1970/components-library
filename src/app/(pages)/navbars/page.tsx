import { Navbar1 } from "@/components/Navbars/Navbar1";
import { Navbar2 } from "@/components/Navbars/Navbar2";
import { Navbar3 } from "@/components/Navbars/Navbar";
import { Navbar7 } from "@/components/Navbars/Navbar7";
import { Navbar8 } from "@/components/Navbars/Navbar8";
import { Navbar10 } from "@/components/Navbars/Navbar10";
import { Navbar12 } from "@/components/Navbars/Navbar12";
import { Navbar16 } from "@/components/Navbars/Navbar16";
import { Navbar17 } from "@/components/Navbars/Navbar17";
import { Navbar18 } from "@/components/Navbars/Navbar18";
import { Navbar19 } from "@/components/Navbars/Navbar19";
import { Navbar20 } from "@/components/Navbars/Navbar20";
import { Navbar21 } from "@/components/Navbars/Navbar21";
import { Navbar22 } from "@/components/Navbars/Navbar22";
import { Navbar5 } from "@/components/Navbars/Navbar5";
import { Navbar11 } from "@/components/Navbars/Navbar11";
import { Navbar4 } from "@/components/Navbars/Navbar4";
import { Navbar6 } from "@/components/Navbars/Navbar6";
import { Navbar13 } from "@/components/Navbars/Navbar13";
//Navbar14 sticky nav
import { Navbar14 } from "@/components/Navbars/Navbar14";
import { Navbar15 } from "@/components/Navbars/Navbar15";
import { Navbar9 } from "@/components/Navbars/Navbar9";

const navComponents = [
  { component: Navbar1, title: "Navbar 1" },
  { component: Navbar2, title: "Navbar 2" },
  { component: Navbar3, title: "Navbar 3" },
  { component: Navbar4, title: "Navbar 4" },
  { component: Navbar5, title: "Navbar 5" },
  { component: Navbar6, title: "Navbar 6" },
  { component: Navbar7, title: "Navbar 7" },
  { component: Navbar8, title: "Navbar 8" },
  { component: Navbar9, title: "Navbar 9" },
  { component: Navbar10, title: "Navbar 10" },
  { component: Navbar11, title: "Navbar 11" },
  { component: Navbar12, title: "Navbar 12" },
  { component: Navbar13, title: "Navbar 13" },
  //Navbar 14 stcky nav
  { component: Navbar14, title: "Navbar 14" },
  { component: Navbar15, title: "Navbar 15" },
  { component: Navbar16, title: "Navbar 16" },
  { component: Navbar17, title: "Navbar 17" },
  { component: Navbar18, title: "Navbar 18" },
  { component: Navbar19, title: "Navbar 19" },
  { component: Navbar20, title: "Navbar 20" },
  { component: Navbar21, title: "Navbar 21" },
  { component: Navbar22, title: "Navbar 22" },
];

const NavbarPage = () => {
  return (
    <div>
      <h1 className='text-8xl text-center font-bold mb-4'>Navbars</h1>
      <section className='mb-4'>
        {navComponents.map(({ component: NavComponent, title }, index) => (
          <div key={index} className='mb-[1000px]'>
            <h2 className='text-4xl font-bold text-center mt-20 mb-5'>{title}</h2>
            {/* Render the component directly */}
            <NavComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default NavbarPage;
