# Middleware

### Table of contents

* [1. Overview](#-1-overview)
  -[1.1. Message brokerage](#11-message-brokerage)
  -[1.2. Script injection](#12-script-injection)
* [2. Usage](#-2-usage)

## 🔭 1. Overview

The middleware, also known as "content scripts", is the go between the [client][client] (webpage) and the [worker][worker] (extension).

The main responsibility of the middleware is to act as brokerage of messaging between the client and the worker.

<sup>[Back to top ^][table-of-contents]</sup>

### 1.1. Message brokerage

As outlined in the MDN [docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis), content scripts have limited access to the web extension APIs, however, content scripts are able to send messages to the extension service worker, which has access to the full suite of web extension APIs.

<sup>[Back to top ^][table-of-contents]</sup>

### 1.2. Script injection

Content scripts have limited access to a web-page, however, to overcome this limitation, the content script can inject a script file directly into the webpage and attach listeners and manipulate the DOM.

<sup>[Back to top ^][table-of-contents]</sup>

## 🪄 2. Usage

The main entry point is the [`src/middleware/main.ts`](./main.ts) file. This file contains all the initializations of the message brokers and injects any scripts into the webpage.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[client]: ../client/README.md
[table-of-contents]: #table-of-contents
[worker]: ../worker/README.md
