import onReady from "./onReady";
import "babel-core/polyfill";
const debug = require("debug")("app");
require("./index.html"); // Forces webpack to include our html file
require("file?name=[name].[ext]!./platform.js"); // Include platform.js for web (will be overwritten by Cordova merges)
require("file?name=pixi.js!../node_modules/pixi.js/bin/pixi.js");

/* Globals */
window.debug = require("debug");
window.logError = debug("tctc:error");
/**/

function fatalError(error) {
  log.error("Uncaught error: " + error);
}

try {
  onReady().subscribe(() => {
    debug("deviceready fired");
    require("./app");
  }, fatalError);
} catch(error) {
  fatalError(error);
}
