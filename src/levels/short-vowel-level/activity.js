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
    const {words, vowel} = this.props;
    return {
      ...wordSounds("girl", words),
      "touch the word that makes the": "girl/common/touch-the-word-that-makes-the",
      "phonic": `girl/common/phonics/_${vowel}h_`,
      "sound": "girl/common/sound"
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
        yield this.say(girl, "touch the word that makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound");
        yield this.wait(100);
      }
      girl.set("size", "small");
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
    const {title, levelId, onAnswer, activityIndex, correctWord, showLesson, activityCount} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              onClick={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
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
