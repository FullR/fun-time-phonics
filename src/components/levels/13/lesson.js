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
const noop = () => {};

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        rat: {word: "rat", phonic: "ah"},
        wet: {word: "wet", phonic: "eh"},
        sit: {word: "sit", phonic: "ih"},
        pot: {word: "pot", phonic: "oh"},
        rug: {word: "rug", phonic: "uh", last: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    animations.create("lesson",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "owl/listen-to"),
      uncenter.bind(this, "owl"),
      ...map(this.state.choices, ({word, phonic, last}) => [
        (last ?
          this::say("owl", "owl/and", 200) :
          noop
        ),
        revealChoice.bind(this, word),
        this::say("owl", `owl/${word}`, 300),
        this::say("owl", "owl/makes-the", 200),
        this::say("owl", `owl/${phonic}`, 200),
        this::say("owl", "owl/sound", 100)
      ]),
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
        <LessonTitle>Short Sounds - Odd One Out</LessonTitle>
        <LessonTitle.SubTitle>Lesson 13</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key} detached={choice.detached} scalable>
              <WordFrame {...choice} sound={sounds[`owl/${choice.word}`]}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
