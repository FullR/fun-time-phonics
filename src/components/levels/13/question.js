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
      teacher: {text: "Instructions", centered: !props.wordsOnly, speaking: true},
      owl: {text: "Lesson"},
      selected: [],
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

    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/touch-the-two-words-that-make-the-same-middle-sound"),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    if(this.shortInstructions) {
      animations.create("words-only",
        uncenter.bind(this, "teacher"),
        ...words.map((word) => [
          revealChoice.bind(this, word),
          this::say("teacher", `teacher/${word}`, 300)
        ]),
        endSpeaking.bind(this, "teacher")
      );
      animations.start("words-only");
    } else {
      this.animate();
    }
  }

  animate() {
    this.props.animations.start("instructions");
  }

  select(choice) {
    const {selected} = this.state;
    if(selected.includes(choice.word)) {
      this.setState({
        selected: selected.filter((word) => word !== choice.word)
      });
    } else {
      if(selected.length === 1) {
        this.props.onAnswer({words: selected.concat(choice.word)});
      } else {
        this.setState({
          selected: selected.concat(choice.word)
        });
      }
    }
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, teacher, owl, selected} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame
                word={choice.word}
                sound={sounds[`teacher/${choice.word}`]}
                onClick={this.select.bind(this, choice)}
                highlighted={selected.includes(choice.word)}
              />
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
