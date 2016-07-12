import "babel-polyfill";
import {isCordova} from "util/detect-platform";
require("./index.html"); // Forces webpack to include our html file
require("../images/favicon.ico");

function startApp() {
  require("./app");
}

if(isCordova()) {
  document.addEventListener("deviceready", startApp, false);
} else {
  window.onload = startApp;
}
