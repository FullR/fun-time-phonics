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
    const {animations, letters} = this.props;

    const revealAndSayChoices = [
      ...letters.map((letter) => [
        revealChoice.bind(this, letter),
        this::say("teacher", `teacher/${letter}`, 300)
      ])
    ];

    animations.create("instructions",
      this::hideChoices,
      this::say("teacher", "teacher/drag-the-letters-to-the-picture-that-begin-the-word"),
      this::say("teacher", "teacher/word", 200),
      revealAndSayChoices,

      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only",
        this::say("teacher", "teacher/word"),
        400,
        revealAndSayChoices
      );
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onDrop({draggable}) {
    setTimeout(() => this.props.onAnswer(draggable.value), 10);
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="12%">
          <Choice>
            <Droppable onDrop={::this.onDrop}>
              <WordFrame word={this.props.word} sound={sounds["teacher/word"]}/>
            </Droppable>
          </Choice>
        </Belt>
        <Belt bottom="12%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <DragText value={choice} sound={sounds[`teacher/${choice.letter}`]}>
                {choice.letter}
              </DragText>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
