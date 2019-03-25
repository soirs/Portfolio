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
    "revision": "06bd6a715bcf79d025e42c99e3637e75"
  },
  {
    "url": "404/index.html",
    "revision": "5d6e91db5ab4af542c572c818c82d35d"
  },
  {
    "url": "9-580cba94fea25d8f57e3.js"
  },
  {
    "url": "9-8e599e906d2907ffb5c0.js"
  },
  {
    "url": "9-cf39c5102cc1896a5251.js"
  },
  {
    "url": "about/index.html",
    "revision": "eacb046e5a3bf9856bc5f0d044660bb8"
  },
  {
    "url": "app-23808deb7224bca68000.js"
  },
  {
    "url": "app-2c5a1ff1ba8872a3e07c.js"
  },
  {
    "url": "app-33ab7f92e5c0c83ec4bd.js"
  },
  {
    "url": "app-40580e088ef3d6a275fa.js"
  },
  {
    "url": "app-72d0dddfd3c00bc274f5.js"
  },
  {
    "url": "app-9e71a73230377dcd62d0.js"
  },
  {
    "url": "app-bc179d277fc5a2d61bee.js"
  },
  {
    "url": "app-e5a98d6aead6e415b014.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-19055bbb9f227f4ff185.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-46592af14aafd9b83486.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4ae023d43c9af45142cc.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-757ceda0e6ab34e80881.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-998ee5625cdb1ea210a9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-fc1f59016e2a9630282d.js"
  },
  {
    "url": "component---src-pages-404-jsx-7adfb40dbf08b89397d4.js"
  },
  {
    "url": "component---src-pages-404-jsx-9de0d0cddb11d41ec2c8.js"
  },
  {
    "url": "component---src-pages-404-jsx-bb17d9d43bd83092cd4e.js"
  },
  {
    "url": "component---src-pages-404-jsx-c3213079b97309682ac3.js"
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
    "url": "component---src-pages-about-index-jsx-5cf46d208b617f4bd396.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-9ca9577d2aa9b82949b3.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-b7d0fbcb7a6c15dc0bac.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-c252e56631931d1ceba8.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-e773eba5aa9998810196.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-ee8ad46ec417f7c70ffd.js"
  },
  {
    "url": "component---src-pages-about-index-jsx-f79654f0dcc11716aabe.js"
  },
  {
    "url": "component---src-pages-index-jsx-03e395fbea630e6a61ac.js"
  },
  {
    "url": "component---src-pages-index-jsx-0e9753165806c50e298c.js"
  },
  {
    "url": "component---src-pages-index-jsx-1b687c2a65ffdef18b93.js"
  },
  {
    "url": "component---src-pages-index-jsx-1d996d653965a1310eae.js"
  },
  {
    "url": "component---src-pages-index-jsx-31223b7369ab0a128016.js"
  },
  {
    "url": "component---src-pages-index-jsx-37eb45ea40abd93c52ba.js"
  },
  {
    "url": "component---src-pages-index-jsx-4bc8300c6d0e3b910ba8.js"
  },
  {
    "url": "component---src-pages-index-jsx-612fd4515c5e121d1696.js"
  },
  {
    "url": "component---src-pages-index-jsx-62f15e01e49d55bd868f.js"
  },
  {
    "url": "component---src-pages-index-jsx-6b3b58fdc4383ae30a73.js"
  },
  {
    "url": "component---src-pages-index-jsx-795f311ac75a80d9cc5c.js"
  },
  {
    "url": "component---src-pages-index-jsx-8d600ac4204e8a621f12.js"
  },
  {
    "url": "component---src-pages-index-jsx-9ee18de28677e292202d.js"
  },
  {
    "url": "component---src-pages-index-jsx-a9c05956204d25802b08.js"
  },
  {
    "url": "component---src-pages-index-jsx-b26b089b810ea6bfb1e8.js"
  },
  {
    "url": "component---src-pages-index-jsx-b7d16fbdb63758cb0dd6.js"
  },
  {
    "url": "component---src-pages-index-jsx-c3b3ae0d0dd93013e3fd.js"
  },
  {
    "url": "component---src-pages-index-jsx-cf2ca9b8be7616bf4852.js"
  },
  {
    "url": "component---src-pages-index-jsx-ec6e0f7d92346705f0ef.js"
  },
  {
    "url": "component---src-pages-index-jsx-fada5b6c6c30505df85d.js"
  },
  {
    "url": "component---src-pages-index-jsx-fdadab125874163653c4.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-16172bdf286fa965ed1b.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-2ab48779ce6c34164881.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-2c33c0f2783ad60922f6.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-84b1e020126b7c48da73.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-9e68aaf4ee80331585ee.js"
  },
  {
    "url": "component---src-pages-work-index-jsx-9f93cc3b1a8b87e5e8ca.js"
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
    "revision": "04fced4107f962c1716d4126cfc7229b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77781a82665237df8e02b81f432ae01d"
  },
  {
    "url": "pages-manifest-131cc6d8125ac929eeab.js"
  },
  {
    "url": "pages-manifest-1c6bb9831bf862d711ee.js"
  },
  {
    "url": "pages-manifest-2d04489b345b506760ae.js"
  },
  {
    "url": "pages-manifest-5a1634933ff2c4c384b5.js"
  },
  {
    "url": "pages-manifest-7af8d873dd9df2793e47.js"
  },
  {
    "url": "pages-manifest-a7c5272431a8a4c95992.js"
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
    "url": "styles-0ca75bf82458371591db.js"
  },
  {
    "url": "styles-22938da9f4126332494f.js"
  },
  {
    "url": "styles-6f2d24418f4dd6ebb082.js"
  },
  {
    "url": "styles-894b6f49f31318c2e4c1.js"
  },
  {
    "url": "styles-d24e46b593f74bee434a.js"
  },
  {
    "url": "styles.3931203815444840bdb3.css"
  },
  {
    "url": "webpack-runtime-02d728a60bd8dc06803c.js"
  },
  {
    "url": "webpack-runtime-09b11f9036b514d87bd7.js"
  },
  {
    "url": "webpack-runtime-0ac15975e297320c51e8.js"
  },
  {
    "url": "webpack-runtime-1f39057d0a1de8877f33.js"
  },
  {
    "url": "webpack-runtime-3214bf7b5735e0e3705d.js"
  },
  {
    "url": "webpack-runtime-413245114e83585bb9e6.js"
  },
  {
    "url": "webpack-runtime-44a73179074e2473468f.js"
  },
  {
    "url": "webpack-runtime-52d3565dc84517de70ac.js"
  },
  {
    "url": "webpack-runtime-60033a087af4e6321c0f.js"
  },
  {
    "url": "webpack-runtime-65c06f8632efc0a2fa65.js"
  },
  {
    "url": "webpack-runtime-72c1604f7b8999ba1487.js"
  },
  {
    "url": "webpack-runtime-805ec5e79f6f510f6639.js"
  },
  {
    "url": "webpack-runtime-82033362e372280af9c6.js"
  },
  {
    "url": "webpack-runtime-82c85e65d980c4441a47.js"
  },
  {
    "url": "webpack-runtime-9f371b5302ed5874730c.js"
  },
  {
    "url": "webpack-runtime-be35e3ba0723e212180b.js"
  },
  {
    "url": "webpack-runtime-c5c3791f10a21ce157bb.js"
  },
  {
    "url": "webpack-runtime-d40b55fde27d7840d683.js"
  },
  {
    "url": "webpack-runtime-d7387a216111475d1ebe.js"
  },
  {
    "url": "webpack-runtime-dc5932f0b5920d324e54.js"
  },
  {
    "url": "webpack-runtime-dddc19c908fdbfc6bca3.js"
  },
  {
    "url": "webpack-runtime-e127ee74a89c46e644cc.js"
  },
  {
    "url": "webpack-runtime-f27559feafc10921f8e8.js"
  },
  {
    "url": "work/index.html",
    "revision": "8d05fb528810b1e9ebd6f2223ca9aa27"
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
