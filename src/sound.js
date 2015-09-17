import {Observable} from "rx";
import {uniqueId} from "lodash";
import debuggable from "debuggable";

const soundId = () => uniqueId("sound-");

@debuggable
export default class Sound {
  constructor({paths, volume=1, voices=1, delay=0, debug}) {
    this.id = soundId();
    this.debug = !!debug;
    this.volume = volume;
    this.voices = voices;
    this.delay = delay;
    this.paths = paths;
    this.path = this.paths[getAudioFormat()];
    this.log(`${this.id} Creating sound: ${this.path}`);
  }

  load() {
    return Observable.create((observer) => {
      const {path, id, volume, voices, delay} = this;
      const nativeAudio = getNativeAudio();

      this.log(`${id} Loading`);
      nativeAudio.preloadComplex(this.id, path, volume, voices, delay,
        (message) => {
          this.log(`${id} Loaded`);
          this.loaded = true;
          observer.onNext();
          observer.onCompleted();
        }, 
        (errorMessage) => {
          this.loaded = false;
          this.logError(`${id} Loading failed: ${errorMessage}`);
          observer.onError(new Error(errorMessage));
        }
      );
    });
  }

  unload() {
    const {id, loaded} = this;
    return Observable.create((observer) => {
      if(loaded) {
        this.log(`${id} Unloading`);
        getNativeAudio().unload(this.id, 
          () => {
            this.log(`${id} Unloaded`);
            this.loaded = false;
            observer.onNext();
            observer.onCompleted();
          }, 
          (errorMessage) => {
            this.log(`${id} Failed to unload: ${errorMessage}`);
            observer.onError(new Error(errorMessage));
          }
        );
      } else {
        this.log(`${id} Not loaded. Skipping unload`);
        observer.onNext();
        observer.onCompleted();
      }
    });
  }

  play() {
    const {id} = this;
    return Observable.create((observer) => {
      this.playing = true;
      this.log(`${id} Playing`);
      getNativeAudio().play(id, 
        () => {
          this.log(`${id} Play successful`);
        },
        (errorMessage) => {
          this.log(`${id} Failed to play: ${errorMessage}`);
          this.playing = false;
          observer.onError(new Error(errorMessage));
        },
        () => {
          this.log(`${id} Finished playing`);
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
    return Observable.create((observer) => {
      this.log("${id} Stopping");
      this.playing = false;
      if(playing) {
        getNativeAudio().stop(id, () => {
          this.log(`${id} Stopped`);
          observer.onNext();
          observer.onCompleted();
        }, (errorMessage) => {
          this.log(`${id} Failed to stop: ${errorMessage}`);
          observer.onError(new Error(errorMessage));
        });
      } else {
        this.log(`${id} Stopped`);
        observer.onNext();
        observer.onCompleted();
      }
    });
  }
}

function getNativeAudio() {
  if(window.plugins && window.plugins.NativeAudio) {
    return window.plugins.NativeAudio;
  } else {
    log("Native audio plugin not detected. Using polyfill.");
    return require("native-audio-polyfill");
  }
}

function getAudioFormat() {
  return "mp3";
}
