"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Login1 } from "@/components/Login1";
import { Login2 } from "@/components/Login2";
import { Login3 } from "@/components/Login3";
import { Login4 } from "@/components/Login4";
import { Login5 } from "@/components/Login5";
// import { Login6 } from "@/components/Login6";
import { Login7 } from "@/components/Login7";
// import { Login8 } from "@/components/Login8";

const loginComponents = [
  { component: Login1, title: "Log in 1" },
  { component: Login2, title: "Log in 2" },
  { component: Login3, title: "Log in 3" },
  { component: Login4, title: "Log in 4" },
  { component: Login5, title: "Log in 5" },
  // { component: Login6, title: "Log in 6" },
  { component: Login7, title: "Log in 7" },
  // { component: Login8, title: "Log in 8" },

  // Add more logins as necessary
];

const LogInsPage = () => {
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
        Log Ins
      </h1>

      {/* Search Section */}
      <Search placeholder='Search for a component (e.g., Log In 7)' onSearch={handleSearch} />

      <section className='mb-4'>
        {loginComponents.map(({ component: LogInComponent, title }, index) => (
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
            <LogInComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default LogInsPage;
