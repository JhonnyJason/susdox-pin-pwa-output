(()=>{"use strict";var e,n,t,a,s,i,c,r,l,o,f,d,g,h,p,u,v="v0.0.4";g=function(e){return console.log(`[serviceworker] ${e}`)},l="PIN-PWAimages",n=["/","/manifest.json","/android-chrome-96x96.png","/apple-touch-icon.png","/browserconfig.xml","/favicon.ico","/favicon-32x32.png","/favicon-16x16.png","/mstile-150x150.png","/safari-pinned-tab.svg"],s=/.(o|t)tf$|.woff2?$/,o=/.png$|.jpg$|.jpeg$|.webp$|.gif$/,u={ignoreSearch:!0},p=async function(){var n,t,s;for(g("onRegister"),self.addEventListener("activate",e),self.addEventListener("fetch",a),self.addEventListener("install",d),self.addEventListener("message",h),t=0,s=(n=await self.clients.matchAll({includeUncontrolled:!0})).length;t<s;t++)n[t].postMessage("postRegister");g(`postRegister: found ${n.length} clients!`)},e=function(e){g("activateEventHandler"),e.waitUntil(self.clients.claim()),g("clients have been claimed!")},a=function(e){e.respondWith(t(e.request))},d=function(e){g("installEventHandler"),self.skipWaiting(),g("skipped waiting :-)"),e.waitUntil(f())},h=async function(e){var n,t,a,s;if(g("messageEventHandler"),g("typeof data is "+typeof e.data),g(JSON.stringify(e.data,null,4)),g(`I am version ${v}!`),"tellMeVersion"===e.data)for(n=await self.clients.matchAll({includeUncontrolled:!0}),s={version:v},t=0,a=n.length;t<a;t++)n[t].postMessage(s);"deleteImageCache"===e.data&&await caches.delete(l)},f=async function(){g("installAppCache");try{return(await caches.open("PIN-PWAmain")).addAll(n)}catch(e){g(`Error on installAppCache: ${e.message}`)}},t=async function(e){var n;g("cacheThenNetwork");try{n=await caches.match(e,u)}catch(e){g(e)}return null!=n?n:i(e)},i=function(e){return s.test(e.url)?c(e):o.test(e.url)?r(e):fetch(e)},r=async function(e){try{return(await caches.open(l)).add(e)}catch(e){g(`Error on handleImageMiss: ${e.message}`)}return fetch(e)},c=async function(e){try{return(await caches.open("PIN-PWAfonts")).add(e)}catch(e){g(`Error on fontImageMiss: ${e.message}`)}return fetch(e)},p()})();