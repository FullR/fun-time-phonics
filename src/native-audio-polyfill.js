import {Subject} from "rx";
import {Howl, Howler} from "howler";
const sounds = new Map();

const playEventStream = new Subject();
const loadEventStream = new Subject();

export default {
  preloadComplex(id, url, volume, voices, delay, successCb, errorCb) {
    if(sounds.has(id)) {
      successCb();
    } else {
      const sound = new Howl({
        volume,
        urls: [url],
        onload() {
          successCb();
        },
        onloaderror(error) {
          errorCb(error && error.message ? error.message : `Error while loading sound: ${error}`);
        },
        onend() {
          playEventStream.onNext(id);
        }
      });
      sounds.set(id, sound);
    }
  },

  preloadSimple(id, url, successCb, errorCb) {
    this.preloadComplex(id, url, 1, 1, 0, successCb, errorCb);
  },

  play(id, successCb, errorCb, finishCb) {
    const sound = sounds.get(id);
    if(sound) {
      sound.stop();
      playEventStream.filter((playedId) => playedId === id).take(1).subscribe(
        () => finishCb(), 
        (error) => errorCb(error && error.message ? error.message : `Unknown error while playing sound: ${error}`)
      );
      sound.play();
    } else {
      errorCb(`No sound exists with the id ${id}`);
    }
  },

  stop(id, successCb, errorCb) {
    const sound = sounds.get(id);
    if(sound) {
      try {
        sound.stop();
      } catch(error) {
        errorCb(error);
        return;
      }
      successCb();
    } else {
      errorCb(`No sound exists with the id ${id}`);
    }
  },

  unload(id, successCb, errorCb) {
    const sound = sounds.get(id);
    if(sound) {
      try {
        sound.unload();
      } catch(error) {
        errorCb(error);
        return;
      }
      sounds.delete(id);
      successCb();
    } else {
      errorCb(`No sound exists with the id ${id}`);
    }
  }
};
