import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./sections/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#64FFDA',
				textPrimary: '#CCD6F6',
				textSecondary: '#8892B0',
			},
			fontFamily: {
				calibreRegular: ['Calibre Regular', 'sans-serif'],
				calibreMedium: ['Calibre Medium', 'sans-serif'],
				calibreSemibold: ['Calibre Semibold', 'sans-serif'],
				sfMono: ['SF Mono', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

export default config;
