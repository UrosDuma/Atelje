self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(function(){return new Response('Nema veze sa internetom.',{headers:{'Content-Type':'text/plain; charset=utf-8'}});}));}});
