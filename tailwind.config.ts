import type { Config } from 'tailwindcss';

const config = {
	content: ['src/**/*.{html,js,jsx,svelte,ts,tsx}'],
	theme: {
		extend: {}
	}
} satisfies Config;

export default config;
