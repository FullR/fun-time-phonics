import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import DisplayText from "components/display-text";
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import Word from "components/word";
import DisplayBox from "components/display-box";
import dndContext from "dnd-context";

const wordStyle = {
  fontSize: 120,
  cursor: "default"
};

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
        id: word
      }))
    };
  }

  getSounds() {
    const {words, wordsOnly} = this.props;
    return {
      ...wordSounds("girl", words),
      "read both words...": "girl/common/read-both-words-then-drag-the-words-to-the-correct-picture"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!wordsOnly) {
        yield this.say(girl, "read both words...");
        yield this.wait(200);
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
    const {levelId, title, onAnswer, activityIndex, correctWord, showLesson, activityCount, wordText} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar position="top">
          <DropContainer onDrop={this.onDrop.bind(this)}>
            <span style={wordStyle}>{wordText || correctWord.replace("-", " ")}</span>
          </DropContainer>
        </DisplayBar>

        <DisplayBar position="bottom">
          {choices.map((choice) =>
            <DisplayBox {...choice} key={choice.id} noSoundWave>
              <DragContainer value={choice.word}>
                <Word word={choice.word}/>
              </DragContainer>
            </DisplayBox>
          )}
        </DisplayBar>

        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
