import {EventEmitter} from "events";
import {Howler, Howl} from "howler";
import defer from "util/defer";
import requireSound from "require-sound";

Howler.autoSuspend = false;

document.addEventListener("visibilitychange", () => {
  Howler.mute(document.hidden);
});

export default class Sound extends EventEmitter {
  constructor({path}={}) {
    super();
    if(!path) {
      throw new Error("Sound must have path parameter");
    }
    path = path.toLowerCase();
    this.path = path;
    try {
      this.src = requireSound("./" + path + ".mp3");
    } catch(error) {
      console.log(`Failed to require sound ${path}: ${error}`);
      this.src = requireSound("./missing-sound.mp3");
    }
  }

  get playing() {
    return this.howl && this.howl.playing();
  }

  load() {
    return new Promise((resolve, reject) => {
      const {src} = this;
      this.howl = new Howl({
        src: [src],
        autoplay: false,
        loop: false,
        onload: resolve,
        onloaderror: reject
      });
    })
    .catch((error) => console.log(`Failed to load sound ${this.path}: ${error}`));
  }

  play() {
    const onEnd = () => this.emit("end");
    const onError = (error) => {
      console.error(`Error while playing sound: ${error}`);
      this.emit("end");
    };
    return new Promise((resolve, reject) => {
      const {howl} = this;
      this.emit("start");

      function onEnd() {
        howl.off("stop", onStop);
        resolve();
      }

      function onStop() {
        howl.off("end", onEnd);
        resolve();
      }

      howl.once("end", onEnd);
      howl.once("stop", onStop);
      howl.seek(0);
      howl.play();
    }).then(onEnd, onError);
  }

  stop() {
    const {howl} = this;
    if(howl) {
      howl.stop();
    }
  }

  unload() {
    const {howl} = this;
    if(howl) {
      howl.unload();
      this.howl = null;
    }
  }
}
