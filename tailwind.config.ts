import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				sf: ['SF Pro Display', 'sans-serif'],
			},
			colors: {
				lightGray: '#F5F5F5',
				dark: '#0B0B0F',
				primary: '#24FFBC',
			},
			backgroundColor: {
				default: '#1B1E22',
			},
			borderColor: {
				default: '#15171B'
			},
			textColor: {
				default: '#F5F5F5',
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
