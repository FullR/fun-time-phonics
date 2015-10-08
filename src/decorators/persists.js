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
      const _componentDidUpdate = Component.prototype.componentDidUpdate;
      Component.prototype.componentDidUpdate = function componentDidUpdate(nextProps, nextState) {
        if(this.state !== nextState) {
          log("Saving", this.state);
          this.save();
        }
        if(_componentDidUpdate) {
          _componentDidUpdate.call(this, nextProps, nextState);
        }
      };
    }

    return Component;
  };
}
