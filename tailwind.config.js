/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      fontSize: {
        "2xs": ["10px", "12px"],
        xs: ["12px", "16px"],
        sm: ["14px", "18px"],
        base: ["16px", "20px"],
        lg: ["18px", "22px"],
        xl: ["22px", "24px"],
        "2xl": ["30px", "34px"],
        "3xl": ["48px", "54px"]
      },
      fontFamily: {
        martian: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
