import React from "react";
import scene from "decorators/scene";
import Screen from "components/screen";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import DisplayBar from "components/display-bar";
import Actor from "components/actor";
import WordSoundPlayBox from "components/word-sound-play-box";
import AdminButton from "components/admin-button";

@scene
export default class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: [
        {id: "tail", word: "tail", hidden: true},
        {id: "tip", word: "tip", hidden: true},
        {id: "tape", word: "tape", hidden: true}
      ]
    };
  }

  getSounds() {
    return {
      "the first sound...": "boy/common/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
      "the beginning sound in...": "boy/common/the-beginning-sound-in-the-words",
      "tail": "boy/words/tail",
      "tip": "boy/words/tip",
      "tape": "boy/words/tape",
      "is": "boy/common/is",
      "t": "boy/common/phonics/_t_",
      "say the words": "boy/common/say-the-words",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      boy.set({size: "large", speaking: "true"});
      yield this.say(boy, "the first sound...");
      yield this.wait(100);
      yield this.say(boy, "the beginning sound in...");
      yield this.wait(100);
      boy.set("size", "small");
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(200);
      }
      yield this.say(boy, "is");
      yield this.wait(50);
      yield this.say(boy, "t");
      yield this.wait(100);
      yield this.say(boy, "say the words");
      for(let choice of choices) {
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }
      yield this.say(boy, "then touch...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Beginning Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 1</LessonTitle.SubTitle>

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
