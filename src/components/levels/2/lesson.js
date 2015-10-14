import React from "react";
import {map} from "lodash";
import animationContext from "decorators/animation-context";
import {GameScreen, Arrow, Choice, Belt, WordFrame, LessonTitle, Corner} from "components";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        "0": {word: "tail"},
        "1": {word: "tip"},
        "2": {word: "tape"}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;

    animations.create("words",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "the-last-sound"),
      this::say("owl", "the-ending-sound", 500),
      300,
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "0"),
      this::say("owl", "tail"),
      400,
      revealChoice.bind(this, "1"),
      this::say("owl", "tip"),
      400,
      revealChoice.bind(this, "2"),
      this::say("owl", "tape"),
      this::say("owl", "is", 300),
      this::say("owl", "t", 300),
      this::say("owl", "say-the-words", 600),
      this::say("owl", "tail", 300),
      this::say("owl", "tip", 400),
      this::say("owl", "tape", 400),
      this::say("owl", "slowly", 300),
      this::say("owl", "then-touch", 600),
      endSpeaking.bind(this, "owl")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("words");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, arrowLabel, onComplete} = this.props;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>Ending Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 2</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key}>
              <WordFrame {...choice} sound={sounds[choice.word]}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
