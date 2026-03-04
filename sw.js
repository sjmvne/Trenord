const CACHE_NAME = 'trenord-v34';

const CORE_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './icon.svg',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

const IMAGE_ASSETS = [
    './STIBM Areas/Mi1-Mi3.png',
    './STIBM Areas/Mi1-Mi4.png',
    './STIBM Areas/Mi1-Mi5.png',
    './STIBM Areas/Mi1-Mi6.png',
    './STIBM Areas/Mi1-Mi7.png',
    './STIBM Areas/Mi1-Mi8.png',
    './STIBM Areas/Mi1-Mi9.png',
    './STIBM Areas/Mi3-Mi4.png',
    './STIBM Areas/Mi3-Mi5.png',
    './STIBM Areas/Mi3-Mi6.png',
    './STIBM Areas/Mi3-Mi7.png',
    './STIBM Areas/Mi3-Mi8.png',
    './STIBM Areas/Mi3-Mi9.png',
    './STIBM Areas/Mi4-Mi5.png',
    './STIBM Areas/Mi4-Mi6.png',
    './STIBM Areas/Mi4-Mi7.png',
    './STIBM Areas/Mi4-Mi8.png',
    './STIBM Areas/Mi4-Mi9.png',
    './STIBM Areas/Mi5-Mi6.png',
    './STIBM Areas/Mi5-Mi7.png',
    './STIBM Areas/Mi5-Mi8.png',
    './STIBM Areas/Mi5-Mi9.png',
    './STIBM Areas/Mi6-Mi7.png',
    './STIBM Areas/Mi6-Mi8.png',
    './STIBM Areas/Mi6-Mi9.png',
    './STIBM Areas/Mi7-Mi8.png',
    './STIBM Areas/Mi7-Mi9.png',
    './STIBM Areas/Mi8-Mi9.png'
];

// Install — cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll([...CORE_ASSETS, ...IMAGE_ASSETS]))
            .then(() => self.skipWaiting())
    );
});

// Activate — clean old caches and take control immediately
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch — Network-first for core assets (HTML/CSS/JS), cache-first for images
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const isCore = event.request.destination === 'document'
        || url.pathname.endsWith('.html')
        || url.pathname.endsWith('.css')
        || url.pathname.endsWith('.js');

    if (isCore) {
        // Network-first: try fresh version, fallback to cache
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache-first for images and other static assets
        event.respondWith(
            caches.match(event.request)
                .then(cached => cached || fetch(event.request))
        );
    }
});
