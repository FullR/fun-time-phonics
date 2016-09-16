import {EventEmitter} from "events";
import {noop} from "lodash";
import defer from "util/defer";

const requireSound = require.context("../audio", true, /\.mp3$/);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    return false;
  }

  load() {
    const {Media} = window;
    const {MEDIA_STARTING, MEDIA_RUNNING, MEDIA_STOPPED} = Media;
    this.media = new Media(this.src,
      () => {
        if(this.playDeferred) {
          this.playDeferred.resolve();
          this.playDeferred = null;
        }
      },
      (error) => console.log("Media error:", error),
      (status) => {
        switch(status) {
          case MEDIA_STARTING:
            this.emit("start");
          break;
          case MEDIA_STOPPED:
            this.emit("end");
          break;
          case MEDIA_RUNNING:
            //if(this.media) this.media.seekTo(0);
          break;
        }
      }
    );

    return Promise.resolve();
  }

  play() {
    const {media} = this;
    if(media) {
      this.playDeferred = defer();
      //media.seekTo(0);
      media.play();
      media.seekTo(0);
      return this.playDeferred.promise;
    }
    return wait(1);
  }

  stop() {
    const {media} = this;
    if(media) {
      media.stop();
    }
  }

  unload() {
    const {media} = this;
    if(media) {
      this.stop();
      media.release();
      this.media = null;
    }
  }
}
