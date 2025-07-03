/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEBUG: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __TARGET__: 'chrome' | 'edge' | 'firefox' | 'opera';
declare const __VERSION__: string;
