import { Signup1 } from "@/components/Signups/Signup1";
import { Signup2 } from "@/components/Signups/Signup2";
import { Signup5 } from "@/components/Signups/Signup5";
import { Signup6 } from "@/components/Signups/Signup6";
import { Signup7 } from "@/components/Signups/Signup7";
import { Signup8 } from "@/components/Signups/Signup8";
import { Signup9 } from "@/components/Signups/Signup9";

const signupComponents = [
  { component: Signup1, title: "Sign Up 1" },
  { component: Signup2, title: "Sign Up 2" },
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
      <h1 className="text-2xl font-bold mb-4">Sign UpS</h1>
      <section className="mb-4">
        {signupComponents.map(
          ({ component: SignupComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
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
