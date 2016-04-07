import React from "react";
import {map} from "lodash";
import WordLesson from "components/word-lesson";
import Letter from "components/letter";
import Belt from "components/belt";
import {say, play, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation({words, lessonLetters}) {
  const hlLetter = this.props.highlightLetter;
  const unhlLetter = this.props.unhighlightLetter;
  return [
    this::hideChoices,
    this::say("owl", "owl/lets-review-the-sounds-we-just-learned"),
    200,
    uncenter.bind(this, "owl"),
    words.map((word, i) => [
      this::say("owl", "owl/the-letters", 200),
      hlLetter.bind(null, lessonLetters[i]),
      this::say("owl", `owl/${lessonLetters[i]}`, 200),
      unhlLetter.bind(null, lessonLetters[i]),
      this::say("owl", "owl/make-the", 200),
      this::say("owl", `owl/${lessonLetters[i]}h`, 200),
      this::say("owl", "owl/in", 200),
      200,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    100,
    this::say("owl", "owl/touch-the"),
    endSpeaking.bind(this, "owl")
  ];
}

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedLetters: []
    };
  }

  highlightLetter(letter) {
    this.setState({
      highlightedLetters: this.state.highlightedLetters.concat(letter)
    });
  }

  unhighlightLetter(letter) {
    this.setState({
      highlightedLetters: this.state.highlightedLetters.filter((other) => other !== letter)
    });
  }

  isHighlighted(letter) {
    return this.state.highlightedLetters.indexOf(letter) !== -1;
  }

  playLetter(letter) {
    this.highlightLetter(letter);
    this::play(`owl/${letter}`).take(1).subscribe(() => {
      this.unhighlightLetter(letter);
    });
  }

  render() {
    const {lessonLetters} = this.props;
    return (
      <WordLesson {...this.props}
        owl={{centered: false}}
        scaleChoices={true}
        animation={animation}
        highlightLetter={this.highlightLetter.bind(this)}
        unhighlightLetter={this.unhighlightLetter.bind(this)}
      >
        <Belt top="15%">
          {map(lessonLetters, (letter) =>
            <Letter key={`letter-${letter}`} highlighted={this.isHighlighted(letter)} onClick={this.playLetter.bind(this, letter)}>
              {letter[0]}{letter[1]}
            </Letter>
          )}
        </Belt>
      </WordLesson>
    );
  }
}
