if(window.cordova && window.cordova.platformId === "android") {
  console.log("Android detected. Using native audio API");
  module.exports = require("./sound-mobile");
} else {
  console.log("Android not detected. Using web audio API");
  module.exports = require("./sound-web");
}
