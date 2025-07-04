import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'node:path';

// configs
import defaultConfig from './vite.default.config';

// plugins
import manifestBuilder from './plugins/vite-manifest-builder.mjs';
import webExt from './plugins/vite-web-ext.mjs';

export default defineConfig((configEnv) => {
  const outputDir = '.firefox_build';
  const srcPath = resolve(process.cwd(), 'src');

  return mergeConfig(
    defaultConfig(configEnv),
    defineConfig({
      build: {
        outDir: outputDir,
      },
      define: {
        __TARGET__: JSON.stringify('firefox'),
      },
      plugins: [
        manifestBuilder(
          resolve(process.cwd(), outputDir),
          resolve(srcPath, 'manifest.default.json'),
          resolve(srcPath, `manifest.v2.json`),
          resolve(srcPath, `manifest.firefox.json`)
        ),
        ...(configEnv.mode === 'development'
          ? [
              webExt({
                buildPath: resolve(process.cwd(), outputDir),
                devtools: true,
                startUrls: ['http://localhost:8080'],
                target: 'firefox',
              }),
            ]
          : []),
      ],
    })
  );
});
