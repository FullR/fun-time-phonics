import {sounds, images} from "asset-index";

function soundExists(path) {
  return sounds.indexOf(path) !== -1;
}

function imageExists(path) {
  return images.indexOf(path) !== -1;
}

export default {soundExists, imageExists};
