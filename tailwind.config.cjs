/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        everglade: { 
          '50': '#f1f8f2', 
          '100': '#dcefde', 
          '200': '#bcdec2', 
          '300': '#8fc69c', 
          '400': '#5fa873', 
          '500': '#3e8b56', 
          '600': '#2c6f42', 
          '700': '#245836', 
          '800': '#1d442b', 
          '900': '#1a3a26', 
        },
        wenge: {
          50: "#f8f9f8",
          100: "#ecf1f2",
          200: "#d5dfe3",
          300: "#aabec2",
          400: "#77979b",
          500: "#5b6f58",
          600: "#495b59",
          700: "#394444",
          800: "#272e30",
          900: "#181c1f",
        },
        sea: {
          50: "#f6f9f9",
          100: "#e6f1f8",
          200: "#c8dff1",
          300: "#9abedd",
          400: "#6798c3",
          500: "#4e75a9",
          600: "#405a8d",
          700: "#32446d",
          800: "#232e4c",
          900: "#151c30",
        },
        coral: {
          50: "#fcfbfa",
          100: "#faf1ea",
          200: "#f4d5d2",
          300: "#e6aba8",
          400: "#db7c7b",
          500: "#c75956",
          600: "#ab3e3b",
          700: "#832e2c",
          800: "#5b201e",
          900: "#371412",
        },
      
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "xs": "0.6rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
