
export default function image(path) {
  return require("../images/" + path);
}

image.preload = function preloadImage(...paths) {
  return Promise.all(paths.map((path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = image(path);
    });
  }));
};
