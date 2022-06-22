// import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import 'virtual:windi.css';
import('@fortawesome/fontawesome-free/css/all.min.css');
import('@fortawesome/fontawesome-free/js/fontawesome.min.js');
import './app.css';

import App from './App.svelte';
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });
  // registerSW();
}

const app = new App({
  target: document.getElementById('app'),
});

export default app;
