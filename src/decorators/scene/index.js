import React from "react";
import coContainer from "decorators/co-container";
import choiceContainer from "decorators/choice-container";
import actorContainer from "decorators/actor-container";
import soundContainer from "decorators/sound-container";

export default function scene(Wrapped) {
  return (
    @coContainer
    @choiceContainer
    @actorContainer
    @soundContainer
    class Scene extends Wrapped {
      onLoad() {
        if(super.onLoad) {
          super.onLoad();
        }
        if(super.autoplay) {
          super.autoplay();
        }
      }

      say(who, sound) {
        const onComplete = () => who.set({animating: false});
        who.set({speaking: true, animating: true});
        return this.play(sound).then(onComplete, (error) => {
          console.error(`Error while playing sound ${sound}: ${error}`);
          onComplete();
        });
      }
    }
  );
}
