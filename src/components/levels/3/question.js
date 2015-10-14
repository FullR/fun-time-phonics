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
      owl: {text: "lesson"},
      teacher: {
        text: "Instructions",
        speaking: true,
        centered: !wordsOnly,
        animating: false
      },
      choices: props.words.reduce((choices, word, i) => {
        choices[i.toString()] = {
          word,
          hidden: true,
          selected: false
        };
        return choices;
      }, {})
    };
  }

  getSelectedChoices() {
    return filter(this.state.choices, (choice) => choice.selected);
  }

  componentDidMount() {
    const {animations, words, wordsOnly, ending, endingIntro} = this.props;
    animations.create("instructions",
      this::hideChoices,
      center.bind(this, "teacher"),
      (endingIntro ? 
        this::say("teacher", "teacher/now-listen") :
        null
      ),

      this::say("teacher", ending ? "teacher/touch-the-ending" : "teacher/touch-the-beginning"),

      ...words.map((word, i) => [
        400,
        revealChoice.bind(this, i),
        this::say("teacher", `teacher/${word}`)
      ]),

      endSpeaking.bind(this, "teacher")
    );

    if(wordsOnly) {
      animations.create("words-only",
        this::hideChoices,
        uncenter.bind(this, "teacher"),
        revealChoice.bind(this, 0),
        this::say("teacher", `teacher/${words[0]}`),
        400,
        revealChoice.bind(this, 1),
        this::say("teacher", `teacher/${words[1]}`),
        400,
        revealChoice.bind(this, 2),
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

  select(choiceId) {
    this.setState({
      choices: merge({}, this.state.choices, {
        [choiceId]: {
          selected: true
        }
      })
    });
  }

  componentDidUpdate() {
    const selected = this.getSelectedChoices();
    const {onAnswer} = this.props;
    if(onAnswer && selected.length > 1) {
      onAnswer(selected);
    }
  }

  render() {
    const {owl, teacher, choices} = this.state;
    const {words, onAnswer, sounds, animations} = this.props;

    return (
      <GameScreen {...this.props} owl={owl} teacher={teacher} onTeacherClick={::this.animate}>
        <Belt>
          {map(choices, (choice, i) =>
            <Choice {...choice} key={i}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => this.select(i)}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
