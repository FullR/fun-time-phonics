import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: [
        {id: "rat", word: "rat", hidden: true},
        {id: "wet", word: "wet", hidden: true},
        {id: "sit", word: "sit", hidden: true},
        {id: "pot", word: "pot", hidden: true},
        {id: "rug", word: "rug", hidden: true},
      ]
    };
  }

  getSounds() {
    return {
      "listen to...": "boy/common/listen-to-the-middle-sound-in-these-words",
      "makes the": "boy/common/makes-the",
      "sound": "boy/common/sound",
      "and": "boy/common/and",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin",
      "rat": "boy/words/rat",
      "wet": "boy/words/wet",
      "sit": "boy/words/sit",
      "pot": "boy/words/pot",
      "rug": "boy/words/rug",
      "ah": "boy/common/phonics/_ah_",
      "eh": "boy/common/phonics/_eh_",
      "ih": "boy/common/phonics/_ih_",
      "oh": "boy/common/phonics/_oh_",
      "uh": "boy/common/phonics/_uh_"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      boy.set("size", "large");
      yield this.say(boy, "listen to...");
      yield this.wait(300);

      boy.set("size", "small");
      choices.rat.set("hidden", false);
      yield this.say(boy, "rat");
      yield this.say(boy, "makes the");
      yield this.say(boy, "ah");
      yield this.say(boy, "sound");
      yield this.wait(200);

      choices.wet.set("hidden", false);
      yield this.say(boy, "wet");
      yield this.say(boy, "makes the");
      yield this.say(boy, "eh");
      yield this.say(boy, "sound");
      yield this.wait(200);

      choices.sit.set("hidden", false);
      yield this.say(boy, "sit");
      yield this.say(boy, "makes the");
      yield this.say(boy, "ih");
      yield this.say(boy, "sound");
      yield this.wait(200);

      choices.pot.set("hidden", false);
      yield this.say(boy, "pot");
      yield this.say(boy, "makes the");
      yield this.say(boy, "oh");
      yield this.say(boy, "sound");
      yield this.wait(200);

      yield this.say(boy, "and");
      choices.rug.set("hidden", false);
      yield this.say(boy, "rug");
      yield this.say(boy, "makes the");
      yield this.say(boy, "uh");
      yield this.say(boy, "sound");
      yield this.wait(300);

      yield this.say(boy, "touch the...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                size="medium"
                waveHidden={this.state.coPlaying}
                key={choice.word}
                sound={this.getSound(choice.word)}
              />
            )}
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
