import React from "react";
import {sampleSize, shuffle} from "lodash";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import Letters from "components/letters";
import Word from "components/word";
import dndContext from "dnd-context";
import DragLetterBox from "components/drag-letter-box";
import DropWordBox from "components/drop-word-box";

const letters = ["a", "e", "i", "o", "u"];

@dndContext
@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    const otherLetters = sampleSize(letters.filter((other) => other !== props.letter), 2);

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
      })),
      dragLetters: shuffle(otherLetters.concat(props.letter))
    };
  }

  getSounds() {
    const {letter, words} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letter": "girl/common/drag-the-letter",
      "letter": `girl/common/letters/${letter}`,
      "to the word...": "girl/common/to-the-word-that-makes-that-sound",
      "this is not the letter": "girl/common/this-is-not-the-letter"
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
      yield this.say(girl, "letter");
      yield this.say(girl, "to the word...");
      yield this.wait(300);

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }

      girl.set({speaking: false, animating: false});
    });
  }

  wrongLetterAnimation() {
    const {girl} = this;
    this.startCo(function*() {
      yield this.say(girl, "this is not the letter");
      yield this.say(girl, "letter");
      girl.set({speaking: false, animating: false});
    });
  }

  onDrop(word, letter) {
    if(letter !== this.props.letter) {
      this.wrongLetterAnimation();
    } else {
      this.props.onAnswer({
        word,
        correct: word === this.props.correctWord
      });
    }
  }

  render() {
    const {girl, choices, dragLetters} = this.state;
    const {letter, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar position="top">
          {choices.map((choice) =>
            <DropWordBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              onDrop={this.onDrop.bind(this, choice.word)}
            />
          )}
        </DisplayBar>

        <DisplayBar position="bottom">
          {dragLetters.map((letter) =>
            <DragLetterBox key={letter} value={letter} waveHidden>
              {letter}
            </DragLetterBox>
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson {levelId}: Short Vowel "{letter}"<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
