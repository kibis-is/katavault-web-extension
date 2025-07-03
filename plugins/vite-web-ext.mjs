import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

/**
 * @typedef {Object} WebExtPluginOptions
 * @property {string} buildPath - The path to the build directory.
 * @property {boolean} [browserConsole] - Whether to show the browser console.
 * @property {boolean} [devtools] - Whether to open the devtools.
 * @property {boolean} [persistState] - Whether to persist the state of the profile.
 * @property {string[]} [startUrls] - The start URLs to open.
 * @property {'firefox' | 'chrome'} [target] - The target browser. Defaults to 'firefox'.
 */

/**
 * Vite plugin to run web-ext after build.
 * @param {WebExtPluginOptions} options
 * @returns {import('vite').Plugin}
 */
export default function webExt(options = {}) {
  let webExtRunProcess = null;

  return {
    name: 'vite-web-ext',
    closeBundle: () => {
      let browserConsole;
      let chromeBinary;
      let chromeProfilePath;
      let devtools;
      let firefoxBinary;
      let firefoxProfilePath;
      let persistState;
      let runCommand;
      let startUrls;
      let target;
      let targetFlag;

      if (webExtRunProcess) {
        console.info('web-ext process already running');

        return;
      }

      if (!options.buildPath) {
        throw new Error('buildPath is required');
      }

      browserConsole = options.browserConsole || false;
      chromeBinary = resolve(process.cwd(), '.chrome', 'chrome');
      chromeProfilePath = resolve(process.cwd(), '.chrome_profile');
      devtools = options.devtools || false;
      firefoxBinary = resolve(process.cwd(), '.firefox', 'firefox');
      firefoxProfilePath = resolve(process.cwd(), '.firefox_profile');
      persistState = options.persistState || false;
      startUrls = options.startUrls || ['http://info.cern.ch/hypertext/WWW/TheProject.html'];
      target = options.target === 'chrome' || options.target === 'firefox' ? options.target : 'firefox';
      targetFlag = '--target=firefox-desktop';
      runCommand = [
        'run',
        '--no-config-discovery',
        `--source-dir=${options.buildPath}`,
        ...(existsSync(chromeBinary) ? [`--chromium-binary=${chromeBinary}`] : []),
        ...(existsSync(chromeProfilePath) ? [`--chromium-profile=${chromeProfilePath}`] : []),
        ...(existsSync(firefoxBinary) ? [`--firefox=${firefoxBinary}`] : []),
        ...(existsSync(firefoxProfilePath) ? [`--firefox-profile=${firefoxProfilePath}`] : []),
        ...startUrls.map((value) => `--start-url=${value}`),
      ];

      switch (target) {
        case 'chrome':
          targetFlag = '--target=chromium';
          break;
        case 'firefox':
        default:
          break;
      }

      runCommand.push(targetFlag);

      if (browserConsole) {
        runCommand.push('--browser-console');
      }

      if (devtools) {
        runCommand.push('--devtools');
      }

      if (persistState) {
        runCommand.push('--keep-profile-changes', '--profile-create-if-missing');
      }

      // start web-ext
      webExtRunProcess = spawn('web-ext', runCommand, {
        stdio: 'inherit',
      });
    },
    version: '1.0.0',
  };
}
