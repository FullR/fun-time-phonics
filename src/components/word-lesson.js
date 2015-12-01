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

@animationContext
export default class Lesson extends React.Component {
  static defaultProps = {
    choicePosition: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: false},
      choices: props.words.reduce((choices, word) => {
        choices[word] = {word, hidden: true};
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animation, animations, letterIntro, letter, exampleWords} = this.props;
    const words = Object.keys(this.state.choices);

    animations.create("lesson", animation ? this::animation(this.props, this.state) : null);

    this.animate();
  }

  animate() {
    if(this.props.animation) {
      this.props.animations.start("lesson");
    }
  }

  render() {
    const {owl, choices} = this.state;
    const {
      scaleChoices,
      number,
      title,
      activityCount,
      letter,
      lessonWords,
      sounds,
      arrowLabel,
      onComplete,
      choicePosition
    } = this.props;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>{title}</LessonTitle>
        <LessonTitle.SubTitle>Lesson {number}</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        {this.props.children}
        <Belt {...choicePosition}>
          {map(choices, (choice, key) =>
            <Choice key={key} detached={choice.detached} scalable={scaleChoices}>
              <WordFrame {...choice} sound={sounds[`owl/${choice.word}`]}/>
            </Choice>
          )}
        </Belt>
      </GameScreen>
    );
  }
}
