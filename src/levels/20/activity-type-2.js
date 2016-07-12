import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import DropWordBox from "components/drop-word-box";
import dndContext from "dnd-context";
import DisplayText from "components/display-text";
import DragContainer from "components/drag-container";

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
      choices: props.words.map((word) => ({
        word,
        id: word,
        hidden: false
      })),
      highlightingLetter: false
    };
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letter...": "girl/common/drag-this-letter-to-the-word-that-makes-its-sound"
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!shortInstructions) {
        yield this.say(girl, "drag the letter...");
        yield this.wait(300);
      }
      this.setState({highlightingLetter: true});
      yield this.wait(500);
      this.setState({highlightingLetter: false});
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }
      girl.set({speaking: false, animating: false});
    });
  }

  onDrop(word) {
    this.props.onAnswer({
      word,
      correct: word === this.props.correctWord
    });
  }

  render() {
    const {girl, choices, showingWord, highlightingLetter} = this.state;
    const {title, letter, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DragContainer value={letter} DragPreviewComponent={DisplayText}>
              <DisplayText active={highlightingLetter}>{letter}</DisplayText>
            </DragContainer>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.word}
                word={choice.word}
                sound={this.getSound(choice.word)}
                onDrop={this.onDrop.bind(this, choice.word)}
                waveHidden={this.state.coPlaying}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          Review:&nbsp;&nbsp;{title}
        </ActivityTitle>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
