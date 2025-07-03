import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'node:path';

// configs
import defaultConfig from './vite.default.config';

// plugins
import manifestBuilder from './plugins/vite-manifest-builder.mjs';

export default defineConfig((configEnv) => {
  const outputDir = '.opera_build';
  const srcPath = resolve(process.cwd(), 'src');

  return mergeConfig(
    defaultConfig(configEnv),
    defineConfig({
      build: {
        outDir: outputDir,
      },
      define: {
        __TARGET__: JSON.stringify('opera'),
      },
      plugins: [
        manifestBuilder(
          resolve(process.cwd(), outputDir),
          resolve(srcPath, 'manifest.default.json'),
          resolve(srcPath, `manifest.v3.json`),
          resolve(srcPath, `manifest.opera.json`)
        ),
      ],
    })
  );
});
