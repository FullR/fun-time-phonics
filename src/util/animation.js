import {Observable} from "rx";
import {flattenDeep, noop} from "lodash";
import sequence from "util/sequence";

export default class Animation {
  constructor(steps) {
    this.seq = sequence(flattenDeep(steps));
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
