import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@iconos',
        replacement: resolve(__dirname, './public/iconos'),
      },
      {
        find: '@proyectos',
        replacement: resolve(__dirname, './public/proyectos'),
      },
      {
        find: '@fotos',
        replacement: resolve(__dirname, './public/fotos'),
      },
    ],
  },
});
