import Sound from "sound";
import {Observable} from "rx";
import {noop} from "lodash";
import sequence from "sequence";
import delay from "delay";

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

function animation(...steps) {
  const seq = sequence(...steps);
  let disposable = null;

  function stop() {
    if(disposable) {
      disposable.dispose();
      disposable = null;
    }
  }

  function start() {
    return Observable.create((observer) => {
      disposable = seq.subscribe(noop, observer.onError.bind(observer), () => {
        observer.onNext();
        observer.onCompleted();
      });
      return stop;
    });
  }

  return {
    stop, start, 
    isPlaying() { 
      return !!disposable; 
    }
  };
}

const anim = animation(
  welcome.play(),
  delay(2000),
  welcome.play(),
  delay(3000),
  welcome.play()
);
let disposable = null;

welcome.load().then(() => {
  fromEvent("click", playBtn)
    .subscribe(() => {
      disposable = welcome.play().subscribe();
      //anim.start().subscribe();
    });

  fromEvent("click", stopBtn)
    .subscribe(() => {
      disposable.dispose();
    });
});

