import { Navbar1 } from "@/components/Navbars/Navbar1";
import { Navbar2 } from "@/components/Navbars/Navbar2";
import { Navbar3 } from "@/components/Navbars/Navbar";
import { Navbar7 } from "@/components/Navbars/Navbar7";
import { Navbar8 } from "@/components/Navbars/Navbar8";
import { Navbar10 } from "@/components/Navbars/Navbar10";

const navComponents = [
  { component: Navbar1, title: "Navbar 1" },
  { component: Navbar2, title: "Navbar 2" },
  { component: Navbar3, title: "Navbar 3" },
  { component: Navbar7, title: "Navbar 7" },
  { component: Navbar8, title: "Navbar 8" },
  { component: Navbar10, title: "Navbar 10" },
];

const NavbarPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Navbars</h1>
      <section className="mb-4">
        {navComponents.map(({ component: NavComponent, title }, index) => (
          <div key={index}>
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component directly */}
            <NavComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default NavbarPage;
