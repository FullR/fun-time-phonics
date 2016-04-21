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

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "touch the two words that rhyme": "girl/common/touch-the-two-words-that-rhyme"
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
        yield this.say(girl, "touch the two words that rhyme");
        yield this.wait(100);
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

  selectWord(word) {
    const {selected} = this.state;
    const {correctWords, onAnswer} = this.props;
    const newSelected = toggleArrayValue(selected, word);

    if(newSelected.length >= 2) {
      onAnswer({
        words: newSelected,
        correct: arrayEquals(newSelected, correctWords)
      });
    } else {
      this.setState({selected: newSelected});
    }
  }

  render() {
    const {girl, choices, selected} = this.state;
    const {onAnswer, activityIndex, correctWord, showLesson} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              selected={selected.includes(choice.word)}
              onClick={this.selectWord.bind(this, choice.word)}
            />
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson 5: Rhyme Time<br/>
          Activity {activityIndex + 1} of 19
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
