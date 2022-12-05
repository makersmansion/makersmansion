/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/**/**/*.html',
    './src/**/**/**/*.njk',
    './src/**/**/**/*.md',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'neutral': 'var(--color-neutral)',
      'neutral-weakest': 'var(--color-neutral-weakest)',
      'neutral-weak': 'var(--color-neutral-weak)',
      'neutral-medium': 'var(--color-neutral-medium)',
      'neutral-strong': 'var(--color-neutral-strong)',
      'primary': 'var(--color-primary)',
      'accent': 'var(--color-accent)',
    },
    fontFamily: {
      'sans': ['Lexend', defaultTheme.fontFamily.sans],
      'serif': ['Libre Baskerville', defaultTheme.fontFamily.serif],
      'cursive': 'Caveat, cursive',
    },
    fontSize: {
      'caption': ['var(--text-caption-fs)', {
        lineHeight: 'var(--text-caption-lh)',
      }],
      'body': ['var(--text-body-fs)', {
        lineHeight: 'var(--text-body-lh)',
      }],
      'lead': ['var(--text-lead-fs)', {
        lineHeight: 'var(--text-lead-lh)',
      }],
      'heading': ['var(--text-heading-fs)', {
        lineHeight: 'var(--text-heading-lh)',
        letterSpacing: 'var(--text-heading-ls)',
        fontWeight: 'bold',
      }],
      'heading-md': ['var(--text-heading-md-fs)', {
        lineHeight: 'var(--text-heading-md-lh)',
        letterSpacing: 'var(--text-heading-md-ls)',
        fontWeight: 'bold',
      }],
      'heading-lg': ['var(--text-heading-lg-fs)', {
        lineHeight: 'var(--text-heading-lg-lh)',
        letterSpacing: 'var(--text-heading-lg-ls)',
        fontWeight: 'bold',
      }],
      'display': ['var(--text-display-fs)', {
        lineHeight: 'var(--text-display-lh)',
        letterSpacing: 'var(--text-display-ls)',
        fontWeight: 'bold',
      }],
      'display-lg': ['var(--text-display-lg-fs)', {
        lineHeight: 'var(--text-display-lg-lh)',
        letterSpacing: 'var(--text-display-lg-ls)',
        fontWeight: 'bold',
      }],
    },
    dropShadow: {
      'sm': '0 1px 2px rgb(0 0 0 / 13%)',
      DEFAULT: [
        '0 2px 2px rgb(0 0 0 / 8%)',
        '0 4px 4px rgb(0 0 0 / 8%)',
      ],
    },
    extend: {
      backgroundSize: {
        'full': '100% auto',
      },
      letterSpacing: {
        widest: '.2em',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              'font-weight': 'inherit',
            },
            strong: {
              'font-weight': 'bold',
            },
            p: {
              'margin-top': '1.6em',
              'margin-bottom': '0',
            },
            ol: {
              'margin-top': '1em',
              'margin-bottom': '0',
            },
            ul: {
              'margin-top': '1em',
              'margin-bottom': '0',
            },
            li: {
              'margin-top': '.4em',
              'margin-bottom': '0',
            },
            blockquote: {
              'font-weight': 'inherit',
              'margin-top': '1.6em',
              'margin-bottom': '0',
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
    require('@tailwindcss/line-clamp'),
  ]
}
