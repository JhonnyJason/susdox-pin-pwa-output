(()=>{"use strict";var n,e,t,a,c,i,r,o,s,g,l,f,p,u,m,h,d,w;u=function(n){return console.log(`[serviceworker] ${n}`)},n="PIN-PWA_app",l="PIN-PWA_user-images",e=["PIN-PWAmain","PIN-PWAimages","PIN-PWAfonts"],c=["/","/argon2worker.js","/manifest.json","/img/icon.png","/img/sustsol_logo.png"],d=["/android-chrome-96x96.png","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/mstile-70x70.png","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/safari-pinned-tab.svg"],i=/.(o|t)tf$|.woff2?$/,f=/.png$|.jpg$|.jpeg$|.webp$|.gif$/,w={ignoreSearch:!0},h=function(){self.addEventListener("message",m)},m=async function(n){var e,t,a,c;if("tellMeVersion"===n.data)for(c={version:"v0.1.5b"},t=0,a=(e=await self.clients.matchAll({includeUncontrolled:!0})).length;t<a;t++)e[t].postMessage(c);"deleteImageCache"===n.data&&await caches.delete(l)},t=async function(n){var e,t,a;for(e=0,t=n.length;e<t;e++)a=n[e],caches.delete(a);try{return await Promise.all(promises)}catch(n){}},o=function(n){var e;return e=new URL(n.url),p(e.pathname)?r(n):i.test(e.pathname)?s(n):f.test(e.pathname)?g(n):fetch(n)},r=async function(e){try{return await a(e,n)}catch(n){}},g=async function(n){try{return await a(n,l)}catch(n){}},s=async function(n){try{return await a(n,"PIN-PWA_fonts")}catch(n){}},a=async function(n,e){var t,a;return t=await caches.open(e),a=await fetch(n),t.put(n,a.clone()),a},p=function(n){return!!d.includes(n)},h()})();