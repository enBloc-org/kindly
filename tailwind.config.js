/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0EFED',
        backgroundHighlight: '#E0DFDE',
        primaryGreen: '#54BB89',
        hoverGreen: '#4EA37A',
        secondaryGreen: '#008000',
        primaryGray: '#57666D',
        secondaryGray: '#D9D9D9',
        primaryOrange: '#FF9E5E',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
