import { Signup1 } from "@/components/Signups/Signup1";
import { Signup6 } from "@/components/Signups/Signup6";
import { Signup7 } from "@/components/Signups/Signup7";

const signupComponents = [
  { component: Signup1, title: "Sign Up 1" },
  { component: Signup6, title: "Sign Up 6" },
  { component: Signup7, title: "Sign Up 7" },

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
