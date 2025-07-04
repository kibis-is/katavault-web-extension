import { existsSync, readFileSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

/**
 * Vite plugin to merge multiple manifest JSON files into one manifest.json in the build output.
 * @param  {string} outputPath - Path to the output directory.
 * @param  {...string} manifestPaths - Paths to manifest JSON files to merge.
 * @returns {import('vite').Plugin}
 */
export default function manifestBuilder(outputPath, ...manifestPaths) {
  return {
    name: 'vite-manifest-builder',
    closeBundle: async () => {
      // merge all manifest files
      const manifest = manifestPaths.reduce(
        (acc, filePath) => ({
          ...acc,
          ...JSON.parse(readFileSync(filePath).toString()),
        }),
        {}
      );

      // ensure output directory exists
      if (!existsSync(outputPath)) {
        await mkdir(outputPath, { recursive: true });
      }

      // write the merged manifest
      await writeFile(join(outputPath, 'manifest.json'), JSON.stringify(manifest, null, 2));
    },
    version: '1.0.0',
  };
}
