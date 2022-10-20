/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'neutral': 'var(--color-neutral)',
      'neutral-weakeast': 'var(--color-neutral-weakeast)',
      'neutral-weak': 'var(--color-neutral-weak)',
      'neutral-medium': 'var(--color-neutral-medium)',
      'neutral-strong': 'var(--color-neutral-strong)',
      'primary': 'var(--color-primary)',
      'primary-weak': 'var(--color-primary-weak)',
      'primary-medium': 'var(--color-primary-medium)',
    },
    fontFamily: {
      'sans': ['Inter', defaultTheme.fontFamily.sans],
      'serif': ['Libre Baskerville', defaultTheme.fontFamily.serif]
    },
    extend: {
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
    require('@tailwindcss/forms'),
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-neutral': 'rgb(255, 255, 255)',
          '--color-neutral-weakeast': 'rgb(30 30 30 / 4%)',
          '--color-neutral-weak': 'rgb(30 30 30 / 14%)',
          '--color-neutral-medium': 'rgb(30 30 30 / 56%)',
          '--color-neutral-strong': 'rgb(30, 30, 30)',
          '--color-primary-rgb': '225 29 72',
          '--color-primary': 'rgb(var(--color-primary-rgb))',
          '--color-primary-weak': 'rgb(var(--color-primary-rgb) / 6%)',
          '--color-primary-medium': 'rgb(var(--color-primary-rgb) / 50%)',
        },
        '@supports (color: color(display-p3 1 1 1))': {
          ':root': {
            '--color-primary': 'color(display-p3 0.115 0.885 0.418)',
          }
        }
      })
    })
  ]
}
