import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";


class Phonic extends React.Component {
  static defaultProps = {
    size: "large"
  };

  render() {
    const {size} = this.props;
    const phonicStyle = {
      fontSize: size === "large" ? 100 : 60,
      margin: "0 10px 0 10px"
    };
    return (<span style={phonicStyle}>/{this.props.children}/</span>);
  }
}

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phonicSize: "large",
      teacher: {text: "instructions", centered: false, speaking: true},
      owl: {text: "lesson"},
      choices: props.words.reduce((choices, word) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  setPhonicSize(phonicSize) {
    this.setState({phonicSize});
  }

  componentDidMount() {
    const {animations, words, soundsOnly} = this.props;

    animations.create("instructions",
      this::hideChoices,
      this.setPhonicSize.bind(this, "large"),
      this::say("teacher", "teacher/listen-to"),
      this::say("teacher", "teacher/sounded-parts", 300),
      this.setPhonicSize.bind(this, "small"),
      ...words.map((word, i) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    if(soundsOnly) {
      animations.create("sounds-only",
        this::hideChoices,
        this::say("teacher", "teacher/sounded-parts"),
        this.setPhonicSize.bind(this, "small"),
        ...words.map((word) => [
          revealChoice.bind(this, word),
          this::say("teacher", `teacher/${word}`, 300)
        ]),
        endSpeaking.bind(this, "teacher")
      );

      animations.start("sounds-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds, phonics} = this.props;
    const {choices, teacher, owl, phonicSize} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top={phonicSize === "large" ? "40%" : "15%"}>
          {phonics.map((p, i) =>
            <Phonic key={`phonic-${i}`} size={phonicSize}>{p}</Phonic>
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
