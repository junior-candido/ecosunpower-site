// Service Worker EcoSunPower — cache estratégico para PWA
const CACHE_VERSION = 'ecosun-v1';
const RUNTIME_CACHE = 'ecosun-runtime-v1';

// Recursos críticos cacheados na instalação
const PRECACHE_URLS = [
  '/',
  '/portfolio',
  '/blog',
  '/contato',
  '/manifest.json',
  '/logo-ecosunpower.png',
  '/logo-ecosunpower-icon.png',
  '/icon-192.png',
  '/icon-512.png',
];

// Instala o SW e pré-cacheia recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch((err) => console.warn('[SW] Precache falhou:', err))
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_VERSION && name !== RUNTIME_CACHE)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Estratégia: Network-first com fallback pro cache
self.addEventListener('fetch', (event) => {
  // Ignora requests não-HTTP (chrome-extension, etc)
  if (!event.request.url.startsWith('http')) return;
  if (event.request.method !== 'GET') return;

  // HTML: Network-first (sempre tenta atualizar, fallback offline)
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache da resposta nova
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // Assets estáticos (CSS/JS/imgs): Cache-first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) return response;
        const responseClone = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(event.request, responseClone));
        return response;
      });
    })
  );
});
