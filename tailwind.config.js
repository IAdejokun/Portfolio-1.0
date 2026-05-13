/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // class-based, so we control the root element
  theme: {
    extend: {
      colors: {
        // Background system — deep navy-black, not pure black.
        // Pure black is harsh; #0a0a0f reads as black but has tone.
        bg: {
          base: "#0a0a0f", // page background
          surface: "#13131a", // cards, elevated surfaces
          subtle: "#1c1c25", // hover states, borders on dark
        },

        // Text — warm-leaning whites for the editorial feel
        ink: {
          primary: "#f5f1e8", // headings (warm cream, not pure white)
          secondary: "#a8a59a", // body text
          tertiary: "#6b6960", // captions, metadata
        },

        // Accent — a single distinctive color, used sparingly
        accent: {
          DEFAULT: "#d4a574", // warm gold, hand-picked to pair with serif
          muted: "#d4a57430", // 18% alpha for backgrounds
        },

        // Project-specific accents — each project gets its own signature color
        // visible on its card, deep-dive page, and any related elements.
        securevault: "#7dd3fc", // sky blue — security, calm
        smartcart: "#86efac", // mint green — growth, intelligence
      },
      fontFamily: {
        // Serif for headings — Fraunces is variable, has wonderful display sizes
        serif: ['"Fraunces"', "Georgia", "serif"],
        // Sans for body — Inter is the modern standard
        sans: ['"Inter"', "system-ui", "sans-serif"],
        // Mono for code/labels
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        // Custom display sizes — for the hero
        "display-xl": [
          "clamp(3rem, 8vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 4rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(2rem, 3.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        readable: "65ch", // optimal reading line length
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
