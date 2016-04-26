import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import dndContext from "dnd-context";
import DragLetterBox from "components/drag-letter-box";
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
      ...toPairs(letters, (letters) => [letters, `girl/common/letters/${letters.split("").join("-")}`]),
      "drag the letters that begin the word": "girl/common/drag-the-letters-that-begin-the-word",
      "word": `girl/words/${word}`,
      "to the picture": "girl/common/to-the-picture"
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      if(wordsOnly) {
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
    const {onAnswer, word, activityIndex, correctLetters, showLesson, activityCount, levelId, letter} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar position="top" style={{top: "4%"}}>
          <DropWordBox
            word={word}
            sound={this.getSound("word")}
            onDrop={(letters) => onAnswer({letters, correct: correctLetters === letters})}
          />
        </DisplayBar>

        <DisplayBar position="bottom" style={{bottom: "10%"}}>
          {choices.map((choice) =>
            <DragLetterBox {...choice}
              key={choice.id}
              value={choice.letters}
              sound={this.getSound(choice.letters)}
            >
              {choice.letters}
            </DragLetterBox>
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson {levelId}: Review: Consonant "b"-"{letter}" With Short Vowels<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
