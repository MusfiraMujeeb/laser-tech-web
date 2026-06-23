import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./App/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          ivory: '#F8F6F2',
          beige: '#F1ECE4',
          forest: '#26322E',
          brass: '#C08A3E',
          gold: '#7C5A28',
          sand: '#F3E8D6',
          border: '#D5BC8D'
        }
      }
    },
  },
  plugins: [],
};
export default config;
