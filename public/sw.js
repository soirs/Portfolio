/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e9841b7dc0f0431444ce00d26941655a"
  },
  {
    "url": "404/index.html",
    "revision": "e5739638173ed6c06aadc51d9126a54f"
  },
  {
    "url": "about/index.html",
    "revision": "4462b3ecb0150a3b23b6056dccf80210"
  },
  {
    "url": "app-2c5a1ff1ba8872a3e07c.js"
  },
  {
    "url": "app-33ab7f92e5c0c83ec4bd.js"
  },
  {
    "url": "app-72d0dddfd3c00bc274f5.js"
  },
  {
    "url": "app-e5a98d6aead6e415b014.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-19055bbb9f227f4ff185.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-757ceda0e6ab34e80881.js"
  },
  {
    "url": "component---src-pages-404-jsx-cbaa56e3e7153bc7daba.js"
  },
  {
    "url": "component---src-pages-404-jsx-e03090d042bc3ba1f3fd.js"
  },
  {
    "url": "component---src-pages-404-jsx-e98996213bf70d2635a8.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-9ca9577d2aa9b82949b3.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-b7d0fbcb7a6c15dc0bac.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-ee8ad46ec417f7c70ffd.js"
  },
  {
    "url": "component---src-pages-index-jsx-0e9753165806c50e298c.js"
  },
  {
    "url": "component---src-pages-index-jsx-31223b7369ab0a128016.js"
  },
  {
    "url": "component---src-pages-index-jsx-b26b089b810ea6bfb1e8.js"
  },
  {
    "url": "component---src-pages-index-jsx-ec6e0f7d92346705f0ef.js"
  },
  {
    "url": "component---src-pages-index-jsx-fada5b6c6c30505df85d.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-2ab48779ce6c34164881.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-9e68aaf4ee80331585ee.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-c654c2345df4c0e0a8af.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-d3c4e453e51f36ad8c4a.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "8db4a22ea440729d96ac4bcd9236e632"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4189ce15a72a1120accfd9aa908e2574"
  },
  {
    "url": "pages-manifest-bcdb5c278a8bbdc8bb3d.js"
  },
  {
    "url": "pages-manifest-f2aca859dbde1406b51d.js"
  },
  {
    "url": "registerServiceWorker.js"
  },
  {
    "url": "styles-894b6f49f31318c2e4c1.js"
  },
  {
    "url": "styles.555ca7564463b519bb73.css"
  },
  {
    "url": "webpack-runtime-02d728a60bd8dc06803c.js"
  },
  {
    "url": "webpack-runtime-0ac15975e297320c51e8.js"
  },
  {
    "url": "webpack-runtime-65c06f8632efc0a2fa65.js"
  },
  {
    "url": "webpack-runtime-9f371b5302ed5874730c.js"
  },
  {
    "url": "webpack-runtime-d40b55fde27d7840d683.js"
  },
  {
    "url": "webpack-runtime-e127ee74a89c46e644cc.js"
  },
  {
    "url": "work/index.html",
    "revision": "87c3b8dcafbfe1176fd9c62fc8bb183a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
