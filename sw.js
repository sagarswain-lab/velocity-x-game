const CACHE_NAME = 'velocity-x-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './velocity_x_hero_1776962882095.png',
  './velocity_x_icon_512_1777133289334.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
