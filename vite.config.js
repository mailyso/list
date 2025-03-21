import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import * as pkg from './package.json';
import dts from 'vite-plugin-dts';

// eslint-disable-next-line n/prefer-global/process
const NODE_ENV = process.argv.mode || 'development';
const VERSION = pkg.version;

export default {
  build: {
    copyPublicDir: false,
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'EditorjsList',
      fileName: 'editorjs-list',
    },
  },
  define: {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(VERSION),
  },

  server: {
    port: 3303,
    open: './playground/index.html',
  },
  plugins: [cssInjectedByJsPlugin(), dts()],
};
