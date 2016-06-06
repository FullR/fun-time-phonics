import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import DisplayText from "components/display-text";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import SoundPlayBox from "components/sound-play-box";
import Word from "components/word";
import DragContainer from "components/drag-container";
import DropContainer from "components/drop-container";
import DropWordBox from "components/drop-word-box";
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
    this.animate(this.props.shortInstructions);
  }

  animate(shortInstructions) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!shortInstructions) {
        yield this.say(girl, "read the words...");
        yield this.wait(300);
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
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DragContainer>
              <DisplayText>{correctWord}</DisplayText>
            </DragContainer>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.id}
                word={choice.word}
                sound={this.getSound(choice.word)}
                onDrop={this.onDrop.bind(this, choice.word)}
                waveHidden={this.state.coPlaying}
              />
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
