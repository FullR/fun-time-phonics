const glob = require("glob-promise");
const fsp = require("fs-promise");

const soundGlob = "raw-audio/**/*.wav";
const imageGlob = "images/**/*.png";

Promise.all([glob(soundGlob), glob(imageGlob)])
  .then((results) => {
    const sounds = results[0].map((s) => s.replace(/\.wav$/, "").replace(/^raw-audio\//, ""));
    const images = results[1].map((s) => s.replace(/\.png$/, "").replace(/^images\//, ""));
    const index = {sounds: sounds, images: images};

    return fsp.writeFile("src/asset-index.json", JSON.stringify(index, null, 2));
  })
  .catch((error) => console.error(error));
