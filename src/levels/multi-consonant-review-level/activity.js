import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import dndContext from "dnd-context";
import DragContainer from "components/drag-container";
import DisplayText from "components/display-text";
import DropWordBox from "components/drop-word-box";
import toPairs from "util/to-pairs";

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
      choices: props.letters.map((letters) => ({
        letters,
        id: letters,
        hidden: false
      }))
    };
  }

  getSounds() {
    const {word, letters, consonant} = this.props;
    return {
      ...toPairs(letters, (letters) => [letters, `girl/common/${letters.split("").join("-")}`]),
      "drag the letters that begin the word": "girl/common/drag-the-letters-that-begin-the-word",
      "word": `girl/words/${word}`,
      "to the picture": "girl/common/to-the-picture"
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(shortInstructions) {
        yield this.say(girl, "word");
      } else {
        yield this.say(girl, "drag the letters that begin the word");
        yield this.say(girl, "word");
        yield this.say(girl, "to the picture");
      }

      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {title, onAnswer, word, activityIndex, correctLetters, showLesson, activityCount, levelId, letter} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DropWordBox
              word={word}
              sound={this.getSound("word")}
              onDrop={(letters) => onAnswer({letters, correct: correctLetters === letters})}
              waveHidden={this.state.coPlaying}
            />
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DragContainer key={choice.id} value={choice.letters}>
                <DisplayText hidden={choice.hidden}>{choice.letters}</DisplayText>
              </DragContainer>
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
