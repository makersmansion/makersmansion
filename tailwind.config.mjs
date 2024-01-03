/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["InterVariable", defaultTheme.fontFamily.sans],
		},
		extend: {
			screens: {
				"2xl": "1400px",
			},
			colors: {
				"primary": {
					'50': 'hsl(3, 100%, 97%)',
					'100': 'hsl(3, 100%, 94%)',
					'200': 'hsl(3, 100%, 89%)',
					'300': 'hsl(3, 100%, 81%)',
					'400': 'hsl(3, 100%, 65%)',
					'500': 'hsl(3, 93%, 60%)',
					'600': 'hsl(3, 80%, 51%)',
					'700': 'hsl(3, 81%, 42%)',
					'800': 'hsl(3, 78%, 35%)',
					'900': 'hsl(3, 69%, 31%)',
					'950': 'hsl(3, 82%, 15%)',
				},
				"neutral": {
					'50': 'hsl(40, 14%, 98%)',
					'100': 'hsl(48, 12%, 93%)',
					'200': 'hsl(69, 10%, 87%)',
					'300': 'hsl(73, 7%, 81%)',
					'400': 'hsl(81, 5%, 62%)',
					'500': 'hsl(88, 4%, 59%)',
					'600': 'hsl(92, 3%, 51%)',
					'700': 'hsl(99, 3%, 39%)',
					'800': 'hsl(97, 3%, 27%)',
					'900': 'hsl(111, 3%, 21%)',
					'950': 'hsl(120, 3%, 18%)',
				},
			},
			fontSize: {
				"base": ["1rem", "1.6"],
				"lg": ["1.063rem", "1.6"],
				"xl": ["1.375rem", "1.2"],
				"2xl": ["1.75rem", "1.2"],
				"3xl": ["2.2rem", "1.15"],
				"4xl": ["2.5rem", "1.1"],
			},
			fontWeight: {
				"normal": "440",
				"medium": "520",
				"semibold": "630",
				"bold": "720",
			},
			letterSpacing: {
				"tight": "-.02em",
			},
			boxShadow: {
				"inner": "inset 0 1px 1px 0 rgba(0, 0, 0, 0.1)",
				"sm": "0px 1px 1px -0.5px rgba(0, 0, 0, 0.1), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.1), 0px 6px 6px -3px rgba(0, 0, 0, 0.1)",
				"md": "0px 1px 1px -0.5px rgba(0, 0, 0, 0.1), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.1), 0px 6px 6px -3px rgba(0, 0, 0, 0.1), 0px 12px 12px -6px rgba(0, 0, 0, 0.1), 0px 24px 24px -12px rgba(0, 0, 0, 0.1)",
			},
			typography: ({ theme }) => ({
				neutral: {
					css: {
						"--tw-prose-body": theme("colors.neutral[900]"),
						"--tw-prose-headings": theme("colors.neutral[950]"),
						"--tw-prose-lead": "inherit",
						"--tw-prose-links": theme("colors.neutral[950]"),
						"--tw-prose-bold": "inherit",
						"--tw-prose-counters": theme("colors.neutral[500]"),
						"--tw-prose-bullets": theme("colors.neutral[500]"),
						"--tw-prose-hr": theme("colors.primary[500]"),
						"--tw-prose-quotes": theme("colors.neutral[700]"),
						"--tw-prose-quote-borders": theme("colors.neutral[100]"),
						"--tw-prose-captions": theme("colors.neutral[500]"),
						"--tw-prose-code": "inherit",
						"--tw-prose-pre-code": theme("colors.neutral[100]"),
						"--tw-prose-pre-bg": theme("colors.neutral[950]"),
						"--tw-prose-th-borders": theme("colors.neutral[100]"),
						"--tw-prose-td-borders": theme("colors.neutral[100]"),
						"--tw-prose-invert-body": theme("colors.neutral[200]"),
						"--tw-prose-invert-headings": theme("colors.neutral[50]"),
						"--tw-prose-invert-lead": "inherit",
						"--tw-prose-invert-links": theme("colors.neutral[50]"),
						"--tw-prose-invert-bold": "inherit",
						"--tw-prose-invert-counters": theme("colors.neutral[500]"),
						"--tw-prose-invert-bullets": theme("colors.neutral[500]"),
						"--tw-prose-invert-hr": theme("colors.primary[500]"),
						"--tw-prose-invert-quotes": theme("colors.neutral[400]"),
						"--tw-prose-invert-quote-borders": theme("colors.neutral[800]"),
						"--tw-prose-invert-captions": theme("colors.neutral[400]"),
						"--tw-prose-invert-code": "inherit",
						"--tw-prose-invert-pre-code": theme("colors.neutral[100]"),
						"--tw-prose-invert-pre-bg": theme("colors.neutral[800]"),
						"--tw-prose-invert-th-borders": theme("colors.neutral[900]"),
						"--tw-prose-invert-td-borders": theme("colors.neutral[900]"),
					},
				},
			}),
		},
		corePlugins: {
			container: false,
		},
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/typography"),
	],
};
