import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import PlayableDisplayText from "components/playable-display-text";

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
        {id: "bag", word: "bag", hidden: true},
        {id: "beg", word: "beg", hidden: true},
        {id: "big", word: "big", hidden: true},
        {id: "box", word: "box", hidden: true},
        {id: "bug", word: "bug", hidden: true}
      ],
      letters: ["a", "e", "i", "o", "u"],
      visibleLetters: []
    };
  }

  revealLetter(letter) {
    this.setState({
      visibleLetters: [...this.state.visibleLetters, letter]
    });
  }

  getSounds() {
    return {
      "bag": "boy/words/bag",
      "beg": "boy/words/beg",
      "big": "boy/words/big",
      "box": "boy/words/box",
      "bug": "boy/words/bug",
      "a": "boy/common/a",
      "e": "boy/common/e",
      "i": "boy/common/i",
      "o": "boy/common/o",
      "u": "boy/common/u",
      "a-phonic": "boy/common/phonics/_ah_",
      "e-phonic": "boy/common/phonics/_eh_",
      "i-phonic": "boy/common/phonics/_ih_",
      "o-phonic": "boy/common/phonics/_oh_",
      "u-phonic": "boy/common/phonics/_uh_",
      "remember...": "boy/common/lesson124-instructions",
      "the vowel sound in": "boy/common/the-vowel-sound-in",
      "is": "boy/common/is",
      "so": "boy/common/so",
      "is spelled with an": "boy/common/is-spelled-with-an",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      this.setState({visibleLetters: []});
      yield this.say(boy, "remember...");

      yield this.say(boy, "the vowel sound in");
      boy.set("size", "small");
      choices.bag.set("hidden", false);
      yield this.say(boy, "bag");
      yield this.say(boy, "is");
      yield this.say(boy, "a-phonic");
      yield this.say(boy, "so");
      yield this.say(boy, "bag");
      yield this.say(boy, "is spelled with an");
      this.revealLetter("a");
      yield this.say(boy, "a");
      yield this.wait(100);

      yield this.say(boy, "the vowel sound in");
      choices.beg.set("hidden", false);
      yield this.say(boy, "beg");
      yield this.say(boy, "is");
      yield this.say(boy, "e-phonic");
      yield this.say(boy, "so");
      yield this.say(boy, "beg");
      yield this.say(boy, "is spelled with an");
      this.revealLetter("e");
      yield this.say(boy, "e");
      yield this.wait(100);

      yield this.say(boy, "the vowel sound in");
      choices.big.set("hidden", false);
      yield this.say(boy, "big");
      yield this.say(boy, "is");
      yield this.say(boy, "i-phonic");
      yield this.say(boy, "so");
      yield this.say(boy, "big");
      yield this.say(boy, "is spelled with an");
      this.revealLetter("i");
      yield this.say(boy, "i");
      yield this.wait(100);

      yield this.say(boy, "the vowel sound in");
      choices.box.set("hidden", false);
      yield this.say(boy, "box");
      yield this.say(boy, "is");
      yield this.say(boy, "o-phonic");
      yield this.say(boy, "so");
      yield this.say(boy, "box");
      yield this.say(boy, "is spelled with an");
      this.revealLetter("o");
      yield this.say(boy, "o");
      yield this.wait(100);

      yield this.say(boy, "the vowel sound in");
      choices.bug.set("hidden", false);
      yield this.say(boy, "bug");
      yield this.say(boy, "is");
      yield this.say(boy, "u-phonic");
      yield this.say(boy, "so");
      yield this.say(boy, "bug");
      yield this.say(boy, "is spelled with an");
      this.revealLetter("u");
      yield this.say(boy, "u");
      yield this.wait(100);

      yield this.say(boy, "touch the...")
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy, letters, visibleLetters} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <DisplayBar position="top" style={{top: "28%"}}>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.word}
              sound={this.getSound(choice.word)}
              size="medium"
            />
          )}
        </DisplayBar>

        <DisplayBar position="bottom" style={{bottom: "23%"}}>
          {letters.map((letter) =>
            <PlayableDisplayText key={letter} sound={this.getSound(letter)} hidden={!visibleLetters.includes(letter)} size="medium">
              {letter}
            </PlayableDisplayText>
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
