import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
// import { clientsClaim } from 'workbox-core';

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

//using for registerType is prompt
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

//using for registerType is autoUpdate
// self.skipWaiting()
// clientsClaim()
