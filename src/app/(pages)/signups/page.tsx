"use client";

import { Search } from "@/components/ui/Search";

import { ScrollUp } from "@/components/ui/ScrollUp";

import { Signup1 } from "@/components/Signup1";
import { Signup2 } from "@/components/Signup2";
import { Signup3 } from "@/components/Signup3";
import { Signup4 } from "@/components/Signup4";
import { Signup5 } from "@/components/Signup5";
import { Signup6 } from "@/components/Signup6";
import { Signup7 } from "@/components/Signup7";
import { Signup8 } from "@/components/Signup8";
import { Signup9 } from "@/components/Signup9";

const signupComponents = [
  { component: Signup1, title: "Sign up 1" },
  { component: Signup2, title: "Sign up 2" },
  { component: Signup3, title: "Sign up 3" },
  { component: Signup4, title: "Sign up 4" },
  { component: Signup5, title: "Sign up 5" },
  { component: Signup6, title: "Sign up 6" },
  { component: Signup7, title: "Sign up 7" },
  { component: Signup8, title: "Sign up 8" },
  { component: Signup9, title: "Sign up 9" },

  // Add more signups as necessary
];

const SignupsPage = () => {
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
        Sign UpS
      </h1>

      {/* Search Section */}
      <Search placeholder='Search for a component (e.g., Sign Ups 9)' onSearch={handleSearch} />

      <section className='mb-4'>
        {signupComponents.map(({ component: SignupComponent, title }, index) => (
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
            <SignupComponent />
          </div>
        ))}
      </section>
      <ScrollUp />
    </div>
  );
};

export default SignupsPage;
