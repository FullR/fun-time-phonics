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
      teacher: {text: "Instructions", centered: true, speaking: true},
      owl: {text: "Lesson"},
      replaceWordHidden: true,
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
    const {animations, words, replaceWord, phonic, replacePhonic} = this.props;

    const revealAndSayWords = [
      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("teacher", `teacher/${word}`, 300)
      ])
    ];

    animations.create("instructions",
      this.setState.bind(this, {replaceWordHidden: true}),
      this::hideChoices,
      center.bind(this, "teacher"),
      this::say("teacher", "teacher/replace-the"),
      this::say("teacher", `teacher/${replacePhonic}`, 100),
      this::say("teacher", "teacher/in", 100),
      uncenter.bind(this, "teacher"),
      this.setState.bind(this, {replaceWordHidden: false}),
      this::say("teacher", "teacher/replace-word", 100),
      this::say("teacher", "teacher/with", 100),
      this::say("teacher", `teacher/${phonic}`, 100),
      this::say("teacher", "teacher/what-is-the-new-word", 300),

      revealAndSayWords,
      endSpeaking.bind(this, "teacher")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("instructions");
  }

  render() {
    const {onAnswer, sounds, replaceWord} = this.props;
    const {choices, teacher, owl, replaceWordHidden} = this.state;

    return (
      <GameScreen {...this.props} teacher={teacher} owl={owl} onTeacherClick={::this.animate}>
        <Belt top="10%">
          <Choice disabled>
            <WordFrame word={replaceWord} sound={sounds["teacher/replace-word"]} hidden={replaceWordHidden} noBorder/>
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
