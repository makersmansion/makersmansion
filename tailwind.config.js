/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', defaultTheme.fontFamily.sans],
        'serif': ['Libre Baskerville', defaultTheme.fontFamily.serif]
      },
      letterSpacing: {
        tighter: '-.01em',
        tight: '-.001em'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
