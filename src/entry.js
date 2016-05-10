import "babel-polyfill";
import loadImage from "./util/load-image";
import images from "./images-to-preload";
require("./index.html"); // Forces webpack to include our html file
require("../images/favicon.ico");

const loadImages = Promise.all(images.map((path) =>
  loadImage(path).catch((error) => console.error(`Failed to preload image ${path}: ${error}`))
));

function startApp() {
  try {
    require("./app");
  } catch(error) {
    console.error(error);
  }
}

window.onload = () => loadImages.then(startApp);
