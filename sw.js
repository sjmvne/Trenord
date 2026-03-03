const CACHE_NAME = 'trenord-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './icon.svg',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
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
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch — cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
    );
});
