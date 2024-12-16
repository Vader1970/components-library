import { Login1 } from "@/components/LogIns/Login1";
import { Login2 } from "@/components/LogIns/Login2";
import { Login5 } from "@/components/LogIns/Login5";
import { Login6 } from "@/components/LogIns/LogIn6";
import { Login7 } from "@/components/LogIns/Login7";
import { Login8 } from "@/components/LogIns/LogIn8";

const loginComponents = [
  { component: Login1, title: "Log In 1" },
  { component: Login2, title: "Log In 2" },
  { component: Login5, title: "Log In 5" },
  { component: Login6, title: "Log In 6" },
  { component: Login7, title: "Log In 7" },
  { component: Login8, title: "Log In 8" },

  // Add more logins as necessary
];

const LogInsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Log Ins</h1>
      <section className="mb-4">
        {loginComponents.map(({ component: LogInComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <LogInComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default LogInsPage;
