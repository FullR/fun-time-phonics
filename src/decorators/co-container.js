import stoppableCo from "util/stoppable-co";
import wait from "util/wait";

export default function coContainer(Wrapped) {
  return class CoContainer extends Wrapped {
    startCo(genFn, context=this, ...args) {
      if(this._coPlaying) return Promise.resolve();
      this._coPlaying = true;
      return wait(0).then(() => {
        const co = stoppableCo(genFn.bind(context));
        const {promise, stop} = co.apply(null, args);
        this.stopCo();
        this._stopCo = stop;
        return promise.then(() => {
          this._stopCo = null;
          this._coPlaying = false;
        });
      });
    }

    stopCo() {
      if(this._stopCo) {
        this._stopCo();
        this._stopCo = null;
        this._coPlaying = false;
      }
    }

    wait(ms) {
      return wait(ms);
    }

    componentWillUnmount() {
      this.stopCo();
      if(super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  };
}
