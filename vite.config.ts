import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join as pathJoin } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathJoin(__dirname, './src')}/`,
    },
  },
  plugins: [
    react(),
  ],
});
