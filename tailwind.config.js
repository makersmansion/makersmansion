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
      'neutral-weakest': 'var(--color-neutral-weakest)',
      'neutral-weak': 'var(--color-neutral-weak)',
      'neutral-medium': 'var(--color-neutral-medium)',
      'neutral-strong': 'var(--color-neutral-strong)',
      'primary': 'var(--color-primary)'
    },
    fontFamily: {
      'sans': ['Noto Sans', defaultTheme.fontFamily.sans],
      'serif': ['Libre Baskerville', defaultTheme.fontFamily.serif]
    },
    extend: {
      typography: ({ theme }) => ({
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
        neutral: {
          css: {
            '--tw-prose-body': theme('colors.neutral-strong'),
            '--tw-prose-headings': theme('colors.neutral-strong'),
            '--tw-prose-lead': theme('colors.neutral-strong'),
            '--tw-prose-links': theme('colors.neutral-strong'),
            '--tw-prose-bold': theme('colors.neutral-strong'),
            '--tw-prose-captions': theme('colors.neutral-medium'),
            '--tw-prose-counters': theme('colors.neutral-medium'),
            '--tw-prose-bullets': theme('colors.neutral-medium'),
            '--tw-prose-hr': theme('colors.neutral-weak'),
            '--tw-prose-quotes': theme('colors.neutral-strong'),
            '--tw-prose-quote-borders': theme('colors.neutral-weak'),
            '--tw-prose-quote-captions': theme('colors.neutral-medium'),
            '--tw-prose-code': theme('colors.neutral-strong'),
            '--tw-prose-pre-code': theme('colors.neutral-strong'),
            '--tw-prose-pre-bg': theme('colors.neutral-weakest'),
            '--tw-prose-th-borders': theme('colors.neutral-strong'),
            '--tw-prose-td-borders': theme('colors.neutral-weak'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-neutral': 'rgb(255 255 255)',
          '--color-neutral-weakest': 'rgb(30 30 30 / 4%)',
          '--color-neutral-weak': 'rgb(30 30 30 / 14%)',
          '--color-neutral-medium': 'rgb(30 30 30 / 48%)',
          '--color-neutral-strong': 'rgb(30 30 30 / 86%)',
          '--color-primary-rgb': '225 29 72',
          '--color-primary': 'rgb(var(--color-primary-rgb))'
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-neutral': 'rgb(24 24 24)',
            '--color-neutral-weakest': 'rgb(255 255 255 / 3%)',
            '--color-neutral-weak': 'rgb(255 255 255 / 14%)',
            '--color-neutral-medium': 'rgb(255 255 255 / 48%)',
            '--color-neutral-strong': 'rgb(255 255 255 / 86%)',
          }
        }
      })
    })
  ]
}
