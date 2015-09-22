import React from "react";
import Application from "components/application";
require("style/normalize.scss");
require("style/base.scss");
debug.enable("tctc:*");

React.render(<Application/>, document.body);
