import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: "#45FFCA",
        gray1: '#FFFFFCCF',
        almostWhite: '#FFFFFCDF',
        darkBlue: '#102531',
        darkBlue1: '#192E48',
      },
    },
  },
  plugins: [],
} satisfies Config;
