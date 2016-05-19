import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import Screen from "components/screen";
import dndContext from "dnd-context";
import DropWordBox from "components/drop-word-box";
import PlayableDisplayText from "components/playable-display-text";
import DragContainer from "components/drag-container";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";

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
    const {words, consonant, vowel} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letters": "girl/common/drag-the-letters",
      "-letters": `girl/common/${consonant}-${vowel}`,
      "to the word...": "girl/common/to-the-word-that-begins-with-that-sound"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(!wordsOnly) {
        yield this.say(girl, "drag the letters");
        yield this.say(girl, "-letters"); // dash to avoid conflicting with the word "letters"
        yield this.say(girl, "to the word...");
      }

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {title, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId, consonant, vowel} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.id}
                sound={this.getSound(choice.word)}
                onDrop={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
              />
            )}
          </SceneBar>

          <SceneBar>
            <DragContainer>
              <PlayableDisplayText sound={this.getSound("-letters")}>{consonant + vowel}</PlayableDisplayText>
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
