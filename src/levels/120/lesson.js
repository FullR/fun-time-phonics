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
        {id: "Zack", word: "Zack", hidden: true},
        {id: "zest", word: "zest", hidden: true},
        {id: "zipper", word: "zipper", hidden: true},
        {id: "zombie", word: "zombie", hidden: true}
      ],
      letters: ["za", "ze", "zi", "zo"],
      visibleLetters: [],
      consonantDetached: false,
      consonantVisible: false
    };
  }

  revealLetters(letters) {
    this.setState({visibleLetters: this.state.visibleLetters.concat(letters)});
  }

  getSounds() {
    return {
      "Zack": "boy/words/Zack",
      "zest": "boy/words/zest",
      "zipper": "boy/words/zipper",
      "zombie": "boy/words/zombie",

      "z": "boy/common/z",
      "za": "boy/common/z-a",
      "ze": "boy/common/z-e",
      "zi": "boy/common/z-i",
      "zo": "boy/common/z-o",

      "za-phonic": "boy/common/phonics/_zah_",
      "ze-phonic": "boy/common/phonics/_zeh_",
      "zi-phonic": "boy/common/phonics/_zih_",
      "zo-phonic": "boy/common/phonics/_zoh_",

      "the letter": "boy/common/the-letter",
      "looks like this": "boy/common/looks-like-this",
      "the letters": "boy/common/the-letters",
      "make the": "boy/common/make-the",
      "sound in": "boy/common/sound-in",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      this.setState({consonantDetached: false, consonantVisible: false, visibleLetters: []});

      yield this.say(boy, "the letter");
      this.setState({consonantVisible: true});
      boy.set("size", "small");
      yield this.say(boy, "z");
      yield this.say(boy, "looks like this");

      yield this.wait(300);

      this.setState({consonantDetached: true});

      yield this.say(boy, "the letters");
      this.revealLetters("za");
      yield this.say(boy, "za");
      yield this.say(boy, "make the");
      yield this.say(boy, "za-phonic");
      yield this.say(boy, "sound in");
      choices.Zack.set("hidden", false);
      yield this.say(boy, "Zack");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("ze");
      yield this.say(boy, "ze");
      yield this.say(boy, "make the");
      yield this.say(boy, "ze-phonic");
      yield this.say(boy, "sound in");
      choices.zest.set("hidden", false);
      yield this.say(boy, "zest");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("zi");
      yield this.say(boy, "zi");
      yield this.say(boy, "make the");
      yield this.say(boy, "zi-phonic");
      yield this.say(boy, "sound in");
      choices.zipper.set("hidden", false);
      yield this.say(boy, "zipper");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("zo");
      yield this.say(boy, "zo");
      yield this.say(boy, "make the");
      yield this.say(boy, "zo-phonic");
      yield this.say(boy, "sound in");
      choices.zombie.set("hidden", false);
      yield this.say(boy, "zombie");
      yield this.wait(100);

      yield this.say(boy, "touch the...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy, letters, visibleLetters, consonantVisible, consonantDetached} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            {!consonantDetached ?
              <PlayableDisplayText
                sound={this.getSound("z")}
                hidden={!consonantVisible}
              >
                <span style={{marginRight: 50}}>Z</span><span>z</span>
              </PlayableDisplayText> :
              letters.map((letter) =>
              <PlayableDisplayText
                size="medium"
                sound={this.getSound(letter)}
                hidden={!visibleLetters.includes(letter)}
              >
                {letter}
              </PlayableDisplayText>
            )}
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                size="medium"
                key={choice.word}
                sound={this.getSound(choice.word)}
              />
            )}
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
