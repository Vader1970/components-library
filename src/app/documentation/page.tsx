"use client";

import React, { useState } from "react";

import { ScrollUp } from "@/components/ui/ScrollUp";

const InstallationGuide = () => {
  // Define all code snippets in an array
  const snippets = [
    {
      title: "Step 1: Install Packages",
      code: `npm i @relume_io/relume-ui @relume_io/relume-tailwind`,
    },
    {
      title: "Option 1: Using Tailwind Preset",
      code: `/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
}`,
    },
    {
      title: "Option 2: Copy/Paste the Tailwind Config",
      code: `/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // Relume-specific content
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      xxl: "1440px",
    },

    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px",
      },
    },

    maxWidth: {
      xxs: "20rem", // 320px
      xs: "25rem", // 400px
      sm: "30rem", // 480px
      md: "35rem", // 560px
      lg: "48rem", // 768px
      xl: "64rem", // 1024px
      xxl: "80rem", // 1280px
      full: "100%",
    },

    boxShadow: {
      xxsmall: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      xsmall: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      small: "0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
      medium: "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
      large: "0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)",
      xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
      xxlarge: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
      base: ["1rem", { lineHeight: "1.5" }], // 16px
      md: ["1.125rem", { lineHeight: "1.5" }], // 18px
      lg: ["1.25rem", { lineHeight: "1.5" }], // 20px
      xl: ["1.25rem", { lineHeight: "1.4" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "1.4" }], // 24px
      "3xl": ["1.75rem", { lineHeight: "1.4" }], // 28px
      "4xl": ["2rem", { lineHeight: "1.3" }], // 32px
      "5xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
      "6xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
      "7xl": ["2.75rem", { lineHeight: "1.2" }], // 40px
      "8xl": ["3rem", { lineHeight: "1.2" }], // 48px
      "9xl": ["3.25rem", { lineHeight: "1.2" }], // 52px
      "10xl": ["3.5rem", { lineHeight: "1.2" }], // 56px
    },

    extend: {
      spacing: {
        px: "1px", // 1px
        0: "0px", // 0px
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        14: "3.5rem", // 56px
        16: "4rem", // 64px
        18: "4.5rem", // 72px
        20: "5rem", // 80px
        24: "6rem", // 96px
        28: "7rem", // 112px
        30: "7.5rem", // 120px
        32: "8rem", // 128px
        36: "9rem", // 144px
        40: "10rem", // 160px
        44: "11rem", // 176px
        48: "12rem", // 192px
        52: "13rem", // 208px
        56: "14rem", // 224px
        60: "15rem", // 240px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },

      colors: {
        brand: {
          black: "#000000",
          white: "#ffffff",
        },
        neutral: {
          DEFAULT: "#666666",
          black: "#000000",
          white: "#ffffff",
          lightest: "#eeeeee",
          lighter: "#cccccc",
          light: "#aaaaaa",
          dark: "#444444",
          darker: "#222222",
          darkest: "#111111",
        },
        system: {
          "success-green": "#027a48",
          "success-green-light": "#ecfdf3",
          "error-red": "#b42318",
          "error-red-light": "#fef3f2",
        },
        background: {
          DEFAULT: "#ffffff", // bg-background, text-background, border-background,
          primary: "#ffffff", // bg-background-primary, text-background-primary, border-background-primary,
          secondary: "#eeeeee",
          tertiary: "#666666",
          alternative: "#000000",
          success: "#ecfdf3",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#aaaaaa",
          tertiary: "#444444",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#aaaaaa",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#666666",
          alternative: "#ffffff",
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: "#000000",
              lineHeight: "1.5",
              maxWidth: "100%",
              p: {
                marginTop: "1rem",
                marginBottom: "1rem",
              },
              "h1, h2, h3, h4, h5, h6": {
                fontWeight: theme("fontWeight.bold"),
              },
              h2: {
                marginBottom: theme("spacing.4"),
                marginTop: theme("spacing.6"),
                fontSize: "2.25rem",
                lineHeight: "1.2",
              },
              h3: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                fontSize: "2rem",
                lineHeight: "1.2",
              },
              h4: {
                marginBottom: theme("spacing.5"),
                marginTop: theme("spacing.6"),
                fontSize: "1.5rem",
                lineHeight: "1.4",
              },
              h5: {
                fontSize: "1.25rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              h6: {
                fontSize: "1.125rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              blockquote: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                borderLeftWidth: "0.1875rem",
                borderLeftColor: theme("colors.border.primary"),
                paddingLeft: theme("spacing.5"),
                paddingRight: theme("spacing.5"),
                paddingTop: theme("spacing.3"),
                paddingBottom: theme("spacing.3"),
                fontSize: "1.25rem",
                fontWeight: theme("fontWeight.normal"),
                lineHeight: "1.5",
              },
              figure: {
                marginTop: theme("spacing.10"),
                marginBottom: theme("spacing.10"),
              },
              figcaption: {
                marginTop: theme("spacing.2"),
                borderLeftWidth: "2px",
                borderLeftColor: theme("colors.border.DEFAULT"),
                paddingLeft: theme("spacing.2"),
                fontSize: ".875rem",
                color: theme("colors.text.primary"),
                opacity: "0.8",
                lineHeight: "1.5",
              },
              strong: {
                fontWeight: theme("fontWeight.bold"),
              },
            },
            {
              ":where(&)": {
                "> h2:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h3:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h4:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h5:first-child": {
                  marginTop: theme("spacing.5"),
                },
                "> h6:first-child": {
                  marginTop: theme("spacing.5"),
                },
              },
            },
          ],
        },
        md: {
          css: [
            {
              h2: {
                fontSize: "2.75rem",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.2",
              },
              h3: {
                fontSize: "2.25rem",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                lineHeight: "1.2",
              },
              h4: {
                fontSize: "1.75rem",
                lineHeight: "1.3",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.5"),
              },
              h5: {
                fontSize: "1.5rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              h6: {
                fontSize: "1.25rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              figure: {
                marginTop: theme("spacing.12"),
                marginBottom: theme("spacing.12"),
              },
              figcaption: {
                marginTop: theme("spacing.2"),
                fontSize: theme("fontSize.sm"),
              },
              p: {
                fontSize: "1rem",
                marginTop: "0",
                marginBottom: "1rem",
              },
              blockquote: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
              },
            },
            {
              ":where(&)": {
                "> h2:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h3:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h4:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h5:first-child": {
                  marginTop: theme("spacing.5"),
                },
                "> h6:first-child": {
                  marginTop: theme("spacing.5"),
                },
              },
            },
          ],
        },
        lg: {
          css: [
            {
              h2: {
                fontSize: "3rem",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.2",
              },
              h3: {
                fontSize: "2.5rem",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                lineHeight: "1.2",
              },
              h4: {
                fontSize: "2rem",
                lineHeight: "1.3",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.5"),
              },
              h5: {
                fontSize: "1.5rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              h6: {
                fontSize: "1.25rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.4"),
                lineHeight: "1.4",
              },
              figure: {
                marginTop: theme("spacing.12"),
                marginBottom: theme("spacing.12"),
              },
              figcaption: {
                marginTop: theme("spacing.2"),
                fontSize: theme("fontSize.sm"),
              },
              p: {
                fontSize: "1rem",
                lineHeight: "1.5",
                marginTop: "0",
                marginBottom: "1rem",
              },
              blockquote: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
              },
            },
            {
              ":where(&)": {
                "> h2:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h3:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h4:first-child": {
                  marginTop: theme("spacing.6"),
                },
                "> h5:first-child": {
                  marginTop: theme("spacing.5"),
                },
                "> h6:first-child": {
                  marginTop: theme("spacing.5"),
                },
              },
            },
          ],
        },
      }),

      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        "loop-horizontally": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-testimonials": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-135rem)" },
        },
        "loop-vertically": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "loop-vertically-top": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "loop-vertically-bottom": {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
        "marquee-horizontally": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-top": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "marquee-bottom": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
        "marquee-left": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        tabs: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-horizontally": "loop-horizontally 20s linear infinite",
        "loop-testimonials": "loop-testimonials 30s linear infinite",
        "loop-vertically": "loop-vertically 30s linear infinite",
        "loop-vertically-top": "loop-vertically-top 50s linear infinite",
        "loop-vertically-bottom": "loop-vertically-bottom 50s linear infinite",
        "marquee-horizontally": "marquee-top 30s linear infinite",
        "marquee-top": "marquee-top 50s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "marquee-bottom": "marquee-bottom 50s linear infinite",
        "marquee-left": "marquee-left 25s linear infinite",
        tabs: "tabs 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    ({ addComponents }) => {
      const newComponents = {
        ".animate-disable": {
          animationName: "none",
          animationDuration: "0s",
          "--tw-enter-opacity": "initial",
          "--tw-enter-scale": "initial",
          "--tw-enter-rotate": "initial",
          "--tw-enter-translate-x": "initial",
          "--tw-enter-translate-y": "initial",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        },
      };
      addComponents(newComponents);
    },
  ],
};
`,
    },
  ];

  // React downgrade snippet
  const reactDowngradeSnippet = {
    title: "Downgrade to React 18",
    code: `npm install react@18.2.0 react-dom@18.2.0`,
  };

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <section>
      <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4'>
        <h1 className='text-3xl font-bold mb-6'>Installation Guide</h1>
        <p className='text-base sm:text-lg text-center mb-6 text-gray-300'>
          Follow the steps below to install the component library into your project:
        </p>

        {/* Important Notes */}
        <div className='space-y-8 w-full max-w-3xl mb-6'>
          <p className='text-gray-300 text-center'>
            <strong>Note:</strong> The component library is not compatible with React 19 as Motion Animations are not
            supported at this stage. <br />
            If you are using Next.js 15 or React 19, you will need to downgrade to React 18. <br />
            Ensure that your <code>tailwind.config.js</code> file is a JavaScript file and not the default{" "}
            <code>.tsx</code> TypeScript file.
          </p>

          {/* React Downgrade Snippet */}
          <div className='relative bg-black rounded-lg p-6 mt-6'>
            <h2 className='text-base sm:text-lg font-semibold mb-4'>{reactDowngradeSnippet.title}</h2>
            <pre className='text-sm font-mono text-gray-300 whitespace-pre-wrap'>{reactDowngradeSnippet.code}</pre>
            <button
              onClick={() => handleCopy(999, reactDowngradeSnippet.code)}
              className='absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded'
            >
              {copiedIndex === 999 ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Code Snippets */}
        <div className='space-y-8 w-full max-w-3xl'>
          {snippets.map((snippet, index) => (
            <div key={index} className='relative bg-black rounded-lg p-6'>
              <h2 className='text-base sm:text-lg font-semibold mb-4'>{snippet.title}</h2>
              <pre className='text-sm font-mono text-gray-300 whitespace-pre-wrap'>{snippet.code}</pre>
              <button
                onClick={() => handleCopy(index, snippet.code)}
                className='absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded'
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ScrollUp />
    </section>
  );
};

export default InstallationGuide;