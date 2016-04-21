import "babel-polyfill";
require("./index.html"); // Forces webpack to include our html file
require("../images/favicon.ico");

window.onload = () => {
  console.time("startup");
  require("./app");
  console.timeEnd("startup");
};
