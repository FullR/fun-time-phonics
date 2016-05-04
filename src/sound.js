import {EventEmitter} from "events";
import {Howler, Howl} from "howler";
import defer from "util/defer";

const requireSound = require.context("../audio", true, /\.(ogg|mp3)$/);

export default class Sound extends EventEmitter {
  constructor({path, debug=false}={}) {
    super();
    if(!path) {
      throw new Error("Sound must have path parameter");
    }
    path = path.toLowerCase();
    this.path = path;
    try {
      this.mp3Path = requireSound("./" + path + ".mp3");
      this.oggPath = requireSound("./" + path + ".ogg");
    } catch(error) {
      console.log(`Failed to load sound: ${path}`);
      this.mp3Path = requireSound("./missing-sound.mp3");
      this.oggPath = requireSound("./missing-sound.ogg");
    }
    this.debug = debug;
  }

  log(...args) {
    if(this.debug) {
      console.log(...args);
    }
  }

  load() {
    return new Promise((resolve, reject) => {
      const {mp3Path, oggPath} = this;
      this._sound = new Howl({
        urls: [mp3Path, oggPath],
        onload: () => {
          this.log("onload");
          resolve();
        },
        onloaderror: (error) => {
          this.log("onloaderror", error);
          reject(error);
        },
        onend: () => {
          const {_playDeferred} = this;
          this.log("onend");
          this.playing = false;
          if(_playDeferred) {
            _playDeferred.resolve();
            this._playDeferred = null;
            this.emit("end");
          } else {
            this.log("_playDeferred not defined in onend handler");
          }
        }
      });
    });
  }

  play() {
    const {_sound} = this;
    this.log("play");
    if(this._sound) {
      const deferred = this._playDeferred = defer();
      _sound.stop();
      _sound.play();
      this.playing = true;
      this.emit("start");
      return deferred.promise;
    } else {
      this.log("_sound not defined in play");
      return Promise.resolve();
    }
  }

  stop() {
    this.log("stop");
    const {_sound} = this;
    this.playing = false;
    if(_sound) {
      _sound.stop();
      this.emit("end");
    } else {
      this.log("_sound not defined in stop");
    }
  }

  unload() {
    const {_sound} = this;
    if(_sound) {
      _sound.unload();
      this._sound = null;
    } else {
      this.log("_sound not defined in unload");
    }
  }
}
