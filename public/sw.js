"use strict";

const CACHE_NAME = `my-cache-v1.0.6`;

install();
removeOutdatedCache();
fetchAndCache();

function install() {
  const urlsToCache = ["/", "/offline"];

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      }),
    );
  });
}

function removeOutdatedCache() {
  self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys.map((key) => {
              if (!cacheWhitelist.includes(key)) {
                return caches.delete(key);
              }
            }),
          ),
        )
        .then(() => {
          /* eslint-disable-next-line */
          console.log("V2 now ready to handle fetches!");
        }),
    );
  });
}

function fetchAndCache() {
  async function cacheResponse(event) {
    try {
      const cacheResponse = await caches.match(event.request);
      if (cacheResponse) {
        return cacheResponse; // Serve from cache if available
      }

      // Important: Clone the request.
      // A request is a stream and can only be consumed once.
      const fetchRequest = event.request.clone();

      const response = await fetch(fetchRequest);

      // Check if we received a valid response
      if (
        !response ||
        response.status !== 200 ||
        response.type !== "basic" ||
        event.request.url.startsWith("chrome-extension://")
      ) {
        return response;
      }

      // Important: Clone the response.
      // A response is a stream and because we want the browser to consume the response
      // as well as the cache consuming the response, we need to clone it so we have
      // two streams.
      const responseToCache = response.clone();

      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, responseToCache);
      });

      return response;
    } catch {
      return caches.match("/offline");
    }
  }

  self.addEventListener("fetch", (event) => {
    event.respondWith(cacheResponse(event).then());
  });
}
