// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://recipes.pascalnun.eu',
	output: 'static',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	redirects: {
		'/': '/de/',
	},
});
