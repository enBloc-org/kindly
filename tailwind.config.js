/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#D9D9D9",
        primaryGreen: "#BBE3C3",
        hoverGreen: '#B2DBBA',
        secondaryGreen:"#008000",
        primaryGray:"#57666D",
        secondaryGray:"#D9D9D9",
        primaryOrange:"#FF9E5E",
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
