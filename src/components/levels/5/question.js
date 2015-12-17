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
    const {onAnswer} = this.props;
    const {selected} = this.state;
    const {word} = choice;
    let newSelected;

    if(selected.includes(word)) {
      newSelected = selected.filter((other) => other !== word);
    } else {
      newSelected = selected.concat(word)
    }
    this.setState({selected: newSelected});

    if(onAnswer && newSelected.length >= 2) {
      this.props.onAnswer({words: newSelected});
    }
  }

  render() {
    const {onAnswer, sounds} = this.props;
    const {choices, selected, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} owl={owl} teacher={teacher} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame
                word={choice.word}
                sound={sounds[`teacher/${choice.word}`]}
                highlighted={selected.includes(choice.word)}
                onClick={() => this.select(choice)}
              />
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
