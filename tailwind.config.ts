/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // Relume-specific content
  ],
  presets: [require("@relume_io/relume-tailwind")],

  theme: {
    extend: {}, // Your theme customizations
  },
  plugins: [], // Additional plugins if needed
} satisfies Config;
