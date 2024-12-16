import { Blog2 } from "@/components/Blogs/Blog2";
import { Blog4 } from "@/components/Blogs/Blog4";
import { Blog15 } from "@/components/Blogs/Blog15";
import { Blog16 } from "@/components/Blogs/Blog16";
import { Blog33 } from "@/components/Blogs/Blog33";
import { Blog44 } from "@/components/Blogs/Blog44";
import { Blog56 } from "@/components/Blogs/Blog56";
import { Blog67 } from "@/components/Blogs/Blog67";
import { Blog68 } from "@/components/Blogs/Blog68";
import { Blog6 } from "@/components/Blogs/Blog6";
import { Blog10 } from "@/components/Blogs/Blog10";
import { Blog52 } from "@/components/Blogs/Blog52";
import { Blog41 } from "@/components/Blogs/Blog41";
import { Blog1 } from "@/components/Blogs/Blog1";
import { Blog3 } from "@/components/Blogs/Blog3";
import { Blog5 } from "@/components/Blogs/Blog5";
import { Blog7 } from "@/components/Blogs/Blog7";
import { Blog8 } from "@/components/Blogs/Blog8";
import { Blog9 } from "@/components/Blogs/Blog9";
import { Blog11 } from "@/components/Blogs/Blog11";
import { Blog12 } from "@/components/Blogs/Blog12";
import { Blog13 } from "@/components/Blogs/Blog13";
import { Blog14 } from "@/components/Blogs/Blog14";
import { Blog17 } from "@/components/Blogs/Blog17";
import { Blog18 } from "@/components/Blogs/Blog18";
import { Blog19 } from "@/components/Blogs/Blog19";
import { Blog20 } from "@/components/Blogs/Blog20";

const blogComponents = [
  { component: Blog1, title: "Blog 1" },
  { component: Blog2, title: "Blog 2" },
  { component: Blog3, title: "Blog 3" },
  { component: Blog4, title: "Blog 4" },
  { component: Blog5, title: "Blog 5" },
  { component: Blog6, title: "Blog 6" },
  { component: Blog7, title: "Blog 7" },
  { component: Blog8, title: "Blog 8" },
  { component: Blog9, title: "Blog 9" },
  { component: Blog10, title: "Blog 10" },
  { component: Blog11, title: "Blog 11" },
  { component: Blog12, title: "Blog 12" },
  { component: Blog13, title: "Blog 13" },
  { component: Blog14, title: "Blog 14" },
  { component: Blog15, title: "Blog 15" },
  { component: Blog16, title: "Blog 16" },
  { component: Blog17, title: "Blog 17" },
  { component: Blog18, title: "Blog 18" },
  { component: Blog19, title: "Blog 19" },
  { component: Blog20, title: "Blog 20" },
  { component: Blog33, title: "Blog 33" },
  { component: Blog41, title: "Blog 41" },
  { component: Blog44, title: "Blog 44" },
  { component: Blog52, title: "Blog 52" },
  { component: Blog56, title: "Blog 56" },
  { component: Blog67, title: "Blog 67" },
  { component: Blog68, title: "Blog 68" },

  // Add more blogs as necessary
];

const BlogsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <section className="mb-4">
        {blogComponents.map(({ component: BlogComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className="text-xl mb-2">{title}</h2>
            {/* Render the component */}
            <BlogComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogsPage;
