import {Observable} from "rx";
import {flatten} from "lodash";
import sequence from "util/sequence";
const noop = () => {};

export default class Animation {
  constructor(steps) {
    this.seq = sequence(flatten(steps));
    this.disposable = null;
  }

  isAnimating() {
    return !!this.disposable;
  }

  start() {
    return Observable.create((observer) => {
      this.stop();
      this.disposable = this.seq.subscribe(noop, observer.onError.bind(observer), () => {
        observer.onNext();
        observer.onCompleted();
      });
      return this.stop.bind(this);
    });
  }

  stop() {
    if(this.disposable) {
      this.disposable.dispose();
      this.disposable = null;
    }
  }
}
