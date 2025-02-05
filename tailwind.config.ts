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
			fontSize: {
				sm: ['14px', '21px'],
				'3.5xl': ['32px', '38px'],
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
			borderRadius: {
				'lg+': '10px',
			},
			textColor: {
				default: '#F5F5F5',
				secondary: '#83838D',
			},
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
