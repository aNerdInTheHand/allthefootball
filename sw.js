const cacheName = 'test3'
const contentToCache = [
  '/index.css',
  '/offline.html',
  '/assets/allanaww.webp',
  '/assets/allanwoo.webp',
  '/assets/allanyeah.webp',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico'
]
const offlineUrl = 'offline.html'
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install')

  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('[Service Worker] Caching content', cache)
        return cache.addAll(contentToCache)
      })
  )
})

this.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request)
        })
        .catch(function(response) {
          return caches.match(offlineUrl)
        })
    )
  }
  else {
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request)
    .then(function (response) {
      return response || fetch(event.request)
    })
  )}
})

// clear out old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if(cacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }))
    })
  )
})
