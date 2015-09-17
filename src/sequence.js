import {Observable} from "rx";

export default function sequence(...steps) {
  return steps.reduce((obs, step) => {
    return obs.flatMap(step);
  }, Observable.just(null));
}
