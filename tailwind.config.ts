import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10192E",
          light: "#1C2A47",
          soft: "#2B3B5C",
        },
        gold: {
          DEFAULT: "#C08A28",
          soft: "#F6ECD9",
        },
        sage: {
          DEFAULT: "#6B8F5A",
          soft: "#E7EEE3",
        },
        teal: {
          DEFAULT: "#1F8A7A",
          soft: "#E1F1EE",
        },
        cream: "#F7F3EC",
        charcoal: "#1E1E22",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        driftSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "drift-slow": "driftSlow 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
