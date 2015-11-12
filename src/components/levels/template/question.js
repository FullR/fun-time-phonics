import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "instructions", centered: false, speaking: true},
      owl: {text: "lesson"},
      choices: props.words.reduce((choices, word, i) => {
        choices[word] = { // add additional initial options to choices here
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
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ])
    ];

    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),

      uncenter.bind(this, "teacher"),
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
