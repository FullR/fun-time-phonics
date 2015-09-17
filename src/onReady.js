import {Observable} from "rx";

export default function onReady() {
  return Observable.create((observer) => {
    if(window.platform.isCordova) {
      document.addEventListener("deviceready", () => {
        observer.onNext("deviceready");
        observer.onCompleted();
      }, false);
    } else {
      window.onload = () => {
        observer.onNext("load");
        observer.onCompleted();
      };
    }
  });
}
