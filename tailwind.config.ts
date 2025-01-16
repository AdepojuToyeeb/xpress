/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        pending: "#FF9900",
        danger: "#FF0000",
        success: "#27A713",
        primary: {
          DEFAULT: "#039BF0",
          foreground: "#1A1619",
        },
        secondary: {
          DEFAULT: "#606060",
          foreground: "#F5F6F8",
        },
        border: {
          DEFAULT: "#CCCCCC",
        },
      },
      boxShadow: {
        custom: "0 -4px 12px 0 rgba(0,0,0,0.04)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        mono: ["var(--font-roboto-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
