import React from "react";
import ReactDOM from "react-dom";
import Application from "components/application";
import store from "store";
import actions from "store/actions";
import storage from "storage";
import serialize from "store/serialize";
import deserialize from "store/deserialize";

require("style/normalize.scss");
require("style/base.scss");

const loadedState = storage.get("state");

if(!!loadedState) {
  store.dispatch({
    type: actions.LOAD_STATE,
    state: deserialize(loadedState)
  });
}

store.subscribe(() => storage.set("state", serialize(store.getState())));

ReactDOM.render(<Application/>, document.getElementById("game-container"));
