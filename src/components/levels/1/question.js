import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {say, hideChoices, revealChoice, endSpeaking, center, uncenter} from "helpers/animation";
import {GameScreen, Belt, WordFrame, Choice} from "components";

@animationContext
export default class Lesson1Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "lesson"},
      teacher: {
        text: "Instructions",
        speaking: true,
        centered: true,
        animating: false
      },
      choices: props.words.reduce((choices, word, i) => {
        choices[i.toString()] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words} = this.props;
    animations.create("anim",
      this::hideChoices,
      center.bind(this, "teacher"),
      1000,
      uncenter.bind(this, "teacher"),
      revealChoice.bind(this, 0),
      this::say("teacher", words[0]),
      revealChoice.bind(this, 1),
      this::say("teacher", words[1], 500),
      revealChoice.bind(this, 2),
      this::say("teacher", words[2], 500),
      endSpeaking.bind(this, "teacher")
    );

    animations.start("anim");
  }

  render() {
    const {owl, teacher, choices} = this.state;
    const {words, onAnswer, sounds, animations} = this.props;

    return (
      <GameScreen owl={owl} teacher={teacher} onTeacherClick={() => animations.start("anim")}>
        <Belt>
          {map(choices, (choice, i) =>
            <Choice {...choice} key={i} onClick={() => onAnswer(parseInt(i))}>
              <WordFrame word={choice.word} sound={sounds[choice.word]}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
