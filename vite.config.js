import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  manualChunks: (id) => {
    if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
  },
  plugins: [
    // VitePWA({
    //   srcDir: 'src',
    //   filename: 'sw.js',
    //   registerType: 'autoUpdate',
    //   strategies: 'injectManifest',
    //   includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'Svelte + Vite + WindiCSS App',
    //     short_name: 'Svelte + Vite + WindiCSS App',
    //     description: 'An PWA app base svelte,vite,windicss',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'assets/icons/icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'assets/icons/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'assets/icons/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    //   workbox: {},
    // }),
    svelte(),
    WindiCSS(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
});
