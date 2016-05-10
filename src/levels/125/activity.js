import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import DisplayText from "components/display-text";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import SoundPlayBox from "components/sound-play-box";
import Word from "components/word";
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import dndContext from "dnd-context";

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
        hidden: true
      }))
    };
  }

  getSounds() {
    const {words} = this.props;
    return {
      ...wordSounds("girl", words),
      "read the words...": "girl/common/read-the-word-then-drag-the-word-to-the-correct-picture"
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {
      yield this.say(girl, "read the words...");
      yield this.wait(300);
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }
      girl.set({speaking: false, animating: false});
    });
  }

  onDrop(word) {
    const {onAnswer, correctWord} = this.props;
    onAnswer({
      word,
      correct: word === correctWord
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, onAnswer, activityIndex, correctWord, showLesson, activityCount} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar position="top" style={{top: "10%"}}>
          <DropContainer onDrop={this.onDrop.bind(this)}>
            <DisplayText>{correctWord}</DisplayText>
          </DropContainer>
        </DisplayBar>

        <DisplayBar position="bottom">
          {choices.map((choice) =>
            <SoundPlayBox {...choice} key={choice.id} sound={this.getSound(choice.word)}>
              <DragContainer value={choice.word}>
                <Word word={choice.word}/>
              </DragContainer>
            </SoundPlayBox>
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
