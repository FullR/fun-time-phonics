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
        "cat": {word: "cat", hidden: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;

    animations.create("words",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "owl/the-first-sound"),

      this::say("owl", "owl/the-beginning-sound", 300),
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "cat"),
      this::say("owl", "owl/cat"),
      this::say("owl", "owl/is", 300),
      this::say("owl", "owl/k", 300),

      this::say("owl", "owl/the-last-sound", 300),
      this::say("owl", "owl/the-ending-sound", 300),
      this::say("owl", "owl/cat", 300),
      this::say("owl", "owl/is", 300),
      this::say("owl", "owl/t", 300),
      this::say("owl", "owl/say-the", 300),
      this::say("owl", "owl/cat", 300),
      this::say("owl", "owl/then-touch", 300),

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
        <LessonTitle>Beginning and Ending Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 3</LessonTitle.SubTitle>
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
