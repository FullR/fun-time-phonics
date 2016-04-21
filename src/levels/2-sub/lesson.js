import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: props.words.map((word) => ({
        word,
        id: word, hidden: true
      }))
    };
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("boy", words),
      "listen for...": "boy/common/listen-for-the-new-ending-sound-in",
      "and": "boy/common/and",
      "say": "boy/common/say",
      "slowly": "boy/common/slowly",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {words} = this.props;
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      boy.set("size", "large"),
      choices.all.set("hidden", true);
      yield this.say(boy, "listen for...");
      boy.set("size", "small");
      choices[words[0]].set("hidden", false);
      yield this.say(boy, words[0]);
      yield this.say(boy, "and");
      choices[words[1]].set("hidden", false);
      yield this.say(boy, words[1]);
      yield this.say(boy, "say");
      yield this.say(boy, words[0]);
      yield this.say(boy, "and");
      yield this.say(boy, words[1]);
      yield this.say(boy, "slowly");
      yield this.say(boy, "then touch...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {activityIndex, letter, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Ending Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 2 /{letter}/</LessonTitle.SubTitle>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.word}
              sound={this.getSound(choice.word)}
            />
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}/>
        <AdminButton/>
      </Screen>
    );
  }
}
