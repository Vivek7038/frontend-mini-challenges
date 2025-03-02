import { defineConfig } from 'vite';
import { jsChallenges } from '../../shared/data/content/index';

const challengesPath = [...jsChallenges.values()].map(
  (challenge) => `./src/challenges/${challenge.link}/index.html`
);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./index.html', './src/helpers/navbar.ts', ...challengesPath],
    },
  },
  server: {
    port: 6011,
    strictPort: true,
  },
  base: '/frontend-mini-challenges/javascript/',
});
