import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 0%",
          },
          "25%": {
            "background-size": "400% 400%",
            "background-position": "100% 0%",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "100% 100%",
          },
          "75%": {
            "background-size": "400% 400%",
            "background-position": "0% 100%",
          },
        },
        "border-width": {
          "0%, 100%": { "border-width": "2px" },
          "50%": { "border-width": "4px" },
        },
        "border-color": {
          "0%, 100%": {
            "border-color": "rgba(99, 102, 241, 0.5)",
          },
          "33%": {
            "border-color": "rgba(168, 85, 247, 0.5)",
          },
          "66%": {
            "border-color": "rgba(236, 72, 153, 0.5)",
          },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 8s ease infinite",
        "border-width": "border-width 4s ease infinite",
        "border-color": "border-color 4s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
