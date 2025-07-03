/**
 * Takes a script URI and creates a script tag as the last child in the <head> tag. This is used to inject scripts into
 * the webpage from the middleware (content scripts).
 * @param {string} uri - A URI to the script. It must include the script file name and extension, e.g., /path/to/script.js
 */
export default function injectScript(uri: string): void {
  const element: HTMLElement = document.createElement('script');

  element.setAttribute('type', 'text/javascript');
  element.setAttribute('src', uri);

  // append the script to the end of the document head
  document.head.appendChild(element);
}
