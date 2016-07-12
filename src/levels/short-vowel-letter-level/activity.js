import React from "react";
import {sample, shuffle} from "lodash";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import Screen from "components/screen";
import Letters from "components/letters";
import Word from "components/word";
import dndContext from "dnd-context";
import DropWordBox from "components/drop-word-box";
import DragContainer from "components/drag-container";
import DisplayText from "components/display-text";

const letters = ["a", "e", "i", "o", "u"];

//REMOVED: @dndContext
@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    const incorrectLetter = sample(letters.filter((other) => other !== props.letter));

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
      dragLetters: shuffle([
        incorrectLetter,
        props.letter
      ])
    };
  }

  getSounds() {
    const {letter, words} = this.props;
    return {
      ...wordSounds("girl", words),
      "drag the letter": "girl/common/drag-the-letter",
      "letter": `girl/common/${letter}`,
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
      yield this.wait(100);
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
    const {title, letter, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}>Instructions</Actor>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            {dragLetters.map((letter) =>
              <DragContainer key={letter} value={letter} DragPreviewComponent={DisplayText}>
                <DisplayText>{letter}</DisplayText>
              </DragContainer>
            )}
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <DropWordBox {...choice}
                key={choice.id}
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
        {this.props.children}
      </Screen>
    );
  }
}
