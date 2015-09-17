import onReady from "./onReady";
import "babel-core/polyfill";
require("./index.html"); // Forces webpack to include our html file
require("file?name=[name].[ext]!./platform.js"); // Include platform.js for web (will be overwritten by Cordova merges)
window.log = require("./log"); // Can be disabled using log.disable

function fatalError(error) {
  log.error("Uncaught error: " + error);
}

try {
  onReady().subscribe(() => {
    log("deviceready fired");
    require("./app");
  }, fatalError);
} catch(error) {
  fatalError(error);
}
