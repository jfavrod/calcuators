import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest';

const PWA = VitePWA({
  manifest,
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
  },
});

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), PWA],
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
