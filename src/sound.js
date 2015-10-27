import {Observable} from "rx";
import {EventEmitter} from "events";
import {noop, uniqueId, bindAll, transform} from "lodash";

let id = 0;
const log = debug("tctc:sound");
const soundId = () => uniqueId("");

export default class Sound extends EventEmitter {
  constructor({path, volume=1, voices=1, delay=0}={}) {
    super();
    this.id = soundId();
    this.volume = volume;
    this.voices = voices;
    this.delay = delay;
    this.path = path;
    this.pathWithExt = `${path}.${getAudioExtention()}`;
    try {
      this.fullpath = require("../audio/" + this.pathWithExt);
    } catch(error) {
      logError(`Failed to load sound "${path}": ${error}`);
      this.error = error || {};
      this.fullpath = "";//require("../audio/missing-sound." + getAudioExtention());
    }

    this.observable = Observable.create((observer) => {
      this.play().then(observer.onNext.bind(observer), observer.onError.bind(observer));

      return this.stop.bind(this);
    }).take(1);

    bindAll(this);
    log(`${this.id} Creating sound: ${this.path}`);
  }

  load() {
    const {id, fullpath, volume, voices, delay} = this;
    if(this.loadPromise) {
      log(`${id} Already loaded. Skipping loading`);
      return this.loadPromise;
    }
    this.loaded = false;
    return this.loadPromise = new Promise((resolve, reject) => {
      const onLoad = () => {
        log(`${id} loaded`);
        this.loaded = true;
        this.emit("load");
        resolve();
      };
      const onError = (error) => {
        logError(`${id} Loading failed: ${error}`);
        this.error = error || {};
        resolve();
      }
      getNativeAudio().preloadComplex(id, fullpath, volume, voices, delay, onLoad, onError);
    });
  }

  unload() {
    const {id, loaded, error} = this;
    if(!loaded || error) {
      log(`${id} Not loaded. Skipping unloading`);
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const onUnload = () => {
        log(`${id} Unloaded`);
        this.loaded = false;
        this.loadPromise = null;
        this.emit("unload");
        resolve();
      };
      const onError = (error) => {
        logError(`${id} Unloading failed: ${error}`);
        this.emit("error", error);
        reject(error);
      };
      log(`${id} Unloading`);

      getNativeAudio().unload(id, onUnload, onError);
    });
  }

  play() {
    const {id} = this;
    if(this.error) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      this.emit("play");
      log(`${id} Playing`);
      getNativeAudio().play(id, 
        () => {
          this.playing = true;
        },
        (errorMessage) => {
          const error = new Error(errorMessage);
          log(`${id} Failed to play: ${error}`);
          this.playing = false;
          this.emit("error", error);
          reject(error);
        },
        () => {
          log(`${id} Finished playing`);
          this.playing = false;
          this.emit("end");
          resolve();
        }
      );
    });
  }

  stop() {
    const {id, playing, error} = this;

    log(`${id} Stopping`);
    if(!playing || error) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      getNativeAudio().stop(id, resolve, reject);
    })
    .then(() => {
      log(`${id} Stopped`);
      this.emit("end");
    }).catch((error) => {
      this.emit("error", error);
      logError("Failed to stop sound:", error);
    });
  }
}

Sound.many = (soundMap={}) => transform(soundMap, (sounds, path, id) => {
  sounds[id] = new Sound({path});
});

function getNativeAudio() {
  if(window.plugins && window.plugins.NativeAudio) {
    return window.plugins.NativeAudio;
  } else {
    return require("native-audio-polyfill");
  }
}

function getAudioExtention() {
  return "mp3";
}
