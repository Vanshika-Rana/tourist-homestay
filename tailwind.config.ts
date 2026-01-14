import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["var(--font-cormorant)", "serif"],
				sans: ["var(--font-montserrat)", "sans-serif"],
				display: ["var(--font-cormorant)", "serif"],
			},
			colors: {
				cream: {
					50: "#FDFCFA",
					100: "#F9F7F3",
					200: "#F5F1E8",
					300: "#EDE6D8",
					400: "#E5DCC8",
				},
				sage: {
					50: "#F4F6F2",
					100: "#E8ECE3",
					200: "#D1D9C7",
					300: "#B8C4A9",
					400: "#8B9C7F",
					500: "#6B7A5F",
					600: "#55604A",
				},
				gold: {
					50: "#F9F6F0",
					100: "#F2ECD8",
					200: "#E8D9B8",
					300: "#DCC698",
					400: "#C9A961",
					500: "#B8944A",
					600: "#9A7A3D",
				},
				charcoal: {
					50: "#F5F5F5",
					100: "#E5E5E5",
					200: "#CCCCCC",
					300: "#999999",
					400: "#666666",
					500: "#2C2C2C",
					600: "#1A1A1A",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
