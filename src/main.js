import 'virtual:windi.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import './app.css';
import App from './App.svelte';
const app = new App({
  target: document.getElementById('app'),
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then((reg) => {
      console.log("Service worker registered.", reg);
    });
  });
}
export default app;
