import React from "react";
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
      "touch the word...": "girl/common/touch-the-word-that-ends-with-the-same-sound-as",
      "and": "girl/common/and"
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {exampleWords} = this.props;
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      if(!shortInstructions) {
        girl.set("size", "large");
        yield this.say(girl, "touch the word...");
        yield this.say(girl, exampleWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, exampleWords[1]);
        yield this.wait(200);
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
    const {onAnswer, activityIndex, correct, indexOffset, showLesson} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar style={{position: "relative", top: 50}}>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                waveHidden={this.state.coPlaying}
                sound={this.getSound(choice.word)}
                onClick={() => onAnswer({word: choice.word, correct: correct === choice.word})}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex + indexOffset} activityCount={15}>
          Ending Sounds
        </ActivityTitle>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
