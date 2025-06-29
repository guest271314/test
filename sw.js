const encoder = new TextEncoder();

addEventListener("install", async (e) => {
  console.log(e.type);
  e.addRoutes({
    condition: {
      urlPattern: new URLPattern({ hostname: "*" }),
    },
    source: "fetch-event",
  });

  e.waitUntil(self.skipWaiting());
});

addEventListener("activate", async (e) => {
  console.log(e.type);
  e.waitUntil(self.clients.claim());
});

addEventListener("fetch", async (e) => {
  console.log(e);
  if (e.request.url.includes("stream")) {
    console.log(...e.request.headers);
    e.respondWith(
      new Response("test");
    );
  } 
});
