import React from "react";
import {identity} from "lodash";

export default function storeListener(store, selectFn=identity) {
  const getState = () => selectFn(store.getState());
  return (Wrapped) => class StoreListener extends Wrapped {
    constructor(props) {
      super(props);
      if(this.state) {
        Object.assign(this.state, getState());
      } else {
        this.state = getState();
      }
      console.log(this.state);
    }

    componentDidMount() {
      this.unsub = store.subscribe(() => {
        this.setState(getState());
      });
    }

    componentWillUnmount() {
      if(this.unsub) {
        this.unsub();
        this.unsub = null;
      }
    }
  };
}
