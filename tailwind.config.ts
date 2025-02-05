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
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
