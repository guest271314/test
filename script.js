const sw = await navigator.serviceWorker
  .getRegistrations()
  .then((r) => Promise.all(r.map((s) => s.unregister())))
  .then(() =>
    navigator.serviceWorker.register("./sw.js", {
      scope: "./",
      type: "module",
    })
  )
  .then((s) => {
    return new Promise((resolve) => {
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        (e) => {
          console.log(e);
          resolve(e);
        },
        { once: true },
      );
    });
  })
  .catch((e) => e.message);

export {sw};
