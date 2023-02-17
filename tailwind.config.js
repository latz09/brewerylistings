/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#AFC100',
			secondary: '#C3FCF2',
			dark: '#005248',
			light: '#ffffff',
			medium: '#4b8178',
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
