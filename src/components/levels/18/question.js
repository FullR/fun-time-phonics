import React from "react";
import {map, sample, shuffle} from "lodash";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";
import {letter} from "./info";

import DraggableChoice from "components/draggable-choice";
import DropZone from "components/drop-zone";
const choosableLetters = ["a", "e", "i", "o", "u"].filter(l => l !== letter);
const letterStyle = {fontSize: 150, height: "100%", width: "100%", lineHeight: "300px", textAlign: "center"};

@animationContext
@DragDropContext(dndBackend)
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "Instructions", centered: false, speaking: true},
      owl: {text: "Lesson"},
      letters: shuffle(sample(["a", "e", "i", "o", "u"].filter(l => l !== letter), 2).concat(letter)),
      choices: props.words.reduce((choices, word, i) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  get shortInstructions() {
    return this.props.wordsOnly && !this.props.fullInstructions;
  }

  componentDidMount() {
    const {animations, words} = this.props;

    const revealAndSayWords = [
      ...words.map((word) => [
        300,
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`)
      ])
    ];

    animations.create("instructions",
      this::hideChoices,
      this::say("teacher", "teacher/drag-the-letter"),
      this::say("teacher", "teacher/letter", 100),
      this::say("teacher", "teacher/to-the-word", 200),
      revealAndSayWords,
      endSpeaking.bind(this, "teacher")
    );

    animations.create("wrong-letter",
      this::say("teacher", "teacher/that-is-not-the-letter"),
      this::say("teacher", "teacher/letter", 100)
    );

    if(this.shortInstructions) {
      animations.create("words-only", revealAndSayWords, endSpeaking.bind(this, "teacher"));
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  wrongLetter() {
    this.props.animations.start("wrong-letter");
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onLetterDrop(word, droppedLetter) {
    if(droppedLetter === letter) {
      setTimeout(() => this.props.onAnswer({word}), 10);
    } else {
      this.wrongLetter();
    }
  }

  render() {
    const {onAnswer, sounds, animations, index} = this.props;
    const {choices, teacher, owl, letters} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          {letters.map((letter) =>
            <DraggableChoice key={`${index}-letter-${letter}`} letter={letter} autohide>
              <div style={letterStyle}>{letter}</div>
            </DraggableChoice>
          )}
        </Belt>

        <Belt bottom="20%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <DropZone style={{width: "100%", height: "100%"}} choice={choice} value={choice} onDrop={(event) => {
                this.onLetterDrop(choice.word, event.letter);
              }}>
                <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]}/>
              </DropZone>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
