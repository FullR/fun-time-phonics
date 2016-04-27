import React from "react";
import store from "store";
import actions from "store/actions";
import wordSounds from "util/word-sounds";
import arrayEquals from "util/array-equals";
import toggleArrayValue from "util/toggle-array-value";
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
        animating: true
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
    const {words, ending, endingIntro} = this.props;
    const sounds = {
      ...wordSounds("girl", words),
      "touch the two words...": ending ?
        "girl/common/touch-the-two-words-that-make-the-same-ending-sound" :
        "girl/common/touch-the-two-words-that-make-the-same-beginning-sound"
    };

    if(endingIntro) { // activity 13
      sounds["now lets listen..."] = "girl/common/now-lets-listen-for-the-ending-sounds";
    }

    return sounds;
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {endingIntro} = this.props;
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      girl.set("size", wordsOnly ? "small" : "large");
      if(endingIntro) {
        yield this.say(girl, "now lets listen...");
        yield this.wait(100);
      }
      if(!wordsOnly) {
        yield this.say(girl, "touch the two words...");
        yield this.wait(250);
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
    const {title, levelId, activityCount, onAnswer, activityIndex, showLesson} = this.props;

    return (
      <Screen>
        <Actor type="girl" {...girl} onClick={this.animate.bind(this, false)}/>
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
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>

        <AdminButton/>
      </Screen>
    );
  }
}
