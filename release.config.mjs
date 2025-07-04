/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@anolilab/semantic-release-pnpm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: './scripts/update_manifest_version.sh ${nextRelease.version}',
        publishCmd:
          'pnpm concurrently --names "CHROME,EDGE,FIREFOX,OPERA" -c "yellow.bold,blue.bold,orange.bold,red.bold" "pnpm build:chrome && pnpm package:chrome" "pnpm build:edge && pnpm package:edge" "pnpm build:firefox && pnpm package:firefox" "pnpm build:opera && pnpm package:opera"',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['src/manifest.common.json', 'package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/*.zip'],
        releasedLabels: ['🚀 released'],
      },
    ],
  ],
};
