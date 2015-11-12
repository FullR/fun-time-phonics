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
import {number, title, activityCount} from "./info";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        bad: {word: "bad", hidden: true},
        bed: {word: "bed", hidden: true},
        hit: {word: "hit", hidden: true},
        hot: {word: "hot", hidden: true}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;
    const words = Object.keys(this.state.choices);

    const replacePhonic = (phonic, replacePhonic, word, resultWord) => ([
      this::say("owl", "owl/if-you-replace-the"),
      this::say("owl", `owl/${phonic}`, 100),
      this::say("owl", "owl/in", 100),
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`, 100),
      this::say("owl", "owl/with", 100),
      this::say("owl", `owl/${replacePhonic}`, 100),
      this::say("owl", "owl/the-new-word-is", 200),
      revealChoice.bind(this, resultWord),
      this::say("owl", `owl/${resultWord}`, 200),
    ]);

    animations.create("lesson",
      this::hideChoices,
      center.bind(this, "owl"),
      replacePhonic("ah", "eh", "bad", "bed"),
      300,
      replacePhonic("ih", "oh", "hit", "hot"),
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
