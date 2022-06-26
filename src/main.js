import 'virtual:windi.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import './app.css';
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('sw need refresh');
  },
  onOfflineReady() {
    console.log('sw need offline ready');
  },
})

import App from './App.svelte';
const app = new App({
  target: document.getElementById('app'),
});

export default app;
