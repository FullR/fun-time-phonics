import React from "react";
import store from "store";
import actions from "store/actions";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
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
      "touch the word that begins with": "girl/common/touch-the-word-that-begins-with",
      "t": "girl/common/phonics/_t_"
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
        yield this.say(girl, "touch the word that begins with");
        yield this.wait(50);
        yield this.say(girl, "t");
        yield this.wait(100);
        girl.set("size", "small");
        yield this.wait(300);
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
    const {levelId, title, onAnswer, activityIndex, correct, showLesson, activityCount} = this.props;

    return (
      <Screen>
        <Actor type="girl" {...girl} onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar style={{position: "relative", top: 50}}>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                sound={this.getSound(choice.word)}
                waveHidden={this.state.coPlaying}
                onClick={() => onAnswer({word: choice.word, correct: correct === choice.word})}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex} activityCount={15}>
          {title}
        </ActivityTitle>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
