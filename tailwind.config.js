/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', defaultTheme.fontFamily.sans]
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
