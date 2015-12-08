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
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter, attachChoice, attachChoices, detachChoice, detachChoices, mergeAllChoices} from "helpers/animation";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        "red": {word: "red", hidden: true, detached: false},
        "head": {word: "head", hidden: true, detached: false},
        "bed": {word: "bed", hidden: true, detached: false},
        "wait": {word: "wait", hidden: true, detached: true},
        "gate": {word: "gate", hidden: true, detached: true},
        "eight": {word: "eight", hidden: true, detached: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    animations.create("lesson",
      mergeAllChoices.bind(this, {
        red: {hidden: true, detached: false},
        head: {hidden: true, detached: false},
        bed: {hidden: true, detached: false},
        wait: {hidden: true, detached: true},
        gate: {hidden: true, detached: true},
        eight: {hidden: true, detached: true}
      }),

      this::say("owl", "owl/words-like", 300),
      uncenter.bind(this, "owl"),

      revealChoice.bind(this, "red"),
      this::say("owl", "owl/red", 300),
      revealChoice.bind(this, "head"),
      this::say("owl", "owl/head", 300),
      revealChoice.bind(this, "bed"),
      this::say("owl", "owl/bed", 300),
      this::say("owl", "owl/rhyme-because-they-all-have-the-same-ending-sound", 300),

      detachChoices.bind(this, "red", "head", "bed"),
      attachChoices.bind(this, "wait", "gate", "eight"),

      this::say("owl", "owl/the-words", 300),
      revealChoice.bind(this, "wait"),
      this::say("owl", "owl/wait", 300),
      revealChoice.bind(this, "gate"),
      this::say("owl", "owl/gate", 300),
      revealChoice.bind(this, "eight"),
      this::say("owl", "owl/eight", 300),

      this::say("owl", "owl/rhyme-because-they-all-end-in-ate", 300),

      this::say("owl", "owl/say", 300),

      this::say("owl", "owl/wait", 300),
      this::say("owl", "owl/gate", 300),
      this::say("owl", "owl/eight", 300),

      this::say("owl", "owl/then-touch", 300),

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
