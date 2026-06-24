import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          ivory: '#F8F6F2',
          forest: '#26322E',
          brass: '#C08A3E',
        }
      }
    },
  },
  plugins: [],
};
export default config;
