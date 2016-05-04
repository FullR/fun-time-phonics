import React from "react";
import store from "store";
import actions from "store/actions";
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
        animating: true
      },
      choices: props.words.map((word) => ({
        word,
        id: word,
        hidden: true
      }))
    };
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "touch the word that ends with": "girl/common/touch-the-word-that-ends-with",
      "t": "girl/common/phonics/_t_"
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
        yield this.say(girl, "touch the word that ends with"),
        yield this.wait(250);
        yield this.say(girl, "t");
        yield this.wait(200);
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
    const {title, levelId, onAnswer, activityIndex, correct, showLesson} = this.props;

    return (
      <Screen>
        <Actor type="girl" {...girl} onClick={this.animate.bind(this, false)}/>
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
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of 15
        </ActivityTitle>

        <AdminButton/>
      </Screen>
    )
  }
}
