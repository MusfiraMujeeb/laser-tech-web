import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        ivory: "#FBF8F2",
        surface: "#FFFDFC",
        sand: "#F1E5D3",
        beige: "#E9DED0",

        /* Brand darks */
        walnut: "#2B1A12",
        espresso: "#1A100C",
        charcoal: "#302823",
        taupe: "#70645B",

        /* Accents */
        copper: "#B86632",
        "copper-dark": "#954A24",
        oak: "#C8945F",
        gold: "#D7A05D",

        /* Borders */
        "wood-border": "#E3D4C3",

        /* WhatsApp & status */
        whatsapp: "#198754",
        "whatsapp-dark": "#146C43",
        success: "#E8F5EC",

        /* Errors */
        error: "#B42318",
        "error-bg": "#FDECEC",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 4px 16px rgba(43, 26, 18, 0.05)",
        "soft-lg": "0 12px 32px rgba(43, 26, 18, 0.08)",
        "copper": "0 8px 24px rgba(184, 102, 50, 0.25)",
      },
      borderRadius: {
        "card": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;