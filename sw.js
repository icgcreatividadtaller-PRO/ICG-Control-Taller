// Service worker mínimo: permite instalar la app y recibir mensajes compartidos. No guarda copias (siempre usa la versión más nueva).
self.addEventListener('install', ()=>self.skipWaiting());
self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', ()=>{});
