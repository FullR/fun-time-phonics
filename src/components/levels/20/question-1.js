import React from "react";
import {map, sample, shuffle} from "lodash";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";
import {letter} from "./info";
import Letter from "components/letter";
import SoundFrame from "components/sound-frame";
import DropContainer from "components/drop-container";

import DragLetter from "components/drag-letter";
import DropZone from "components/drop-zone";
const choosableLetters = ["a", "e", "i", "o", "u"].filter(l => l !== letter);

@animationContext
@DragDropContext(dndBackend)
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "Instructions", centered: false, speaking: true},
      owl: {text: "Lesson"}
    };
  }

  get shortInstructions() {
    return this.props.wordsOnly && !this.props.fullInstructions;
  }

  componentDidMount() {
    const {animations, word, correct} = this.props;

    animations.create("instructions",
      this::hideChoices,
      this::say("teacher", "teacher/drag-the-letter-to-the-picture-that-makes-the-middle-sound-in"),
      this::say("teacher", "teacher/word"),
      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only",
        this::say("teacher", "teacher/word"),
        endSpeaking.bind(this, "teacher")
      );
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onLetterDrop(letter) {
    const {word} = this.props;
    setTimeout(() => this.props.onAnswer({letter, word}), 100);
  }

  render() {
    const {onAnswer, sounds, animations, letters, word} = this.props;
    const {teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="8%">
          <Choice>
            <DropContainer style={{width: "100%", height: "100%"}} onDrop={(letter) => {
              this.onLetterDrop(letter);
            }}>
              <WordFrame word={word} sound={sounds["teacher/word"]}/>
            </DropContainer>
          </Choice>
        </Belt>

        <Belt bottom="15%">
          {letters.map((letter) =>
            <DragLetter key={letter} letter={letter}/>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
