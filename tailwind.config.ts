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
        cream: "var(--cream)",
        moss: "var(--moss)",
        lilyPad: "var(--lily-pad)",
        pine: "var(--pine)",
        darkPine: "var(--darkPine)",
        primary: "var(--primary)",
      },
      fontFamily: {
        'young-serif': ['Young Serif', 'serif'],
        'notable': ['Notable', 'sans-serif'],
        'limelight': ['Limelight', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
