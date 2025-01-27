import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

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
      },
      fontFamily: {
        ...fontFamily,
        public: ["var(--font-public)"],
      },
    },
  },
  plugins: [
    plugin(({ addBase, addUtilities, addComponents }) => {
      addBase({});
      addUtilities({});
      addComponents({
        ".text-title": {
          "@apply text-[36px] lg:text-[80px] font-semibold": {},
        },
        ".text-hero": {
          "@apply text-[40px] leading-[52px] font-normal": {},
        },
        ".text-body-title": {
          "@apply text-[18px] leading-[150%] font-semibold": {},
        },
        ".text-body-lg": {
          "@apply text-[18px] leading-[150%] font-normal": {},
        },
        ".text-body-sm": {
          "@apply text-[16px] leading-[150%] font-medium": {},
        },
        ".wrapper": {
          "@apply max-w-[1220px] w-full mx-auto px-4": {},
        },
        ".py-section": {
          "@apply py-20 md:py-28 lg:py-32": {},
        },
        ".pt-section": {
          "@apply pt-20 md:pt-28 lg:pt-32": {},
        },
      });
    }),
  ],
} satisfies Config;
