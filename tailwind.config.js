const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Fira Code', ...fontFamily.mono]
      },
      // TODO
      colors: {
        'navy-lighter': '#112240',
        'navy-light': '#0a192f',
        // 'navy-dark': '#020c1b',
        'navy-dark': '#2f3044',
        'navy-green': '#64ffda',
        'slate-light': '#ccd6f6',
        slate: '#8892b0',
        'mac-cls': '#FF605C',
        'mac-min': '#FFBD44',
        'mac-max': '#00CA4E'
      },
      fontSize: {
        '10xl': '10rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
