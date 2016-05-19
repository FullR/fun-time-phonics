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
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import PlayableDisplayText from "components/playable-display-text";
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
      "drag the letter": "girl/common/drag-the-letter",
      "x": "girl/common/x",
      "to the word...": "girl/common/to-the-word-that-ends-with-that-sound"
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      yield this.say(girl, "drag the letter");
      yield this.say(girl, "x");
      yield this.say(girl, "to the word...");

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }

      girl.set({speaking: false, animating: false});
    });
  }

  onDrop(word) {
    this.props.onAnswer({word, correct: this.props.correctWord === word});
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, onAnswer, activityIndex, correctWord, showLesson, activityCount} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <DropContainer onDrop={this.onDrop.bind(this, choice.word)}>
                <WordSoundPlayBox {...choice} key={choice.id} sound={this.getSound(choice.word)}/>
              </DropContainer>
            )}
          </SceneBar>

          <SceneBar>
            <DragContainer>
              <PlayableDisplayText sound={this.getSound("x")}>X</PlayableDisplayText>
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
