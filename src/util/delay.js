import {Observable} from "rx";

export default function delay(ms) {
  return Observable.create((observer) => {
    const timeout = setTimeout(() => {
      observer.onNext();
      observer.onCompleted();
    }, ms);
    return clearTimeout.bind(null, timeout);
  });
}
