(()=>{"use strict";var n,t,e,a,i,c,s,r,o,l,f,u,g,p,h,d,m,w,v,y,P,x,A;v=function(n){return console.log(`[serviceworker] ${n}`)},t="PIN-PWA_app",p="PIN-PWA_user-images",a=["PIN-PWAmain","PIN-PWAimages","PIN-PWAfonts"],r=["/","/argon2worker.js","/manifest.json","/img/icon.png","/img/sustsol_logo.png"],x=["/android-chrome-96x96.png","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/mstile-70x70.png","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/safari-pinned-tab.svg"],o=/.(o|t)tf$|.woff2?$/,h=/.png$|.jpg$|.jpeg$|.webp$|.gif$/,A={ignoreSearch:!0},P=function(){self.addEventListener("activate",n),self.addEventListener("fetch",s),self.addEventListener("install",m),self.addEventListener("message",y)},n=function(n){n.waitUntil(self.clients.claim())},s=function(n){n.respondWith(e(n.request))},m=function(n){self.skipWaiting(),n.waitUntil(d())},y=async function(n){var t,e,a,i;if("tellMeVersion"===n.data)for(i={version:"v0.1.5u"},e=0,a=(t=await self.clients.matchAll({includeUncontrolled:!0})).length;e<a;e++)t[e].postMessage(i);"deleteImageCache"===n.data&&await caches.delete(p)},d=async function(){try{return await i(a),(await caches.open(t)).addAll(r)}catch(n){}},e=async function(n){var t;try{t=await caches.match(n,A)}catch(n){v(n)}return null!=t?t:f(n)},i=async function(n){var t,e,a;for(t=0,e=n.length;t<e;t++)a=n[t],caches.delete(a);try{return await Promise.all(promises)}catch(n){}},f=function(n){var t;return t=new URL(n.url),w(t.pathname)?l(n):o.test(t.pathname)?u(n):h.test(t.pathname)?g(n):fetch(n)},l=async function(n){try{return await c(n,t)}catch(n){}},g=async function(n){try{return await c(n,p)}catch(n){}},u=async function(n){try{return await c(n,"PIN-PWA_fonts")}catch(n){}},c=async function(n,t){var e,a;return e=await caches.open(t),a=await fetch(n),e.put(n,a.clone()),a},w=function(n){return!!x.includes(n)},P()})();