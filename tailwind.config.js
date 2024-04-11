/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0EFED',
        backgroundHighlight: '#E0DFDE',
        primaryGreen: '#54BB89',
        hoverGreen: '#4EA37A',
        secondaryGreen: '#B6DFB6',
        primaryGray: '#57666D',
        secondaryGray: '#DCDCDC',
        primaryOrange: '#FF9E5E',
      },
      boxShadow: {
        '3xl': '5px 10px 10px -5px #57666D',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
