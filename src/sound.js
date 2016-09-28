function isWebAudioSupported() {
  const a = document.createElement("audio");
  return a.canPlayType && a.canPlayType("audio/mpeg;") === "probably";
}

// if cordova, fallback to native audio. Otherwise, use web audio with no fallback
if(window.cordova) {
  if(isWebAudioSupported()) {
    console.log(`Using web audio`);
    module.exports = require("./sound-web");
  } else {
    console.log(`Using native audio`);
    module.exports = require("./sound-native");
  }
} else {
  console.log(`Using web audio`);
  module.exports = require("./sound-web");
}

// if(window.cordova && window.cordova.platformId === "android") {
//   console.log("Android detected. Using native audio API");
//   module.exports = require("./sound-mobile");
// } else {
//   console.log("Android not detected. Using web audio API");
//   module.exports = require("./sound-web");
// }
