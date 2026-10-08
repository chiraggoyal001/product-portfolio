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
        "surface-light": "#F0EFEB",
        "text-primary": "#FFFFFF",
        "text-secondary": "#666666",
        "text-ink": "#111111",
        primary: "#FFFFFF",
        secondary: "#666666",
        ink: "#111111",
        accent: "#E84020",
        "border-light": "#000000",
        "border-dark": "rgba(255, 255, 255, 0.12)",
      },
      borderColor: {
        light: "#000000",
        dark: "rgba(255, 255, 255, 0.12)",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#666666",
        ink: "#111111",
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
      keyframes: {
        scrollBob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        livePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.9)" },
        },
      },
      animation: {
        scrollBob: "scrollBob 2s ease-in-out infinite",
        livePulse: "livePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
