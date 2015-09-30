import React from "react";
import {map} from "lodash";
import {soundContext, animationContext} from "decorators";
import {GameScreen, Arrow, Choice, Belt, WordFrame, LessonTitle, Corner} from "components";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

@soundContext({
  tail: "owl/words/tail",
  tip: "owl/words/tip",
  tape: "owl/words/tape",

  "the-first-sound": "owl/lesson-1/the-first-sound-you-hear-in-a-word-is-called-the-beginning-sound",
  "the-beginning-sound": "owl/lesson-1/the-beginning-sound-in-the-words",
  "say-the-words": "owl/lesson-1/say-the-words",

  "is": "owl/common/is",
  "t": "owl/common/phonics/t",
  "slowly": "owl/common/slowly",
  "then-touch": "owl/common/then-touch"
})
@animationContext
export default class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    const {tail, tip, tape} = props.sounds;
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: true},
      choices: {
        "0": {word: "tail"},
        "1": {word: "tip"},
        "2": {word: "tape"}
      }
    };
  }

  componentDidMount() {
    const {animations} = this.props;

    animations.create("words",
      this::hideChoices,
      center.bind(this, "owl"),
      this::say("owl", "the-first-sound"),
      this::say("owl", "the-beginning-sound", 500),
      300,
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "0"),
      this::say("owl", "tail"),
      revealChoice.bind(this, "1"),
      this::say("owl", "tip", 400),
      revealChoice.bind(this, "2"),
      this::say("owl", "tape", 400),
      this::say("owl", "is", 300),
      this::say("owl", "t", 300),
      this::say("owl", "say-the-words", 600),
      this::say("owl", "tail", 300),
      this::say("owl", "tip", 400),
      this::say("owl", "tape", 400),
      this::say("owl", "slowly", 300),
      this::say("owl", "then-touch", 600),
      endSpeaking.bind(this, "owl")
    );

    animations.start("words");
  }

  animate() {
    const {animations} = this.props;
    if(animations.isAnimating()) return;
    animations.start("words");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, arrowLabel, onComplete} = this.props;

    return (
      <GameScreen owl={owl}>
        <LessonTitle>Beginning Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 1</LessonTitle.SubTitle>
        <Belt>
          {map(choices, (choice, key) =>
            <Choice key={key}>
              <WordFrame {...choice} sound={sounds[choice.word]}/>
            </Choice>
          )}
        </Belt>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
      </GameScreen>
    );
  }
}
