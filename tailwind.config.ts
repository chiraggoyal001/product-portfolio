import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        surface: "#F0EFEB",
        "text-primary": "#FFFFFF",
        "text-secondary": "#666666",
        "text-ink": "#111111",
        accent: "#E84020",
        "border-light": "#000000",
        "border-dark": "rgba(255, 255, 255, 0.12)",
      },
      letterSpacing: {
        "tighter-display": "-5.9px",
        "tighter-headline": "-1.8px",
        "tighter-label": "-1.1px",
      },
      borderRadius: {
        pill: "9999px",
        control: "50px",
        card: "2px",
        tight: "5px",
      },
      fontFamily: {
        space: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
