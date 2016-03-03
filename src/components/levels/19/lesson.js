import React from "react";
import {map} from "lodash";
import GameScreen from "components/game-screen";
import Arrow from "components/arrow";
import Choice from "components/choice";
import Belt from "components/belt";
import WordFrame from "components/word-frame";
import Letter from "components/letter";
import LessonTitle from "components/lesson-title";
import Corner from "components/corner";
import animationContext from "decorators/animation-context";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";
import {number, title, activityCount, letter, lessonWords} from "./info";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: false},
      choices: lessonWords.reduce((choices, word) => {
        choices[word] = {word, hidden: true};
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    const words = lessonWords;

    animations.create("lesson",
      this::hideChoices,

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/letter", 200),
      this::say("owl", "owl/looks-like-this", 200),
      this::say("owl", "owl/the-letter", 300),
      this::say("owl", "owl/letter", 100),
      this::say("owl", "owl/makes-the", 200),
      this::say("owl", "owl/phonic", 100),
      this::say("owl", "owl/sound-in", 200),

      words.map((word) => [
        300,
        revealChoice.bind(this, word),
        this::say("owl", `owl/${word}`)
      ]),

      this::say("owl", "owl/we-use-the-letter", 300),
      this::say("owl", "owl/letter", 100),
      this::say("owl", "owl/to-write-words", 200),
      this::say("owl", "owl/phonic", 100),
      this::say("owl", "owl/sound-in-them", 200),
      this::say("owl", "owl/touch-the", 300),

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
        <LessonTitle>{title}</LessonTitle>
        <LessonTitle.SubTitle>Lesson {number}</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        <Belt top="15%">
          <Letter style={{fontSize: 100}}>{letter.toUpperCase()} {letter}</Letter>
        </Belt>

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
