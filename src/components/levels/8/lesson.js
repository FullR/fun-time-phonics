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
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter, attachChoice, detachChoice, detachChoices} from "helpers/animation";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        "red": {word: "red", hidden: true, detached: true},
        "head": {word: "head", hidden: true, detached: true},
        "bed": {word: "bed", hidden: true, detached: true},
        "wait": {word: "wait", hidden: true, detached: true},
        "gate": {word: "gate", hidden: true, detached: true},
        "eight": {word: "eight", hidden: true, detached: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    animations.create("lesson",
      this::detachChoices,

      this::say("owl", "owl/words-like"),
      uncenter.bind(this, "owl"),

      attachChoice.bind(this, "red"),
      revealChoice.bind(this, "red"),
      this::say("owl", "owl/red"),
      attachChoice.bind(this, "head"),
      revealChoice.bind(this, "head"),
      this::say("owl", "owl/head"),
      attachChoice.bind(this, "bed"),
      revealChoice.bind(this, "bed"),
      this::say("owl", "owl/bed"),
      this::say("owl", "owl/because-they-all-make"),

      detachChoices.bind(this, "red", "head", "bed"),

      this::say("owl", "owl/the-words"),
      attachChoice.bind(this, "wait"),
      revealChoice.bind(this, "wait"),
      this::say("owl", "owl/wait"),
      attachChoice.bind(this, "gate"),
      revealChoice.bind(this, "gate"),
      this::say("owl", "owl/gate"),
      attachChoice.bind(this, "eight"),
      revealChoice.bind(this, "eight"),
      this::say("owl", "owl/eight"),

      this::say("owl", "because-they-all-make-ate"),

      this::say("owl", "owl/say"),

      this::say("owl", "owl/wait"),
      this::say("owl", "owl/gate"),
      this::say("owl", "owl/eight"),

      this::say("owl", "owl/then-touch"),

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
        <LessonTitle>Rhyme Time</LessonTitle>
        <LessonTitle.SubTitle>Lesson 5</LessonTitle.SubTitle>
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
