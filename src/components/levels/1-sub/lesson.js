import React from "react";
import {map} from "lodash";
import {soundContext, animationContext} from "decorators";
import {GameScreen, Arrow, Choice, Belt, WordFrame, LessonTitle, Corner} from "components";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

@animationContext
@soundContext({
  "listen-for": "owl/common/listen-for-the-new-beginning-sound-in",
  "and": "owl/common/and",
  "say": "owl/common/say",
  "slowly": "owl/common/slowly",
  "then-touch": "owl/common/then-touch-the-green-arrow-to-begin"
})
export default class Lesson1Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: props.words.reduce((choices, word, i) => {
        choices[i] = {word, hidden: true};
        return choices;
      }, {})
    };
  }

  componentDidMount() {
    const {animations, words, phonic} = this.props;
    const word1 = `owl/${words[0]}`;
    const word2 = `owl/${words[1]}`;

    animations.create("sublesson",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "listen-for"),
      150,
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "0"),
      this::say("owl", word1),
      300,
      this::say("owl", "and"),
      revealChoice.bind(this, "1"),
      300,
      this::say("owl", word2),
      400,
      this::say("owl", "say"),
      100,
      this::say("owl", word1),
      300,
      this::say("owl", "and"),
      300,
      this::say("owl", word2),
      300,
      this::say("owl", "slowly"),
      600,
      this::say("owl", "then-touch"),
      endSpeaking.bind(this, "owl")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("sublesson");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, arrowLabel, onComplete, phonic} = this.props;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>Beginning Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 1 /{phonic}/</LessonTitle.SubTitle>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key}>
              <WordFrame {...choice} sound={sounds[`owl/${choice.word}`]}/>
            </Choice>
          )}
        </Belt>
        <Corner bottom={60} right={60} zIndex="6">
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
      </GameScreen>
    );
  }
}
