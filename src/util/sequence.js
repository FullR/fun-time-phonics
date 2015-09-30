import {Observable} from "rx";
import isObservable from "util/is-observable";
import isPromise from "util/is-promise";
import delay from "util/delay";

export default function sequence(steps=[]) {
  return steps.reduce((obs, step) => {
    return obs.flatMap(() => {
      const result = typeof step === "function" ? step() : step;
      if(isObservable(result)) {
        return result;
      } else if(typeof result === "number") {
        return delay(result);
      } else if(isPromise(result)) {
        return Observable.fromPromise(result);
      } else {
        return delay(1); // This keeps synchronous ops from causing state-update issues in React
      }
    });
  }, Observable.just(null));
}
