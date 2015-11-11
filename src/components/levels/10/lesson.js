import React from "react";
import {map} from "lodash";
import GameScreen from "components/game-screen";
import Arrow from "components/arrow";
import Choice from "components/choice";
import Belt from "components/belt";
import WordFrame from "components/word-frame";
import LessonTitle from "components/lesson-title";
import Corner from "components/corner";
import animationContext from "decorators/animation-context";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        sit: {word: "sit", hidden: true},
        tip: {word: "tip", hidden: true},
        kid: {word: "kid", hidden: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    const words = Object.keys(this.state.choices);
    animations.create("lesson",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "owl/words-like"),
      uncenter.bind(this, "owl"),

      ...words.map((word) => [
        revealChoice.bind(this, word),
        this::say("owl", `owl/${word}`, 300)
      ]),

      this::say("owl", "owl/make-the", 200),
      this::say("owl", "owl/phonic", 200),
      this::say("owl", "owl/sound", 200),
      this::say("owl", "owl/say", 200),
      ...words.map((word) =>
        this::say("owl", `owl/${word}`, 300)
      ),

      this::say("owl", "owl/then-touch", 200),
      endSpeaking.bind(this, "owl")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("lesson");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, arrowLabel, onComplete} = this.props;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>Find the Sound - Short i</LessonTitle>
        <LessonTitle.SubTitle>Lesson 10</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key} detached={choice.detached} noScale={true}>
              <WordFrame {...choice} sound={sounds[`owl/${choice.word}`]}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
