import React from "react";
import storeListener from "../store-listener";

export default function levelStoreListener(store, levelId) {
  return storeListener(store, (Wrapped, props, state) => <Wrapped {...props} {...state.levels[levelId]}/>);
}
