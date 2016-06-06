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
      choices: [
        {id: "red", word: "red", hidden: true},
        {id: "head", word: "head", hidden: true},
        {id: "bed", word: "bed", hidden: true},

        {id: "wait", word: "wait", hidden: true, detached: true},
        {id: "gate", word: "gate", hidden: true, detached: true},
        {id: "eight", word: "eight", hidden: true, detached: true}
      ]
    };
  }

  getSounds() {
    return {
      ...wordSounds("boy", this.state.choices.map((choice) => choice.word)),
      "words such as": "boy/common/words-such-as",
      "rhyme because...": "boy/common/rhyme-because-they-all-make-the-same-ending-sound",
      "the words": "boy/common/the-words",
      "rhyme because they all end in ate": "boy/common/rhyme-because-they-all-end-in-ate",
      "say": "boy/common/say",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    const firstGroup = [choices.red, choices.head, choices.bed];
    const secondGroup = [choices.wait, choices.gate, choices.eight];
    let choice;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      for(choice of secondGroup) {
        choice.set("detached", true);
      }

      yield this.say(boy, "words such as");
      boy.set("size", "small");
      for(choice of firstGroup) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(200);
      }
      yield this.say(boy, "rhyme because...");
      yield this.say(boy, "the words");
      for(choice of firstGroup) {
        choice.set("detached", true);
      }
      for(choice of secondGroup) {
        choice.set("detached", false);
      }
      for(choice of secondGroup) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(200);
      }
      yield this.say(boy, "rhyme because they all end in ate");
      yield this.wait(100);
      yield this.say(boy, "say");
      for(choice of secondGroup) {
        yield this.say(boy, choice.get("word"));
        yield this.wait(200);
      }
      yield this.say(boy, "then touch...");
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
