// Service worker del generador de direcciones.
// Guarda la página y el logo en el móvil para que la app abra al instante y también sin internet.
// Las búsquedas (Photon, Nominatim, Overpass) y los mapas siempre van a internet: no se guardan.

const APP_CACHE = "app-v1";
const APP_FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

// Borra copias de versiones anteriores.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== APP_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;   // APIs y mapas: directo a internet
  event.respondWith(networkFirst(req));
});

// Primero internet (así siempre ves la última versión publicada). Si no hay conexión
// o tarda más de 4 segundos, se usa la copia guardada.
function networkFirst(req) {
  const cachePromise = caches.open(APP_CACHE);
  const network = fetch(req).then(async (res) => {
    if (res.ok) (await cachePromise).put(req, res.clone());
    return res;
  });
  network.catch(() => {});
  const timeout = new Promise((_, reject) => setTimeout(reject, 4000));

  return Promise.race([network, timeout]).catch(async () => {
    const cache = await cachePromise;
    const hit = (await cache.match(req, { ignoreSearch: true })) ||
      (req.mode === "navigate" ? await cache.match("index.html") : null);
    return hit || network;   // sin copia guardada: esperar a internet
  });
}
