import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white items-center space-y-8 text-center py-10 px-5">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Welcome to the Component Library
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Browse our collection of beautiful and reusable components. Explore
          our library of 1,288 components built with Next.js, Tailwind CSS, and
          TypeScript. Click on any category to dive in and discover the perfect
          components for your project.
        </p>

        <div className="rounded-lg border p-5">
          {/* Documentation Link */}
          <Link
            href="/documentation"
            className="inline-block text-base font-bold text-blue-500 hover:text-blue-400 underline mt-2"
          >
            View Documentation for Installation
          </Link>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Documentation for installing dependency and Tailwind configuration.
          </p>

          {/* Figma File Link */}
          <a
            href="https://www.figma.com/files/team/1399532825502951659/project/324092661/Component-Library?fuid=1399532822001607492"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-blue-500 hover:text-blue-400 underline mt-2"
          >
            Open Figma Component Library
          </a>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Must have own Figma account to access.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            title: "Navbars",
            description: "Navigation components for easy site exploration",
            href: "/navbars",
          },
          {
            title: "Headers",
            description: "Eye-catching headers for your website",
            href: "/headers",
          },
          {
            title: "Layouts",
            description:
              "Flexible layout components for structuring your pages",
            href: "/layouts",
          },
          {
            title: "Contents",
            description: "Flexible content organization and display layouts",
            href: "/contents",
          },
          {
            title: "CTAs",
            description:
              "Powerful call-to-action components to drive user engagement",
            href: "/ctas",
          },
          {
            title: "Testimonials",
            description:
              "Compelling social proof components to build trust and credibility",
            href: "/testimonials",
          },
          {
            title: "Gallery",
            description: "Visually stunning image and media display components",
            href: "/gallerys",
          },
          {
            title: "Blogs",
            description: "Beautifully structured blog post and article layouts",
            href: "/blogs",
          },
          {
            title: "Events",
            description:
              "Clean and informative event listing and detail components",
            href: "/events",
          },
          {
            title: "Logos",
            description: "Versatile logo display and branding components",
            href: "/logos",
          },
          {
            title: "Banners",
            description:
              "Eye-catching promotional and informational banner designs",
            href: "/banners",
          },
          {
            title: "Products",
            description: "Attractive product card and listing components",
            href: "/products",
          },
          {
            title: "Portfolios",
            description:
              "Elegant showcase components to highlight your best work",
            href: "/portfolios",
          },
          {
            title: "Stats",
            description:
              "Visually appealing statistical and data visualization layouts",
            href: "/stats",
          },
          {
            title: "Pricings",
            description: "Clear and compelling pricing table designs",
            href: "/pricings",
          },
          {
            title: "Comparisons",
            description:
              "Side-by-side comparison components for easy decision-making",
            href: "/comparisons",
          },
          {
            title: "Timelines",
            description:
              "Chronological and visual timeline components for storytelling",
            href: "/timelines",
          },
          {
            title: "Teams",
            description:
              "Elegant team member showcase and organizational layouts",
            href: "/teams",
          },
          {
            title: "Careers",
            description:
              "Professional job listing and career opportunity displays",
            href: "/careers",
          },
          {
            title: "FAQs",
            description:
              "Clean and organized frequently asked questions sections",
            href: "/faqs",
          },
          {
            title: "Contacts",
            description:
              "Professional contact form and information display layouts",
            href: "/contacts",
          },
          {
            title: "Footers",
            description: "Comprehensive and stylish website footer designs",
            href: "/footers",
          },
          {
            title: "Forms",
            description:
              "Responsive and intuitive form designs for seamless user interactions",
            href: "/forms",
          },
          {
            title: "Sign Ups",
            description:
              "Attractive and conversion-focused user registration interfaces",
            href: "/signups",
          },
          {
            title: "Log Ins",
            description: "Secure and user-friendly authentication interfaces",
            href: "/logins",
          },
          {
            title: "Modals",
            description:
              "Interactive popup windows for alerts, confirmations, and additional content",
            href: "/modals",
          },
          {
            title: "Links",
            description:
              "Stylish and functional hyperlink and navigation components",
            href: "/links",
          },
          {
            title: "Application Shells",
            description:
              "Comprehensive application framework and container components",
            href: "/applicationshells",
          },
          {
            title: "Description Lists",
            description:
              "Structured and readable description and detail components",
            href: "/descriptionlists",
          },
          {
            title: "Stat Cards",
            description:
              "Concise and visually engaging statistical information cards",
            href: "/statcards",
          },
          {
            title: "Grid Lists",
            description: "Responsive grid-based list and display components",
            href: "/gridlists",
          },
          {
            title: "Stacked Lists",
            description:
              "Vertically organized list components with clean designs",
            href: "/stackedlists",
          },
          {
            title: "Tables",
            description: "Comprehensive and responsive data table layouts",
            href: "/tables",
          },
        ].map((category) => (
          <Link key={category.href} href={category.href}>
            <Card className="h-full group relative overflow-hidden p-6 hover:scale-105 ease-in-out duration-300">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <ArrowRight className="mt-4 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
