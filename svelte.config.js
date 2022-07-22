import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      trailingSlash: 'always',
      precompress: true,
    }),
  },
  paths: {
    base: dev ? '' : '/portfolio-test-deploy',
  },
  preprocess: preprocess(),
};

export default config;
