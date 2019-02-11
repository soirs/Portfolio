
const dataCacheName = 'template-pwa';
const cacheName = 'template-pwa';

const cachedFiles = [
  '/src/pages/',
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      console.log(' ///// ///// ///// /////');
      console.log(' ///// ///// ///// /////');
      return cache.addAll(cachedFiles);
    }),
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
      if (key !== cacheName && key !== dataCacheName) {
        console.log('[ServiceWorker] Removing old cache', key);
        return caches.delete(key);
      }
    }))),
  );
  return self.clients.claim();
});
