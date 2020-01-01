// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'tiffany',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
  });

  self.addEventListener('fetch', function(event) {});
  // let Service Worker take control of pages ASAP
  workbox.skipWaiting();
  workbox.clientsClaim();

  // let Workbox handle our precache list
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // use `networkFirst` strategy for `*.html`, like all my posts
  workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
  );

  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args).then(response => {
      if (!response) {
        return caches.match('pages/offline.html');
      } else if (response.status === 404) {
        return caches.match('pages/404.html');
      }
      return response;
    });
  });

  // use `cacheFirst` strategy for images
  workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
  );

  // third party files
  workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
  )
