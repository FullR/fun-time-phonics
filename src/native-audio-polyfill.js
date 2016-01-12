import {Subject} from "rx";
import {Howl, Howler} from "howler";
const sounds = new Map();

const playEventStream = new Subject();
const loadEventStream = new Subject();

function idNotFound(id, errorCb) {
  errorCb(`No sound exists with the id ${id}`);
}

function sendError(errorCb, message) {
  return (error) => errorCb(error && error.message ? error.message : `${message}: ${error}`);
}

export default {
  preloadComplex(id, url, volume, voices, delay, successCb, errorCb) {
    sounds.set(id, new Howl({
      volume,
      urls: [url],
      onload() {
        successCb();
      },
      onloaderror(error) {
        errorCb(error);
      },
      onend() {
        playEventStream.onNext(id);
      }
    }));
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
        errorCb
      );
      sound.play();
    } else {
      idNotFound(id, errorCb);
    }
  },

  stop(id, successCb, errorCb) {
    const sound = sounds.get(id);
    if(sound) {
      try {
        sound.stop();
        successCb();
      } catch(error) {
        errorCb(error);
        return;
      }
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
        console.log("unload caught: " + error);
        errorCb(error);
        return;
      }
      sounds.delete(id);
      successCb();
    } else {
      errorCb(`No sound exists with the id ${id}`);
    }
  },

  setVolumeForComplexAsset(id, volume, successCb, errorCb) {
    const sound = sounds.get(id);
    if(sound) {
      try {
        sound.volume(volume);
      } catch(error) {
        errorCb(error);
        return;
      }
      successCb();
    } else {
      errorCb(`No sound exists with the id ${id}`);
    }
  }
};
