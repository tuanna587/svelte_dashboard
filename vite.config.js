import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import scss from 'rollup-plugin-scss';

import * as path from 'path';
const production = !process.env.ROLLUP_WATCH;
// https://vitejs.dev/config/
export default defineConfig({
  manualChunks: (id) => {
    if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
  },
  plugins: [
    // splitVendorChunkPlugin(),
    svelte(),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Skote svelte copy',
        short_name: 'Skote svelte copy',
        description: 'Clone skote dashboard',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {},
    }),
  ],

  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: '@use "src/variables.scss" as *;',
    //   },
    // },
    // output: 'public/build/vendor.css'
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    // watch: {
    //   usePolling: true
    // }
  },
});
