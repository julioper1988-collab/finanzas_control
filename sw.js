// SW mínimo: solo habilita instalación PWA en Android.
// No cachea nada para evitar versiones viejas atascadas (network-first passthrough).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
