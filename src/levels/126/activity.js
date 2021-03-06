import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import DisplayText from "components/display-text";
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import Word from "components/word";
import DisplayBox from "components/display-box";
import DropWordBox from "components/drop-word-box";
import dndContext from "dnd-context";

require("./word-text.scss");

function WordText({children}) {
  return (<span className="Level-126__word-text">{children}</span>)
}

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
        id: word
      }))
    };
  }

  getSounds() {
    const {words, shortInstructions} = this.props;
    return {
      ...wordSounds("girl", words),
      "read both words...": "girl/common/read-both-words-then-drag-the-words-to-the-correct-picture"
    };
  }

  autoplay() {
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!shortInstructions) {
        yield this.say(girl, "read both words...");
      }
      girl.set({speaking: false, animating: false});
    });
  }

  onDrop(word) {
    const {onAnswer, correctWord} = this.props;
    onAnswer({word, correct: word === correctWord});
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, onAnswer, activityIndex, correctWord, activityCount, wordText} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>

        <SceneContent>
          <SceneBar>
            <DragContainer DragPreviewComponent={WordText}>
              <WordText>
                {wordText || correctWord.replace("-", " ")}
              </WordText>
            </DragContainer>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.id}
                word={choice.word}
                onDrop={this.onDrop.bind(this, choice.word)}
                waveHidden
              />
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
