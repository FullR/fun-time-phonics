import React from "react";
import {map, filter} from "lodash";
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
      owl: Object.assign({
        text: "Lesson",
        speaking: true,
        animating: true,
        centered: false,
        glowing: false
      }, props.owl),
      choices: props.words.reduce((choices, word) => {
        choices[word] = {
          word,
          hidden: true
        };
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animation, autoplayAnimation, animations, letterIntro, letter, exampleWords} = this.props;
    const words = Object.keys(this.state.choices);

    animations.create("lesson", animation ?
      this::animation(this.props, this.state) :
      null
    );

    this.animate();
  }

  animate() {
    const {onAnimationEnd} = this.props;
    this.props.animations.start("lesson", onAnimationEnd);
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
      choicePosition,
      hideArrow
    } = this.props;

    const attachedChoiceCount = filter(choices, (choice) => !choice.detached).length;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>{title}</LessonTitle>
        <LessonTitle.SubTitle>Lesson {number}</LessonTitle.SubTitle>
        {this.props.children}
        <Belt {...choicePosition}>
          {map(choices, (choice, key) =>
            <Choice key={key} detached={choice.detached} scalable={scaleChoices} size={attachedChoiceCount >= 5 ? "medium" : null}>
              <WordFrame {...choice} sound={sounds[`owl/${choice.word}`]}/>
            </Choice>
          )}
        </Belt>
        {hideArrow ? null :
          <Corner bottom={60} right={60}>
            <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
          </Corner>
        }
      </GameScreen>
    );
  }
}
