/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#173B6C",
          light: "#2C5085",
        },
        secondary: {
          DEFAULT: "#3B82F6",
        },
        accent: {
          DEFAULT: "#0EA5A8",
        },
        success: "#49CC90",
        warning: "#FCA130",
        danger: "#F93E3E",
        canvas: "#F7F9FC",
        surface: "#FFFFFF",
        line: {
          DEFAULT: "#D9E2EC",
          soft: "#E6ECF3",
        },
        ink: {
          DEFAULT: "#1F2937",
          muted: "#64748B",
          faint: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #173B6C 0%, #3B82F6 55%, #0EA5A8 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,59,108,0.06), 0 1px 1px rgba(23,59,108,0.04)",
        "card-hover": "0 8px 24px rgba(23,59,108,0.10), 0 2px 6px rgba(23,59,108,0.06)",
        "brand-glow": "0 8px 24px rgba(59,130,246,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
