import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";

@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: "large",
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
    const {words} = this.props;
    return {
      ...wordSounds("girl", words)
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {

    });
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, onAnswer, activityIndex, correctWord, showLesson, activityCount} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                sound={this.getSound(choice.word)}
                onClick={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle>
          {levelId}. {title}<br/>
          Activities of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
