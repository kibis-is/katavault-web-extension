import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

// config
import { version } from './package.json';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const srcPath = resolve(process.cwd(), 'src');

  return {
    build: {
      lib: {
        cssFileName: 'styles',
        entry: {
          ['client']: resolve(srcPath, 'client', 'main.ts'),
          ['middleware']: resolve(srcPath, 'middleware', 'main.ts'),
          ['popup']: resolve(srcPath, 'popup', 'main.ts'),
          ['worker']: resolve(srcPath, 'worker', 'main.ts'),
        },
        formats: ['es'],
      },
      sourcemap: !isProduction,
    },
    define: {
      __VERSION__: JSON.stringify(version),
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(mode), // react in library mode contains process.env.NODE_ENV
        },
      }),
      react(),
      tsconfigPaths(),
      viteStaticCopy({
        targets: [
          {
            dest: 'icons',
            src: resolve(srcPath, 'icons', '*'),
          },
          {
            dest: '.',
            rename: 'popup.html',
            src: resolve(srcPath, 'popup', 'index.html'),
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        // typescript resolutions handled by the vite-tsconfig-paths plugin - assets must be handled explicitly
        '@/popup/fonts': resolve(import.meta.dirname, 'src/popup/fonts'),
        '@/popup/styles': resolve(import.meta.dirname, 'src/popup/styles'),
      },
    },
  };
});
