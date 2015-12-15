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
      teacher: {text: "Instructions", centered: false, speaking: true},
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

  componentDidMount() {
    const {animations, words, wordsOnly} = this.props;

    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/touch-the-two"),
      uncenter.bind(this, "teacher"),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.create("words-only",
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
    const {word} = choice;

    if(selected.includes(word)) {
      this.setState({
        selected: selected.filter((other) => other !== word)
      });
    } else {
      this.setState({
        selected: selected.concat(word)
      });
    }
  }

  componentDidUpdate() {
    if(this.state.selected.length >= 2) {
      this.props.onAnswer(this.state.selected);
    }
  }

  render() {
    const {onAnswer, sounds, rhymeWord} = this.props;
    const {choices, selected, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame
                word={choice.word}
                sound={sounds[`teacher/${choice.word}`]}
                onClick={() => this.select(choice)}
                highlighted={selected.includes(choice.word)}
              />
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
