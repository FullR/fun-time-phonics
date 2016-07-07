import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import arrayEquals from "util/array-equals";
import toggleArrayValue from "util/toggle-array-value";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";

@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: props.shortInstructions ? "small" : "large",
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
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      if(!shortInstructions) {
        girl.set("size", "large");
        yield this.say(girl, "touch the two words that rhyme");
        yield this.wait(100);
        girl.set("size", "small");
        yield this.wait(300);
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
    const {levelId, title, activityCount, onAnswer, activityIndex, correctWord, showLesson} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar style={{top: 50}}>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                waveHidden={this.state.coPlaying}
                sound={this.getSound(choice.word)}
                selected={selected.includes(choice.word)}
                onClick={this.selectWord.bind(this, choice.word)}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
