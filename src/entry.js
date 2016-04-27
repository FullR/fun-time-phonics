import "babel-polyfill";
import loadImage from "./util/load-image";
import images from "./images-to-preload";
require("./index.html"); // Forces webpack to include our html file
require("../images/favicon.ico");

images.forEach((path) => loadImage(path));

window.onload = () => require("./app");
