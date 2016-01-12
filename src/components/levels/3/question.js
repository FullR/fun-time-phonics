import React from "react";
import {map, merge, filter} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Question extends React.Component {
  constructor(props) {
    super(props);
    const {wordsOnly} = props;
    this.state = {
      owl: {text: "Lesson"},
      teacher: {
        text: "Instructions",
        speaking: true,
        centered: !wordsOnly,
        animating: false,
        glowing: true
      },
      selected: [],
      choices: props.words.reduce((choices, word, i) => {
        const id = i.toString();
        choices[word] = {
          id,
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, wordsOnly, ending, endingIntro} = this.props;
    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      (endingIntro ?
        this::say("teacher", "teacher/now-lets") :
        null
      ),

      this::say("teacher", ending ? "teacher/touch-the-two-words-ending" : "teacher/touch-the-two-words-beginning", 300),

      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, words[0]),
      this::say("teacher", `teacher/${words[0]}`),
      400,
      revealChoice.bind(this, words[1]),
      this::say("teacher", `teacher/${words[1]}`),
      400,
      revealChoice.bind(this, words[2]),
      this::say("teacher", `teacher/${words[2]}`),

      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.create("words-only",
        this::hideChoices,
        uncenter.bind(this, "teacher"),
        revealChoice.bind(this, words[0]),
        this::say("teacher", `teacher/${words[0]}`),
        400,
        revealChoice.bind(this, words[1]),
        this::say("teacher", `teacher/${words[1]}`),
        400,
        revealChoice.bind(this, words[2]),
        this::say("teacher", `teacher/${words[2]}`),
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
    const {owl, teacher, choices, selected} = this.state;
    const {words, onAnswer, sounds, animations} = this.props;

    return (
      <GameScreen {...this.props} owl={owl} teacher={teacher} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, i) =>
            <Choice {...choice} key={i}>
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
