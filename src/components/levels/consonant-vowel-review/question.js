import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import Choice from "components/choice";
import Letter from "components/letter";
import SoundFrame from "components/sound-frame";
import WordFrame from "components/word-frame";
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
      choices: props.letters.reduce((choices, letter, i) => {
        choices[letter] = {
          letter,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, letters, wordsOnly} = this.props;

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

    if(wordsOnly) {
      animations.create("words-only", revealAndSayChoices);
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  onDrop(choice) {
    this.props.onAnswer(choice);
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="12%">
          <Choice>
            <DropZone onDrop={(e) => {if(e && e.item) this.onDrop(e.item.props.choice);}}>
              <WordFrame word={this.props.word} sound={sounds["teacher/word"]}/>
            </DropZone>
          </Choice>
        </Belt>
        <Belt bottom="12%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <DraggableChoice choice={choice} autohide>
                <SoundFrame sound={sounds[`teacher/${choice.letter}`]}>
                  <Letter>{choice.letter}</Letter>
                </SoundFrame>
              </DraggableChoice>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
