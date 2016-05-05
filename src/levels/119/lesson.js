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
        {id: "yak", word: "yak", hidden: true},
        {id: "yellow", word: "yellow", hidden: true},
        {id: "yippee", word: "yippee", hidden: true},
        {id: "yonder", word: "yonder", hidden: true},
        {id: "yuck", word: "yuck", hidden: true}
      ],
      letters: ["ya", "ye", "yi", "yo", "yu"],
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
      "yak": "boy/words/yak",
      "yellow": "boy/words/yellow",
      "yippee": "boy/words/yippee",
      "yonder": "boy/words/yonder",
      "yuck": "boy/words/yuck",

      "y": "boy/common/letters/y",
      "ya": "boy/common/letters/y-a",
      "ye": "boy/common/letters/y-e",
      "yi": "boy/common/letters/y-i",
      "yo": "boy/common/letters/y-o",
      "yu": "boy/common/letters/y-u",

      "ya-phonic": "boy/common/phonics/_yah_",
      "ye-phonic": "boy/common/phonics/_yeh_",
      "yi-phonic": "boy/common/phonics/_yih_",
      "yo-phonic": "boy/common/phonics/_yoh_",
      "yu-phonic": "boy/common/phonics/_yuh_",

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
      yield this.say(boy, "y");
      yield this.say(boy, "looks like this");

      yield this.wait(300);

      this.setState({consonantDetached: true});

      yield this.say(boy, "the letters");
      this.revealLetters("ya");
      yield this.say(boy, "ya");
      yield this.say(boy, "make the");
      yield this.say(boy, "ya-phonic");
      yield this.say(boy, "sound in");
      choices.yak.set("hidden", false);
      yield this.say(boy, "yak");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("ye");
      yield this.say(boy, "ye");
      yield this.say(boy, "make the");
      yield this.say(boy, "ye-phonic");
      yield this.say(boy, "sound in");
      choices.yellow.set("hidden", false);
      yield this.say(boy, "yellow");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("yi");
      yield this.say(boy, "yi");
      yield this.say(boy, "make the");
      yield this.say(boy, "yi-phonic");
      yield this.say(boy, "sound in");
      choices.yippee.set("hidden", false);
      yield this.say(boy, "yippee");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("yo");
      yield this.say(boy, "yo");
      yield this.say(boy, "make the");
      yield this.say(boy, "yo-phonic");
      yield this.say(boy, "sound in");
      choices.yonder.set("hidden", false);
      yield this.say(boy, "yonder");
      yield this.wait(100);

      yield this.say(boy, "the letters");
      this.revealLetters("yu");
      yield this.say(boy, "yu");
      yield this.say(boy, "make the");
      yield this.say(boy, "yu-phonic");
      yield this.say(boy, "sound in");
      choices.yuck.set("hidden", false);
      yield this.say(boy, "yuck");
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

        <DisplayBar position="top" style={{top: "24%"}}>
          {!consonantDetached ?
            <PlayableDisplayText
              sound={this.getSound("y")}
              hidden={!consonantVisible}
            >
              <span style={{marginRight: 50}}>Y</span><span>y</span>
            </PlayableDisplayText> :
            letters.map((letter) =>
            <PlayableDisplayText
              key={letter}
              size="medium"
              sound={this.getSound(letter)}
              hidden={!visibleLetters.includes(letter)}
            >
              {letter}
            </PlayableDisplayText>
          )}
        </DisplayBar>

        <DisplayBar position="bottom" style={{bottom: "24%"}}>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              size="medium"
              key={choice.id}
              sound={this.getSound(choice.word)}
            />
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
