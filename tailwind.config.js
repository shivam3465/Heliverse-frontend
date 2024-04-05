/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			backgroundImage: {
				"logo-gradient":
					"linear-gradient(90deg, rgba(189,6,85,1) 0%, rgba(128,64,184,1) 70%, rgba(128,64,184,1) 81%, rgba(4,7,181,1) 100%)",
				"banner-gradient":
					"linear-gradient(30deg, rgba(189,6,85,0.2596049161852241) 0%, rgba(119,6,121,0) 38%, rgba(65,6,149,0) 67%, rgba(4,7,181,0.20638362766981788) 100%)",
			},
			fontFamily: {
				cabin: ["Cabin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
