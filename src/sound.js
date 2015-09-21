import {Observable} from "rx";
import {EventEmitter} from "events";
import {noop, uniqueId, bindAll} from "lodash";

let id = 0;
const log = debug("tctc:sound");
const soundId = () => uniqueId("");

export default class Sound extends EventEmitter {
  constructor({paths, volume=1, voices=1, delay=0, debug}) {
    super();
    this.id = soundId();
    this.debug = !!debug;
    this.volume = volume;
    this.voices = voices;
    this.delay = delay;
    this.paths = paths;
    this.path = this.paths[getAudioFormat()];
    bindAll(this);
    log(`${this.id} Creating sound: ${this.path}`);
  }

  load() {
    const {id, path, volume, voices, delay} = this;
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
        reject(new Error(error));
      }
      getNativeAudio().preloadComplex(id, path, volume, voices, delay, onLoad, onError);
    });
  }

  unload() {
    const {id, loaded} = this;
    if(!this.loaded) {
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

    return Observable.create((observer) => {
      this.playing = true;
      log(`${id} Playing`);
      getNativeAudio().play(id, 
        noop,
        (errorMessage) => {
          const error = new Error(errorMessage);
          log(`${id} Failed to play: ${error}`);
          this.playing = false;
          this.emit("error", error);
          observer.onError(error);
        },
        () => {
          log(`${id} Finished playing`);
          this.emit("end");
          this.playing = false;
          observer.onNext();
          observer.onCompleted();
        }
      );
      return () => this.stop();
    });
  }

  stop() {
    const {id, playing} = this;
    log(`${id} Stopping`);
    if(!playing) {
      //log(`${id} Not playing. Skipping stop`);
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      getNativeAudio().stop(id, resolve, reject);
    })
    .then(() => {
      log(`${id} Stopped`);
      this.emit("end");
    }, (error) => {
      this.emit("error", error);
      throw error;
    });
  }
}

function getNativeAudio() {
  if(window.plugins && window.plugins.NativeAudio) {
    return window.plugins.NativeAudio;
  } else {
    //log("Native audio plugin not detected. Using polyfill.");
    return require("native-audio-polyfill");
  }
}

function getAudioFormat() {
  return "mp3";
}
