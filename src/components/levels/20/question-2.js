import React from "react";
import {map} from "lodash";
import {DragDropContext} from "react-dnd";
import dndBackend from "dnd-backend";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";
import Letter from "components/letter";
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
      choices: props.words.reduce((choices, word, i) => {
        choices[word] = { // add additional initial options to choices here
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  get shortInstructions() {
    return false;
  }

  componentDidMount() {
    const {animations, words} = this.props;

    animations.create("instructions",
      this::hideChoices,
      this::say("teacher", "teacher/drag-the-letter-to-the-picture-that-makes-this-middle-sound"),
      words.map((word) => [
        300,
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`)
      ]),

      endSpeaking.bind(this, "teacher")
    );


    this.animate();
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onDrop(word) {
    setTimeout(() => this.props.onAnswer({word}), 100);
  }

  render() {
    const {onAnswer, sounds, letter} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <DragLetter letter={letter}/>
        </Belt>

        <Belt bottom="20%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <DropContainer
                style={{width: "100%", height: "100%"}}
                onDrop={() => this.onDrop(choice.word)}
              >
                <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]}/>
              </DropContainer>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
