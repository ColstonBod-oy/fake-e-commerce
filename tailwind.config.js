const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: colors.white,
			gray: colors.gray,
			red: colors.red,
			emerald: colors.emerald,
			cyan: colors.cyan,
			violet: colors.violet,
		},
		extend: {
			minHeight: {
				"45vw": "45vw",
			},
			animation: {
				"fadein-to-b": "fadein-to-b 0.5s ease-out",
				"fadeout-to-t": "fadeout-to-t 0.5s ease-out",
				"gradient-to-br": "gradient-to-br 15s ease infinite",
			},
			keyframes: {
				"fadein-to-b": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(-79px)",
					},
				},
				"fadeout-to-t": {
					from: {
						opacity: "1",
						transform: "translateY(-79px)",
					},
					to: {
						opacity: "0",
						transform: "translateY(-100px)",
					},
				},
				"gradient-to-br": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
