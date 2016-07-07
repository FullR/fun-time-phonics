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
        {id: "yak", word: "yak", hidden: true},
        {id: "yellow", word: "yellow", hidden: true},
        {id: "yippee", word: "yippee", hidden: true},
        {id: "yonder", word: "yonder", hidden: true},
        {id: "yuck", word: "yuck", hidden: true},
        {id: "Zack", word: "Zack", hidden: true},
        {id: "zest", word: "zest", hidden: true},
        {id: "zipper", word: "zipper", hidden: true},
        {id: "zombie", word: "zombie", hidden: true}
      ],
      letters: ["ya", "ye", "yi", "yo", "yu", "za", "ze", "zi", "zo"],
      visibleLetters: [],
      group: 1
    };
  }

  revealLetters(letters) {
    this.setState({visibleLetters: this.state.visibleLetters.concat(letters)});
  }

  getSounds() {
    const {choices, letters} = this.state;
    return {
      ...choices.reduce((sounds, choice) => {
        sounds[choice.word] = `boy/words/${choice.word}`;
        return sounds;
      }, {}),
      ...letters.reduce((sounds, letters) => {
        sounds[letters] = `boy/common/${letters.split("").join("-")}`;
        sounds[letters + "-phonic"] = `boy/common/phonics/_${letters}h_`;
        return sounds;
      }, {}),

      "lets review...": "boy/common/lets-review-the-sounds-we-just-learned",
      "the letters": "boy/common/the-letters",
      "make the": "boy/common/make-the",
      "sound in": "boy/common/sound-in",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      let choiceIndex = 0;
      choices.all.set("hidden", true);
      this.setState({group: 1});

      yield this.say(boy, "lets review...");

      for(let choice of choices) {
        const word = choice.get("word");
        const letters = word.slice(0, 2).toLowerCase();
        yield this.say(boy, "the letters");
        if(choiceIndex === 0) {
          boy.set("size", "small");
        }
        this.revealLetters(letters);
        yield this.say(boy, letters);
        yield this.say(boy, "make the");
        yield this.say(boy, letters + "-phonic");
        yield this.say(boy, "sound in");
        choice.set("hidden", false);
        yield this.say(boy, word);
        yield this.wait(100);

        if(choiceIndex === 4) {
          this.setState({group: 2});
        }

        choiceIndex += 1;
      }

      yield this.say(boy, "touch the...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy, letters, visibleLetters, consonantVisible, consonantDetached, group} = this.state;
    let attachedLetters;
    let attachedChoices;

    if(group === 1) {
      attachedLetters = letters.slice(0, 5);
      attachedChoices = choices.slice(0, 5);
    } else {
      attachedLetters = letters.slice(5);
      attachedChoices = choices.slice(5);
    }

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>Review:&nbsp;&nbsp;{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            {attachedLetters.map((letter) =>
              <PlayableDisplayText
                key={letter}
                size="medium"
                sound={this.getSound(letter)}
                hidden={!visibleLetters.includes(letter)}
                waveHidden={this.state.coPlaying}
              >
                {letter}
              </PlayableDisplayText>
            )}
          </SceneBar>

          <SceneBar>
            {attachedChoices.map((choice) =>
              <WordSoundPlayBox {...choice}
              waveHidden={this.state.coPlaying}
                size="medium"
                key={choice.word}
                sound={this.getSound(choice.word)}
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
