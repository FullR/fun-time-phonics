import stoppableCo from "util/stoppable-co";
import wait from "util/wait";

export default function coContainer(Wrapped) {
  return class CoContainer extends Wrapped {
    constructor(props) {
      super(props);
      if(this.state) {
        Object.assign(this.state, {coPlaying: true});
      } else {
        this.state = {coPlaying: true};
      }
    }

    startCo(genFn, context=this, ...args) {
      if(this._coPlaying) return Promise.resolve();
      this._coPlaying = true;
      this.setState({coPlaying: true});
      return wait(0).then(() => {
        const co = stoppableCo(genFn.bind(context));
        const {promise, stop} = co.apply(null, args);
        this.stopCo();
        this._stopCo = stop;
        return promise.then(() => {
          if(!this._unmounted) { // I don't think there's a better way unfortunately
            this.setState({coPlaying: false});
          }
          this._stopCo = null;
          this._coPlaying = false;
        });
      });
    }

    stopCo(updateState=true) {
      if(this._stopCo) {
        this._stopCo();
        this._stopCo = null;
        this._coPlaying = false;
        if(updateState) {
          this.setState({coPlaying: true});
        }
      }
    }

    wait(ms) {
      return wait(ms);
    }

    componentWillUnmount() {
      this.stopCo(false);
      this._unmounted = true;
      if(super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  };
}
