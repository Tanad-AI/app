import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
        "19": "repeat(19, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
        "21": "repeat(21, minmax(0, 1fr))",
        "22": "repeat(22, minmax(0, 1fr))",
        "23": "repeat(23, minmax(0, 1fr))",
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#FEFBF6", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              50: "#F5FAF9",
              100: "#E5F5F1",
              200: "#D6EFE9",
              300: "#C6E7E0",
              400: "#B6DDD4",
              500: "#A0CEC4",
              600: "#80BAAE",
              700: "#43766C",
              800: "#35685E",
              900: "#1D3732",
              DEFAULT: "#43766C",
            },
            secondary: {
              50: "#FFF6F0",
              100: "#FFEADE",
              200: "#FFDFCF",
              300: "#FFD5BF",
              400: "#FFC9AD",
              500: "#FFB995",
              600: "#FF9B6A",
              700: "#E06013",
              800: "#CF5A14",
              900: "#9F430D",
              DEFAULT: "#FFDFCF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
