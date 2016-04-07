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
      this.setState.bind(this, {dragTextHidden: true}),
      this::say("teacher", "teacher/drag-the-letters"),
      this.setState.bind(this, {dragTextHidden: false}),
      this::say("teacher", "teacher/letters", 100),
      this::say("teacher", "teacher/to-the-word-that-begins-with-that-sound", 100),
      revealAndSayWords,

      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only", revealAndSayWords, endSpeaking.bind(this, "teacher"));
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onDrop(word) {
    setTimeout(() => this.props.onAnswer({word}), 100);
  }

  render() {
    const {letter, vowel, onAnswer, sounds} = this.props;
    const {choices, teacher, owl, dragTextHidden} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <Choice hidden={dragTextHidden}>
            <DragLetter letter={letter+vowel}/>
          </Choice>
        </Belt>
        <Belt bottom="15%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key} scalable={false}>
              <DropContainer onDrop={() => {
                this.onDrop(choice.word)
              }} choice={choice} style={{width: "100%", height: "100%"}}>
                <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]}/>
              </DropContainer>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
