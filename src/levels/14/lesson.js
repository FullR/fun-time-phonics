import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
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
        {id: "bad", word: "bad", hidden: true},
        {id: "bed", word: "bed", hidden: true},
        {id: "hit", word: "hit", hidden: true},
        {id: "hot", word: "hot", hidden: true}
      ]
    };
  }

  getSounds() {
    return {
      "if you replace": "boy/common/if-you-replace",
      "in": "boy/common/in",
      "with": "boy/common/with",
      "the new word is": "boy/common/the-new-word-is",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin",
      "bad": "boy/words/bad",
      "bed": "boy/words/bed",
      "hit": "boy/words/hit",
      "hot": "boy/words/hot",
      "ah": "boy/common/phonics/_ah_",
      "eh": "boy/common/phonics/_eh_",
      "ih": "boy/common/phonics/_ih_",
      "oh": "boy/common/phonics/_oh_"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      boy.set("size", "large");

      choices.bad.set("detached", false);
      choices.bed.set("detached", false);

      choices.hit.set("detached", true);
      choices.hot.set("detached", true);

      yield this.say(boy, "if you replace");
      yield this.say(boy, "ah");
      yield this.wait(100);
      yield this.say(boy, "in");
      boy.set("size", "small");
      choices.bad.set("hidden", false);
      yield this.say(boy, "bad");
      yield this.say(boy, "with");
      yield this.say(boy, "eh");
      yield this.wait(200);
      yield this.say(boy, "the new word is");
      choices.bed.set("hidden", false);
      yield this.say(boy, "bed");

      yield this.wait(500);

      choices.bad.set({hidden: true, detached: true});
      choices.bed.set({hidden: true, detached: true});
      choices.hit.set("detached", false);
      choices.hot.set("detached", false);

      yield this.say(boy, "if you replace");
      yield this.say(boy, "ih");
      yield this.wait(100);
      yield this.say(boy, "in");
      boy.set("size", "small");
      choices.hit.set("hidden", false);
      yield this.say(boy, "hit");
      yield this.say(boy, "with");
      yield this.say(boy, "oh");
      yield this.wait(200);
      yield this.say(boy, "the new word is");
      choices.hot.set("hidden", false);
      yield this.say(boy, "hot");

      yield this.wait(500);

      yield this.say(boy, "touch the...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.word}
              sound={this.getSound(choice.word)}
            />
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
