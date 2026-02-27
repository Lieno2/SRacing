import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// GitHub Pages serves from the repo root or /docs, build goes to 'build' dir
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// If deploying to https://<username>.github.io/<repo-name>/
		// uncomment and set the path prefix:
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/SRacing' : ''
		// }
	}
};

export default config;
