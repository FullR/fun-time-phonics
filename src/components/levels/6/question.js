import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

const phonicStyle = {
  fontSize: 40,
  margin: "0 10px 0 10px"
};
class Phonic extends React.Component {
  render() {
    return (<span style={phonicStyle}>/{this.props.children}/</span>);
  }
}

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {text: "instructions", centered: true, speaking: true},
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
    const {animations, words} = this.props;

    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/listen-to"),
      this::say("teacher", "teacher/sounded-parts"),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
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

  render() {
    const {onAnswer, sounds, phonics} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="15%">
          {phonics.map((p) => 
            <Phonic>{p}</Phonic>
          )}
        </Belt>
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
