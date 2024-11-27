/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      header: ['Bricolage Grotesque', 'sans-serif'],
      supplement: [],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#F0EFED',
        backgroundHighlight: '#E0DFDE',
        primaryGreen: '#54BB89',
        hoverGreen: '#4EA37A',
        secondaryGreen: '#B6DFB6',
        //New colors
        primaryWhite: '#FFFFFF',
        primaryBlack: '#333333',
        primaryGray: '#57666D',
        secondaryGray: '#F3F3F3',
        primaryOrange: '#FF8D3C',
        primaryBlue: '#1461D1',
        primaryRed: '#ED0131',
      },
      boxShadow: {
        '3xl': '5px 10px 10px -5px #57666D',
      },
    },
  },
  plugins: [],
};
