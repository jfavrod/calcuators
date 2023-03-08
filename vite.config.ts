import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
