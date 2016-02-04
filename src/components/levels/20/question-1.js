import React from "react";
import {map, sample, shuffle} from "lodash";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";
import {letter} from "./info";
import Letter from "components/letter";

import DraggableChoice from "components/draggable-choice";
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
      this::say("teacher", "teacher/drag-the-letter"),
      this::say("teacher", `teacher/${correct}`, 100),
      this::say("teacher", "teacher/sound-in", 100),
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

  onLetterDrop(word, letter) {
    setTimeout(() => this.props.onAnswer({word, letter}), 10);
  }

  render() {
    const {onAnswer, sounds, animations, letters, word} = this.props;
    const {teacher, owl} = this.state;
    const onDrop = (event) => {
      this.onLetterDrop(word, event.letter);
    };

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          {letters.map((letter) =>
            <DraggableChoice key={`letter-${letter}`} letter={letter} autohide>
              <Letter>{letter}</Letter>
            </DraggableChoice>
          )}
        </Belt>

        <Belt bottom="20%">
          <Choice>
            <DropZone onDrop={onDrop}>
              <WordFrame word={word} sound={sounds["teacher/word"]}/>
            </DropZone>
          </Choice>
        </Belt>
      </GameScreen>
    );
  }
}
