import Sound from "sound";
import {Observable} from "rx";
import Animation from "util/animation";
import delay from "util/delay";

const play = Observable.fromEvent(document.getElementById("play-btn"), "click");
const stop = Observable.fromEvent(document.getElementById("stop-btn"), "click");
const welcome = new Sound({paths: require("welcome.wav"), debug: true});

const animation = new Animation(
  welcome.play(),
  delay(2000),
  () => log("this is a test"),
  welcome.play(),
  delay(3000),
  welcome.play()
);

welcome.load().then(() => {
  play.subscribe(() => {
    animation.start().subscribe(() => log("Animation completed"));
  });

  stop.subscribe(() => {
    animation.stop();
  });
});

