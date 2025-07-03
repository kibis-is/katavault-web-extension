import browser from 'webextension-polyfill';

// utilities
import injectScript from '@/middleware/utilities/injectScript';

(() => {
  // inject the script to access the full dom
  injectScript(browser.runtime.getURL('client.js'));
})();
