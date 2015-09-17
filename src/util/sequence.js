import {Observable} from "rx";
import isObservable from "util/is-observable";
import isPromise from "util/is-promise";

export default function sequence(...steps) {
  return steps.reduce((obs, step) => {
    return obs.flatMap(() => {
      const result = typeof step === "function" ? step() : step;
      if(isObservable(result)) {
        return result;
      } else if(isPromise(result)) {
        return Observable.fromPromise(result);
      } else {
        return Observable.just(result);
      }
    });
  }, Observable.just(null));
}
