import storage from "storage";
const log = debug("tctc:storage");

export default function persists(namespace, autoSave) {
  return function PersistsWrapper(Component) {
    Component.prototype.save = function save() {
      storage.set(namespace, this.state);
    };

    Component.prototype.load = function load(defaultValue={}) {
      return storage.get(namespace) || defaultValue;
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
