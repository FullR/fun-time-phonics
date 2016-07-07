import {transform, values, assign, isFunction} from "lodash";
import Queue from "util/queue";
import Sound from "sound";

/*
  Static queuing for sound loading/unloading to avoid
  errors caused by synchronous change of soundContainers
  where a sound is released as its loaded.

  This ensures no sound will start loading/unloading until after all
  current sounds have finished loading/unloading.
*/
const queue = new Queue();

export default function soundContainer(Wrapped) {
  return class SoundContainer extends Wrapped {
    constructor(props) {
      super(props);
      assign(this.state || (this.state = {}), {
        soundsLoaded: false
      });
      this.sounds = transform(this.getSounds(), (sounds, path, soundId) => {
        sounds[soundId] = new Sound({path});
      });
    }

    getSounds() {
      if(super.getSounds) {
        return super.getSounds();
      } else {
        return {};
      }
    }

    play(soundId) {
      const sound = this.getSound(soundId);
      this.currentPlayingSound = sound;
      return sound.play().then(() => {
        this.currentPlayingSound = null;
      });
    }

    getSound(soundId) {
      const sound = this.sounds[soundId];
      if(!sound) throw new Error(`Sound does not exist: "${soundId}"`);
      return sound;
    }

    onLoad() {
      this.setState({soundsLoaded: true});
      if(super.onLoad) {
        super.onLoad();
      }
    }

    componentDidMount() {
      const {sounds} = this;

      const load = () => Promise.all(
        values(sounds).map((sound) =>
          sound.load().catch((error) =>
            console.log(`Failed to load sound: ${sound.path}`)
          )
        )
      );

      queue.enqueue(load)
        .catch((error) => console.log("Error while loading sounds: ", error))
        .then(this.onLoad.bind(this));


      if(super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUnmount() {
      const {sounds} = this;
      const unload = () => values(sounds).forEach((sound) => sound.unload());

      values(sounds).forEach((sound) => sound.stop());

      queue.enqueue(unload)
        .catch((error) => console.log("Error while unloading sounds: ", error));

      if(super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  };
}
