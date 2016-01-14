import {Observable} from "rx";
import {EventEmitter} from "events";
import {noop, uniqueId, bindAll, transform} from "lodash";

const loaded = [];
const loadEvents = new EventEmitter();

function removeFromLoaded(v) {
  const index = loaded.indexOf(v);
  if(index !== -1) {
    loaded.splice(index, 1);
  }
}

let id = 0;
const log = debug("tctc:sound");
const soundId = () => `sound-${++id}`;

export default class Sound extends EventEmitter {
  constructor({path, volume=1, voices=1, delay=0}={}) {
    super();
    path = path.toLowerCase();
    this._queue = Promise.resolve();
    this.id = path;
    this.volume = volume;
    this.voices = voices;
    this.delay = delay;
    this.path = path;
    this.pathWithExt = `${path}.${getAudioExtention()}`;
    try {
      this.fullpath = require("../audio/" + this.pathWithExt);
    } catch(error) {
      console.error(`Failed to load sound "${path}": ${error}`);
      this.error = error || {};
      this.fullpath = "";
    }

    this.observable = Observable.create((observer) => {
      this.play().then(observer.onNext.bind(observer), observer.onError.bind(observer));

      return this.stop.bind(this);
    }).take(1);

    bindAll(this);
    log(`${this.id} Creating sound: ${this.path}`);
  }

  _enqueue(fn) {
    this._queue = this._queue.then(fn);
    return this._queue;
  }

  load() {
    const {id, fullpath, volume, voices, delay, loadPromise} = this;
    if(loadPromise) {
      log(`${id} Already loaded. Skipping loading`);
      return loadPromise;
    }
    this.loaded = false;
    return this.loadPromise = new Promise((resolve, reject) => {
      const onLoad = () => {
        log(`${id} loaded`);
        loaded.push(this);
        loadEvents.emit("change");
        this.loaded = true;
        this.emit("load");
        resolve();
      };
      const onError = (error) => {
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
        removeFromLoaded(this);
        loadEvents.emit("change");
        this.loaded = false;
        this.loadPromise = null;
        this.emit("unload");
        resolve();
      };
      const onError = (error) => {
        console.error(`${id} Unloading failed: ${error}`);
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
      this.playing = true;
      log(`${id} Playing`);

      getNativeAudio().play(id,
        () => {},
        (errorMessage) => {
          const error = new Error(errorMessage);
          log(`${id} Failed to play: ${error}`);
          this.playing = false;
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
      })
      .catch((error) => {
        console.error("Failed to stop sound:", error, this.path);
      });
  }

  toString() {
    return this.path;
  }
}

Sound.loaded = loaded;
Sound.loadEvents = loadEvents;

Sound.many = (soundMap={}, cache) => transform(soundMap, (sounds, path, id) => {
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
