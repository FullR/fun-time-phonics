import React from "react";
import onReady from "./on-ready";
import "babel-polyfill";

const debug = require("debug")("app");
window.DEBUG = true;
require("./index.html"); // Forces webpack to include our html file
require("file?name=[name].[ext]!./platform.js"); // Include platform.js for web (will be overwritten by Cordova merges)

/* Globals */
window.debug = require("debug");
window.logError = (...args) => console.error(...args);
window.errorCatcher = (message) => (error) => window.logError(`${message}: ${error}`);
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
