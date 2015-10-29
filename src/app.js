import React from "react";
import ReactDOM from "react-dom";
import Application from "components/application";
require("style/normalize.scss");
require("style/base.scss");
debug.enable("tctc:*,-tctc:sound");
ReactDOM.render(<Application/>, document.getElementById("game-container"));
