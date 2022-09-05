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
      typography: {
        DEFAULT: {
          css: {
            a: {
              'font-weight': 'inherit',
            },
            strong: {
              'font-weight': 'bold',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
