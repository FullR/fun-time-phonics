const DEMO = false;
const minWindowWidth = 0;

import React from "react";
import fastClick from "fastclick";
import {version} from "../package";
import ReactDOM from "react-dom";
import Application from "components/application";
import store from "store";
import actions from "store/actions";
import getStorage from "storage";
import serialize from "store/serialize";
import deserialize from "store/deserialize";
import loadImage from "util/load-image";
import {isCordova} from "util/detect-platform";

require("style/normalize.scss");
require("style/base.scss");

if(isCordova()) {
  // keep keyboard from squishing layout
  cordova.plugins.Keyboard.disableScroll(true);
}

// remove 300ms touch delay
fastClick.attach(document.body);

const storage = getStorage({
  version,
  namespace: DEMO ?
    "com.criticalthinking.ftph-demo" :
    "com.criticalthinking.ftph"
});

// load app state from localstorage
const loadedState = storage.get("state");
if(!!loadedState) {
  store.dispatch({
    type: actions.LOAD_STATE,
    state: deserialize(loadedState)
  });
}

// save app state on change
store.subscribe(() => storage.set("state", serialize(store.getState())));

// Preload loading screen logo before rendering loading screen
loadImage(require("../images/loader-logo.png"))
  .then(
    renderApp,
    (error) => {
      console.log(error);
      renderApp();
    }
  );

function renderApp() {
  ReactDOM.render(<Application demo={DEMO} minWindowWidth={minWindowWidth}/>, document.getElementById("game-container"));
}
