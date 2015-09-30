
function image(path) {
  try {
    return require("../images/" + path);
  } catch(error) {
    return require("../images/words/undefined.png");
  }
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

export default image;
