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
import dndContext from "dnd-context";
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import DisplayText from "components/display-text";
import DropWordBox from "components/drop-word-box";

@dndContext
@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: "small",
        speaking: true,
        animating: false
      },
      choices: props.letters.map((letter) => ({
        letter,
        id: letter
      }))
    };
  }

  getSounds() {
    const {word} = this.props;
    return {
      "drag the vowel in": "girl/common/drag-the-vowel-in",
      "to the picture": "girl/common/to-the-picture",
      "word": `girl/words/${word}`
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {
      yield this.say(girl, "drag the vowel in");
      yield this.say(girl, "word");
      yield this.say(girl, "to the picture");
    });
  }

  onDrop(letter) {
    const {correctLetter, onAnswer} = this.props;
    onAnswer({letter, correct: letter === correctLetter});
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, activityIndex, showLesson, activityCount, word} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DropWordBox
              word={word}
              sound={this.getSound("word")}
              onDrop={this.onDrop.bind(this)}
              waveHidden={this.state.coPlaying}
            />
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DragContainer key={choice.id} value={choice.letter}>
                <DisplayText {...choice}>{choice.letter}</DisplayText>
              </DragContainer>
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
