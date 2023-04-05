'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"manifest.json": "71d2f74d597043acea657358afe3fe3e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/pod_player/assets/forward_right.json": "421233151632a84b7b935b4cdc9a967a",
"assets/packages/pod_player/assets/forward_left.json": "f198394de9533a75cbd3bbfb223756ff",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/assets/images/logo.png": "3d0c2946c5e1fce21b3eae19ee964705",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/emily.png": "d17e13b13a339a37775d5b46d07925f1",
"assets/assets/images/khalid.png": "d844bf2982bc466a968c2107542a0489",
"assets/assets/images/logo3.jpg": "6aad0adb3d16021eff954ca42887370a",
"assets/assets/images/logo6.png": "3b925cdbc46d68db61a9cdf306a7f7c8",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/backend.png": "0ebc182c1d9edd588d260e8a19d50f42",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/logo5.png": "e3329e081153fbbdaae5cfe1f5a5ce20",
"assets/assets/images/logo1.png": "9e601bcf80d4e711db4f0e40a106d2ca",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/logo2.png": "17fa645bb2cd66aa4fff4e7f44f26537",
"assets/assets/images/logo4.png": "5ca1409c5aea99f09f7b65336bc7eee4",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/Kotlin.png": "44fc3a0d1004a766a28c07ecc0a59540",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/videos/kitubs.mp4": "03838c7857c3b3aea5d1ac72cfa8370e",
"assets/assets/videos/rosary.mp4": "989390edfd4b33d804f53f140d3e3625",
"assets/assets/videos/gameon.mp4": "302c932d2a1b70b75f6c299e49cd3789",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.json": "38aec069e3101059b7fb1f044ce0d283",
"assets/NOTICES": "032302160a5d8180c9a773a9bd543b68",
"assets/AssetManifest.bin": "23ff25bb0bff623a71c06f9bdb4e819d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6",
"index.html": "10d656a27aa4bd8248e6143ffd7477be",
"/": "10d656a27aa4bd8248e6143ffd7477be",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/skwasm.wasm": "f767200511478d7f7052f2b536d82875",
"canvaskit/chromium/canvaskit.wasm": "c6b1144d5baffbdd9482ee820dbd7dc9",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"main.dart.js": "597f0f38c19d50e4af427a923fb9ebc0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
