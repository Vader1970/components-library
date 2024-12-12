/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-require-imports */

// const { join } = require("path");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // Relume-specific content
  ],
  presets: [require("@relume_io/relume-tailwind")], // Reintroduce Relume's preset
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
      xxs: "20rem",
      xs: "25rem",
      sm: "30rem",
      md: "35rem",
      lg: "48rem",
      xl: "64rem",
      xxl: "80rem",
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
      xs: ["0.75rem", { lineHeight: "1.5" }],
      sm: ["0.875rem", { lineHeight: "1.5" }],
      base: ["1rem", { lineHeight: "1.5" }],
      md: ["1.125rem", { lineHeight: "1.5" }],
      lg: ["1.25rem", { lineHeight: "1.5" }],
      xl: ["1.25rem", { lineHeight: "1.4" }],
      "2xl": ["1.5rem", { lineHeight: "1.4" }],
      "3xl": ["1.75rem", { lineHeight: "1.4" }],
      "4xl": ["2rem", { lineHeight: "1.3" }],
      "5xl": ["2.25rem", { lineHeight: "1.2" }],
      "6xl": ["2.5rem", { lineHeight: "1.2" }],
      "7xl": ["2.75rem", { lineHeight: "1.2" }],
      "8xl": ["3rem", { lineHeight: "1.2" }],
      "9xl": ["3.25rem", { lineHeight: "1.2" }],
      "10xl": ["3.5rem", { lineHeight: "1.2" }],
    },
    extend: {
      spacing: {
        px: "1px",
        0: "0px",
        1: "0.25rem",
        2: "0.5rem",
        // Add your spacing here...
      },
      colors: {
        brand: {
          black: "#000000",
          white: "#ffffff",
        },
        // Add your colors here...
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      const newComponents = {
        ".animate-disable": {
          animationName: "none",
          animationDuration: "0s",
        },
      };
      addComponents(newComponents);
    },
  ],
};
