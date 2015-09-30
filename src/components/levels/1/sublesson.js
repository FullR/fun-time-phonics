import React from "react";
import {map} from "lodash";
import {soundContext, animationContext} from "decorators";
import {GameScreen, Arrow, Choice, Belt, WordFrame, LessonTitle, Corner} from "components";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

@animationContext
export default class Lesson1Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: props.words.reduce((choices, word, i) => {
        choices[i] = {word, hidden: true};
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, phonic} = this.props;

    animations.create("animation",
      this::uncenter("owl"),
      revealChoice.bind(this, "0"),
      this::say("owl", words[0]),
      revealChoice.bind(this, "1"),
      this::say("owl", words[1], 500),
      this::say("owl", phonic),
      endSpeaking.bind(this, "owl")
    );

    animations.start("animation");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, arrowLabel, onComplete, phonic} = this.props;

    return (
      <GameScreen owl={owl}>
        <LessonTitle>Beginning Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 1 /{phonic}/</LessonTitle.SubTitle>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key}>
              <WordFrame {...choice} sound={sounds[choice.word]}/>
            </Choice>
          )}
        </Belt>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
      </GameScreen>
    );
  }
}
