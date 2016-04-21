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
      choices: props.lessonWords.map((word) => ({
        word,
        id: word,
        hidden: true
      }))
    };
  }

  getSounds() {
    const {lessonWords, vowel} = this.props;
    return {
      ...wordSounds("boy", lessonWords),
      "words such as": "boy/common/words-such-as",
      "make the": "boy/common/make-the",
      "phonic": `boy/common/phonics/_${vowel}h_`,
      "sound": "boy/common/sound",
      "say": "boy/common/say",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      boy.set("size", "large");
      yield this.say(boy, "words such as");
      boy.set("size", "small");
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }
      yield this.say(boy, "make the");
      yield this.wait(100);
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");
      yield this.wait(200);
      yield this.say(boy, "say");
      for(let choice of choices) {
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }
      yield this.wait(200);
      yield this.say(boy, "then touch...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {activityIndex, onNext, levelId, vowel} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Short Vowel "{vowel}" Sound</LessonTitle>
        <LessonTitle.SubTitle>Lesson {levelId}</LessonTitle.SubTitle>

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
