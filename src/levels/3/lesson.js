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
        {id: "cat", word: "cat", hidden: true}
      ]
    };
  }

  getSounds() {
    return {
      "cat": "boy/words/cat",
      "the first sound...": "boy/common/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
      "the last sound...": "boy/common/the-last-sound-you-hear-in-a-word-is-called-the-ending-sound",
      "the beginning sound...": "boy/common/the-beginning-sound-in-the-word",
      "the ending sound...": "boy/common/the-ending-sound-in-the-word",
      "is": "boy/common/is",
      "say the beginning...": "boy/common/say-the-beginning-and-ending-sounds-in",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin",
      "k": "boy/common/phonics/_k_",
      "t": "boy/common/phonics/_t_"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      yield this.say(boy, "the first sound...");
      yield this.say(boy, "the beginning sound...");
      boy.set("size", "small");
      choices.all.set("hidden", false);
      yield this.say(boy, "cat");
      yield this.say(boy, "is");
      yield this.say(boy, "k");
      yield this.wait(200);
      yield this.say(boy, "the last sound...");
      yield this.say(boy, "the ending sound...");
      yield this.say(boy, "cat");
      yield this.say(boy, "is");
      yield this.say(boy, "t");
      yield this.say(boy, "say the beginning...");
      yield this.say(boy, "cat");
      yield this.say(boy, "then touch...");
    });
  }

  render() {
    const {activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Beginning and Ending Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 3</LessonTitle.SubTitle>

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
