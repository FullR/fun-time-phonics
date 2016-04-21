import React from "react";
import storage from "storage";

function serialize(obj={}, keys) {
  if(keys) {
    return keys.reduce((data, key) => {
      data[key] = obj[key];
      return data;
    }, {});
  } else {
    return obj;
  }
}

export default function saveState({namespace, keys, store}={}) {
  return (Parent) => class SaveState extends Parent {
    _getStore() {
      const s = store || this.store || this.props.store;
      if(!s) throw new Error("store option is required in saveState decorator");
      return s;
    }

    _getNamespace() {
      const ns = namespace || this.namespace || this.props.namespace;
      if(!ns) throw new Error("namespace option is required in saveState decorator");
      return ns;
    }

    save() {
      this._getStore().set(this._getNamespace(), serialize(this.state, keys))
    }

    load(defaultData={}) {
      const loaded = this._getStore().get(this._getNamespace());
      if(loaded) {
        return Object.assign({}, defaultData, loaded);
      } else {
        this._getStore().set(this._getNamespace(), defaultData);
        return defaultData;
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if(super.componentDidUpdate) {
        super.componentDidUpdate(prevProps, prevState);
      }
      this.save();
    }
  };
}
