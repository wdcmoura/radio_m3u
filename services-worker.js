self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
