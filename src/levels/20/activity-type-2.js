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
      choices: props.words.map((word) => ({
        word,
        id: word,
        hidden: false
      }))
    };
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letter...": "girl/common/drag-the-letter-that-makes-this-middle-sound-to-the-picture"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!wordsOnly) {
        yield this.say(girl, "drag the letter...");
      }
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
    const {girl, choices, showingWord} = this.state;
    const {title, letter, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.word}
                word={choice.word}
                sound={this.getSound(choice.word)}
                onDrop={this.onDrop.bind(this, choice.word)}
              />
            )}
          </SceneBar>

          <SceneBar>
            <DragContainer value={letter}>
              <DisplayText>{letter}</DisplayText>
            </DragContainer>
          </SceneBar>
        </SceneContent>

        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
