import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";
import Letter from "components/letter";
import DraggableChoice from "components/draggable-choice";
import DropZone from "components/drop-zone";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";

@animationContext
@DragDropContext(dndBackend)
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "instructions", centered: false, speaking: true},
      owl: {text: "lesson"},
      choices: props.words.reduce((choices, word, i) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, wordsOnly} = this.props;

    const revealAndSayWords = [
      ...words.map((word) => [
        300,
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`)
      ])
    ];

    animations.create("instructions",
      this::hideChoices,
      this::say("teacher", "teacher/drag-the-letters"),
      this::say("teacher", "teacher/letter", 100),
      this::say("teacher", "teacher/vowel"),
      this::say("teacher", "teacher/to-the-word-that-begins-with-that-sound", 100),
      revealAndSayWords,

      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.create("words-only", revealAndSayWords);
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <DraggableChoice autohide>
            <Letter>ba</Letter>
          </DraggableChoice>
        </Belt>
        <Belt bottom="15%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <DropZone onDrop={() => onAnswer(choice)}>
                <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]}/>
              </DropZone>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
