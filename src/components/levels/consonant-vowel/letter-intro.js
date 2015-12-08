import React from "react";
import Belt from "components/belt";
import Letter from "components/letter";
import WordLesson from "components/word-lesson";
import TextFrame from "components/text-frame";
import Choice from "components/choice";
import {say, endSpeaking, hideChoices, revealChoice, center, uncenter} from "helpers/animation";

function animation({letter, words}) {
  return [
    this::say("owl", "owl/the-letter"),
    this::say("owl", "owl/letter", 100),
    this::say("owl", "owl/looks-like-this", 200),
    this::say("owl", "owl/the-letter", 400),
    this::say("owl", "owl/letter", 100),
    this::say("owl", "owl/makes-the-beginning-sound-of", 200),
    ...words.map((word) => [
      300,
      revealChoice.bind(this, word),
      this::say("owl", `owl/${word}`)
    ]),
    500,
    endSpeaking.bind(this, "owl")
  ];
}

export default class LetterIntro extends React.Component {
  render() {
    const {letter, vowel, sounds} = this.props;

    return (
      <WordLesson {...this.props} animation={animation} title={`Consonant ${letter}`} arrowLabel={`Lesson ${letter}${vowel}`} scaleChoices={true}>
        <Belt top="10%">
          <Choice size="medium">
            <TextFrame sound={sounds["owl/letter"]}>{letter.toUpperCase()}{letter}</TextFrame>
          </Choice>
        </Belt>
      </WordLesson>
    );
  }
}
