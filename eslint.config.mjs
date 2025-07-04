import eslint from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import typescriptConfig from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.Config[]}
 **/
export default [
  eslint.configs.recommended,
  ...typescriptConfig.configs.recommended,
  prettierConfig,
  // custom config
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '.chrome',
      '.chrome_build',
      '.chrome_profile',
      '.edge_build',
      '.firefox',
      '.firefox_build',
      'firefox_profile',
      '.opera_build',
      'dist/',
      'node_modules/',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'off',
    },
  },
];
