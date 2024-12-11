import { Blog2 } from "@/components/Blogs/Blog2";
import { Blog4 } from "@/components/Blogs/Blog4";
import { Blog15 } from "@/components/Blogs/Blog15";
import { Blog16 } from "@/components/Blogs/Blog16";
import { Blog33 } from "@/components/Blogs/Blog33";
import { Blog44 } from "@/components/Blogs/Blog44";
import { Blog56 } from "@/components/Blogs/Blog56";
import { Blog67 } from "@/components/Blogs/Blog67";
import { Blog68 } from "@/components/Blogs/Blog68";

const blogComponents = [
  { component: Blog2, title: "Blog 2" },
  { component: Blog4, title: "Blog 4" },
  { component: Blog15, title: "Blog 15" },
  { component: Blog16, title: "Blog 16" },
  { component: Blog33, title: "Blog 33" },
  { component: Blog44, title: "Blog 44" },
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
