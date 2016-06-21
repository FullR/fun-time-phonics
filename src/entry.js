import "babel-polyfill";
require("./index.html"); // Forces webpack to include our html file
require("../images/favicon.ico");

function startApp() {
  require("./app");
}

window.onload = startApp;
