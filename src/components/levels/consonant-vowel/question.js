import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import WordFrame from "components/word-frame";
import Choice from "components/choice";
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
      teacher: {text: "Instructions", centered: !props.wordsOnly, speaking: true},
      owl: {text: "Lesson"},
      dragTextHidden: !props.wordsOnly,
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
      center.bind(this, "teacher"),
      this.setState.bind(this, {dragTextHidden: true}),
      this::say("teacher", "teacher/drag-the-letters"),
      uncenter.bind(this, "teacher"),
      this.setState.bind(this, {dragTextHidden: false}),
      this::say("teacher", "teacher/letters", 100),
      this::say("teacher", "teacher/to-the-word-that-begins-with-that-sound", 100),
      revealAndSayWords,

      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only", revealAndSayWords);
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onDrop({droppable}) {
    console.log(droppable);
    this.props.onAnswer(droppable.choice);
  }

  render() {
    const {letter, vowel, onAnswer, sounds} = this.props;
    const {choices, teacher, owl, dragTextHidden} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <Choice hidden={dragTextHidden}>
            <DragText sound={sounds["teacher/letters"]}>
              {letter}{vowel}
            </DragText>
          </Choice>
        </Belt>
        <Belt bottom="15%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key} scalable={false}>
              <Droppable value="Droppable" onDrop={::this.onDrop} choice={choice}>
                <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]}/>
              </Droppable>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
