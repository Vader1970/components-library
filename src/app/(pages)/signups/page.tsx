import { Signup1 } from "@/components/Signups/Signup1";
import { Signup2 } from "@/components/Signups/Signup2";
import { Signup3 } from "@/components/Signups/Signup3";
import { Signup4 } from "@/components/Signups/Signup4";
import { Signup5 } from "@/components/Signups/Signup5";
import { Signup6 } from "@/components/Signups/Signup6";
import { Signup7 } from "@/components/Signups/Signup7";
import { Signup8 } from "@/components/Signups/Signup8";
import { Signup9 } from "@/components/Signups/Signup9";

const signupComponents = [
  { component: Signup1, title: "Sign Up 1" },
  { component: Signup2, title: "Sign Up 2" },
  { component: Signup3, title: "Sign Up 3" },
  { component: Signup4, title: "Sign Up 4" },
  { component: Signup5, title: "Sign Up 5" },
  { component: Signup6, title: "Sign Up 6" },
  { component: Signup7, title: "Sign Up 7" },
  { component: Signup8, title: "Sign Up 8" },
  { component: Signup9, title: "Sign Up 9" },

  // Add more signups as necessary
];

const SignupsPage = () => {
  return (
    <div>
      <h1 className="text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl">
        Sign UpS
      </h1>
      <section className="mb-4">
        {signupComponents.map(
          ({ component: SignupComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="bg-black text-white text-4xl font-bold text-center py-10">
                {title}
              </h2>
              {/* Render the component */}
              <SignupComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default SignupsPage;
