import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import dndContext from "dnd-context";
import DropWordBox from "components/drop-word-box";
import PlayableDisplayText from "components/playable-display-text";
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
        hidden: true
      }))
    };
  }

  getSounds() {
    const {words, consonant, vowel} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letters": "girl/common/drag-the-letters",
      "letters": `girl/common/letters/${consonant}-${vowel}`,
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
        yield this.say(girl, "letters");
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

        <DisplayBar position="top">
          {choices.map((choice) =>
            <DropWordBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              onDrop={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
            />
          )}
        </DisplayBar>

        <DisplayBar position="bottom">
          <DragContainer>
            <PlayableDisplayText sound={this.getSound("letters")}>{consonant + vowel}</PlayableDisplayText>
          </DragContainer>
        </DisplayBar>

        <ActivityTitle>
          Lesson {levelId}: {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
