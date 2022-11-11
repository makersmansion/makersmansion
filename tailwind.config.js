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
    dropShadow: {
      'sm': '0 1px 2px rgb(0 0 0 / 13%)',
      DEFAULT: [
          '0 4px 3px rgb(0 0 0 / 8%)',
          '0 2px 2px rgb(0 0 0 / 10%)'
      ],
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
            blockquote: {
              'font-weight': 'inherit',
            }
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
          '--color-neutral': 'hsl(0deg 0% 100%)',
          '--color-neutral-weakest': 'hsl(211deg 12% 97%)',
          '--color-neutral-weak': 'hsl(211deg 34% 90%)',
          '--color-neutral-medium': 'hsl(211deg 12% 58%)',
          '--color-neutral-strong': 'hsl(211deg 8% 22%)',
          '--color-primary': 'hsl(347deg 77% 50%)'
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-neutral': 'hsl(211deg 28% 8%)',
            '--color-neutral-weakest': 'hsl(211deg 24% 11%)',
            '--color-neutral-weak': 'hsl(211deg 24% 18%)',
            '--color-neutral-medium': 'hsl(211deg 12% 46%)',
            '--color-neutral-strong': 'hsl(211deg 24% 86%)',
            '--color-primary': 'hsl(347deg 77% 44%)'
          }
        }
      })
    })
  ]
}
