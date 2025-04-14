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
        base: {
          120: '#111111',
          110: '#333333',
          100: '#929292',
          90: '#CDCDCD',
          80: '#F3F3F3',
        },
        brand: {
          80: '#FDEDD4',
          90: '#FFC48A',
          100: '#FF8D3C',
          110: '#FF6F08',
          120: '#CC5706',
        },
        interactive: {
          90: '#FFE082',
          100: '#FFC107',
          110: '#F0CD0E',
        },
        success: {
          90: '#52CC8E',
          100: '#008944',
          110: '#0A6638',
        },
        error: {
          90: '#FF5959',
          100: '#CC2929',
          110: '#991216',
        },
        focus: {
          90: '#B0E6FF',
          100: '#007ACC',
          110: '#006BB4',
        },
        monoY: '#FFFFFF',
        primaryWhite: '#FFFFFF',
        primaryBlack: '#333333',
        primaryGray: '#57666D',
        secondaryGray: '#F3F3F3',
        primaryOrange: '#FF8D3C',
        secondaryOrange: '#FDEDD4',
        tertiaryOrange: '#FF6F08',
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
