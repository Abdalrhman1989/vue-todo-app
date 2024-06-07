import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    include: ['src/tests/**/*.spec.{js,ts}'],
  },
});
