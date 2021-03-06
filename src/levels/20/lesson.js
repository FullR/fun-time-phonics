import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import PlayableDisplayText from "components/playable-display-text";
require("./lesson.scss");

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

      "a": "boy/common/a",
      "e": "boy/common/e",
      "i": "boy/common/i",
      "o": "boy/common/o",
      "u": "boy/common/u",

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
    const {title, levelId, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen className={"Level-20-lesson"}>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>

        <LessonTitle levelId={levelId}>Review:&nbsp;&nbsp;{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            {letters.map((letter) =>
              <PlayableDisplayText
                key={letter}
                sound={this.getSound(letter)}
                hidden={!this.isLetterRevealed(letter)}
                waveHidden={this.state.coPlaying}
                size="medium"
              >
                {letter}
              </PlayableDisplayText>
            )}
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                waveHidden={this.state.coPlaying}
                key={choice.word}
                sound={this.getSound(choice.word)}
                size="medium"
              />
            )}
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activities</LessonArrow>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
