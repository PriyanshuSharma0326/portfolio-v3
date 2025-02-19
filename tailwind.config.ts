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
        almostWhite: '#FFFFFCAA',
      },
      fontSize: {
        // 'paragraph-text': '32px',
      },
      lineHeight: {
        // 'paragraph-text': '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
