const DEMO = false;

import React from "react";
import {version} from "../package";
import ReactDOM from "react-dom";
import Application from "components/application";
import store from "store";
import actions from "store/actions";
import getStorage from "storage";
import serialize from "store/serialize";
import deserialize from "store/deserialize";

require("style/normalize.scss");
require("style/base.scss");

const storage = getStorage({
  version,
  namespace: DEMO ?
    "com.criticalthinking.ftph-demo" :
    "com.criticalthinking.ftph"
});
const loadedState = storage.get("state");

if(!!loadedState) {
  store.dispatch({
    type: actions.LOAD_STATE,
    state: deserialize(loadedState)
  });
}

store.subscribe(() => storage.set("state", serialize(store.getState())));

ReactDOM.render(<Application demo={DEMO}/>, document.getElementById("game-container"));
