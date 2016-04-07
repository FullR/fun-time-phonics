import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import Choice from "components/choice";
import WordFrame from "components/word-frame";
import DragText from "components/drag-text";
import Droppable from "components/droppable";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";

import DragLetter from "components/drag-letter";
import DropContainer from "components/drop-container";

@animationContext
@DragDropContext(dndBackend)
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "Instructions", centered: false, speaking: true},
      owl: {text: "Lesson"},
      choices: props.letters.reduce((choices, letter) => {
        choices[letter] = {
          letter,
          hidden: false
        };
        return choices;
      }, {})
    };
  }

  get shortInstructions() {
    return this.props.wordsOnly && !this.props.fullInstructions;
  }

  componentDidMount() {
    const {animations, letters} = this.props;

    const revealChoices = letters.map((letter) => revealChoice.bind(this, letter));

    animations.create("instructions",
      this::say("teacher", "teacher/drag-the-letters-that-begin-the-word"),
      this::say("teacher", "teacher/word", 50),
      this::say("teacher", "teacher/to-the-picture", 50),

      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only",
        this::say("teacher", "teacher/word"),
        400,
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

  onDrop(letter) {
    setTimeout(() => this.props.onAnswer({letter}), 100);
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <Choice>
            <DropContainer onDrop={::this.onDrop} style={{width: "100%", height: "100%"}}>
              <WordFrame word={this.props.word} sound={sounds["teacher/word"]}/>
            </DropContainer>
          </Choice>
        </Belt>
        <Belt bottom="14%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key} style={{padding: 20}}>
              <DragLetter letter={choice.letter}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
