import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        "background-secondary": "rgb(var(--background-secondary) / <alpha-value>)",
        "background-tertiary": "rgb(var(--background-tertiary) / <alpha-value>)",

        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-tertiary": "rgb(var(--text-tertiary) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",

        signal: {
          blue: "rgb(var(--signal-blue) / <alpha-value>)",
          green: "rgb(var(--signal-green) / <alpha-value>)",
          red: "rgb(var(--signal-red) / <alpha-value>)",
          yellow: "rgb(var(--signal-yellow) / <alpha-value>)",
          orange: "rgb(var(--signal-orange) / <alpha-value>)",
        },

        chart: {
          up: "rgb(var(--chart-up) / <alpha-value>)",
          down: "rgb(var(--chart-down) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
