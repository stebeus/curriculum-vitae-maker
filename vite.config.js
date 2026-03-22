import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/curriculum-vitae-maker/',
  server: {
    port: 8080,
  },
  plugins: [react()],
});
