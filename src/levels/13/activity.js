import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import arrayEquals from "util/array-equals";
import toggleArrayValue from "util/toggle-array-value";

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
      })),
      selected: []
    };
  }

  selectChoice(word) {
    const {correctWords, onAnswer} = this.props;
    const {selected} = this.state;
    const newSelected = toggleArrayValue(selected, word);

    if(newSelected.length >= 2) {
      onAnswer({
        words: newSelected,
        correct: arrayEquals(correctWords, newSelected)
      });
    } else {
      this.setState({
        selected: newSelected
      });
    }
  }

  isSelected(choice) {
    return this.state.selected.includes(choice.word);
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "touch the two...": "girl/common/touch-the-two-words-that-make-the-same-middle-sound"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      if(!wordsOnly) {
        girl.set("size", "large");
        yield this.say(girl, "touch the two...");
        yield this.wait(200);
        girl.set("size", "small");
      }

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }

      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              selected={this.isSelected(choice)}
              onClick={this.selectChoice.bind(this, choice.word)}
            />
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson {levelId}: Short Vowel Sounds<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
