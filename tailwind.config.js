/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "480px" },
        md: { max: "768px" },
        xl: { max: "1400px" },
        xxl: { max: "1920px" },
      },
      spacing: {
        default: "24px",
        medium: "32px",
        big: "48px",
      },
      colors: {
        dark: "var(--dark)",
        white: "var(--white)",
        primary: "var(--primary)",
        /* border */
        border: {
          normal: "var(--gray-200)",
          light: "var(--gray-100)",
          white: "var(--white)",
        },
        /* background */
        bgPrimary: "var(--white)",
      },
      fontFamily: {
        default: ["Inter"],
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        xl: "16px",
        "2xl": "18px",
        "3xl": "24px",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "12px",
      },
    },
  },
  plugins: [],
};
