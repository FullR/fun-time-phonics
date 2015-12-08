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
import Letter from "components/letter";

@animationContext
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owl: {text: "Lesson", speaking: true, animating: true, centered: false},
      choices: ["axe", "Ed", "itch", "otter", "up"].reduce((choices, word) => {
        choices[word] = {word, hidden: true};
        return choices;
      }, {}),
      letters: ["a", "e", "i", "o", "u"].reduce((letters, letter) => {
        letters[letter] = {letter, highlighted: false};
        return letters;
      }, {})
    };
  }

  setLetterHL(letter, active) {
    this.setState({
      letters: Object.assign({}, this.state.letters, {
        [letter]: {
          letter,
          highlighted: !!active
        }
      })
    });
  }

  playLetter(letter) {
    if(!this.props.animations.isAnimating()) {
      const sound = this.props.sounds[`owl/${letter}`];
      this.setLetterHL(letter, true);
      sound.play().then(() => {
        this.setLetterHL(letter, false);
      });
    }
  }

  componentDidMount() {
    const {animations} = this.props;
    const words = lessonWords;

    animations.create("lesson",
      this::hideChoices,
      center.bind(this, "owl"),

      this::say("owl", "owl/lets-review"),

      this::say("owl", "owl/the-letter"),
      100,
      this.setLetterHL.bind(this, "a", true),
      this::say("owl", "owl/a"),
      this.setLetterHL.bind(this, "a", false),
      this::say("owl", "owl/makes-the", 100),
      this::say("owl", "owl/ah", 100),
      this::say("owl", "owl/sound-in", 100),
      uncenter.bind(this, "owl"),
      revealChoice.bind(this, "axe"),
      this::say("owl", "owl/ax", 100),

      this::say("owl", "owl/the-letter"),
      100,
      this.setLetterHL.bind(this, "e", true),
      this::say("owl", "owl/e"),
      this.setLetterHL.bind(this, "e", false),
      this::say("owl", "owl/makes-the", 100),
      this::say("owl", "owl/eh", 100),
      this::say("owl", "owl/sound-in", 100),
      revealChoice.bind(this, "Ed"),
      this::say("owl", "owl/Ed", 100),

      this::say("owl", "owl/the-letter"),
      100,
      this.setLetterHL.bind(this, "i", true),
      this::say("owl", "owl/i"),
      this.setLetterHL.bind(this, "i", false),
      this::say("owl", "owl/makes-the", 100),
      this::say("owl", "owl/ih", 100),
      this::say("owl", "owl/sound-in", 100),
      revealChoice.bind(this, "itch"),
      this::say("owl", "owl/itch", 100),

      this::say("owl", "owl/the-letter"),
      100,
      this.setLetterHL.bind(this, "o", true),
      this::say("owl", "owl/o"),
      this.setLetterHL.bind(this, "o", false),
      this::say("owl", "owl/makes-the", 100),
      this::say("owl", "owl/oh", 100),
      this::say("owl", "owl/sound-in", 100),
      revealChoice.bind(this, "otter"),
      this::say("owl", "owl/otter", 100),

      this::say("owl", "owl/the-letter"),
      100,
      this.setLetterHL.bind(this, "u", true),
      this::say("owl", "owl/u"),
      this.setLetterHL.bind(this, "u", false),
      this::say("owl", "owl/makes-the", 100),
      this::say("owl", "owl/uh", 100),
      this::say("owl", "owl/sound-in", 100),
      revealChoice.bind(this, "up"),
      this::say("owl", "owl/up", 100),

      endSpeaking.bind(this, "owl")
    );

    this.animate();
  }

  animate() {
    this.props.animations.start("lesson");
  }

  render() {
    const {owl, choices, letters} = this.state;
    const {sounds, arrowLabel, onComplete} = this.props;

    return (
      <GameScreen owl={owl} onOwlClick={::this.animate}>
        <LessonTitle>{title}</LessonTitle>
        <LessonTitle.SubTitle>Lesson {number}</LessonTitle.SubTitle>
        <Corner bottom={60} right={60}>
          <Arrow size="large" onClick={onComplete}>{arrowLabel}</Arrow>
        </Corner>
        <Belt top="15%">
          {map(letters, ({letter, highlighted}) =>
            <Letter key={`letter-${letter}`} highlighted={highlighted} onClick={this.playLetter.bind(this, letter)}>
              {letter}{letter.toUpperCase()}
            </Letter>
          )}
        </Belt>

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
