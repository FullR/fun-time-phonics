import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import LetterSoundPlayBox from "components/letter-sound-play-box";

const letters = ["a", "e", "i", "o", "u"];

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: [
        {id: "axe", word: "axe", hidden: true},
        {id: "Ed", word: "Ed", hidden: true},
        {id: "itch", word: "itch", hidden: true},
        {id: "otter", word: "otter", hidden: true},
        {id: "up", word: "up", hidden: true}
      ],
      revealedLetters: []
    };
  }

  getSounds() {
    return {
      "lets review...": "boy/common/lets-review-the-letter-sounds-we-have-learned",
      "the letter": "boy/common/the-letter",
      "makes the": "boy/common/makes-the",
      "sound in": "boy/common/sound-in",
      "say each letters sound": "boy/common/say-each-letters-sound",
      "then touch...": "boy/common/then-touch-the-green-arrow-to-begin",

      "a": "boy/common/letters/a",
      "e": "boy/common/letters/e",
      "i": "boy/common/letters/i",
      "o": "boy/common/letters/o",
      "u": "boy/common/letters/u",

      "ah": "boy/common/phonics/_ah_",
      "eh": "boy/common/phonics/_eh_",
      "ih": "boy/common/phonics/_ih_",
      "oh": "boy/common/phonics/_oh_",
      "uh": "boy/common/phonics/_uh_",

      "axe": "boy/words/axe",
      "Ed": "boy/words/Ed",
      "itch": "boy/words/itch",
      "otter": "boy/words/otter",
      "up": "boy/words/up"
    };
  }

  revealLetter(letter) {
    this.setState({revealedLetters: this.state.revealedLetters.concat(letter)});
  }

  isLetterRevealed(letter) {
    return this.state.revealedLetters.includes(letter);
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      this.setState({revealedLetters: []});
      boy.set("size", "large");
      yield this.say(boy, "lets review...");
      yield this.wait(400);

      yield this.say(boy, "the letter");
      boy.set("size", "small");
      this.revealLetter("a");
      yield this.say(boy, "a");
      yield this.say(boy, "makes the");
      yield this.say(boy, "ah");
      yield this.say(boy, "sound in");
      choices.axe.set("hidden", false);
      yield this.say(boy, "axe");

      yield this.wait(400);
      yield this.say(boy, "the letter");
      this.revealLetter("e");
      yield this.say(boy, "e");
      yield this.say(boy, "makes the");
      yield this.say(boy, "eh");
      yield this.say(boy, "sound in");
      choices.Ed.set("hidden", false);
      yield this.say(boy, "Ed");

      yield this.wait(400);
      yield this.say(boy, "the letter");
      this.revealLetter("i");
      yield this.say(boy, "i");
      yield this.say(boy, "makes the");
      yield this.say(boy, "ih");
      yield this.say(boy, "sound in");
      choices.itch.set("hidden", false);
      yield this.say(boy, "itch");

      yield this.wait(400);
      yield this.say(boy, "the letter");
      this.revealLetter("o");
      yield this.say(boy, "o");
      yield this.say(boy, "makes the");
      yield this.say(boy, "oh");
      yield this.say(boy, "sound in");
      choices.otter.set("hidden", false);
      yield this.say(boy, "otter");

      yield this.wait(400);
      yield this.say(boy, "the letter");
      this.revealLetter("u");
      yield this.say(boy, "u");
      yield this.say(boy, "makes the");
      yield this.say(boy, "uh");
      yield this.say(boy, "sound in");
      choices.up.set("hidden", false);
      yield this.say(boy, "up");

      yield this.wait(400);
      yield this.say(boy, "say each letters sound");
      yield this.say(boy, "then touch...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Review: Short Vowel Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson {levelId}</LessonTitle.SubTitle>

        <DisplayBar position="top">
          {letters.map((letter) =>
            <LetterSoundPlayBox
              key={letter}
              sound={this.getSound(letter)}
              hidden={!this.isLetterRevealed(letter)}
              size="small"
            >
              {letter.toUpperCase()}
              {letter}
            </LetterSoundPlayBox>
          )}
        </DisplayBar>

        <DisplayBar position="bottom">
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.word}
              sound={this.getSound(choice.word)}
              size="small"
            />
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
