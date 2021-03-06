import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import DragContainer from "components/drag-container";
import DisplayText from "components/display-text";
import DropWordBox from "components/drop-word-box";
import dndContext from "dnd-context";

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
        id: letter,
        hidden: false
      })),
      showingWord: false
    };
  }

  getSounds() {
    const {word} = this.props;
    return {
      "word": `girl/words/${word}`,
      "drag the letter...": "girl/common/drag-the-letter-that-makes-the-middle-sound-in",
      "to the picture": "girl/common/to-the-picture"
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!shortInstructions) {
        this.setState({showingWord: false});
        yield this.say(girl, "drag the letter...");
      }
      this.setState({showingWord: true});
      yield this.say(girl, "word");
      if(!shortInstructions) {
        yield this.say(girl, "to the picture");
      }
    });
  }

  onDrop(letter) {
    this.props.onAnswer({
      letter,
      correct: letter === this.props.correctLetter
    });
  }

  render() {
    const {girl, choices, showingWord} = this.state;
    const {title, word, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DropWordBox word={word} sound={this.getSound("word")} onDrop={this.onDrop.bind(this)} hidden={!showingWord} waveHidden={this.state.coPlaying}/>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DragContainer key={choice.id} value={choice.letter} DragPreviewComponent={DisplayText}>
                <DisplayText hidden={choice.hidden}>
                  {choice.letter}
                </DisplayText>
              </DragContainer>
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
