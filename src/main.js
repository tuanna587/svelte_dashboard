import 'virtual:windi.css';
import('@fortawesome/fontawesome-free/css/all.min.css');
import('@fortawesome/fontawesome-free/js/fontawesome.min.js');
import './app.css';

import App from './App.svelte';
import { registerSW } from "virtual:pwa-register";

// const updateSW = registerSW({
//   onNeedRefresh() {},
//   onOfflineReady() {},
// })

if ("serviceWorker" in navigator) {
  registerSW();
}

const app = new App({
  target: document.getElementById('app'),
});

export default app;
