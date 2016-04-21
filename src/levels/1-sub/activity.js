import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";

@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: props.wordsOnly ? "small" : "large",
        speaking: true,
        animating: false
      },
      choices: props.words.map((word) => ({
        word,
        id: word,
        hidden: true
      }))
    };
  }

  getSounds() {
    const {words, exampleWords} = this.props;
    return {
      ...wordSounds("girl", words),
      ...wordSounds("girl", exampleWords),
      "touch the word...": "girl/common/touch-the-word-that-begins-with-the-same-sound-as",
      "and": "girl/common/and"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {exampleWords} = this.props;
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!wordsOnly) {
        girl.set("size", "large");
        yield this.say(girl, "touch the word...");
        yield this.say(girl, exampleWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, exampleWords[1]);
        girl.set("size", "small");
      }
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(200);
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {onAnswer, activityIndex, correct, indexOffset, showLesson} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              onClick={() => onAnswer({word: choice.word, correct: correct === choice.word})}
            />
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson 1: Beginning Sounds<br/>
          Activity {activityIndex + indexOffset + 1} of 15
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
