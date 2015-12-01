import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import Choice from "components/choice";
import Letter from "components/letter";
import SoundFrame from "components/sound-frame";
import DraggableChoice from "components/draggable-choice";
import DropZone from "components/drop-zone";

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "instructions", centered: false, speaking: true},
      owl: {text: "lesson"},
      choices: props.letters.reduce((choices, letter, i) => {
        choices[word] = { // add additional initial options to choices here
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
      center.bind(this, "teacher"),

      uncenter.bind(this, "teacher"),
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

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => onAnswer(choice)}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
