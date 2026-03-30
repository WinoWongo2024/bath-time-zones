const CACHE_NAME = 'freenav-v1';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// Precache assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHE_ASSETS))
    );
});

// Serve cached assets offline
self.addEventListener('fetch', (e) => {
    // Bypass cache for map tiles and geocoding (needs fresh data)
    if (e.request.url.includes('openstreetmap.org') || e.request.url.includes('nominatim')) {
        e.respondWith(fetch(e.request));
        return;
    }

    e.respondWith(
        caches.match(e.request)
            .then(cachedResponse => cachedResponse || fetch(e.request))
    );
});

// Clean up old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }));
        })
    );
});
