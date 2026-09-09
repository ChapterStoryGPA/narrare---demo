import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F1ECE0",
        parchment: "#E8DFCC",
        "parchment-deep": "#DCD1B8",
        ink: "#211E19",
        charcoal: "#33302A",
        "charcoal-deep": "#1A1712",
        muted: "#6E6353",
        "muted-soft": "#8A8070",
        brass: "#B08D57",
        "brass-soft": "#C3A47B",
        line: "rgba(33,30,25,0.16)",
        "line-on-dark": "rgba(241,236,224,0.20)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.5s ease",
      },
    },
  },
  plugins: [],
};

export default config;
