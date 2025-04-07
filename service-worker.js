self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalado');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
