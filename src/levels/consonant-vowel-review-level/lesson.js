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
import wordSounds from "util/word-sounds";
import LetterSoundPlayBox from "components/letter-sound-play-box";
import toPairs from "util/to-pairs";
import PlayableDisplayText from "components/playable-display-text";
require("./lesson.scss");


@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: props.lessonWords.map((word) => ({ // lesson choices
        word,
        id: word,
        hidden: true
      })),
      revealedLetters: []
    };
  }

  getSounds() {
    const {lessonLetters, lessonWords} = this.props;
    return {
      ...toPairs(lessonWords, (word, i) => [`word-${i}`, `boy/words/${word}`]),
      ...toPairs(lessonLetters, (letters, i) => [`letter-${i}`, `boy/common/${letters.split("").join("-")}`]),
      ...toPairs(lessonLetters, (letters, i) => [`phonic-${i}`, `boy/common/phonics/_${letters}h_`]),
      "lets review...": "boy/common/lets-review-the-sounds-we-just-learned",
      "the letters": "boy/common/the-letters",
      "make the": "boy/common/make-the",
      "sound in": "boy/common/sound-in",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {lessonWords, lessonLetters} = this.props;
    const {boy, sounds, choices} = this;
    const length = Math.min(lessonWords.length, lessonLetters.length);

    this.startCo(function*() {
      this.setState({revealedLetters: []});
      choices.all.set("hidden", true);
      boy.set("size", "large");

      yield this.say(boy, "lets review...");

      for(let i = 0; i < length; i++) {
        const word = lessonWords[i];
        const letter = lessonLetters[i];

        yield this.say(boy, "the letters");
        boy.set("size", "small");
        this.setState({revealedLetters: this.state.revealedLetters.concat(letter)});
        yield this.say(boy, `letter-${i}`);
        yield this.say(boy, "make the");
        yield this.say(boy, `phonic-${i}`);
        yield this.say(boy, "sound in");
        choices[word].set("hidden", false);
        yield this.say(boy, `word-${i}`);
        yield this.wait(100);
      }

      yield this.say(boy, "touch the...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {title, levelId, activityIndex, onNext, lessonLetters, consonant} = this.props;
    const {choices, boy, revealedLetters} = this.state;

    return (
      <Screen className={`Consonant-vowel-review-level-lesson Consonant-vowel-review-level-lesson-${levelId}`}>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>Review:&nbsp;&nbsp;{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            {lessonLetters.map((letters, i) =>
              <PlayableDisplayText
                key={letters}
                size="medium"
                sound={this.getSound(`letter-${i}`)}
                hidden={!revealedLetters.includes(letters)}
                waveHidden={this.state.coPlaying}
              >
                {letters}
              </PlayableDisplayText>
            )}
          </SceneBar>

          <SceneBar>
            {choices.map((choice, i) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                size="medium"
                key={choice.word}
                sound={this.getSound(`word-${i}`)}
                waveHidden={this.state.coPlaying}
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
