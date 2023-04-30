const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Arial", ...defaultTheme.fontFamily.sans]
      },
      // keyframes: {
      //   'open-menu': {
      //     '0%': { transform: 'scaleY(0)', opacity: 0 },
      //     '100%': { transform: 'scaleY(1)', opacity: 1 },
      //   },
      //   'close-menu': {
      //     '20%': { transform: 'scaleY(1)' },
      //     '100%': { transform: 'scaleY(0)', opacity: 0 },
      //   }
      // },
      // animation: {
      //   'open-menu': 'open-menu 0.5s ease',
      //   'close-menu': 'close-menu 0.51s ease',
      // },
      colors: {
        'default-bg': '#1a1a1a',
        'default-text': '#bfbfbf',
      },
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
        '7xl': '2816px',
        '8xl': '3072px',
        '9xl': '3328px',
        '10xl': '3584px',
        '11xl': '3840px',
        '12xl': '4500px',
        '13xl': '5000px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

