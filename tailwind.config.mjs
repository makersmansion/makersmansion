/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["InterVariable", defaultTheme.fontFamily.sans],
			serif: ["Sentient", defaultTheme.fontFamily.serif],
		},
		extend: {
			screens: {
				"2xl": "1400px",
			},
			colors: {
				"primary": {
					"50": "hsl(20, 100%, 97%)",
					"100": "hsl(16, 100%, 95%)",
					"200": "hsl(9, 96%, 90%)",
					"300": "hsl(5, 96%, 82%)",
					"400": "hsl(359, 95%, 71%)",
					"500": "hsl(354, 89%, 60%)",
					"600": "hsl(347, 77%, 50%)",
					"700": "hsl(341, 83%, 41%)",
					"800": "hsl(335, 80%, 35%)",
					"900": "hsl(330, 75%, 30%)",
					"950": "hsl(328, 88%, 16%)",
				},
				"neutral": {
					"50": "hsl(0, 0%, 98%)",
					"100": "hsl(0, 0%, 92%)",
					"200": "hsl(0, 0%, 82%)",
					"300": "hsl(0, 0%, 69%)",
					"400": "hsl(0, 0%, 60%)",
					"500": "hsl(0, 0%, 50%)",
					"600": "hsl(0, 0%, 36%)",
					"700": "hsl(0, 0%, 31%)",
					"800": "hsl(0, 0%, 14%)",
					"900": "hsl(0, 0%, 10%)",
					"950": "hsl(0, 0%, 8%)",
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
						"--tw-prose-body": theme("colors.neutral[700]"),
						"--tw-prose-headings": theme("colors.neutral[800]"),
						"--tw-prose-lead": "inherit",
						"--tw-prose-links": theme("colors.neutral[800]"),
						"--tw-prose-bold": "inherit",
						"--tw-prose-counters": theme("colors.neutral[500]"),
						"--tw-prose-bullets": theme("colors.neutral[500]"),
						"--tw-prose-hr": theme("colors.neutral[100]"),
						"--tw-prose-quotes": theme("colors.neutral[600]"),
						"--tw-prose-quote-borders": theme("colors.neutral[100]"),
						"--tw-prose-captions": theme("colors.neutral[500]"),
						"--tw-prose-code": "inherit",
						"--tw-prose-pre-code": theme("colors.neutral[100]"),
						"--tw-prose-pre-bg": theme("colors.neutral[950]"),
						"--tw-prose-th-borders": theme("colors.neutral[100]"),
						"--tw-prose-td-borders": theme("colors.neutral[100]"),
						"--tw-prose-invert-body": theme("colors.neutral[200]"),
						"--tw-prose-invert-headings": theme("colors.neutral[100]"),
						"--tw-prose-invert-lead": "inherit",
						"--tw-prose-invert-links": theme("colors.neutral[100]"),
						"--tw-prose-invert-bold": "inherit",
						"--tw-prose-invert-counters": theme("colors.neutral[500]"),
						"--tw-prose-invert-bullets": theme("colors.neutral[500]"),
						"--tw-prose-invert-hr": theme("colors.neutral[800]"),
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
