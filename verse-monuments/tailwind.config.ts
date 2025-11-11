import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        ash: "#A7A7A7",
        hairline: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        unifraktur: ["var(--font-unifraktur)"],
        inter: ["var(--font-inter)"],
        league: ["var(--font-league)"],
      },
    },
  },
  plugins: [],
};

export default config;
