import Sound from "sound";
import {Observable} from "rx";

function fromEvent(eventId, el) {
  return Observable.create((observer) => {
    const onEvent = observer.onNext.bind(observer);
    el.addEventListener(eventId, onEvent);
    return el.removeEventListener.bind(el, onEvent);
  });
}

const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const welcome = new Sound({paths: require("welcome.wav"), debug: true});

welcome.load().subscribe(() => {
  fromEvent("click", playBtn)
    .subscribe(() => {
      welcome.play().subscribe();
    });

  fromEvent("click", stopBtn)
    .subscribe(() => {
      welcome.stop().subscribe();
    });
});
