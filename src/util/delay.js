import {Observable} from "rx";

export default function delay(ms) {
  return Observable.create((observer) => {
    const timeout = setTimeout(observer.onNext.bind(observer), ms);
    return clearTimeout.bind(null, timeout);
  }).take(1);
}
