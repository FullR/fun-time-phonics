import {EventEmitter} from "events";
import requireSound from "require-sound";

export default class Sound extends EventEmitter {
  constructor({path}={}) {
    super();
    if(!path) {
      throw new Error("Sound must have path parameter");
    }
    path = path.toLowerCase();
    this.path = path;
    try {
      this.src = "/android_asset/www/" + requireSound("./" + path + ".mp3");
    } catch(error) {
      console.log(`Failed to require sound ${path}: ${error}`);
      this.src = "/android_asset/www/" + requireSound("./missing-sound.mp3");
    }
  }

  get playing() {
    return !!this.media;
  }

  load() {
    return Promise.resolve();
  }

  play() {
    return new Promise((resolve, reject) => {
      this.stop();
      this.emit("start");
      this.media = new Media(this.src, resolve, reject);
      this.media.play();
    })
      .catch((error) => console.log("Failed to play sound:", error))
      .then(() => this.unload());
  }

  stop() {
    const {media} = this;
    if(media) {
      media.stop();
      media.release();
      this.media = null;
      this.emit("end");
    }
  }

  unload() {
    this.stop();
  }
}
