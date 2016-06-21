import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import scene from "decorators/scene";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import WordSoundPlayBox from "components/word-sound-play-box";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: [{id: "fat", word: "fat", hidden: true}]
    };
  }

  getSounds() {
    return {
      "when reading a word...": "boy/common/when-reading-a-word-look-at-the-middle-letter-first",
      "then say...": "boy/common/then-say-the-beginning-and-middle-sounds-together",
      "finally...": "boy/common/finally-add-the-ending-sound",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin",
      "fa": "boy/common/phonics/_f_ah_",
      "fat": "boy/common/phonics/_f_a_t_"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      boy.set("size", "large");
      yield this.say(boy, "when reading a word...");
      yield this.say(boy, "then say...");
      yield this.say(boy, "fa");
      yield this.say(boy, "finally...");
      boy.set("size", "small");
      choices.fat.set("hidden", false);
      yield this.say(boy, "fat");
      yield this.wait(300);
      yield this.say(boy, "touch the...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;
    const fat = choices[0];

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            <WordSoundPlayBox {...fat} sound={this.getSound("fat")} waveHidden={this.state.coPlaying}/>
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
