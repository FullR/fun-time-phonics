import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import PlayableDisplayText from "components/playable-display-text";
import scene from "decorators/scene";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "small",
        speaking: true
      },
      choices: [
        {id: "axe", word: "axe", hidden: true},
        {id: "Rex", word: "Rex", hidden: true},
        {id: "mix", word: "mix", hidden: true},
        {id: "ox", word: "ox", hidden: true},
        {id: "tux", word: "tux", hidden: true}
      ]
    };
  }

  getSounds() {
    return {
      "axe": "boy/words/axe",
      "Rex": "boy/words/Rex",
      "mix": "boy/words/mix",
      "ox": "boy/words/ox",
      "tux": "boy/words/tux",
      "the letter": "boy/common/the-letter",
      "x": "boy/common/x",
      "looks like this": "boy/common/looks-like-this",
      "makes the ending sound of": "boy/common/makes-the-ending-sound-of",
      "words such as": "boy/common/words-such-as",
      "all end with the": "boy/common/all-end-with-the",
      "phonic": "boy/common/phonics/_x_",
      "sound": "boy/common/sound",
      "we use the letter": "boy/common/we-use-the-letter",
      "to write the": "boy/common/to-write-the",
      "when we read the letter": "boy/common/when-we-read-the-letter",
      "it tells us to say": "boy/common/it-tells-us-to-say",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);

      yield this.say(boy, "the letter");
      yield this.say(boy, "x");
      yield this.say(boy, "looks like this");
      yield this.say(boy, "the letter");
      yield this.say(boy, "x");
      yield this.say(boy, "makes the ending sound of");

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }

      yield this.say(boy, "words such as");

      for(let choice of choices) {
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }

      yield this.say(boy, "all end with the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");
      yield this.say(boy, "we use the letter");
      yield this.say(boy, "x");
      yield this.say(boy, "to write the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.say(boy, "when we read the letter");
      yield this.say(boy, "x");
      yield this.say(boy, "it tells us to say");
      yield this.say(boy, "phonic");
      yield this.wait(200);
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
            <PlayableDisplayText sound={this.getSound("x")} waveHidden={this.state.coPlaying}>
              <span style={{marginRight: 50}}>X</span><span>x</span>
            </PlayableDisplayText>
          </SceneBar>

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
