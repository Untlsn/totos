import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    WindiCSS({
      scan: {
        fileExtensions: ['tsx', 'html'],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'lodash': 'lodash-es',
      'react': 'preact/compat',
    },
  },
});
