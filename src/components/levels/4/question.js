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
      this::say("teacher", "teacher/touch-the-word"),
      this::say("teacher", "teacher/rhyme-word", 300),
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ]),
      endSpeaking.bind(this, "teacher")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds, rhymeWord} = this.props;
    const {choices, teacher, owl} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <Choice>
            <WordFrame word={rhymeWord} sound={sounds["teacher/rhyme-word"]} width={300} height={300}/>
          </Choice>
        </Belt>

        <Belt bottom="15%">
          {map(choices, (choice, key) =>
            <Choice {...choice} key={key}>
              <WordFrame word={choice.word} sound={sounds[`teacher/${choice.word}`]} onClick={() => onAnswer({word: choice.word})}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
