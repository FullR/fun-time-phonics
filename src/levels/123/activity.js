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

//REMOVED: @dndContext
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
      "drag the letter...": "girl/common/drag-the-letter-that-ends-the-word",
      "word": `girl/words/${word}`
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(wordOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!wordOnly) {
        yield this.say(girl, "drag the letter...");
      }
      yield this.say(girl, "word");
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
              <DragContainer key={choice.id} value={choice.letter} DragPreviewComponent={DisplayText}>
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
