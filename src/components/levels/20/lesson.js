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
import {number, title, activityCount, letter, lessonWords} from "./info";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: false},
      choices: ["ax", "Ed", "itch", "otter", "up"].reduce((choices, word) => {
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
      center.bind(this, "owl"),

      this::say("owl", "owl/lets-review"),

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/a"),
      this::say("owl", "owl/makes-the"),
      this::say("owl", "owl/ah"),
      this::say("owl", "owl/sound-in"),
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "ax"),
      this::say("owl", "owl/ax"),

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/e"),
      this::say("owl", "owl/makes-the"),
      this::say("owl", "owl/eh"),
      this::say("owl", "owl/sound-in"),
      revealChoice.bind(this, "Ed"),
      this::say("owl", "owl/Ed"),

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/i"),
      this::say("owl", "owl/makes-the"),
      this::say("owl", "owl/ih"),
      this::say("owl", "owl/sound-in"),
      revealChoice.bind(this, "itch"),
      this::say("owl", "owl/itch"),

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/o"),
      this::say("owl", "owl/makes-the"),
      this::say("owl", "owl/oh"),
      this::say("owl", "owl/sound-in"),
      revealChoice.bind(this, "otter"),
      this::say("owl", "owl/otter"),

      this::say("owl", "owl/the-letter"),
      this::say("owl", "owl/u"),
      this::say("owl", "owl/makes-the"),
      this::say("owl", "owl/uh"),
      this::say("owl", "owl/sound-in"),
      this::say("owl", "owl/up"),

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
          <span style={{fontSize: 100}}>{letter} {letter.toUpperCase()}</span>
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
