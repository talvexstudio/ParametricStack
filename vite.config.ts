import { defineConfig } from 'vite';

// Use relative paths so the build works when served from a subfolder (e.g. GitHub Pages).
export default defineConfig({
  base: './',
});
