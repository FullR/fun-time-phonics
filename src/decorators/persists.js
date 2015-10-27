import storage from "storage";
const log = debug("tctc:storage");

export default function persists(namespace, autoSave) {
  return function PersistsWrapper(Component) {
    Component.prototype.save = function save() {
      storage.set(this._getNamespace(), this.state);
      return this;
    };

    Component.prototype.load = function load(defaultValue={}) {
      return storage.get(this._getNamespace()) || defaultValue;
    };

    Component.prototype.saveGlobal = function saveGlobal(source) {
      storage.set("global", Object.assign({}, this.loadGlobal(), source));
    };

    Component.prototype.loadGlobal = function loadGlobal() {
      return storage.get("global") || {};
    };

    Component.prototype._getNamespace = function _getNamespace() {
      return namespace || this.namespace;
    };

    if(autoSave) {
      const _componentWillUpdate = Component.prototype.componentWillUpdate;
      Component.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
        if(this.state !== nextState) {
          log("Saving", this.state);
          this.save();
        }
        if(_componentWillUpdate) {
          _componentWillUpdate.call(this, nextProps, nextState);
        }
      };
    }

    return Component;
  };
}
