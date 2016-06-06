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
import PlayableDisplayText from "components/playable-display-text";
import DropWordBox from "components/drop-word-box";

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
    const {words, letters} = this.props;
    return {
      ...wordSounds("girl", words),
      "letters": `girl/common/${letters.split("").join("-")}`,
      "drag the letters": "girl/common/drag-the-letters",
      "to the word...": "girl/common/to-the-word-that-begins-with-that-sound"
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      yield this.say(girl, "drag the letters");
      yield this.say(girl, "letters");
      yield this.say(girl, "to the word...");
      yield this.wait(300);

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, onAnswer, activityIndex, correctWord, showLesson, activityCount, letters} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <DragContainer>
              <PlayableDisplayText sound={this.getSound("letters")} waveHidden={this.state.coPlaying}>{letters}</PlayableDisplayText>
            </DragContainer>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.id}
                word={choice.word}
                sound={this.getSound(choice.word)}
                onDrop={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
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
