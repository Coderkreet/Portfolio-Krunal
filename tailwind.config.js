/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        themeBg: "var(--color-background)",
        themeText: "var(--color-text)",
        themeTextMuted: "var(--color-text-muted)",
        themePrimary: "var(--color-primary)",
        themeAccent: "var(--color-accent)",
        themeCardBg: "var(--color-card-bg)",
        themeCardHeader: "var(--color-card-header)",
        themeNavHover: "var(--color-nav-hover)",
        themeFooterBg: "var(--color-footer-bg)",
      }
    },
  },
  plugins: [],
};

