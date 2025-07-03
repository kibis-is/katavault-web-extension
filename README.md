<div align="center">
    <img alt="Katavault logo" src="https://github.com/kibis-is/katavault-web-extension/blob/main/images/logo.svg" height="64" width="64" />
</div>

<h1 align="center">
  Katavault Web Extension
</h1>

<p align="center">
  The Katavault browser extension leverages your wallet accounts to securely sign in to web applications.
</p>

<div align="center">

[![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)][license]

</div>

---

### Table of contents

* [1. Overview](#-1-overview)
  - [1.1. Terminology](#11-terminology)
* [2. Development](#-2-development)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Setup](#22-setup)
  - [2.3. Install local browsers (optional)](#23-install-local-browsers-optional)
    - [2.3.1. Chrome](#231-chrome)
    - [2.3.2. Firefox](#232-firefox)
  - [2.4. Run](#24-run)
* [3. Appendix](#-3-appendix)
  - [3.1. Useful commands](#31-useful-commands)
* [4. How to contribute](#-4-how-to-contribute)
* [5. License](#-5-license)

## 🔭 1. Overview

### 1.1. Terminology

* **Client**: These are all external resources to the worker, except the middleware. These include webpages and other extensions.
* **Middleware**: Also known as content scripts. These resources automatically injected into the webpage and have limited access to both the web extension APIs and the webpage's DOM.
* **Worker**: This is the web extension and includes both the extension's service workers and pages/pop-ups. These have full access to the web extension APIs and communicate to clients via the middleware.

## 🛠 2. Development

### 2.1. Requirements

* Install [Node v20.18.0+](https://nodejs.org/en/)
* Install [pnpm v10.3.0+](https://pnpm.io/installation)
* Install [jq](https://github.com/jqlang/jq) (optional — required if you are installing the local Chrome browser)

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Setup

1. Install the dependencies:
```bash
$ pnpm install
```

> ⚠️ **NOTE:** a post install script will run that creates a `.env` file.

2. In the newly created `.env` file, replace the environment values with the desired values.

<sup>[Back to top ^][table-of-contents]</sup>

### 2.3. Install local browsers (optional)

To run a standalone browser for development, local developer versions of Chrome and/or Firefox can be installed. If these are installed, these will be used as the installation of the temporary extensions that are built in step [2.4.](#24-run)

> ⚠️ **NOTE:** The following commands can be run again to re-download and install the latest version. Your saved profile and extension settings will not be affected as they are stored in a separate directory in `.<chrome|firefox>_profile/`.
>
<sup>[Back to top ^][table-of-contents]</sup>

#### 2.3.1. Chrome

1. Simply run:
```shell
pnpm install:chrome
```

> ️ **NOTE:** the binary will be installed to `.chrome/`.

<sup>[Back to top ^][table-of-contents]</sup>

#### 2.3.2. Firefox

1. Simply run:
```shell
pnpm install:firefox
```

> ⚠️ **NOTE:** the binary will be installed to `.firefox/`.

<sup>[Back to top ^][table-of-contents]</sup>

### 2.4. Run

* To run simply use:
```bash
$ pnpm dev:<chrome|firefox>
```

> ⚠️ **NOTE:** This command will bundle the TypeScript source code and extension assets into the `.<chrome|firefox>_build/` directory and, depending on your intended target (you can choose '`chrome`' or '`firefox`') the corresponding browser will start up with the unpacked extension as a temporary extension.

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Useful commands

| Command                | Description                                                                                                                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm build:chrome`    | Bundles the source code and Chrome specific assets into the `.chrome_build/` directory.                                                                                                                                     |
| `pnpm build:edge`      | Bundles the source code and Microsoft Edge specific assets into the `.edge_build/` directory.                                                                                                                               |
| `pnpm build:firefox`   | Bundles the source code and Firefox specific assets into the `.firefox_build/` directory.                                                                                                                                   |
| `pnpm build:opera`     | Bundles the source code and Opera specific assets into the `.opera_build/` directory.                                                                                                                                       |
| `pnpm dev:chrome`      | Creates an unpacked build, starts the local Chrome For Testing Developer edition, if it is installed or defaults to the currently installed build. This will watch for changes in the source code and reload the extension. |
| `pnpm dev:firefox`     | Creates an unpacked build, starts the local Firefox Developer edition, if it is installed or defaults to the currently installed build. This will watch for changes in the source code and reload the extension.            |
| `pnpm check:types`     | Checks for typing errors.                                                                                                                                                                                                   |
| `pnpm generate:env`    | Generates an `.env` file from the `.env.example` file, if one doesn't exist.                                                                                                                                                |
| `pnpm install:chrome`  | Installs/updates the latest version of Chrome For Testing browser at the project root. This removes an existing version if it exists.                                                                                       |
| `pnpm install:firefox` | Installs/updates the latest version of Firefox Developer Edition browser at the project root. This removes the existing version if it exists.                                                                               |
| `pnpm lint`            | Runs the linter.                                                                                                                                                                                                            |
| `pnpm package:chrome`  | Packages the contents of the `.chrome_build/` directory into a `chrome-{version}.zip` file, ready for submission.                                                                                                           |
| `pnpm package:edge`    | Packages the contents of the `.edge_build/` directory into a `edge-{version}.zip` file, ready for submission.                                                                                                               |
| `pnpm package:firefox` | Packages the contents of the `.firefox_build/` directory into a `firefox-{version}.zip` file, ready for submission.                                                                                                         |
| `pnpm package:opera`   | Packages the contents of the `.opera_build/` directory into a `opera-{version}.zip` file, ready for submission.                                                                                                             |
| `pnpm prettier`        | Runs `prettier` with the same configuration that is run on the pre-commit hooks.                                                                                                                                            |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How to contribute

Please read the [**contributing guide**](./CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 5. License

Please refer to the [COPYING][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[license]: https://github.com/kibis-is/katavault-web-extension/blob/main/COPYING
[table-of-contents]: #table-of-contents
